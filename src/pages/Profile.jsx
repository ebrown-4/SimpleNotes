import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (!user) return <p>Loading...</p>;

    const email = user.email;
    const uid = user.uid;
    const createdAt = new Date(user.metadata.creationTime).toLocaleDateString();

    const handleLogout = async () => {
        await auth.signOut();
        navigate("/login");
    };

    return (
        <div className="profile-page">
            <ProfileCard
                email={email}
                uid={uid}
                createdAt={createdAt}
            />

            <button onClick={handleLogout} className="btn-logout">
                Logout
            </button>
        </div>
    );
}
