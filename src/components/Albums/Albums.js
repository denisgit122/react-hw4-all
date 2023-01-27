import {useEffect, useState} from "react";

import {baseURL, urls} from "../../configs/urls";
import {Album} from "./Album";
import './albumsSt.css'

const Albums = () => {
 const [albums,setAlbums]=  useState([])
    useEffect(() => {
baseURL.get(urls.albums).then(({data})=>setAlbums(data))

    },[])
    // console.log(albums);
return (
  <div className={'albums'}>
      {albums.map(value =><Album key={value.id} album={value}/> )}
  </div>
);
};

export {Albums};