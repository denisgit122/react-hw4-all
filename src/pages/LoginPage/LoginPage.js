import {useForm} from "react-hook-form";
import {authServ} from "../../services";

const LoginPage = () => {

    const {handleSubmit,reset,register}=useForm()
    const submit = async (userCred)=>{
    //    нам труба сервіси authServ куди ми маємо передавати userCred
    //    отримані дані відправляємо на сервер

        try {
            const {data}=await authServ.login(userCred)
            console.log(data);
        }catch (e) {
                console.log(e.response.data)


        }

    }
return (
    <div>
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'password'}{...register('password')}/>
                <button>login</button>
            </form>
        </div>

       <div>

       </div>
    </div>

);
};

export {LoginPage};