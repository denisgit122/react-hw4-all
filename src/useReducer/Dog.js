const Dog = ({value,ch}) => {
    const {id,Dog}=value
return (
  <div>
      <div>id:{id}</div>
    <div> name: {Dog}</div>
      <button onClick={()=>ch({type:'delDog',payload:id})}>delete</button>
  </div>
);
};

export {Dog};