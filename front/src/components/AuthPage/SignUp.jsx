import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if(password!=confirmPassword){
      console.log("брєдік не пишем");
      return;
    }
    axios.post('http://localhost:3001/users', { firstName, email, password })
      .then(result => {
        console.log(result.data);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-2">
        <div className="flex justify-center flex-col border-2 border-violet-600 rounded-xl bg-violet-100 fixed p-6 shadow-xl">
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
            placeholder="Прізвище"
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
          <button
            className="mb-5 authText bg-violet-600 p-2 m-2 rounded-md text-violet-100"
            onClick={handleSignUp}>
            Зареєструватися
          </button>
          <Link to="/login" className="authText text-center">
            Маю аккаунт
          </Link>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
