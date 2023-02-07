import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UserService} from "../configs/service/userService";
import {userAction} from "../slice/UserSlice";
import {User} from "./User";

const Users = () => {
    const dispatch=useDispatch()
    const {users,error,loading}=useSelector(state => state.users)

    useEffect(() => {
       // UserService.getAll().then(({data})=>dispatch(userAction.getAll(data)))
        dispatch(userAction.getAll())
    },[])
return (
  <div>
      {error && <h1>hhjjhj</h1>}
      {loading && <h2>loadingg</h2>}
      {users.map(user=><User key={user.id} user={user}/>)}
  </div>
);
};

export {Users};