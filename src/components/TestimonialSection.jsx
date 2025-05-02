
export const TestimonialSection = () => {
    return (
        <section className="max-w-full md:max-w-[1280px] md:mx-auto py-[60px] space-y-[74px] max-sm:space-y-8 px-4">
            <blockquote className="text-[#010205] text-[36px] max-sm:text-[24px] font-semibold leading-[160%] tracking-[-3%] w-full">
                “ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”
            </blockquote>
            <div className="flex flex-col md:flex-row justify-between max-sm:gap-4">
                <div className="flex items-center gap-[24px] max-sm:gap-4">
                    <div className="w-[70px] h-[70px] max-sm:w-12 max-sm:h-12 border-[2px] border-[#FFFFFF80] bg-[#00000033] rounded-full"></div>
                    <div className="space-y-[4px]">
                        <p className="text-[#010205] text-[20px] max-sm:text-[16px] font-bold leading-[180%] tracking-[0%]">
                            Michael Kaizer
                        </p>
                        <p className="text-[#878C91] text-[16px] max-sm:text-[14px] font-medium leading-[180%] tracking-[0%]">
                            CEO of Basecamp Corp
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-[38px] max-sm:gap-4">
                    <button className="w-[88px] h-[56px] max-sm:w-12 max-sm:h-12 flex items-center justify-center rounded-[70px] border-[1px] border-[#00245F] py-4 px-8 max-sm:p-2">
                        <img src="/images/arrow_left.svg" alt="Previous" className="max-sm:w-6 max-sm:h-6" />
                    </button>
                    <p className="text-[#01020566] text-[20px] max-sm:text-[16px] font-semibold leading-[180%] tracking-[0%] underline decoration-solid decoration-0 underline-offset-0">
                        01/05
                    </p>
                    <button className="w-[88px] h-[56px] max-sm:w-12 max-sm:h-12 flex items-center justify-center rounded-[70px] border-[1px] bg-[#00245F] border-[#00245F] py-4 px-8 max-sm:p-2">
                        <img src="/images/arrow_right.svg" alt="Next" className="max-sm:w-6 max-sm:h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};