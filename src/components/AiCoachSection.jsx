
export const AiCoachSection = () => {
    return (
        <div className="w-[1441.62px] mx-auto h-[994px]">
            <div className="h-[117px] space-y-[20px]">
                <p className="font-normal text-[24px] leading-[100%] tracking-[-1%] text-[#FCE38A] font-questrial">
                    Live Ai Coach
                </p>
                <h4 className="font-normal text-[60px] leading-[120%] tracking-[-1%] text-[#FFFFFF] font-questrial">
                    Take a Suggestion Coaching
                </h4>
            </div>

            <div className="w-full h-[577px] rounded-[8px] flex items-center gap-6 ">
                {/* <div className="w-[787px] h-[577px] border-[1px] border-[#CDCDCD] rounded-[12px] bg-[#F2F3F3]">

                </div> */}
                <div className="w-[787px] h-[577px] border-[1px] border-[#CDCDCD] rounded-[12px] bg-[#F2F3F3]">
                    <div className="flex items-center mb-4">
                        <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                        <span className="text-lg font-semibold">AI Sales Coach</span>
                    </div>

                    <div className="mb-4">
                        <div className="bg-[#F9F9F9] p-4 rounded-[12px]">
                            <p>Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 mb-4">
                        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-[12px]">How do I handle objections?</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-[12px]">Give me a cold email template</button>
                        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-[12px]">Closing techniques</button>
                        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-[12px]">Negotiation tips</button>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Ask anything you need"
                            className="flex-grow border border-gray-300 rounded-[12px] p-2 mr-2"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-[12px] flex items-center">
                            Send
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20l-8.5-8.5 2.5-2.5 6 6 12-12-2.5-2.5-6 6z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-[72px] h-[328px] border-[1px] border-[#4E4E4E1A] rounded-[57px] bg-[#F2F3F3] flex flex-col gap-[40px] p-[24px] backdrop-blur-xl">

                </div>

                <div className="w-[787px] h-[577px] border-[1px] border-[#CDCDCD] rounded-[12px] bg-[#F2F3F3]">

                </div>
            </div>
        </div>
    )
}