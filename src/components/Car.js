import {carServ} from "../cervice/Urls";

const Car = ({car}) => {
    const {id,brand,year,price}=car
    const x = () => {
carServ.delete(id)
    }
return (
  <div>
      <h4>{id}</h4>
      <div>{brand}</div>
      <div>{year}</div>
      <div>{price}</div>
      <button onClick={()=>x()}>delete</button>


  </div>
);
};

export {Car};