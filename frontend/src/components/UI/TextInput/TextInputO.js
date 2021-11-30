import { Icon } from '@iconify/react';
import TextInput from './TextInput';

import './TextInputO.css';

const TextInputO = ({ className, iconClassName, inputClassName, placeholder, type, icon }) => {
  return (
    <div className={`text-input-o ${className || ''}`}>
      <Icon className={`text-input-o__icon ${iconClassName || ''}`} icon={icon} />
      <TextInput
        className={inputClassName || ''}
        type={type}
        placeholder={placeholder || ''}
      />
    </div>
  );
}

export default TextInputO