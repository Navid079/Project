import { Icon } from '@iconify/react';
import TextInput from './TextInput';

import './TextInputO.css';

const TextInputO = ({ className, iconClassName, inputClassName, placeholder, type, icon, flipped }) => {
  return (
    <div className={`text-input-o ${flipped ? 'flipped' : ''} ${className || ''}`}>
      <Icon className={`text-input-o__icon ${iconClassName || ''}`} icon={icon} />
      <TextInput
        className={`text-input-o__input ${inputClassName || ''}`}
        type={type}
        placeholder={placeholder || ''}
      />
    </div>
  );
}

export default TextInputO