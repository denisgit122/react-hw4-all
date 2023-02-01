
import {ClassCompon} from "./components/ClassCompon";
import {Route, Routes} from "react-router-dom";
import {Head} from "./components/Head";
import {Main} from "./components/Main";
import {ClassCommets} from "./components/ClassCommets";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<Head/>}/>
                    <Route path={'post'} element={<ClassCompon/>}/>
                    <Route path={'comments'} element={< ClassCommets/>}/>
                </Route>


            </Routes>

        </div>
    );
}

export default App;


