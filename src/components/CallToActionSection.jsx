
export const CallToActionSection = () => {
    return (
        <section className="py-[32px] max-w-full md:max-w-[1440px] md:mx-auto px-4">
            <div className="bg-gradient-to-r from-[#103570] to-[#004FCE] py-[80px] max-sm:py-8 space-y-[48px] max-sm:space-y-6 rounded-[24px] flex flex-col items-center max-sm:mx-4 px-2 md:px-0">
                <div className="space-y-[12px] max-sm:space-y-2">
                    <h2 className="text-[#FFFFFF] text-[38px] max-sm:text-[28px] font-semibold leading-[130%] tracking-[0%]">
                        Ready to Hire Smarter?
                    </h2>
                    <p className="text-[#B9BDC7] text-[16px] max-sm:text-[14px] font-normal leading-[160%] tracking-[-1%]">
                        Unlock Exclusive Insights Subscribe to Our Newsletter
                    </p>
                </div>
                <button className="bg-[#FCE38A] text-[#00245F] text-[16px] max-sm:text-[14px] font-medium leading-[160%] tracking-[0%] py-[16px] px-[36px] max-sm:py-3 max-sm:px-6 rounded-[50px]">
                    Join Now
                </button>
            </div>
        </section>
    );
};