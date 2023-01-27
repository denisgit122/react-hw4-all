import {useEffect, useState} from "react";
import {baseURL, urls} from "../../configs/urls";
import {Todo} from "./Todo";

const Todos = () => {
    const [todos,setTodos] = useState([])
    useEffect(() => {
        baseURL.get(urls.todos).then(({data})=>setTodos(data))
    },[])
    // console.log(todos);
return (
  <div className={'flex'}>
      {todos.map(value => <Todo key={value.id} todo={value}/>)}
  </div>
);

};

export {Todos};