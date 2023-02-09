import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValid, carValidator} from "../../validators";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux/carSlice/carSlice";
import {useEffect} from "react";

const Form = () => {

         const {handleSubmit,register,reset,setValue,formState:{errors,isValid}}=useForm({mode:'all', resolver: joiResolver( carValidator)})

        const dispatch=useDispatch()

        const {carsUpd}= useSelector(state => state.cars)
    if (carsUpd){
        setValue('brand',carsUpd.brand, {shouldValidate:true})
        setValue('price',carsUpd.price, {shouldValidate:true})
        setValue('year',carsUpd.year, {shouldValidate:true})

    }
    useEffect(() => {},[carsUpd])

    const sub= async (car)=>{
        await dispatch(carAction.create({car}))
        reset()
    }
    const update = async (car) => {
await dispatch(carAction.update({id:carsUpd.id,car}))
    }
    return (
  <div>
  <form onSubmit={handleSubmit(carsUpd?update:sub)}>
      <input type="text" placeholder={'brand'}{...register('brand')}/>
      <input type="text" placeholder={'price'}{...register('price')}/>
      <input type="text"placeholder={'year'}{...register('year')}/>
<button disabled={!isValid} >{carsUpd?'update':'create'}</button>

  </form>
  </div>
);
};

export {Form};