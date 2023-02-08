import {carServ} from "../cervice/Urls";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux/carSlice";

const Car = ({car}) => {
    const dispatch=useDispatch()
    const {id,brand,year,price}=car


return (
  <div>
      <h4>{id}</h4>
      <div>{brand}</div>
      <div>{year}</div>
      <div>{price}</div>
      <button onClick={()=>dispatch(carActions.setCar(car))}>updata</button>
      <button onClick={()=>dispatch(carActions.delet({id}))}>delete</button>


  </div>
);
};

export {Car};