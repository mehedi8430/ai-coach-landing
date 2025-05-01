
export const Hero = () => {
    return (
        <section className="mt-[82px]">
            <div className="flex flex-col md:flex-row">
                {/* Left column - Main heading and description */}
                <div className="mt-[18px] ">
                    <h1 className="w-[516px] text-[80px] text-[#111111] font-medium leading-[100%] tracking-[-1%] ">
                        Your AI-Powered Sales Coach
                    </h1>

                    <div className="flex items-center gap-[67.81px] mt-[26px] ">
                        <div className="w-[204px] h-[198px] rounded-[20px] ">
                            <img
                                src="/images/ai_assistant.png"
                                alt="AI Assistant"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="w-[346px] text-[20px] text-[#05131DB2] font-medium leading-[163%] tracking-[0%] ">
                            Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.
                        </p>
                    </div>

                    <div className="mt-[92.11px] gap-[55.19px] flex items-center  ">
                        <div className="flex items-center gap-[34.68px] ">
                            <div className="bg-[#FFFFFF] w-[89px] h-[86.78px] rounded-[15.57px] flex items-center justify-center shadow-[15.57px_16.69px_20.47px_0px_#00000012]">
                                <img
                                    src="/images/backup_table.svg"
                                    alt="Backup Table Icon"
                                    className="w-[55.71px] h-[55.71px] rounded-[16.88px] "
                                />
                            </div>
                            <div>
                                <h3 className="w-[151.3px] text-[40px] text-[#05131D] font-semibold leading-[110.00000000000001%] tracking-[-1%]">
                                    2000+
                                </h3>
                                <p className="w-[165px] text-[20px] text-[#05131D] font-medium leading-[163%] tracking-[0%]">
                                    Your protection
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-[34.68px] ">
                            <div className="bg-[#FFFFFF] w-[89px] h-[86.78px] rounded-[15.57px] flex items-center justify-center shadow-[15.57px_16.69px_20.47px_0px_#00000012]">
                                <img
                                    src="/images/atr.svg"
                                    alt="ATR Icon"
                                    className="w-[55.71px] h-[55.71px] rounded-[16.88px] "
                                />
                            </div>
                            <div>
                                <h3 className="w-[151.3px] text-[40px] text-[#05131D] font-semibold leading-[110.00000000000001%] tracking-[-1%]">
                                    7001+
                                </h3>
                                <p className="w-[165px] text-[20px] text-[#05131D] font-medium leading-[163%] tracking-[0%]">
                                    Provide tailored
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right column - Stats and AI image */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
                    <div className="flex flex-col">
                        {/* Stats */}
                        <div className="flex justify-center gap-16 mb-4">
                            <div className="text-center">
                                <div className="font-bold text-4xl md:text-5xl text-blue-800">721+</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-4xl md:text-5xl text-blue-800">1000+</div>
                            </div>
                        </div>

                        {/* Growth text */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Growth is our priority.</h3>
                            <p className="text-sm text-gray-600 max-w-md">
                                As a full-service business agency, we specialize in helping companies of all sizes optimize their
                                operations
                            </p>
                        </div>

                        {/* AI Robot Image */}
                        <div className="relative">
                            <img
                                src="/placeholder.svg?height=400&width=400"
                                alt="AI Sales Coach Robot"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}