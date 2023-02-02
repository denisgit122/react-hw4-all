import {useReducer, useRef} from "react";

const Ref = () => {

   const cat=useRef()
    const ca= () => {
        // console.log(cat.current.value);



    }

    return (
  <div>
   <input type={'text'} placeholder={'cat'} ref={cat}/>
      <button onClick={()=>ca()}> create cat</button>
  </div>
);
};

export {Ref};