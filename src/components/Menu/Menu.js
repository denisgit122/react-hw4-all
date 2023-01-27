import { NavLink} from "react-router-dom";
import css from './Menu.module.css'
const Menu = () => {
return (
  <div className={css.menu}>
      <NavLink className={css.Comments} to={'/'}>Todos</NavLink>
      <NavLink className={css.Comments}  to={'/albums'}>Albums</NavLink>
      <NavLink className={css.Comments}  to={'/comments'}>
          <span >Comments</span></NavLink>

  </div>
);
};

export {Menu};
