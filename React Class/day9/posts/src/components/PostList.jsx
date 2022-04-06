import PostItem from "./Posttem";

const PostList = (props) => {
    return (
        <div className="post-container">
            {
                // We use Map function to iterate the array, so that we can show it in the UI
                props.posts.map(function(post, index) {
                    return <PostItem key={index} post={post} />
                })
            }
        </div>
    )
}

export default PostList;