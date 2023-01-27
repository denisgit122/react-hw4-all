import {useEffect, useState} from "react";
import {postss} from "../../configs/urls";
import {Post} from "./Post";



const Posts = ({postsId}) => {
    console.log(postsId);
  const [posts,setPosts]= useState(null)

    useEffect(() => {
         postss.getById(postsId).then(({data})=>setPosts(data))
    },[])

    console.log(posts);
    return (
  <div>
      {/*{JSON.stringify(posts)}*/}
      { posts && <Post key={posts.id} post={posts}/>}
  </div>
);
};

export {Posts};