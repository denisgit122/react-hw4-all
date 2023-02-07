import {axioSrv} from "../base";
import {urls} from "../urls";

const UserService={
    getAll:()=>axioSrv.get(urls.users),
    getById:(id)=>axioSrv.get(`${urls.users}/${id}`)
}
export {UserService}