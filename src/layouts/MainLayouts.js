import {Menu} from "../components/Menu/Menu";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
return (
  <div>
      <Menu/>

      <Outlet/>
  </div>
);
};

export {MainLayouts};