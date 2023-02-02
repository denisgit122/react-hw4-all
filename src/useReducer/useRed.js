import {useReducer, useRef} from "react";

import {Cats} from "./Cats";
import {Dog} from "./Dog";
import './cass.css'

const UseRed = () => {
    const cat=useRef()
    const doog=useRef()

     const reducer = (state,active) => {
         switch (active.type) {
             case 'caat':
                 const [Idd]=state.cats.slice(-1)
                 const idd=Idd?Idd.idd+1:0
                 return {...state,cats:[...state.cats, {idd,Cat:active.payload}
             ]}
             case'delCat':

                 return
             case 'doog':
                 const [last]=state.dogs.slice(-1)
                 const id=last?last.id+1:0
                 return {...state, dogs:[...state.dogs,{id, Dog:active.payload}]}

        }

     }
    const [state,dispatch]=useReducer(reducer, {cats: [], dogs: []},(data)=>data);


return (
  <div >

      <div className={'flex'}>
            <div>
                <input type="text" placeholder={'cat'} ref={cat}/>
                <button onClick={()=>dispatch({type:'caat', payload:cat.current.value}) }>kk</button>
              <div>  {state.cats.map(value => <Cats key={value.idd} value={value}/>)}</div>
            </div>
            <div>
              <input type="text" placeholder={'dog'} ref={doog}/>
              <button onClick={()=>dispatch({type:'doog', payload:doog.current.value}) }>kk</button>
              {state.dogs.map(value => <Dog key={value.id} value={value}/>)}
          </div>
      </div>



  </div>
);
};

export {UseRed};