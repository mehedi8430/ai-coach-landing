import { useState } from "react";

export const AiCoachSection = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
            sender: 'AI',
        },
    ]);
    const [inputText, setInputText] = useState('');

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;

        const newMessage = {
            id: messages.length + 1,
            text: inputText,
            sender: 'User',
        };

        setMessages([...messages, newMessage]);
        setInputText('');
    };

    const handleButtonClick = (question, aiResponse) => {
        const userMessage = {
            id: messages.length + 1,
            text: question,
            sender: 'User',
        };
        const aiMessage = {
            id: messages.length + 2,
            text: aiResponse,
            sender: 'AI',
        };

        setMessages([...messages, userMessage, aiMessage]);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputText.trim() !== '') {
            handleSendMessage();
        }
    };

    return (
        <div className="w-[1441.62px] mx-auto h-[820px] space-y-10 py-10">
            <div className="h-[117px] space-y-[20px]">
                <p className="font-normal text-[24px] leading-[100%] tracking-[-1%] text-[#FCE38A] font-questrial">
                    Live Ai Coach
                </p>
                <h4 className="font-normal text-[60px] leading-[120%] tracking-[-1%] text-[#FFFFFF] font-questrial">
                    Take a Suggestion Coaching
                </h4>
            </div>

            <div className="w-full h-[577px] rounded-[8px] flex items-center gap-6">
                {/* Chat form */}
                <div className="w-[787px] h-full border-[1px] border-[#CDCDCD] rounded-[12px] bg-[#F2F3F3] overflow-hidden flex flex-col">
                    <div className="bg-[#FFFFFF]">
                        <p className="pl-[32px] py-[16px] font-bold text-[18px] leading-[120%] tracking-[0%] text-[#1B1B1B]">
                            AI Sales Coach
                        </p>
                    </div>

                    <div className="p-[20px] flex-1 overflow-y-auto flex flex-col gap-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex gap-4 items-start ${message.sender === 'User' ? 'justify-end' : ''
                                    }`}
                            >
                                {message.sender === 'AI' && (
                                    <div className="w-10 h-10 rounded-[41px] bg-[#D9D9D9]"></div>
                                )}
                                <div
                                    className={`max-w-[628px] rounded-lg py-2 px-6 ${message.sender === 'User'
                                        ? 'bg-[#002868] text-[#FFFFFF]'
                                        : 'bg-[#FFFFFF] text-[#181818]'
                                        }`}
                                >
                                    <p className="font-normal font-lato text-[18px] leading-[32px] tracking-[0%]">
                                        {message.text}
                                    </p>
                                </div>
                                {message.sender === 'User' && (
                                    <div className="w-10 h-10 rounded-[41px] bg-[#002868]"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto bg-[#FFFFFF] px-[34px] py-[14px] space-y-[14px]">
                        <div className="flex gap-[12.82px]">
                            <button
                                onClick={() =>
                                    handleButtonClick(
                                        'How do I handle objections?',
                                        'To handle objections effectively, listen actively to the customer’s concerns, acknowledge their perspective, and address the issue with clear, concise information. For example, if a client objects to price, highlight the value and ROI your product offers.'
                                    )
                                }
                                className="px-[17px] py-[12px] bg-[#00286814] rounded-[36px] font-normal text-[14px] leading-[100%] tracking-[-4%] text-center text-[#002868] font-geist"
                            >
                                How do I handle objections?
                            </button>
                            <button
                                onClick={() =>
                                    handleButtonClick(
                                        'Give me a cold email template',
                                        'Here’s a sample cold email template: Subject: [Personalized Hook]\n\nHi [Name],\n\nI noticed [Specific Detail]. Our [Product/Service] can help you [Benefit]. Would you be open to a quick chat to explore how we can support your goals?\n\nBest,\n[Your Name]'
                                    )
                                }
                                className="px-[17px] py-[12px] bg-[#00286814] rounded-[36px] font-normal text-[14px] leading-[100%] tracking-[-4%] text-center text-[#002868] font-geist"
                            >
                                Give me a cold email template
                            </button>
                            <button
                                onClick={() =>
                                    handleButtonClick(
                                        'Closing techniques',
                                        'Effective closing techniques include the assumptive close (acting as if the sale is confirmed), the urgency close (highlighting limited availability), and the question close (e.g., “Does this solution meet your needs?”). Always align the close with the customer’s needs.'
                                    )
                                }
                                className="px-[17px] py-[12px] bg-[#00286814] rounded-[36px] font-normal text-[14px] leading-[100%] tracking-[-4%] text-center text-[#002868] font-geist"
                            >
                                Closing techniques
                            </button>
                            <button
                                onClick={() =>
                                    handleButtonClick(
                                        'Negotiation tips',
                                        'Key negotiation tips: Build rapport, understand the other party’s priorities, and focus on win-win outcomes. Be prepared to offer concessions strategically, and always have a clear bottom line before starting the discussion.'
                                    )
                                }
                                className="px-[17px] py-[12px] bg-[#00286814] rounded-[36px] font-normal text-[14px] leading-[100%] tracking-[-4%] text-center text-[#002868] font-geist"
                            >
                                Negotiation tips
                            </button>
                        </div>

                        <div className="flex items-center gap-[12px]">
                            <input
                                type="text"
                                placeholder="Ask anything you need"
                                value={inputText}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                className="w-[600px] py-[17px] px-[23px] rounded-[4px] border border-[#E5E7EB] bg-[#FFFFFF3D] placeholder:text-[#9A9A9A] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0.04em]"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="w-[100px] h-[48px] p-[14px] bg-[#002868] rounded-[8px] flex gap-[10px] items-center font-geist font-medium text-[100%] leading-[100%] tracking-[-4%] text-[#FFFFFF]"
                            >
                                Send
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.99px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action section */}
                <div className="w-[72px] h-[328px] border-[1px] border-[#4E4E4E1A] rounded-[57px] bg-[#F2F3F3] flex flex-col gap-[40px] p-[24px] backdrop-blur-xl">
                    {/* lucide/refresh-ccw */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" /></svg>

                    {/* lucide/thumbs-up */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>

                    {/* lucide/thumbs-down */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>

                    {/* lucide/clipboard */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-icon lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>

                    {/* lucide/volume-2 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>
                </div>

                {/* Analysis section */}
                <div className="w-[535px] h-full space-y-[24px]">
                    <div className="w-full h-[328px] rounded-[20px] p-[30px] space-y-[20px] bg-[#EFEFEF]">
                        <h3 className="font-bold text-[32px] text-[#323232] leading-[100%] tracking-[0%]">
                            Real-time Analysis
                        </h3>

                        <div className="w-[475px] p-4 rounded-lg shadow-sm border border-gray-200 bg-white">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 text-green-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.285 2.857l-11.428 11.428-5.142-5.143-2.143 2.143 7.285 7.285 13.571-13.571z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">Confidence Level</p>
                                </div>
                                <p className="text-sm text-gray-600">60%</p>
                            </div>

                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                                <div
                                    className="h-full bg-green-500 rounded-full"
                                    style={{ width: '60%' }}
                                ></div>
                            </div>

                            <p className="text-sm text-gray-600">
                                85% improvement in objection handling
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-[220px] rounded-[20px] p-[30px] space-y-[20px] bg-[#EFEFEF]">
                        <div className="bg-gray-100 p-4 rounded-lg w-fit">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                Quick Actions
                            </h2>

                            <div className="flex gap-4">
                                {/* Generate Script */}
                                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                                    <div className="text-blue-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm9 7h5.5L15 3.5V9zM8 13h8v2H8v-2zm0 4h5v2H8v-2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-800 font-medium">
                                        Generate Script
                                    </span>
                                </div>

                                {/* Practice Pitch */}
                                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                                    <div className="text-blue-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-800 font-medium">
                                        Practice Pitch
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};