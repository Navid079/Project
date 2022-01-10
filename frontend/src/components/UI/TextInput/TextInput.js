import './TextInput.css';

const TextInput = ({
  className,
  type,
  placeholder,
  onChange,
  reference,
  onKeyPress,
}) => {
  return (
    <input
      onKeyPress={onKeyPress}
      className={`text-input ${className}`}
      type={type || 'text'}
      placeholder={placeholder}
      onChange={onChange}
      ref={reference}
    />
  );
};

export default TextInput;
