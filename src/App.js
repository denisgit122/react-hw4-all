import { Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";

import {HeadMenu} from "./HeadMenu/HeadMenu";

function App() {

    return (
        <div >

            <Routes>
                <Route path={'/'} element={<HeadMenu/>}>
                    <Route path={'users'} element={<Users></Users>}/>
                    <Route path={'post'} element={<Posts/>}/>
                    <Route path={'head'} element={<Header/>}/>
                </Route>



            </Routes>
            {/*<Header/>*/}
            {/*<Users/>*/}
            {/*<Posts/>*/}
        </div>
    );
}

export default App;
