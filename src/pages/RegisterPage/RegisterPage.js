import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {
   const {handleSubmit,register}=useForm()
   const navigate=useNavigate()
   const [error,setError]=useState(null)

    const registerUser = async (user) => {
        console.log(user);
        try {
           await userService.create(user)
           navigate('/login')
       }catch (e) {
           // setError(e.response.data.detail)
            console.log(e.response.data)
       }

    }
return (
  <div>
      <div>
          <form onSubmit={handleSubmit(registerUser)}>
              <input type="text" placeholder={'username'} {...register('username')}/>
              <input type="text" placeholder={'password'} {...register('password')}/>
       <button>Register</button>
          </form>
      </div>

      {error &&<div>
          {error}
      </div>}
  </div>
);
};

export {RegisterPage};