import React from 'react';

import styles from './Button.module.css';

const Button = ({ title, active }) => {
  return (
    <button className={styles.customButtom} style={{ backgroundColor: active && 'grey' }}>
      {title}
    </button>
  );
};

export default Button;
