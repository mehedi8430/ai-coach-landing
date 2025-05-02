import React from "react";

export const Footer = () => {
    return (
        <footer className="py-[32px] max-w-[1440px] mx-auto pt-[60px]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="space-y-[30px] max-w-[534px]">
                    <div className="w-[146.36px] h-[51px]">
                        <img
                            src="/images/footer_logo.png" alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-[#335386] text-[14px] font-normal leading-[24px] tracking-[-1%]">
                        SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales
                        professionals who can elevate every aspect of your business. From performance rankings and skill
                        verification to industry benchmarking and real-time analytics, we provide the insights and tools
                        to optimize your sales strategy and drive growth.
                    </p>
                    <div className="flex gap-[12px] w-[172px]">
                        <a href="#" aria-label="Facebook">
                            <img
                                src="/images/facebook.svg"
                                alt="Facebook"
                                className="w-[34px] h-[34px]"
                            />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img
                                src="/images/twitter.svg"
                                alt="Twitter"
                                className="w-[34px] h-[34px]"
                            />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img src="/images/linkedin.svg" alt="LinkedIn"
                                className="w-[34px] h-[34px]"
                            />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img src="/images/instagram.svg" alt="Instagram"
                                className="w-[34px] h-[34px]"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex gap-[115px]">
                    <div>
                        <h3 className="text-[#001C4A] text-[18px] font-semibold leading-[100%] tracking-[-1%] mb-[20px]">
                            Navigation
                        </h3>
                        <ul className="space-y-6">
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Case Study
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Resource
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#001C4A] text-[18px] font-semibold leading-[100%] tracking-[-1%] mb-[20px]">
                            Licence
                        </h3>
                        <ul className="space-y-6">
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Copyright
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%]">
                                    Email Address
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#001C4A] text-[18px] font-semibold leading-[100%] tracking-[-1%] mb-[20px]">
                            Contact
                        </h3>
                        <ul className="space-y-6">
                            <li className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%] flex gap-[1px] items-center">
                                <img src="/images/phone.svg" alt="Phone" className="w-[20px] h-[20px]" />
                                <span>
                                    (406) 555-0120
                                </span>
                            </li>
                            <li className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%] flex gap-[1px] items-center">
                                <img src="/images/email.svg" alt="Email" className="w-[20px] h-[20px]" />
                                <span>Hey@boostim.com</span>
                            </li>
                            <li className="text-[#335386] text-[14px] font-normal leading-[100%] tracking-[-2%] flex gap-[1px] items-center">
                                <img src="/images/location.svg" alt="Location" className="w-[20px] h-[20px]" />
                                <span>2927 Westheimer Rd. Santa Ana, Illinois 85486</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};