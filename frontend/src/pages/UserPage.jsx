import api from "../api";
import {useState, useEffect} from "react";
import Note from "../components/Note";


function UserPage() {
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
        <div> 
            <h2>Notes</h2>
            {notes.map((note) => (
                <Note note={note} key={note.id} />
            ))}
        </div>
    </div>
   ); 
}

export default UserPage