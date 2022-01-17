import { Icon } from '@iconify/react';

import './ErrorMessage.css';

const ErrorMessage = ({ className, flipped, children }) => {
  return (
    <div
      className={`error-message ${flipped ? 'flipped' : ''} ${className || ''}`}
    >
      <div className='error-message__icon-container'>
        <Icon className='error-message__icon' icon='bi:exclamation-circle' />
      </div>
      <p className='error-message__message'>{children}</p>
      <div className='error-message__icon-container'>
      </div>
    </div>
  );
};

export default ErrorMessage;
