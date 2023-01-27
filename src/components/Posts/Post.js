import {useNavigate} from "react-router-dom";
import './postSt.css'

const Post = ({post}) => {
    const{id,userId,title,body}=post
    const naw=useNavigate()
return (
  <div className={'box'}>
      <h2>Id-{id}</h2>
      <h3>user id---{userId}</h3>
      <p>title---{title}</p>
      <p>body---{body}</p>
      <button onClick={()=>naw(-1)}>back</button>
  </div>
);
};

export {Post};