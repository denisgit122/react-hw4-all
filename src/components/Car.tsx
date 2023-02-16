import {FC, ReactNode} from "react";
import {ICar} from "../interface";

// в нас будуть пропси для них створюється інтерфейс
interface IProps{
    car:ICar,
    //і можливо у нас будуть чілдрени не обовязково
    children?:ReactNode
//    ReactNode це хтмл структура реакту
}

const Car:FC<IProps> = ({car}) => {
    const {id,year,price,brand} =car

return (
  <div>
      <div>{id}</div>
      <div>{brand}</div>
      <div>{price}</div>
      <div>{year}</div>
  </div>
);
};

export {Car};