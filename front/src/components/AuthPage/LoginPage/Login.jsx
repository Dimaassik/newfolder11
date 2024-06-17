import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import axios from "axios";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/users?firstName=${firstName}&password=${password}`)
      .then((result) => {
        if (result.data.length > 0) {
          console.log("Login successful");
          navigate("/");
        } else {
          console.log("Invalid credentials");
        }
      })
      .catch((err) => console.log(err));
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
            onChange={(e) => setFirstName(e.target.value)}/>
          <h1 className="auth-text">Пароль</h1>
          <input
            type="password"
            className="input1 mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <button
            className="mb-5 auth-text bg-violet-600 p-2 m-2 rounded-md text-violet-100"
            onClick={handleLogin}>
            Увійти
          </button>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
