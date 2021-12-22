import { Icon } from '@iconify/react';
import TextInput from './TextInput';

import './IconInput.css';

const IconInput = ({ className, iconClassName, inputClassName, placeholder, type, icon, flipped }) => {
  return (
    <div className={`icon-input ${flipped ? 'flipped' : ''} ${className || ''}`}>
      <Icon className={`icon-input__icon ${iconClassName || ''}`} icon={icon} />
      <TextInput
        className={`icon-input-__input ${inputClassName || ''}`}
        type={type}
        placeholder={placeholder || ''}
      />
    </div>
  );
}

export default IconInput