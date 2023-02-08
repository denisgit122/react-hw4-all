import {useDispatch} from "react-redux";
import {carActions} from "../redux/carSlise/carSlice";

const Car = ({car}) => {
    const {id,brand,price,year}=car
    const dispatch=useDispatch()
return (
  <div>
      <h4>{id}</h4>
      <div>{brand}</div>
      <div>{price}</div>
      <div>{year}</div>
      <button onClick={()=>dispatch(carActions.delet({id}))}>delete</button>
  </div>
);
};

export {Car};