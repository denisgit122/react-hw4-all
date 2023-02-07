import {Outlet} from "react-router-dom";

import {Menu} from "../components/Menu";

const HeadMenu = () => {
return (
  <div>
     <Menu/>
      <Outlet/>
  </div>
);
};

export {HeadMenu};