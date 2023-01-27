import './comment.css'
import {Link, useNavigate} from "react-router-dom";

const Comment = ({coment}) => {

    const navigate=useNavigate()
    // console.log(navigate);
    const {postId,id,email,name,body}=coment
return (
  <div className={'box'}>
      <div>{postId}</div>

      <div>{id}</div>

      <div>{name}</div>

      <div>{email}</div>

      <div>{body}</div>

      <button onClick={()=>navigate(id.toString())}>post</button>
    {/*<Link to={id.toString()}>posts</Link>*/}

  </div>
);
};

export {Comment};