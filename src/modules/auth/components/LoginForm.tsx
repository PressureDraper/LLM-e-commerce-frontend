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
            <div className="w-full text-center border rounded p-1 cursor-pointer hover:bg-neutral-100 transition-colors duration-200">
                <button className="font-body font-extralight text-sm cursor-pointer">CONTINUAR</button>
            </div>
            <div className="w-full flex items-center -mt-2">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500">Ó</span>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="w-full text-center border p-1 cursor-pointer hover:bg-neutral-100 transition-colors duration-200 flex justify-center items-center gap-2 py-2 rounded-full">
                <svg width={18} height={18} viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
                <button className="font-body font-extralight text-sm cursor-pointer">CONTINUAR CON GOOGLE</button>
            </div>
        </>
    )
}