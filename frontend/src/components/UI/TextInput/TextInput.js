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
    <span className='text-input__container'>
      <input
        onKeyPress={onKeyPress}
        className={`text-input ${className}`}
        type={type || 'text'}
        onChange={onChange}
        ref={reference}
      />
      <h6 className='input__placeholder'>{placeholder}</h6>
    </span>
  );
};

export default TextInput;
