import {apiSer} from "./apiSer";
import {urls} from "../configs";

const userService={
    create:(user)=>apiSer.post(urls.users,user)
}
export {userService}