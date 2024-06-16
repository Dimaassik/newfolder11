import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./AuthPage.css";

const AuthPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("Registration successful:", userData);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData && storedUserData.firstName === firstName && storedUserData.password === password) {
      console.log("Login successful");
    } else {
      console.log("Бредік не пишем");
    }
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center">
        <div className="flex justify-center flex-col border-2 border-violet-600 rounded-xl bg-violet-100 fixed p-6 shadow-xl">
          <div className="flex justify-between items-center">
            <h1 className="auth-text">Ім'я</h1>
            <button className="text-right px-2 m-2 text-black bg-white rounded-md text-md font-confortaa" onClick={toggleLogin}>
              {isLogin ? "Реєстрація" : "Маю аккаунт"}
            </button>
          </div>
          <input
            type="text"
            className="input1 mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Ім'я"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
          {!isLogin && (
            <>
              <h1 className="auth-text">Прізвище</h1>
              <input
                type="text"
                className="input1 mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Прізвище"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
            </>
          )}
          <h1 className="auth-text">Пароль</h1>
          <input
            type="password"
            className="input1 mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          {!isLogin && (
            <>
              <h1 className="auth-text">Повторіть пароль</h1>
              <input
                type="password"
                className="input1 mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Повторіть пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </>
          )}
          <button
            className="mb-5 auth-text bg-violet-600 p-2 m-2 rounded-md text-violet-100"
            onClick={isLogin ? handleLogin : handleSignUp}>
            {isLogin ? "Увійти" : "Зареєструватися"}
          </button>
        </div>
      </section>
    </>
  );
};

export default AuthPage;