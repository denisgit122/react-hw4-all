import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../redux/carSlice";
import {Car} from "./Car";
import {carServ} from "../cervice/Urls";

const Form = () => {
    const dispatch=useDispatch()
    const { update}=useSelector(state => state.car)
    const {handleSubmit,register,reset,setValue}=useForm()

    const subm = async (car) => {
       await dispatch(carActions.creat({car}))
        reset()
    }

    useEffect(() => {
        if (update){
            setValue('brand',update.brand,{shouldValidate:true})
            setValue('price',update.price,{shouldValidate:true})
            setValue('year',update.year,{shouldValidate:true})
        }
    },[update])

    const updat=async (car)=>{
await dispatch(carActions.update({id:update.id, car}))
        reset()
        console.log(car);
    }

    return (
  <div>

   <form onSubmit={handleSubmit(update?updat:subm)}>
     <input type={'text'} placeholder={'brand'} {...register('brand')}/>
       <input type={'text'} placeholder={'year'} {...register('year')}/>
       <input type={'text'} placeholder={'price'} {...register('price')}/>

       <button >{update ?'uptade' :'create'}</button>

   </form>
  </div>
);
};

export {Form};