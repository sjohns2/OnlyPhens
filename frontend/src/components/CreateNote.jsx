import React, {useState} from "react";
import api from "../api";

function CreateNote ({ isOpen, onClose})  {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const createNote = (e) => {
        e.preventDefault();
        onClose();
        api
            .post("/api/notes/", { content, title })
            .then((res) => { 
                if (res.status === 201) alert("Note created");
                else alert("Failed to make note.");
            })
            .catch((err) => alert(err));
    };

    const handleOutsideClick = () => {
        onClose();
    }
    
    if (!isOpen) return null

    return(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70" onClick={handleOutsideClick}/>
            <div className="fixed top-1/2 left-1/2 translate-y-1/2 translate-x-1/2 p-50 bg-cream">
                <h2>Create a Note</h2>
                    <form onSubmit={createNote}>
                        <label htmlFor="title">Title:</label>
                        <br />
                        <input className="bg-purple text-cream"
                            type="text" 
                            id="title" 
                            name="title" 
                            required 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <br />
                        <label htmlFor="content">Content:</label>
                        <br />
                        <textarea className="bg-purple text-cream"
                            id="content" 
                            name="content" 
                            required 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <br />
                        <input type="submit" value="Submit"></input>
                    </form>
            </div>
        </>
    );
}

export default CreateNote