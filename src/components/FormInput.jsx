export default function FormInput({ label, value, onChange, type = "text", placeholder }) {
    return (
        <div className="form-input">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
