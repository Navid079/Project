import './TextInput.css';

const TextInput = props => {
  return (
    <input
      className={`text-input ${props.className}`}
      type={props.type || 'text'}
      placeholder={props.placeholder}
    />
  );
};

export default TextInput;
