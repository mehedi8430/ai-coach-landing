import React from "react";

export const TestimonialSection = () => {
    return (
        <section className="max-w-[1280px] mx-auto py-[60px] space-y-[74px]">
            <blockquote className="text-[#010205] text-[36px] font-semibold leading-[160%] tracking-[-3%] w-full">
                “ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”
            </blockquote>
            <div className="flex justify-between">
                <div className="flex items-center gap-[24px]">
                    <div className="w-[70px] h-[70px] border-[2px] border-[#FFFFFF80] bg-[#00000033] rounded-full"></div>
                    <div className="space-x-[19px]">
                        <p className="text-[#010205] text-[20px] font-bold leading-[180%] tracking-[0%]">
                            Michael Kaizer
                        </p>
                        <p className="text-[#878C91] text-[16px] font-medium leading-[180%] tracking-[0%]">
                            CEO of Basecamp Corp
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-[38px]">
                    <button className="w-[88px] h-[56px] flex items-center justify-center rounded-[70px] border-[1px] border-[#00245F] py-4 px-8">
                        <img src="/images/arrow_left.svg" alt="Previous" />
                    </button>
                    <p className=" text-[#01020566] text-[20px] font-semibold leading-[180%] tracking-[0%] underline decoration-solid decoration-0 underline-offset-0">
                        01/05
                    </p>
                    <button className="w-[88px] h-[56px] flex items-center justify-center rounded-[70px] border-[1px] bg-[#00245F] border-[#00245F] py-4 px-8">
                        <img src="/images/arrow_right.svg" alt="Next" />
                    </button>
                </div>
            </div>
        </section>
    );
};