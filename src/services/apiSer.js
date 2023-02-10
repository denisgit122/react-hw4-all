import axios from "axios";

import {base} from "../configs";
import {authServ} from "./authServ";
import {createBrowserHistory} from "history";

const history=createBrowserHistory()
const apiSer=axios.create({baseURL:base})


//створюємо шнтер сервури вони розрізають запит і вклинююся в нього і повертаю його зазад куди він йшов
// коли в нього вклинюся я можу його видо змінити додати щось інтер сервури можуть відхопити цуй запит і якось його видозмінити і відправити куди він йшов
 apiSer.interceptors.request.use((config)=>{//request  на запит
 //    перехопили запит і маємо всю інфу про запит в config

     if (authServ.isAutnenticated()){//    поверне тру якщо в нас є аксес токен
    const access= authServ.getAccessToken()
       config.headers.Authorization=`Bearer ${access}`//    Bearer  не завжди требф писати залежить яка АПІ якщо труба буде буде писати в документації
   }
     return config//    повертаємо щоб він йшов далі модифікований
 })
// після цього ми отримали кари


// стоворюємо ще один рессетер для того щоб слідкувати за респонсом
//якщо аксес не валідний то рефреш зробить ще одни запит на рефреш і приєднаю до того самого запиту нови аксес токе
let isRefreshing=false
apiSer.interceptors.response.use((config)=>{
    //якщо я отримую відповідь
    return config
},
    //відхоплюємо помилки якщо у нас є помилки
    async (error)=>{
   const refresh=authServ.getRefreshToken()
        if (error.response?.status===401 && refresh&& !isRefreshing){
            isRefreshing=true
            //якщо рефреш живий
            try {
               await authServ.refresh(refresh)
            }catch (e) {
                authServ.deletToken()
            //    ми не ножумо ви кор хуки тому нам трба підключити бібліотеку history щоб нас перекидало на логін
                history.replace('/login?expSession=true')
            }
            isRefreshing=false
            return apiSer(error.config )
        }
    //    якщо мертвий
        return Promise.reject(error)
    }
)

export {apiSer,
//     в індекс дж модифікуємо брфвзер роут щоб працювала наша хісторі
history}
