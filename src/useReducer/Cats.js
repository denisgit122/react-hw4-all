import React from 'react';

const Cats = ({value,dispatch}) => {
    const {idd,Cat}=value
    console.log(idd);
    return (
        <div>
         <div> id: {idd}</div>
<div>name: {Cat}</div>
            <button onClick={()=>dispatch({type:'delCat',payload:idd})}>delete</button>
        </div>
    );
};

export {Cats};