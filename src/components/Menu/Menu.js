import { NavLink} from "react-router-dom";
import css from './Menu.module.css'
const Menu = () => {
return (
  <div className={css.menu}>
      <NavLink to={'/'}>Todos</NavLink>
      <NavLink to={'/albums'}>Albums</NavLink>
      <NavLink to={'/comments'}>Comments</NavLink>

  </div>
);
};

export {Menu};
