import {useDispatch} from "react-redux";
import {userAction} from "../slice/UserSlice";

const User = ({user}) => {
    const {name,id}=user
    const dispatch=useDispatch()
return (
  <div>
      <div>{id}</div>
      <div>{name}</div>
      <button onClick={()=>dispatch(userAction.setSelectedUser(user))}>click</button>
  </div>
);
};

export {User};