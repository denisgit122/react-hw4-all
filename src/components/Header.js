import css from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
return (
  <div className={css.Header}>
    <div>
      <Link to={'/login'}>login</Link>
      <Link to={'/register'}>register</Link>

    </div>

  </div>
);
};

export {Header};