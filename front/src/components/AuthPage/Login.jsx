import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { firstName, password })
      .then((response) => {
        console.log("response:", response.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err.response.data.message);
        alert("Неправильні дані для входу");
      });
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center">
        <div className="flex justify-center flex-col border-2 border-violet-600 rounded-xl bg-violet-100 fixed p-6 shadow-xl">
          <h1 className="authText">Ім'я</h1>
          <input
            type="text"
            className="authInput"
            placeholder="Ім'я"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <h1 className="authText">Пароль</h1>
          <input
            type="password"
            className="authInput"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mb-5 auth-text bg-violet-600 p-2 m-2 rounded-md text-violet-100"
            onClick={handleLogin}
          >
            Увійти
          </button>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
