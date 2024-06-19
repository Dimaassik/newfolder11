import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { useUser } from '../UserContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useUser();

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const mail = document.getElementById('mail');
    if (!validateEmail(email)) {
        if(mail) mail.className = 'authInputEr';
      return;
    }else{
      if(mail) mail.className = 'authInput';
    }
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((response) => {
        console.log("response:", response.data);
        login({ email });
        navigate("/");
      })
      .catch((err) => {
        const pswd = document.getElementById('pswd');
        if (pswd && mail) {
          pswd.className = 'authInputEr';
          mail.className = 'authInputEr';
        }
        console.log("Error:", err.response?.data?.message || 'Невідома помилка');

      });
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-2">
        <div className="authDiv bg-[#e0e0e0]">
          <h1 className="authText">E-mail</h1>
          <input
            id='mail'
            type="email"
            className="authInput"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <h1 className="authText">Пароль</h1>
          <input
            id="pswd"
            type="password"
            className="authInput"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button className="button" onClick={handleLogin}>Увійти</button>
        </div>
      </section>
    </>
  );
};

export default LoginPage;