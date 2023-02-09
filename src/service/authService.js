import {auth, base} from "./base";

const authService={
    login:(cred)=>base.post(auth.login,cred),
    refresh:(refresh)=> base.post(auth.refresh,{refresh}),
    me:()=>base.get(auth.me)
}
export {authService}