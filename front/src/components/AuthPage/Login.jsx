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
      <section className="flex justify-center mt-2">
        <div className="authDiv">
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
            className="button"
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
