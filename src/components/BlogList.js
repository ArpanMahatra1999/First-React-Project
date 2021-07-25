import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
            <div className="blog" key={blog.id}>
                {blog.id}.
                {blog.title}<br/>
                {blog.description}
            <Link to={"/blogs/" + blog.id}>Detail</Link>
            </div>
            ))}
        </div>
     );
}
 
export default BlogList;