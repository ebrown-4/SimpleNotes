import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { getNotes } from "../firestore";   // FIXED — correct function name
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";

export default function Notes() {
    const [user] = useAuthState(auth);
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadNotes() {
            if (user) {
                const data = await getNotes(user.uid);   // FIXED
                setNotes(data);
            }
        }
        loadNotes();
    }, [user]);

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Your Notes</h1>

            <SearchBar searchTerm={search} setSearchTerm={setSearch} />

            <div className="notes-grid">
                {filteredNotes.length === 0 ? (
                    <p>No notes found.</p>
                ) : (
                    filteredNotes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))
                )}
            </div>
        </div>
    );
}
