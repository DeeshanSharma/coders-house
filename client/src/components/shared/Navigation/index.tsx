import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Navigation = () => {
  const brandStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties;

  const logoText = {
    marginLeft: '10px',
  } as React.CSSProperties;

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="hand wave logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
