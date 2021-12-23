import "./Button.css";

const Button = ({ className, onClick, type, children }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type || "submit"}
    >
      {children}
    </button>
  );
};

export default Button;
