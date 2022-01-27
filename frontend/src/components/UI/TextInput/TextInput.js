import './TextInput.css';

const TextInput = ({
  className,
  type,
  placeholder,
  noFloat,
  onChange,
  reference,
  onKeyPress,
}) => {
  const placeholderNonInteractive = event => {
    event.target.previousSibling.focus();
  };

  return (
    <span className={`text-input__container ${className}`}>
      <input
        onKeyPress={onKeyPress}
        className='text-input'
        placeholder={noFloat ? placeholder : ' '}
        type={type || 'text'}
        onChange={onChange}
        ref={reference}
      />
      {noFloat ? '' : <h6 className='input__placeholder' onClick={placeholderNonInteractive}>
        {placeholder}
      </h6>}
    </span>
  );
};

export default TextInput;
