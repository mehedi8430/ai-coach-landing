import React, { useState } from "react";

export const FaqSection = () => {
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
            answer: "",
        },
        {
            id: 3,
            question: "What info is required to get a quotation?",
            answer: "",
        },
    ];

    return (
        <div className="bg-white p-8 border-blue-500 border-2">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                    Constant collaboration is how we roll. Let's see if we are a good fit.
                </h2>
            </div>

            {/* FAQ List */}
            <div>
                {faqs.map((faq) => (
                    <FaqItem key={faq.id} faq={faq} />
                ))}
            </div>
        </div>
    );
};

// FAQ Item Component
const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 last:mb-0">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Number */}
                <span className="text-lg font-bold text-gray-800 mr-4">{faq.id.toString().padStart(2, "0")}</span>

                {/* Question */}
                <div className="flex-grow">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    {isOpen && (
                        <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                    )}
                </div>

                {/* Toggle Icon */}
                <span className="text-xl text-gray-600">
                    {isOpen ? "-" : "+"}
                </span>
            </div>

            {/* Separator */}
            <hr className="my-2" />
        </div>
    );
};