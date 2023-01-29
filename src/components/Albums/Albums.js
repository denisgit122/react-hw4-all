import {useEffect, useState} from "react";

import {album, baseURL, urls} from "../../configs/urls";
import {Album} from "./Album";
import './albumsSt.css'
import {getPageArray, getPageCounter} from "../../layouts/Almumss/pagesAlbums";

const Albums = () => {
 const [albums,setAlbums]=  useState([])

    const [totalPage,setTotalPage]=useState(0)
    const [limit,setLimit]=useState(10)
    const [page,stPage]=useState(1)

    let pageArray=getPageArray(totalPage)
    console.log(pageArray);

    useEffect(() => {
// urls.albums(10,1).then(({data})=>setAlbums(data))
     fechAmbum()
    },[page])

async function fechAmbum(){
   await album.albums(limit,page).then(({data})=>setAlbums(data))

const totakCaunt=await album.albums()
     const res=totakCaunt.headers['x-total-count']
     setTotalPage(getPageCounter(res,limit))
}
return (
  <div className={'albums'}>

      {albums.map(value =>
          <Album key={value.id}
                 album={value}/> )}

      <div className={'wrap'}>
          {pageArray.map(value =>
              <span  className={page===value ? 'styleOne' :'style'}
                  onClick={()=>stPage(value)}
                    key={value}>
                  {value}

              </span>)}
      </div>

  </div>
);
};

export {Albums};