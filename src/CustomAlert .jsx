import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content ">
        <span className='fw-bold fs-4'>{message}</span>
        <img src='./images/ani.png' alt='' className='img-fluid ani'/>
        <audio src='./images/love.mp3' autoPlay loop/>
        <button className="cross custom-alert-close fs-3 me-2  " onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default CustomAlert;
