import {apiSer} from "./apiSer";
import {urls} from "../configs";

const carServ={
    getAll:(page=1)=>apiSer.get(urls.cars.cars,{params:{page:page}}),
    create:(data)=>apiSer.post(urls.cars.cars, data),
    updateById:(id, data)=>apiSer.put(urls.cars.beId(id),data),
    deletById:(id)=>apiSer.delete(urls.cars.beId(id))
}
export {carServ}