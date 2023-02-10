import {useForm} from "react-hook-form";
import {authServ} from "../../services";
import {carAction} from "../../redux/carSlice/carSlice";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const {handleSubmit,register}=useForm()
    //for error
  const [error, setError]= useState(null)
 const navigate= useNavigate()
    const submit = async (cred) =>{
        //    нам труба сервіси authServ куди ми маємо передавати userCred
    //    отримані дані відправляємо на сервер
        try {
          //  якщо ми ввожимо зарегестрованого юзера нам приходять токени ми їх будумо зберігати в локал стореджі для цього вдосконалимо ауз сервіс
            await authServ.login(cred);
            //якщо в нас вже є такий користувач нас перекине на кар ми просто отримали токени покищо їх не викор в апі сервурі
            navigate('/cars')
        }catch (e) {
             if (e.response.status===401){
                 setError(e.response.data)
             }
        }
    };
return (
    <div>
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'}{...register('password')}/>
                <button>login</button>
            </form>
        </div>
        {/*перевірка  дів буде відпрацьовувати якщо в нас буде ерорка*/}
        {error?.detail && <div>
            {error.detail}
        </div>}
    </div>

);
};

export {LoginPage};