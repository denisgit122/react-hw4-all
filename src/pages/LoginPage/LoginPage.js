import {useForm} from "react-hook-form";
import {authService} from "../../service/authService";

const LoginPage = () => {
    const {handleSubmit,reset,register} =useForm()

    const submit = async (userCreat) => {
    //  нам треба кудись це відправляти тому стаорюємо сервіси authService
        try {//обгортаю в трай бо можуть прийти не задовільні дані
            const {data}= await authService.login(userCreat)//відправляємо дані
            console.log(data);
        }catch (e) {
            console.log(e.response.data);
        }

    }
return (
    <div>
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'userName'}{...register('userName')}/>
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