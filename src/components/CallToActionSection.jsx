import React from "react";

export const CallToActionSection = () => {
    return (
        <section className="py-[32px] max-w-[1440px] mx-auto">
            <div className="bg-gradient-to-r from-[#103570] to-[#004FCE] py-[80px] space-y-[48px] rounded-[24px] flex flex-col items-center">
                <div className="space-y-[12px]">
                    <h2 className="text-[#FFFFFF] text-[38px] font-semibold leading-[130%] tracking-[0%]">
                        Ready to Hire Smarter?
                    </h2>
                    <p className="text-[#B9BDC7] text-[16px] font-normal leading-[160%] tracking-[-1%]">
                        Unlock Exclusive Insights Subscribe to Our Newsletter
                    </p>
                </div>
                <button className="bg-[#FCE38A] text-[#00245F] text-[16px] font-medium leading-[160%] tracking-[0%] py-[16px] px-[36px] rounded-[50px]">
                    Join Now
                </button>
            </div>
        </section>
    );
};