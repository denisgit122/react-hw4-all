import {create} from "axios";
import {base, urls} from "./base";

const carServ={
    getAll:()=> base.get(urls.cars),
     create:(newCar)=>base.post(urls.cars,newCar),
    delete:(id)=>base.delete(`${urls.cars}/${id}`)
        // delete:(id)=>axiosServ.delete( `${urls.cars}/${id}`),
}
export {carServ}