import {axioSrv} from "../base";
import {urls} from "../urls";

const PostServcice={
    getAll:()=>axioSrv.get(urls.posts),
    getById:(id)=>axioSrv.get(`${urls.posts}/${id}`)
}
export {PostServcice}