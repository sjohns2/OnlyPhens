import api from "../api";
import {useState, useEffect} from "react";
import Note from "../components/Note";


function Profile() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => { 
                setNotes(data); 
            })
            .catch((err) => alert(err));
    };

    return (
    <div> 
        <h2>Notes</h2>
        {notes.map((note) => (
            <Note note={note} key={note.id} />
        ))}
</div>
);} 

export default Profile