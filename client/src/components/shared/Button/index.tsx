import React from 'react';
import styles from './style.module.scss';

const Button = ({ text, onClick }: { text: string, onClick: React.MouseEventHandler }) => (
  <button type="button" onClick={onClick} className={styles.button}>
    <span>{text}</span>
    <img className={styles.arrow} src="/images/arrow-forward.png" alt="arrow" />
  </button>
);

export default Button;
