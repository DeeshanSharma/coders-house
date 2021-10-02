import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/shared/Button';
import Card from '../../components/shared/Card';
import styles from './style.module.scss';

function Home() {
  const history = useHistory();
  const linkStyle = {
    color: '#0077ff',
    textDecoration: 'none',
    marginLeft: '10px',
  };
  const startRegister = () => {
    history.push('/register');
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing touches, we’re adding
          people gradually to make sure nothing breaks :)
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text..?</span>
          <Link style={{ ...linkStyle, fontWeight: 'bold' }} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Home;
