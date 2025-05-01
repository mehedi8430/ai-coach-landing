
export const AiCoachSection = () => {
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

            <div className="w-full h-[577px] rounded-[8px] flex items-center gap-6 ">
                {/* Chat form */}
                <div className="w-[787px] h-full border-[1px] border-[#CDCDCD] rounded-[12px] bg-[#F2F3F3] overflow-hidden flex flex-col">
                    <div className="bg-[#FFFFFF]">
                        <p className="pl-[32px] py-[16px] font-bold text-[18px] leading-[120%] tracking-[0%] text-[#1B1B1B]">
                            AI Sales Coach
                        </p>
                    </div>

                    <div className="p-[20px] flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-[41px] bg-[#D9D9D9]"></div>
                        <div className="w-[628px] bg-[#FFFFFF] rounded-lg py-2 px-6 ">
                            <p className="font-normal font-lato text-[#181818] text-[18px] leading-[32px] tracking-[0%] ">
                                Hello! I'm your AI sales coach. How can I help you improve your sales performance today?
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto">
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
                </div>

                {/* Action section */}
                <div className="w-[72px] h-[328px] border-[1px] border-[#4E4E4E1A] rounded-[57px] bg-[#F2F3F3] flex flex-col gap-[40px] p-[24px] backdrop-blur-xl">

                </div>

                {/* Analysis section */}
                <div className="w-[535px] h-full space-y-[24px]">
                    <div className="w-full h-[328px] rounded-[20px] p-[30px] space-y-[20px] bg-[#EFEFEF] ">
                        <h3 className="font-bold text-[32px] text-[#323232] leading-[100%] tracking-[0%] ">
                            Real-time Analysis
                        </h3>

                        <div className="w-[475px] p-4 rounded-lg shadow-sm border border-gray-200 bg-white">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.285 2.857l-11.428 11.428-5.142-5.143-2.143 2.143 7.285 7.285 13.571-13.571z" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">Confidence Level</p>
                                </div>
                                <p className="text-sm text-gray-600">60%</p>
                            </div>

                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                            </div>

                            <p className="text-sm text-gray-600">85% improvement in objection handling</p>
                        </div>
                    </div>

                    <div className="w-full h-[220px] rounded-[20px] p-[30px] space-y-[20px] bg-[#EFEFEF] ">
                        <div className="bg-gray-100 p-4 rounded-lg w-fit">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>

                            <div className="flex gap-4">
                                {/* Generate Script */}
                                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                                    <div className="text-blue-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm9 7h5.5L15 3.5V9zM8 13h8v2H8v-2zm0 4h5v2H8v-2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-800 font-medium">Generate Script</span>
                                </div>

                                {/* Practice Pitch */}
                                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                                    <div className="text-blue-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-800 font-medium">Practice Pitch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}