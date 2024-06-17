import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((response) => {
        console.log("response:", response.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err.response?.data?.message || 'Невідома помилка');
        alert(err.response?.data?.message || "Неправильні дані для входу");
      });
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-2">
        <div className="authDiv">
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
          <button className="button" onClick={handleLogin}>Увійти</button>
        </div>
      </section>
    </>
  );
};

export default LoginPage;