// src/components/NoteCard.jsx
import { Link } from "react-router-dom";

export default function NoteCard({ note, onDelete }) {
    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p className="category">{note.category}</p>
            <p className="content">{note.content}</p>

            <div className="note-actions">
                <Link to={`/edit/${note.id}`} className="edit-btn">
                    Edit
                </Link>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(note.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
