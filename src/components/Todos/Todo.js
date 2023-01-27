import './todo.css'
const Todo = ({todo}) => {
    const {userId,id,title,completed}=todo
return (
    <div className={'todo'}>

         <h3>user Id:{userId}.</h3>
         <h4>Id:{id}</h4>
         <p>Title:{title}</p>
         {/*<h2>completed-{completed}</h2>*/}
    </div>

);
};

export {Todo};