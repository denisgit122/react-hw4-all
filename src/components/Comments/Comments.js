import {useEffect, useState} from "react";

import './comment.css'
import {baseURL, posts, urls} from "../../configs/urls";
import {Comment} from "./Comment";

const Comments = () => {

   const [comments,setComments]= useState([])

    useEffect(() => {
        baseURL.get(urls.comment).then(({data})=>setComments(data))
    },[])

    return (
  <div className={'flexBox'}>
      {comments.map(value => <Comment key={value.id} coment={value} />)}
  </div>
);
};

export {Comments};