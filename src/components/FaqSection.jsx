import React, { useState } from "react";

export const FaqSection = () => {
    const [openFaqId, setOpenFaqId] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "Why should I choose Humestic?",
            answer:
                "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.",
        },
        {
            id: 2,
            question: "I like your works, how do we start a project?",
            answer: "We usually start with a quick discovery call to understand your goals, then proceed with planning, estimation, and kickoff.",
        },
        {
            id: 3,
            question: "What info is required to get a quotation?",
            answer: "To provide a quote, we’ll need a detailed description of the project, features, deadlines, and your budget range if possible.",
        },
    ];

    const toggleFaq = (id) => {
        setOpenFaqId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className="max-w-[1441.62px] mx-auto space-y-10 py-[60px]">
            <div className="flex gap-[80px] items-start">
                <p className="w-[280px] font-questrial text-[#001C4A] text-[24px] font-normal leading-[100%] tracking-[-1%] ">
                    Frequently asked questions
                </p>
                <h4 className="w-[920px] font-questrial text-[#111111] text-[60px] font-normal leading-[120%] tracking-[-1%] ">
                    Constant collaboration is how we roll. Let's see if we are a good fit.
                </h4>
            </div>

            <div>
                {faqs.map((faq) => (
                    <div className="mb-10 last:mb-0" key={faq.id}>
                        <div
                            className="flex items-start justify-between gap-[40px] cursor-pointer"
                            onClick={() => toggleFaq(faq.id)}
                        >
                            <span className="font-questrial font-normal text-[32px] text-[#8B7D4C] leading-[100%] tracking-[-1%] ">
                                {faq.id.toString().padStart(2, "0")}
                            </span>

                            <div className="flex-grow w-[1281px]">
                                <h3 className="font-questrial font-normal text-[40px] text-[#111111] leading-[100%] tracking-[-1%] ">
                                    {faq.question}
                                </h3>

                                {openFaqId === faq.id && (
                                    <p className="w-[1210px] mt-4 font-inter text-[16px] text-[#636363] leading-[140%] tracking-[-2%] ">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>

                            <span className="w-[27px] h-[27px]">
                                <img
                                    src={openFaqId === faq.id ? "/images/minus.svg" : "/images/plus.svg"}
                                    alt={openFaqId === faq.id ? "Minus Icon" : "Plus Icon"}
                                />
                            </span>
                        </div>

                        <div className="my-6 border-[1px] border-[#CCCCCC]" />
                    </div>
                ))}
            </div>
        </section>
    );
};
