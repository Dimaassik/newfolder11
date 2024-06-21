import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../elements/NavBar';
import axios from 'axios';
import { useUser } from '../UserContext';

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });
  const navigate = useNavigate();
  const { login } = useUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: false
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: true }));
      return;
    }

    axios.post('http://localhost:3001/login', { email, password })
      .then(response => {
        console.log("response:", response.data);
        login({ email });
        navigate("/");
      })
      .catch(err => {
        setErrors({ email: true, password: true });
        console.log("Error:", err.response?.data?.message || 'Невідома помилка');
      });
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-2 sm:mt-4 md:mt-6 lg:mt-8">
        <div className="authDiv bg-[#e0e0e0] p-4 sm:p-6 md:p-8 lg:p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h1 className="authText text-xl sm:text-3xl md:text-2xl lg:text-xl">E-mail</h1>
          <input id="mail" type="email" className={`${errors.email ? 'authInputEr' : 'authInput w-full mb-2 p-2 sm:p-3 md:p-4'}`} placeholder="E-mail" name="email" value={formData.email} onChange={handleInputChange} />
          <h1 className="authText text-xl sm:text-3xl md:text-2xl lg:text-xl">Пароль</h1>
          <input id="pswd" type="password" className={`${errors.email ? 'authInputEr' : 'authInput w-full mb-2 p-2 sm:p-3 md:p-4'}`} placeholder="Пароль" name="password" value={formData.password} onChange={handleInputChange} />

          <button className="button w-full py-2 sm:py-3 md:py-4 lg:py-5" onClick={handleLogin}>Увійти</button>
          <Link to="/signup" className="button w-full text-center mt-2 py-2 sm:py-3 md:py-4 lg:py-5">Створити аккаунт</Link>
        </div>
      </section>
    </>
  );
};

export default LoginPage;