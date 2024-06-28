import api from "../api"
import EditNote from "./EditNote"
import Modal from "./ui/Modal"
import { useState } from "react"

function Note({ note }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
    const [editingNote, setEditingNote] = useState(false)

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => { 
                if(res.status === 204) alert("Note deleted!");
                else alert ("Failed to delete note.");
            })
            .catch((error) => alert(error));
    };

    const handleEditingNote = () => {
        setEditingNote(true);
    };

    return (
    <Modal>
        <div className="border-1 rounded-10 shadow-lg p-20 m-10 text-center max-w-250px inline-block bg-cream" onClick={handleOpeningNote}>
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <p className="note-author">{note.author}</p>
            <button size="small" onClick={handleEditingNote}>
                Edit
            </button>
            <button size="large" onClick={() => deleteNote(note.id)}>
                Delete
            </button>
        </div>
        {editingNote && <EditNote isOpen={editingNote} noteId={note.id} onClose={() => setEditingNote(!editingNote)} />}
    </Modal>
    );
}

export default Note