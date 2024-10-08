import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose , yes}) => {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content d-flex justify-content-center align-items-center ">
  
        <span className='fw-bold fs-4 msg'>{message}</span>
          {yes?<><img src='./images/hhh2.png' alt='' className='img-fluid ani'/>   <audio src='./images/ss.mp3' autoPlay loop/>
            </>:<><img src='./images/ani.png' alt='' className='img-fluid ani'/>   <audio src='./images/love.mp3' autoPlay loop/>
            </>}
        {/* <audio src='./images/love.mp3' autoPlay loop/> */}
       
        <button className="cross custom-alert-close fs-3 me-2  " onClick={onClose}>X</button>
      
      </div>
     
    </div>
  );
};

export default CustomAlert;
