import { useLoaderData } from "remix"
import { Link } from "remix"

export const loader = () => {
    const data = {
        posts: [
            {id: 1, title: 'Post 1', body: 'This is a test post'},
            {id: 2, title: 'Post 2', body: 'This is a test post'},
            {id: 3, title: 'Post 3', body: 'This is a test post'}
        ]
    }

    return data
}

const PostItems = () => {
    const { posts } = useLoaderData()

    return ( <div>
        <div className="page-header">
        <h1>Posts</h1>
        </div>
        <Link to='/posts/new' className="btn">
            New Post
        </Link>
        {posts.map(post => (
            <li key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>
            </li>
        ))}
    </div> );
}
 
export default PostItems;