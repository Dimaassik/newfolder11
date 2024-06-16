import React from "react";
import NavBar from "../NavBar/NavBar";
import './AuthPage.css';

const AuthPage = () => {
    return (
        <>
            <NavBar />
            <section className="flex justify-center">
                <div className="flex justify-center flex-col border-2 border-violet-600 rounded-xl bg-violet-100 fixed p-6 shadow-xl">
                    <div className="flex justify-between items-center">
                    <h1 className="auth-text">Ім'я</h1>
                    <button className="text-right px-2 m-2 text-black bg-white rounded-md text-md font-confortaa">x</button>
                    </div>
                    <input type="text" className="input1 mb-4 p-2 border border-gray-300 rounded-md" placeholder="Ім'я" />
                    <h1 className="auth-text">Прізвище</h1>
                    <input type="text" className="input1 mb-4 p-2 border border-gray-300 rounded-md" placeholder="Прізвище" />
                    <h1 className="auth-text">Пароль</h1>
                    <input type="password" className="input1 mb-4 p-2 border border-gray-300 rounded-md" placeholder="Пароль" />
                    <h1 className="auth-text">Повторіть пароль</h1>
                    <input type="password" className="input1 mb-4 p-2 border border-gray-300 rounded-md" placeholder="Повторіть пароль" />
                    <button className="mb-5 auth-text bg-violet-600 p-2 m-2 rounded-md text-violet-100">Зареєструватися</button>
                </div>
            </section>
        </>
    );
}

export default AuthPage;