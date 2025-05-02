import React from "react";

export const Footer = () => {
    return (
        <footer className="py-[32px] max-w-[1440px] mx-auto pt-[40px]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="space-y-[30px]">
                    <div className="w-[146.36px] h-[51px]">
                        <img
                            src="/images/footer_logo.png" alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                        SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales
                        professionals who can elevate every aspect of your business. From performance rankings and skill
                        verification to industry benchmarking and real-time analytics, we provide the insights and tools
                        to optimize your sales strategy and drive growth.
                    </p>
                    <div className="flex gap-[16px] mt-[24px]">
                        <a href="#" aria-label="Facebook">
                            <img src="/images/facebook.svg" alt="Facebook" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img src="/images/twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img src="/images/linkedin.svg" alt="LinkedIn" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img src="/images/instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-[#111111] text-[20px] font-semibold leading-[120%] tracking-[-1%] mb-[16px]">
                        Navigation
                    </h3>
                    <ul className="space-y-[8px]">
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Agency
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Case Study
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Resource
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* License Links */}
                <div>
                    <h3 className="text-[#111111] text-[20px] font-semibold leading-[120%] tracking-[-1%] mb-[16px]">
                        Licence
                    </h3>
                    <ul className="space-y-[8px]">
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Copyright
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                                Email Address
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-[#111111] text-[20px] font-semibold leading-[120%] tracking-[-1%] mb-[16px]">
                        Contact
                    </h3>
                    <ul className="space-y-[8px]">
                        <li className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                            📞 (406) 555-0120
                        </li>
                        <li className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                            ✉️ Hey@boostim.com
                        </li>
                        <li className="text-[#636363] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                            📍 2927 Westheimer Rd. Santa Ana, Illinois 85486
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};