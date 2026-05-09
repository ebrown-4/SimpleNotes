// src/pages/AddNote.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../firestore";
import { auth } from "../firebase";

export default function AddNote() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    the[category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !category || !content) {
            setError("All fields are required.");
            return;
        }

        const user = auth.currentUser;
        if (!user) {
            setError("You must be logged in.");
            return;
        }

        const newNote = {
            title,
            category,
            content,
            userId: user.uid,
            createdAt: Date.now()
        };

        try {
            await addNote(newNote);
            navigate("/notes");
        } catch (err) {
            console.error(err);
            setError("Failed to add note.");
        }
    };

    return (
        <div className="page-container">
            <h2>Add Note</h2>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit} className="note-form">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <textarea
                    placeholder="Note content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}
