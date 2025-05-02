export const HeroSection = () => {
    return (
        <section className="md:mt-[82px] pb-6 md:pb-[82px] max-w-full md:w-[1442px] md:h-[750px] px-4 md:px-0">
            <div className="flex flex-col md:flex-row relative">
                {/* Left column - Main heading and description */}
                <div className="mt-[44px]">
                    <h1 className="w-[516px] max-sm:w-full max-sm:text-[40px] text-[80px] text-[#111111] font-medium leading-[100%] tracking-[-1%]">
                        Your AI-Powered Sales Coach
                    </h1>

                    <div className="flex flex-col max-sm:items-center max-sm:gap-6 md:flex-row md:items-center md:gap-[67.81px] mt-6">
                        <div className="w-[204px] h-[198px] max-sm:w-[150px] max-sm:h-[150px] rounded-[20px]">
                            <img
                                src="/images/ai_assistant.png"
                                alt="AI Assistant"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="w-[346px] max-sm:w-full max-sm:text-[16px] max-sm:text-center h-[132px] text-[20px] text-[#05131DB2] font-medium leading-[163%] tracking-[0%]">
                            Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.
                        </p>
                    </div>

                    <div className="md:mt-[92.11px] gap-[55.19px] flex flex-col max-sm:items-center md:flex-row md:items-center max-sm:w-full max-sm:gap-8">
                        <div className="flex items-center gap-[34.68px]">
                            <div className="bg-[#FFFFFF] w-[89px] h-[86.78px] max-sm:w-[60px] max-sm:h-[60px] rounded-[15.57px] flex items-center justify-center shadow-[15.57px_16.69px_20.47px_0px_#00000012]">
                                <img
                                    src="/images/backup_table.svg"
                                    alt="Backup Table Icon"
                                    className="w-[55.71px] h-[55.71px] max-sm:w-[40px] max-sm:h-[40px] rounded-[16.88px]"
                                />
                            </div>
                            <div>
                                <h3 className="w-[151.3px] text-[40px] max-sm:text-[24px] text-[#05131D] font-semibold leading-[110%] tracking-[-1%]">
                                    2000+
                                </h3>
                                <p className="w-[165px] max-sm:w-full max-sm:text-[14px] text-[20px] text-[#05131D] font-medium leading-[163%] tracking-[0%]">
                                    Your protection
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-[34.68px]">
                            <div className="bg-[#FFFFFF] w-[89px] h-[86.78px] max-sm:w-[60px] max-sm:h-[60px] rounded-[15.57px] flex items-center justify-center shadow-[15.57px_16.69px_20.47px_0px_#00000012]">
                                <img
                                    src="/images/atr.svg"
                                    alt="ATR Icon"
                                    className="w-[55.71px] h-[55.71px] max-sm:w-[40px] max-sm:h-[40px] rounded-[16.88px]"
                                />
                            </div>
                            <div>
                                <h3 className="w-[151.3px] text-[40px] max-sm:text-[24px] text-[#05131D] font-semibold leading-[110%] tracking-[-1%]">
                                    7001+
                                </h3>
                                <p className="w-[165px] max-sm:w-full max-sm:text-[14px] text-[20px] text-[#05131D] font-medium leading-[163%] tracking-[0%]">
                                    Provide tailored
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column - Stats and AI image */}
                <div className="md:ml-auto mt-8 md:mt-0 relative">
                    <div className="w-[583px] h-[628px] max-sm:w-full max-sm:h-[300px] absolute top-0 right-0 max-sm:static max-sm:mx-auto">
                        <img
                            src="/images/robot.png"
                            alt="Robot"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="w-[467px] h-[359px] max-sm:w-full max-sm:h-auto bg-[#FFFFFF] shadow-[-9px_11px_38.1px_0px_#0000000D] rounded-[27px] absolute top-[391px] left-[692.19px] max-sm:static max-sm:mt-4 max-sm:mx-auto max-sm:p-6">
                        <div className="py-[50px] px-[24.62px] max-sm:py-6 max-sm:px-4 space-y-[30px] max-sm:space-y-4">
                            <div className="flex items-center justify-between w-[411px] max-sm:w-full h-[68px]">
                                <h3 className="text-[50px] max-sm:text-[30px] font-semibold leading-[100%] tracking-[0%] text-[#00245F]">
                                    721+
                                </h3>
                                <h3 className="text-[50px] max-sm:text-[30px] font-semibold leading-[100%] tracking-[0%] text-[#00245F]">
                                    1000+
                                </h3>
                            </div>
                            <h5 className="text-[27.98px] max-sm:text-[20px] font-semibold leading-[100%] tracking-[0%] text-[#05131D]">
                                Growth is our priority.
                            </h5>
                            <p className="font-medium text-[17px] max-sm:text-[14px] leading-[163%] tracking-[0%] text-[#05131DB2] font-poppins">
                                As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};