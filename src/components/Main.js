import {Head} from "./Head";
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Head/>
            <Outlet/>
        </div>
    );
};
export {Main}