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

    const subm = async (car) => {
       await dispatch(carActions.creat({car}))
        reset()
    }
    return (
  <div>

   <form onSubmit={handleSubmit(subm)}>
     <input type={'text'} placeholder={'brand'} {...register('brand')}/>
       <input type={'text'} placeholder={'year'} {...register('year')}/>
       <input type={'text'} placeholder={'price'} {...register('price')}/>

       <button >create</button>

   </form>
  </div>
);
};

export {Form};