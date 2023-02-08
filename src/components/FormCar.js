import {useForm} from "react-hook-form";

const FormCar = () => {
    const {handleSubmit,reset,register}=useForm()

   const submit = (data) => {
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