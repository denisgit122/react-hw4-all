import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carAction} from "../../redux/carSlice/carSlice";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";

const Cars = () => {
    const {cars,prev,next}= useSelector(state => state.cars)
    const dispatch=useDispatch()
   const [query,setQuri]=  useSearchParams({page: '1'})


   useEffect(() => {
       dispatch(carAction.getAll({page:query.get('page')}))
   },[dispatch,query])

return (
  <div>
      <div>
          <button disabled={!prev} onClick={()=>setQuri(query=>({page:+query.get('page')-1}))}>prev</button>
          {/*перекидає на попередню мторінку з карами */}
          <button disabled={!next} onClick={()=>setQuri(query=>({page:+query.get('page')+1}))}>next</button>

      </div>
      {cars.map(car=><Car key={car.id} car={car}/>)}
  </div>
);
};

export {Cars};