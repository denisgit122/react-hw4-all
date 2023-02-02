import {useReducer, useRef} from "react";

import {Cats} from "./Cats";
import {Dog} from "./Dog";
import './cass.css'

const reducer = (state,active) => {
    switch (active.type) {
        case 'caat':
            const [Idd]=state.cats.slice(-1)
            const idd=Idd?Idd.idd+1:0;
            return {...state,cats:[...state.cats,{ idd,Cat:active.payload}
                ]}
        case'delCat':
            const index=state.cats.findIndex(value => value.idd===active.payload)
            console.log(index);
            state.cats.splice(index,1)
            return {...state}


        case 'doog':
            const [last]=state.dogs.slice(-1)
            const id=last?last.id+1:0
            return {...state, dogs:[...state.dogs,{id, Dog:active.payload}]}

        case 'delDog':
            const indD=state.dogs.findIndex(value => value.id===active.payload)
            state.dogs.splice(indD,1)
            return {...state}

        default:return {...state}
    }

}
const UseRed = () => {
    const cat=useRef()
    const doog=useRef()


    const [state,dispatch]=useReducer(reducer, {cats: [], dogs: []},(data)=>data);


return (
  <div >

      <div className={'flex'}>
            <div>
                <input type="text" placeholder={'cat'} ref={cat}/>
                <button onClick={()=>dispatch({type:'caat', payload:cat.current.value}) }>kk</button>

              <div>  {state.cats.map(value => <Cats key={value.idd}  dispatch={dispatch} value={value}/>)}</div>
            </div>
            <div>
              <input type="text" placeholder={'dog'} ref={doog}/>
              <button onClick={()=>dispatch({type:'doog', payload:doog.current.value}) }>kk</button>

              {state.dogs.map(value => <Dog key={value.id} ch={dispatch} value={value}/>)}
          </div>
      </div>



  </div>
);
};

export {UseRed};