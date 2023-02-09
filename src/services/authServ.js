import {apiSer} from "./apiSer";
import {urls} from "../configs";

const authServ={
    login:(data)=>apiSer.post(urls.auth.login,data),
    refresh:(refresh)=>apiSer.post(urls.auth.refresh,{refresh:refresh}),
    //me для того щоб отримувати інфу від юзера який залогінений
    me:()=>apiSer.get(urls.auth.me)
}
export {authServ}