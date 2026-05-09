import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";          // FIXED — must come from firebase.js
import { createNote } from "../firestore";   // correct
import { useNavigate } from "react-router-dom";

export default function AddNote() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createNote(user.uid, { title, category, content });
        navigate("/notes");
    };

    return (
        <div>
            <h1>Add Note</h1>

            <form className="note-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Save Note</button>
            </form>
        </div>
    );
}
