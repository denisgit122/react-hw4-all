import {Outlet} from "react-router-dom";
import React from "react";

const AuthRequiredLayout = () => {
return (
  <div>
      a
      <Outlet/>
  </div>
);
};

export {AuthRequiredLayout};