import { useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="py-[30px] max-w-full px-4 md:px-0">
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-[74px] max-sm:gap-1">
                    <div className="w-[238.56px] h-[48px] max-sm:w-3/4 max-sm:h-auto max-sm:max-w-[150px]">
                        <img
                            className="w-full h-full object-contain"
                            src="/images/logo.png"
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden md:flex gap-[33px]">
                        <a
                            href="#home"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                        >
                            About
                        </a>
                        <a
                            href="#pricing"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                        >
                            Pricing
                        </a>
                        <a
                            href="#consulting"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                        >
                            Consulting
                        </a>
                        <a
                            href="#ai_coach"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                        >
                            Ai Coach
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        className="py-[13px] px-[16px] max-sm:py-1.5 max-sm:px-2 max-sm:text-xs rounded-[50px] border-[1px] border-[#010205] cursor-pointer font-[700] text-[16px] leading-[140%] tracking-[-2%] text-[#010205] hover:bg-[#FF6FB9] hover:text-white hover:border-[#FF6FB9] transition duration-300 ease-in-out whitespace-nowrap"
                    >
                        Get Started
                    </button>

                    {/* Hamburger Icon for Mobile */}
                    <button
                        className="md:hidden p-1"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className="w-5 h-5 text-[#010205]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`md:hidden absolute top-[90px] left-0 right-0 bg-white shadow-lg px-4 py-4 z-50 rounded-md mx-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`} aria-hidden={!isMenuOpen}>
                    <div className="flex flex-col gap-4 items-center">
                        <a
                            href="#home"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            About
                        </a>
                        <a
                            href="#pricing"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            Pricing
                        </a>
                        <a
                            href="#consulting"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            Consulting
                        </a>
                        <a
                            href="#ai_coach"
                            className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out"
                            onClick={toggleMenu}
                        >
                            Ai Coach
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};