import React from 'react';
import styles from './Button.module.css'; // Your CSS module for button styling

const Button = ({ onClick, children }) => {
  return (
    <button className={styles.customButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;