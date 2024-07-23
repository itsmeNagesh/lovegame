import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <span>{message}</span>
        <button className="custom-alert-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default CustomAlert;
