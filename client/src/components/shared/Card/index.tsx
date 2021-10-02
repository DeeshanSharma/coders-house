import React, { ReactNode } from 'react';
import styles from './style.module.scss';

const Card = ({ title, icon, children }: { title: string; icon: string; children: ReactNode }) => (
  <div className={styles.card}>
    <div className={styles.headingWrapper}>
      <img src={`/images/${icon}.png`} alt="" />
      <h1 className={styles.heading}>{title}</h1>
    </div>
    {children}
  </div>
);

export default Card;
