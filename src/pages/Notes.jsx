import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { getNotes, deleteNote } from "../firestore";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";

export default function Notes() {
    const [user] = useAuthState(auth);
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");

    // Load notes
    async function loadNotes() {
        if (user) {
            const data = await getNotes(user.uid);
            setNotes(data);
        }
    }

    useEffect(() => {
        loadNotes();
    }, [user]);

    // Delete handler
    async function handleDelete(id) {
        await deleteNote(id);
        loadNotes(); // refresh UI
    }

    // Improved search (title + content + category)
    const filteredNotes = notes.filter((note) => {
        const term = search.toLowerCase();
        return (
            note.title.toLowerCase().includes(term) ||
            note.content.toLowerCase().includes(term) ||
            (note.category && note.category.toLowerCase().includes(term))
        );
    });

    return (
        <div>
            <h1>Your Notes</h1>

            <SearchBar searchTerm={search} setSearchTerm={setSearch} />

            <div className="notes-grid">
                {filteredNotes.length === 0 ? (
                    <p>No notes found.</p>
                ) : (
                    filteredNotes.map((note) => (
                        <NoteCard
                            key={note.id}
                            note={note}
                            onDelete={handleDelete} // pass delete handler
                        />
                    ))
                )}
            </div>
        </div>
    );
}
