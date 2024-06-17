import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { useUser } from '../../UserContext';

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useUser();

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!firstName || !email || !password || password !== confirmPassword) {
      alert("Будь ласка, заповніть всі поля та переконайтеся, що паролі співпадають.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Будь ласка, введіть правильний email.");
      return;
    }
    
    axios.post('http://localhost:3001/signup', { firstName, email, password })
      .then(result => {
        console.log(result.data);
        login({ email }); // Save user in context
        navigate('/');
      })
      .catch(err => {
        if (err.response && err.response.status === 409) {
          alert("Користувач з таким email вже існує.");
        } else {
          console.log(err);
          alert("Сталася помилка під час реєстрації.");
        }
      });
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-2">
        <div className="authDiv">
          <h1 className="authText">Ім'я</h1>
          <input
            type="text"
            className="authInput"
            placeholder="Ім'я"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
          <h1 className="authText">E-mail</h1>
          <input
            type="email"
            className="authInput"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <h1 className="authText">Пароль</h1>
          <input
            type="password"
            className="authInput"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <h1 className="authText">Повторіть пароль</h1>
          <input
            type="password"
            className="authInput mb-0"
            placeholder="Повторіть пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
          <button className="button" onClick={handleSignUp}>Зареєструватися</button>
          <Link to="/login" className="button text-center">Маю аккаунт</Link>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;