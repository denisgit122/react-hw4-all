import css from './Header.module.css'
import {Link, Navigate} from "react-router-dom";

const Header = () => {
return (
  <div className={css.Header}>
     <Link to={'/login'}>login</Link>
      <Link to={'/register'}>register</Link>

  </div>
);
};

export {Header};