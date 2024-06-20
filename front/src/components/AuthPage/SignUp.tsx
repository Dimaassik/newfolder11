import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../elements/NavBar';
import axios from 'axios';
import { useUser } from '../UserContext';

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useUser();

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!firstName || !email || !password || password !== confirmPassword) {
      const inputs = document.querySelectorAll<HTMLInputElement>('input');
      inputs.forEach(input => {
          input.className = 'authInputEr';
      });
    }
    if (!validateEmail(email)) {
      const mail = document.getElementById('mail');
      if(mail) mail.className = 'authInputEr';
      return;
    }
    
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
          <h1 className="authText sm:text-3xl md:text-2xl lg:text-xl">Ім'я</h1>
          <input type="text" className="authInput w-full mb-2 p-2 sm:p-3 md:p-4" placeholder="Ім'я" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <h1 className="authText sm:text-3xl md:text-2xl lg:text-xl">E-mail</h1>
          <input id="mail" type="email" className="authInput w-full mb-2 p-2 sm:p-3 md:p-4" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <h1 className="authText sm:text-3xl md:text-2xl lg:text-xl">Пароль</h1>
          <input type="password" className="authInput w-full mb-2 p-2 sm:p-3 md:p-4" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <h1 className="authText sm:text-3xl md:text-2xl lg:text-xl">Повторіть пароль</h1>
          <input type="password" className="authInput w-full mb-2 p-2 sm:p-3 md:p-4" placeholder="Повторіть пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <button className="button w-full py-2 sm:py-3 md:py-4 lg:py-5" onClick={handleSignUp}>
            Зареєструватися
          </button>
          <Link to="/login" className="button w-full text-center mt-2 py-2 sm:py-3 md:py-4 lg:py-5">Маю аккаунт</Link>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;