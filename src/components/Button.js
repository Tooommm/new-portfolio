import React from 'react';
import './Button.css';

const Button = ({text}) => {
  return (
    <div className="button">
      <span>{text}</span>
    </div>
  )
}

export default Button
