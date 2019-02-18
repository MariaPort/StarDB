import React from 'react';
import './error-indicator.css';
import icon from './error-icon.png';


const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon}
           alt='error icon'
           className='error-icon' />
      <h4 className='boom'>BOOM!</h4>
      <p className='error-text'>Something has gone terribly wrong</p>
      <p className='error-text'>We already try to fix this</p>
    </div>
  )
};

export default ErrorIndicator;