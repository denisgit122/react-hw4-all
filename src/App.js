import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRequireLayout, MainLoyout} from "./Layout";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

function App() {
return(
   <Routes>
       <Route path={'/'} element={<MainLoyout/>}>
           <Route index element={<Navigate to={'cars'}/>}/>
           {/*  AuthRequireLayout туt будуть роути на якы можна буде зати якщо ми залогованi */}
           <Route element={<AuthRequireLayout/>}>
               <Route path={'cars'} element={<CarsPage/>}/>
           </Route>

           <Route path={'login'} element={<LoginPage/>}/>
           <Route path={'register'} element={<RegisterPage/>}/>
        </Route>

   </Routes>
)
}

export default App;
