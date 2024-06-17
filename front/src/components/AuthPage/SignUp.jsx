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
    if ((firstName && email && password)&&(password==confirmPassword)){
      axios.post('http://localhost:3001/users', { firstName, email, password })
      .then(result => {
        console.log(result.data);
        navigate('/');
      })
      .catch(err => console.log(err));
    }else {
      console.log("брєдік не пишем");
        return;
    }
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
<<<<<<< HEAD
          <button className="button" onClick={handleSignUp}>Зареєструватися</button>
          <Link to="/login" className="button text-center ">Маю аккаунт</Link>
=======
            <button
              className="button"
              onClick={handleSignUp}>
              Зареєструватися
            </button>
            <Link to="/login" className="button text-center ">
              Маю аккаунт
            </Link>

>>>>>>> e2a02e44 ( Your branch is up to date with 'origin/main'.)
        </div>
      </section>
    </>
  );
};

export default SignUpPage;