import React from 'react';

const Cats = ({value}) => {
    const {idd,Cat}=value
    return (
        <div>
         <div> id: {idd}</div>
<div>name: {Cat}</div>
            <button>delete</button>
        </div>
    );
};

export {Cats};