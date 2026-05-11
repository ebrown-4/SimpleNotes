import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Navbar() {
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar">
            <div className="nav-left">
                <h2>SimpleNotes</h2>
            </div>

            <div className="nav-right">
                {!user ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/notes">Notes</Link>
                        <Link to="/profile">Profile</Link>
                        <button
                            className="logout-btn"
                            onClick={() => auth.signOut()}
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
