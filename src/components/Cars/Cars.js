import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carAction} from "../../redux/carSlice/carSlice";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars}= useSelector(state => state.cars)
    const dispatch=useDispatch()

   useEffect(() => {
       dispatch(carAction.getAll())
   },[dispatch])

return (
  <div>
      {cars.map(car=><Car key={car.id} car={car}/>)}
  </div>
);
};

export {Cars};