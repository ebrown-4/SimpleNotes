// src/pages/Notes.jsx
import { useEffect, useState, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { getNotes, deleteNote } from "../firestore";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";

export default function Notes() {
    const [user] = useAuthState(auth);
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");

    const loadNotes = useCallback(async () => {
        if (user) {
            const data = await getNotes(user.uid);
            setNotes(data);
        }
    }, [user]);

    useEffect(() => {
        loadNotes();
    }, [loadNotes]);

    async function handleDelete(id) {
        await deleteNote(id);
        loadNotes();
    }

    const filteredNotes = notes.filter((note) => {
        const term = search.toLowerCase();
        return (
            note.title.toLowerCase().includes(term) ||
            note.content.toLowerCase().includes(term) ||
            (note.category && note.category.toLowerCase().includes(term))
        );
    });

    return (
        <div className="page-container">
            <h1>Your Notes</h1>
            <SearchBar searchTerm={search} setSearchTerm={setSearch} />

            <div className="notes-grid">
                {filteredNotes.length === 0 ? (
                    <p>No notes found.</p>
                ) : (
                    filteredNotes.map((note) => (
                        <NoteCard key={note.id} note={note} onDelete={handleDelete} />
                    ))
                )}
            </div>
        </div>
    );
}
