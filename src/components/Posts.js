import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postAction} from "../slice/PostSlice";
import {Post} from "./Post";

const Posts = () => {
    const dispatch=useDispatch()
    const {posts}=useSelector(state =>state.posts)
    useEffect(() => {
        dispatch(postAction.getAll())
    },[])
    console.log(posts);
    return (
  <div>
      {posts.map(post=><Post key={post.id} post={post} />)}
  </div>
);
};

export {Posts};