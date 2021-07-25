import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, description };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added");
            setIsPending(false);
            history.push('/');
        }
        )
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /><br/>
                <label>Description</label>
                <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}/><br/>
                {!isPending && <button>Create</button>}
                {isPending && <button disabled>Creating...</button>}
            </form>
            <div>{title}<br/>{description}</div>
        </div>
     );
}
 
export default Create;