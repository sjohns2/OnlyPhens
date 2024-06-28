import React, {useState} from "react";
import api from "../api";
import Modal from "./ui/Modal";

function CreateNote ({ isOpen, onClose })  {
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
    
    if (!isOpen) return null

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
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
        </Modal>
    );
}

export default CreateNote