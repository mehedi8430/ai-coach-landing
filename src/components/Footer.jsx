
export const Footer = () => {
    return (
        <footer className="py-[32px] max-w-full md:max-w-[1440px] md:mx-auto pt-[60px] px-4">
            <div className="flex flex-col md:flex-row justify-between max-sm:gap-6">
                <div className="space-y-[30px] max-sm:space-y-4 max-w-[534px] max-sm:w-full">
                    <div className="w-[146.36px] h-[51px] max-sm:w-[120px] max-sm:h-[42px]">
                        <img
                            src="/images/footer_logo.png"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[24px] tracking-[-1%]">
                        SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales
                        professionals who can elevate every aspect of your business. From performance rankings and skill
                        verification to industry benchmarking and real-time analytics, we provide the insights and tools
                        to optimize your sales strategy and drive growth.
                    </p>
                    <div className="flex gap-[12px] max-sm:gap-2 w-[172px] max-sm:w-full">
                        <a href="#" aria-label="Facebook">
                            <img
                                src="/images/facebook.svg"
                                alt="Facebook"
                                className="w-[34px] h-[34px] max-sm:w-8 max-sm:h-8"
                            />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img
                                src="/images/twitter.svg"
                                alt="Twitter"
                                className="w-[34px] h-[34px] max-sm:w-8 max-sm:h-8"
                            />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img
                                src="/images/linkedin.svg"
                                alt="LinkedIn"
                                className="w-[34px] h-[34px] max-sm:w-8 max-sm:h-8"
                            />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img
                                src="/images/instagram.svg"
                                alt="Instagram"
                                className="w-[34px] h-[34px] max-sm:w-8 max-sm:h-8"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-[115px] max-sm:mt-6">
                    <div>
                        <h3 className="text-[#001C4A] text-[18px] max-sm:text-[16px] font-semibold leading-[100%] tracking-[-1%] mb-[20px] max-sm:mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-6 max-sm:space-y-3">
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Case Study
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#001C4A] text-[18px] max-sm:text-[16px] font-semibold leading-[100%] tracking-[-1%] mb-[20px] max-sm:mb-4">
                            Licence
                        </h3>
                        <ul className="space-y-6 max-sm:space-y-3">
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Copyright
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] hover:underline hover:underline-offset-0">
                                    Email Address
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#001C4A] text-[18px] max-sm:text-[16px] font-semibold leading-[100%] tracking-[-1%] mb-[20px] max-sm:mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-6 max-sm:space-y-3">
                            <li className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] flex gap-[1px] items-center">
                                <img src="/images/phone.svg" alt="Phone" className="w-[20px] h-[20px] max-sm:w-5 max-sm:h-5" />
                                <span>(406) 555-0120</span>
                            </li>
                            <li className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] flex gap-[1px] items-center">
                                <img src="/images/email.svg" alt="Email" className="w-[20px] h-[20px] max-sm:w-5 max-sm:h-5" />
                                <span>Hey@boostim.com</span>
                            </li>
                            <li className="text-[#335386] text-[14px] max-sm:text-[12px] font-normal leading-[100%] tracking-[-2%] flex gap-[1px] items-center">
                                <img src="/images/location.svg" alt="Location" className="w-[20px] h-[20px] max-sm:w-5 max-sm:h-5" />
                                <span>2927 Westheimer Rd. Santa Ana, Illinois 85486</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};