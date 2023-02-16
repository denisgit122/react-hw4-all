import {FC, useEffect, useState} from "react";
import {ICar} from "../interface";
import {carService} from "../service";
import {Car} from "./Car";

const Cars:FC = () => {
   // в сет стейт будуть тільки одні кари бо якщо ні буде бити помилки
   const [cars, setCars]=useState<ICar[]>([])

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    },[])
return (
  <div>
      {cars.map(value => <Car key={value.id} car={value}/>)}
  </div>
);
};

export {Cars};