const Dog = ({value}) => {
    const {id,Dog}=value
return (
  <div>
      <div>id:{id}</div>
    <div> name: {Dog}</div>
      <button>delete</button>
  </div>
);
};

export {Dog};