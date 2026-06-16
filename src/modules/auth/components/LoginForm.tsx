'use client';

import { useState } from "react"

export const LoginForm = () => {
    const [activeForm, setActiveForm] = useState<string>("login");

    return (
        <div className="max-w-130 m-auto w-full flex flex-col gap-10">
            <div className="flex justify-between">
                <button onClick={() => setActiveForm("login")}>
                    <span className={`text-md font-body uppercase font-extralight ${activeForm === 'signin' && 'cursor-pointer text-gray-400'} transition-colors duration-400`}>Iniciar Sesión</span>
                </button>
                <button onClick={() => setActiveForm("signin")}>
                    <span className={`text-md font-body uppercase font-extralight ${activeForm === 'login' && 'cursor-pointer text-gray-400'} transition-colors duration-400`}>Registrarse</span>
                </button>
            </div>
            <div className="relative">
                <input
                    id="email"
                    type="email"
                    placeholder=" "
                    className="peer w-full border-0 border-b border-neutral-400 bg-transparent py-1 font-light focus:outline-none focus:border-neutral-600 transition-colors duration-300"
                />

                <label
                    htmlFor="email"
                    className="absolute left-0 -top-3 text-xs text-gray-400 font-body font-light transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-3 peer-focus:text-xs"
                >
                    EMAIL
                </label>
            </div>
        </div>
    )
}