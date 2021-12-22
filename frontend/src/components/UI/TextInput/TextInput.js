import "./TextInput.css";

const TextInput = ({ className, type, placeholder, onChange }) => {
  return (
    <input
      className={`text-input ${className}`}
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
