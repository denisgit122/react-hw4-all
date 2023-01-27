import {useParams} from "react-router-dom";
import {Posts} from "../components/Posts/Posts";

const PostsPage = () => {
    const {postsId}=useParams()
    console.log(postsId);

    return (
        <div>
            <Posts postsId={postsId}/>
        </div>
    );
};

export {PostsPage};