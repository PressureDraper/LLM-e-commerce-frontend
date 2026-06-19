'use client';
import { LoginForm } from '@/modules/auth/components/LoginForm'
import { RegistForm } from '@/modules/auth/components/RegistForm';
import Image from 'next/image'
import { useState } from 'react';

export default function LoginPage() {
    const [activeForm, setActiveForm] = useState<string>("login");

    return (
        <main className="flex-1 bg-neutral-50 flex">
            <div className="w-full lg:w-7xl p-5 flex flex-col items-center justify-center">
                <h1 className="font-normal text-7xl md:text-8xl font-display">Valtierrè</h1>
                <div className="max-w-130 mx-auto w-full h-full mt-20 md:mt-40 flex flex-col gap-10">
                    <div className="flex justify-between">
                        <button onClick={() => setActiveForm("login")}>
                            <span className={`text-md font-body uppercase font-extralight ${activeForm === 'signin' && 'cursor-pointer text-gray-400'} transition-colors duration-400`}>Iniciar Sesión</span>
                        </button>
                        <button onClick={() => setActiveForm("signin")}>
                            <span className={`text-md font-body uppercase font-extralight ${activeForm === 'login' && 'cursor-pointer text-gray-400'} transition-colors duration-400`}>Registrarse</span>
                        </button>
                    </div>
                    {
                        activeForm === 'login' ? <LoginForm /> : <RegistForm />
                    }
                </div>
            </div>
            <div className="w-full relative hidden lg:block">
                <Image
                    src="https://pub-2340d562e49941639edaa262ef4996bc.r2.dev/login/login.webp"
                    loading='eager'
                    fill
                    className='object-cover'
                    sizes='55vw'
                    alt="Login Image"
                />
            </div>
        </main>
    )
}
