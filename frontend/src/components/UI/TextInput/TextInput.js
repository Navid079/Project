import "./TextInput.css";

const TextInput = ({ className, type, placeholder, onChange, reference }) => {
  return (
    <input
      className={`text-input ${className}`}
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
      ref={reference}
    />
  );
};

export default TextInput;
