import {useForm} from "react-hook-form";
import {carActions} from "../redux/carSlise/carSlice";
import {useDispatch} from "react-redux";

const FormCar = () => {
     const {handleSubmit,reset,register}=useForm()
     const dispatch=useDispatch()

   const submit = async (data) => {
       await dispatch(carActions.create({data}))
       console.log(data);
       reset()
   }

    return (
  <div>
 <form onSubmit={handleSubmit(submit)}>
     <input type={'text'}placeholder={'brand'}{...register('brand')}/>
     <input type={'text'}placeholder={'price'}{...register('price')}/>
     <input type={'text'}placeholder={'year'}{...register('year')}/>
    <button>create</button>
 </form>
  </div>
);
};

export {FormCar};