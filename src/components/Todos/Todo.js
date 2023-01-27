import './todo.css'
const Todo = ({todo}) => {
    const {userId,id,title,completed}=todo
return (
    <div className={'todo'}>

         <div>{userId}</div>
         <div>{id}</div>
         <div>{title}</div>
         <div>{completed}</div>
    </div>

);
};

export {Todo};