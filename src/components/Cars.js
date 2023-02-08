import {Car} from "./Car";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../redux/carSlice";

const Cars = () => {
    const dispatch=useDispatch()
    const {cars}=useSelector(state => state.car)
    useEffect(() => {
        dispatch(carActions.getAll())
    },[dispatch])
return (
  <div>
      {cars.map(car=><Car key={car.id} car={car}/>)}
  </div>
);
};

export {Cars};