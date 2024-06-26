import {useState, useEffect} from "react";
import api from "../api";
import Note from "../components/Note";

function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getFeed();
    }, []);

    const getFeed = () => {
        api
            .get("/api/feed/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
            })
            .catch((err) => alert(err));
    };

    return (
    <div className="bg-cream flex-auto pl-20"> 
        <h1 className="text-2xl pt-6 pl-10 underline decoration-zinc-800 decoration-2"><span className="text-lavender">Only</span><span className="text-purple">Phens</span></h1>
        {notes.map((note) => (
            <Note note={note} key={note.id} />
    ))}
</div>
);}

export default Home