import {apiService, IRes} from "./apiService";
import {ICar} from "../interface";
import {urls} from "../configs";

const carService={
    //ця функція буде повертати IRes і дженеріком буде те що буде в даті а в даті буде ICar
    getAll:():IRes<ICar[]>=>apiService.get(urls.cars.base)
}
export {
    carService
}