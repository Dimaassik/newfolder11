import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users', { firstName, lastName, password })
      .then(result => {
        console.log(result.data);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center">
        <div className="flex justify-center flex-col border-2 border-violet-600 rounded-xl bg-violet-100 fixed p-6 shadow-xl">
          <h1 className="auth-text">Ім'я</h1>
          <input
            type="text"
            className="input1 mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Ім'я"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
          <h1 className="auth-text">Прізвище</h1>
          <input
            type="text"
            className="input1 mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Прізвище"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
          <h1 className="auth-text">Пароль</h1>
          <input
            type="password"
            className="input1 mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <h1 className="auth-text">Повторіть пароль</h1>
          <input
            type="password"
            className="input1 mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Повторіть пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
          <button
            className="mb-5 auth-text bg-violet-600 p-2 m-2 rounded-md text-violet-100"
            onClick={handleSignUp}>
            Зареєструватися
          </button>
          <Link to="/login" className="text-center px-2 m-2 text-black bg-white rounded-md text-md font-confortaa">
            Маю аккаунт
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
