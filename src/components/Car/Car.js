import {useDispatch, useSelector} from "react-redux";

import {carAction} from "../../redux/carSlice/carSlice";

const Car = ({car}) => {
    const {id,brand,price, year}=car

    const dispatch=useDispatch()

return (
  <div>
      <h4>{id}</h4>

      <div>{brand}</div>

      <div>{price}</div>

      <div>{year}</div>
{/*<button>upDade</button>*/}
      <button onClick={()=>dispatch(carAction.setCar(car))}>update</button>

      <button onClick={()=>dispatch(carAction.delet({id}))}>delete</button>
  </div>
);
};

export {Car};