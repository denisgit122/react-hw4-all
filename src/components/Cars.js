import {Car} from "./Car";
import {useSelector} from "react-redux";

const Cars = () => {
    const {cars}=useSelector(state => state.car)

return (
  <div>
      {cars.map(car=><Car key={car.id} car={car}/>)}
  </div>
);
};

export {Cars};