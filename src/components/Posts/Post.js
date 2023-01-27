import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const{id,userId,title,body}=post
    const naw=useNavigate()
return (
  <div>
      <div>{id}</div>
      <div>{userId}</div>
      <div>{title}</div>
      <div>{body}</div>
      <button onClick={()=>naw(-1)}>kk</button>
  </div>
);
};

export {Post};