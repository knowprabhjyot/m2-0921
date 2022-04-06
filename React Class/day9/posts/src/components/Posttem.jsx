import { Link } from "react-router-dom";

const PostItem = ({ post }) => {

    return (
       <Link to={`/${post.id}`} className="post-item">
         <div >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
       </Link>
    )
}

export default PostItem;