import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../elements/NavBar';
import axios from 'axios';
import { useUser } from '../UserContext';

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    password: false,
    confirmPassword: false
  });
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

  const handleSignUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = formData;
    let hasError = false;
    const newErrors = {
      firstName: false,
      email: false,
      password: false,
      confirmPassword: false
    };

    if (!firstName) {
      newErrors.firstName = true;
      hasError = true;
    }

    if (!validateEmail(email)) {
      newErrors.email = true;
      hasError = true;
    }

    if (password !== confirmPassword || !password) {
      newErrors.password = true;
      newErrors.confirmPassword = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    axios.post('http://localhost:3001/signup', { firstName, email, password })
      .then(result => {
        console.log(result.data);
        login({ email });
        navigate('/');
      })
      .catch(err => {
        if (err.response && err.response.status === 409) {
          alert("Користувач з таким email вже існує.");
        } else {
          console.log(err);
          alert("Сталася помилка під час реєстрації.");
        }
      });
  };

  return (
    <>
      <NavBar />
      <section className="flex justify-center mt-2 sm:mt-4 md:mt-6 lg:mt-8">
        <div className="authDiv bg-[#e0e0e0] p-4 sm:p-6 md:p-8 lg:p-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h1 className="authText">Ім'я</h1>
          <input type="text" className={`authInput ${errors.firstName ? 'authInputEr' : ''}`} placeholder="Ім'я" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
          <h1 className="authText">E-mail</h1>
          <input id="mail" type="email" className={`authInput ${errors.email ? 'authInputEr' : ''}`} placeholder="E-mail" name="email" value={formData.email} onChange={handleInputChange}/>
          <h1 className="authText">Пароль</h1>
          <input type="password" className={`authInput ${errors.password ? 'authInputEr' : ''}`} placeholder="Пароль" name="password" value={formData.password} onChange={handleInputChange}/>
          <h1 className="authText">Повторіть пароль</h1>
          <input type="password" className={`authInput ${errors.confirmPassword ? 'authInputEr' : ''}`} placeholder="Повторіть пароль"name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}/>
          <button className="button w-full py-2 sm:py-3 md:py-4 lg:py-5" onClick={handleSignUp}>Зареєструватися</button>
          <Link to="/login" className="button w-full text-center mt-2 py-2 sm:py-3 md:py-4 lg:py-5">Маю аккаунт</Link>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;