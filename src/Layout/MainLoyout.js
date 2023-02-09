import {Outlet} from "react-router-dom";
import {Header} from "../components";

const MainLoyout = () => {
return (
  <div>
  <Header/>
      <Outlet/>
  </div>
);
};

export {MainLoyout};