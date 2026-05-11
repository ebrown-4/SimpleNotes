import { Link } from "react-router-dom";

export default function NoteCard({ note, onDelete }) {
    return (
        <div className="note-card">
            <h2>{note.title}</h2>

            {note.category && (
                <p className="note-category">{note.category}</p>
            )}

            <p className="note-content">
                {note.content.length > 100
                    ? note.content.substring(0, 100) + "..."
                    : note.content}
            </p>

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
