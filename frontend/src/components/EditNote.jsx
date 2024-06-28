import React, {useState, useEffect} from "react";
import api from "../api";
import Modal from "./ui/Modal"

function EditNote ({ isOpen, noteId, onClose})  {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (isOpen && noteId) {
            api
                .get(`/api/notes/edit/${noteId}`)
                .then((res) => {
                    if (res.status === 200) {
                        setTitle(res.data.title);
                        setContent(res.data.content);
                    } else {
                        alert("Failed to fetch note.");
                    }
                })
                .catch((err) => alert(err));
        }
    }, [isOpen, noteId]);

    const updateNote = (e) => {
        e.preventDefault();
        api
            .put(`/api/notes/${noteId}`, { content, title })
            .then((res) => { 
                if (res.status === 201) alert("Note updated");
                else alert("Failed to update note.");
            })
            .catch((err) => alert(err));
        onClose();
    };
    
    if (!isOpen) return null

    return(
        <Modal isOpen={isOpen} noteId={noteId} onClose={onClose}>
            <div>
                <h2>Edit a Note</h2>
                    <form onSubmit={updateNote}>
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

export default EditNote