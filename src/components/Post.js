const Post = ({value}) => {
    const {id,userId,title,body}=value
    return (
        <div>
            <h2>{id}</h2>
            <p>{title}</p>
            <p>{body}</p>

        </div>
    );
};

export {Post};