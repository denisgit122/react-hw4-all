import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux/carSlise/carSlice";
import {Car} from "./Car";

const Cars = () => {
    const dispatch=useDispatch()
    const {cars}=useSelector(state => state.car)
    console.log(cars);

    useEffect( () => {
        dispatch(carActions.getAll())
    },[dispatch])

return (
    <div>
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>

    </div>



);
};

export {Cars};