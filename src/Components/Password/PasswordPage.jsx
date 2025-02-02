// src/components/PasswordPage.js
import React, { useState } from 'react';
import styles from './PasswordPage.module.scss';

const correctPassword = "1234"; // Замените на ваш настоящий пароль

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAccessGranted(true);
      setError('');
    } else {
      setError('Неверный пароль!');
    }
  };

  return (
    <div className={styles.container}>
      {!accessGranted ? (
        <div className={styles.passwordForm}>
          <h2>Введите пароль для доступа:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Пароль"
              className={styles.passwordInput}
            />
            <button type="submit" className={styles.submitButton}>
              Войти
            </button>
          </form>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      ) : (
        <div className={styles.content}>
          <h2>Добро пожаловать на защищённую страницу!</h2>
          {/* Здесь может быть ваш защищённый контент */}
        </div>
      )}
    </div>
  );
};

export default PasswordPage;
