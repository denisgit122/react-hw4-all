import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser}=useSelector(state => state.users)
    const {selectedPost}=useSelector(state => state.posts)
return (
  <div>
     <h3>{selectedUser && selectedUser.name}</h3>
      {selectedPost && selectedPost.body}



  </div>
);
};

export {Header};