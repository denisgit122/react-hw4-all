import {FormCar} from "./components/FormCar";
import {Cars} from "./components/Cars";
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequiredLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

function App() {
    return (
        <div className="App">

<Routes >
 <Route path={'/'} element={<MainLayout/>}>
     <Route index element={<Navigate to={'cars'}/>}/>

     {/*AuthRequiredLayout будуть роути на які можна зайти лише тоді коли ми залоговані */}
     <Route element={<AuthRequiredLayout/>}>
         <Route path={'cars'} element={<CarsPage/>}/>
     </Route>

     <Route path={'login'} element={<LoginPage/>}/>
     <Route path={'register'} element={<RegisterPage/>}/>
 </Route>
</Routes>

        </div>
    );
}

export default App;
