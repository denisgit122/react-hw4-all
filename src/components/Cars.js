import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux/carSlise/carSlice";
import {Car} from "./Car";

const Cars = () => {
    const dispatch=useDispatch()
    const {cars}=useSelector(state => state.car)

    useEffect(() => {
        dispatch(carActions.getAll())
    },[dispatch])

return (
  <div>
      {cars.map(car=> <Car key={car.id} car={car}/>)}
  </div>
);
};

export {Cars};