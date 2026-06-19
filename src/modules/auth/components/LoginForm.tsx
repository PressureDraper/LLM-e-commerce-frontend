export const LoginForm = () => {

    return (
        <>
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
            <div className="relative">
                <input
                    id="password"
                    type="password"
                    placeholder=" "
                    className="peer w-full border-0 border-b border-neutral-400 bg-transparent py-1 font-light focus:outline-none focus:border-neutral-600 transition-colors duration-300"
                />

                <label
                    htmlFor="password"
                    className="absolute left-0 -top-3 text-xs text-gray-400 font-body font-light transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:-top-3 peer-focus:text-xs"
                >
                    CONTRASEÑA
                </label>

                <div className="w-full flex justify-end mt-2">
                    <span className="font-light text-xs underline underline-offset-2 cursor-pointer">¿Olvidaste tu contraseña?</span>
                </div>
            </div>
            <div className="w-full text-center border rounded p-1 cursor-pointer hover:bg-neutral-200 transition-colors duration-200">
                <button className="font-body font-extralight cursor-pointer">CONTINUAR</button>
            </div>
            <div className="w-full flex items-center -mt-2">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500">Ó</span>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
        </>
    )
}