
export const Header = () => {
    return (
        <header className="py-[30px]">
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-[74px]">
                    <div className="w-[238.56px] h-[48px] ">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/logo.png"
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden md:flex gap-[33px]">
                        <a href="#home" className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out">
                            Home
                        </a>
                        <a href="#about" className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out">
                            About
                        </a>
                        <a href="#pricing" className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out">
                            Pricing
                        </a>
                        <a href="#consulting" className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out">
                            Consulting
                        </a>
                        <a href="#ai_coach" className="font-plus_jakarta_sans text-[#020407] font-semibold text-[14px] leading-[100%] tracking-[0%] hover:text-[#FF6FB9] transition duration-300 ease-in-out">
                            Ai Coach
                        </a>
                    </div>
                </div>

                <button className="py-[13px] px-[16px] rounded-[50px] border-[1px] border-[#010205] cursor-pointer font-[700] text-[16px] leading-[140%] tracking-[-2%] text-[#010205] hover:bg-[#FF6FB9] hover:text-white hover:border-[#FF6FB9] transition duration-300 ease-in-out">
                    Get Started
                </button>
            </nav>
        </header>
    )
}

