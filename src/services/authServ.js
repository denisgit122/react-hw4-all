import {apiSer} from "./apiSer";
import {urls} from "../configs";

//ось будуть ключі для лока стореджа
const accessTokenKey='access'
const refreshTokenRey='refresh'

const authServ={
    //я хочу одразу коли я логінюся щоб я потім не звертався до сет токін а потім знов до ауз сервіру робимо автоматично
    // коли роблю логін хочу викор функцію сет токен

    login:async function (cred) {
   const response= await apiSer.post(urls.auth.login, cred);
   if (response.status===200){// в кожного респонса є статус код якщо він 200(все окк я отримув інфу)
       this.setToken(response.data)
   }
   return response
    },
    refresh:async function(refresh){
     const response= await apiSer.post(urls.auth.refresh,{refresh:refresh})
        if (response.status===200){// в кожного респонса є статус код якщо він 200(все окк я отримув інфу)
            this.setToken(response.data)
        }
        return response
    },
    //me для того щоб отримувати інфу від юзера який залогінений
    me:()=>apiSer.get(urls.auth.me),

    // сутаємо в локал сторедж ключі
    setToken:({access, refresh})=>{ //ми знаємо що у нас буде приходити 2 токена тому ми їх дустриктиризуємо
        localStorage.setItem(accessTokenKey,access)
        localStorage.setItem(refreshTokenRey,refresh)
    },
//    метод щоб витягати ключі
        getAccessToken:()=>localStorage.getItem(accessTokenKey),
        getRefreshToken:()=>localStorage.getItem(refreshTokenRey),

//    метод який буде видаляти токени
    deletToken:()=>{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenRey)
    },
//    метод який буде повуртати тру або фолс в зфлужності чи в нас фксус токен кіі
    isAutnenticated:()=>!!localStorage.getItem(accessTokenKey)
}

export {authServ}