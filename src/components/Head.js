import {NavLink} from "react-router-dom";

import './header.css'
const Head = () => {
    return (
        <div className={'head'}>
            <NavLink to={'/post'}>Post</NavLink>
            <NavLink  to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export {Head};