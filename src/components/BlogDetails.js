import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <div>{blog.title}</div>
                    <div>{blog.description}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;