import React from 'react';
import { Icon } from '@iconify/react';

import './UploadButton.css';

const UploadButton = ({ className, children, onClick }) => {
  return (
    <button className={`profile__upload-button ${className}`}>
      <Icon icon='ic:outline-upload-file' />
      {children}
      <Icon icon='fluent:document-question-mark-16-regular' />
    </button>
  );
};

export default UploadButton;
