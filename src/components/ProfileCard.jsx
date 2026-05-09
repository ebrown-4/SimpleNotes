export default function ProfileCard({ email, uid, createdAt }) {
    return (
        <div className="profile-card">
            <h2>User Profile</h2>

            <p><strong>Email:</strong> {email}</p>
            <p><strong>User ID:</strong> {uid}</p>
            <p><strong>Member Since:</strong> {createdAt}</p>
        </div>
    );
}
