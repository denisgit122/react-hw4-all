import {useDispatch} from "react-redux";

import {postAction} from "../slice/PostSlice";

const Post = ({post}) => {
    const {name,id,title}=post
    const dispatch=useDispatch()
return (
  <div>
  <div>{name}</div>
      <div>{id}</div>
      <div>{title}</div>
<button onClick={()=>dispatch(postAction.setPOstId(post))}>click</button>

  </div>
);
};

export {Post};