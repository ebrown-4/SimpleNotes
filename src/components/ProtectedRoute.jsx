import { Navigate } from "react-router-dom";
import { auth } from "../firebase";          // FIXED — must come from firebase.js
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProtectedRoute({ children }) {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
