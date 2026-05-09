import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNoteById, updateNote } from "../firestore";

export default function EditNote() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(null);

    // Load the note when the page opens
    useEffect(() => {
        async function loadNote() {
            const data = await getNoteById(id);
            setNote(data);
        }
        loadNote();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateNote(id, {
            title: note.title,
            category: note.category,
            content: note.content
        });

        navigate("/notes");
    };

    if (!note) return <p>Loading...</p>;

    return (
        <div className="edit-note-page">
            <h1>Edit Note</h1>

            <form className="note-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={note.title}
                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                    required
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={note.category}
                    onChange={(e) => setNote({ ...note, category: e.target.value })}
                    required
                />

                <textarea
                    placeholder="Content"
                    value={note.content}
                    onChange={(e) => setNote({ ...note, content: e.target.value })}
                    required
                ></textarea>

                <button type="submit" className="btn-save">
                    Update Note
                </button>
            </form>
        </div>
    );
}
