import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/notes");
        } catch (err) {
            console.log("🔥 FIREBASE ERROR:", err.code, err.message);
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Create Account</h2>

            <form onSubmit={handleRegister} className="auth-form">
                {error && <p className="error">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password (6+ characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}
