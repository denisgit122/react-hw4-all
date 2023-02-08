import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../redux/carSlice";
import {Car} from "./Car";
import {carServ} from "../cervice/Urls";

const Form = () => {
    const dispatch=useDispatch()
    const {cars}=useSelector(state => state.car)

    const {handleSubmit,register,reset}=useForm()

    const subm = async (dat) => {
        const {data}= await carServ.create(dat)

        // console.log(data);
        reset()
    }
    useEffect(() => {
        dispatch(carActions.getAll())
    },[dispatch])

    // console.log(cars);
    return (
  <div>

   <form onSubmit={handleSubmit(subm)}>
     <input type={'text'} placeholder={'brand'} {...register('brand')}/>
       <input type={'text'} placeholder={'year'} {...register('year')}/>
       <input type={'text'} placeholder={'price'} {...register('price')}/>

       <button >create</button>

       {cars.map(car=><Car key={car.id} car={car}/>)}
   </form>
  </div>
);
};

export {Form};