// ErrorMessage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

function ErrorMessage() {
  return (
    <>
      <br />
      <br />
      <span className="error-message">
        <FontAwesomeIcon icon={faFrown} />
        <span style={{ fontSize: '20px' }}>City not found</span>
      </span>
    </>
  );
}

export default ErrorMessage;
