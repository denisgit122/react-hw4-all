const Coment = ({value}) => {
    const {id,name,body}=value
    return (
        <div>
            <h2>id: {id}</h2>
            <p>name:{name}</p>
            <p>body:{ body}</p>
        </div>
    );
};
export {Coment};