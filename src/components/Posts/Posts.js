import {useEffect, useState} from "react";
import {postss} from "../../configs/urls";



const Posts = ({postsId}) => {
    console.log(postsId);
  const [posts,setPosts]= useState(null)

    useEffect(() => {
         postss.getById(postsId).then(({data})=>setPosts(data))
    },[])

    console.log(posts);
    return (
  <div>

  </div>
);
};

export {Posts};