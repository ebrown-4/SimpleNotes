import { Link } from "react-router-dom";
import { deleteNote } from "../firestore";

export default function NoteCard({ note, onDelete }) {
    const handleDelete = async () => {
        await deleteNote(note.id);
        onDelete(note.id); // notify parent to refresh UI
    };

    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p><strong>Category:</strong> {note.category}</p>
            <p>{note.content}</p>

            <div className="note-card-actions">
                <Link to={`/edit/${note.id}`} className="btn-edit">
                    Edit
                </Link>

                <button onClick={handleDelete} className="btn-delete">
                    Delete
                </button>
            </div>
        </div>
    );
}
