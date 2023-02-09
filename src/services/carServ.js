import {apiSer} from "./apiSer";
import {urls} from "../configs";

const carServ={
    getAll:()=>apiSer.get(urls.cars.cars),
    create:(data)=>apiSer.post(urls.cars.cars, data),
    updateById:(id, data)=>apiSer.put(urls.cars.beId(id),data),
    deletById:(id)=>apiSer.delete(urls.cars.beId(id))
}
export {carServ}