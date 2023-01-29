import {useEffect, useState} from "react";

import {album, baseURL, urls} from "../../configs/urls";
import {Album} from "./Album";
import './albumsSt.css'

const Albums = () => {
 const [albums,setAlbums]=  useState([])

    const [totalPage,setTotalPage]=useState(0)
    const [limit,setLimit]=useState(10)
    const [page,stPage]=useState(1)

    useEffect(() => {
// urls.albums(10,1).then(({data})=>setAlbums(data))
     fechAmbum()
    },[page])

async function fechAmbum(){
   await album.albums(limit,page).then(({data})=>setAlbums(data))

     // const re=totakCaunt.headers['x-total-count']
    }

    console.log();
    // console.log(albums);
return (
  <div className={'albums'}>
      {albums.map(value =><Album key={value.id} album={value}/> )}
  </div>
);
};

export {Albums};