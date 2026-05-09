import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";        // ✅ FIXED — must come from firebase.js
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <h1 className="logo">SimpleNotes</h1>

            <div className="nav-links">
                {!user && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}

                {user && (
                    <>
                        <Link to="/notes">Notes</Link>
                        <Link to="/add">Add Note</Link>
                        <Link to="/profile">Profile</Link>
                        <button onClick={handleLogout} className="logout-btn">
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
