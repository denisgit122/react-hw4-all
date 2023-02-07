import {Navigate, NavLink} from "react-router-dom";

import './styleMenu.css'

const Menu = () => {
return (
  <div className={'men'}>
  <NavLink to={'/users'}>users</NavLink>
      <NavLink to={'/post'}>posts</NavLink>
      <NavLink to={'/head'}>Res</NavLink>

  </div>
);
};

export {Menu};