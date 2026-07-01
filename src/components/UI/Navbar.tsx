
export const Navbar = () => {
    return (
        <header className="h-18 z-5 fixed w-full">
            <nav className="group w-full h-full flex items-center bg-transparent hover:bg-neutral-50 transition-colors duration-300 px-10">
                <div className="py-0.5 px-2 rounded-full">
                    <span className="cursor-pointer text-neutral-50 group-hover:text-neutral-950 transition-colors duration-300">|||</span>
                </div>

                <div className="mx-auto">
                    <a href="/">
                        <span className="font-display text-4xl transition-colors duration-300 text-neutral-50 group-hover:text-neutral-950">
                            Valtierrè
                        </span>
                    </a>
                </div>

                <div className="p-1 rounded-full">
                    <a href="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-50 group-hover:text-neutral-950 lucide lucide-user-round-icon lucide-user-round transition-colors duration-300 cursor-pointer"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                    </a>
                </div>
            </nav>
        </header>
    )
}
