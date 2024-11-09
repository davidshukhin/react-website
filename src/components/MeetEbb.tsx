function MeetEbb() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-gray-800">Meet Ebb</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Process life's ups and downs with Ebb, your new empathetic AI companion. 
            Chat anytime, anywhere, and get personalized recommendations for however you're feeling.
          </p>
          <div>
            <button className="bg-[#3366FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
              Chat with Ebb
            </button>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-b from-blue-500 to-blue-100 p-8 rounded-3xl">
            <div className="max-w-[300px] mx-auto">
              <div className="bg-black rounded-[40px] p-3">
                <div className="bg-white rounded-[32px] overflow-hidden">
                  <div className="p-4 space-y-4">
                    {/* Ebb Message */}
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Ebb</div>
                        <div className="bg-gray-100 rounded-2xl p-3 text-sm">
                          Not getting enough sleep can be rough. What do you think has been keeping you up at night?
                        </div>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-2 justify-end">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-right">You</div>
                        <div className="bg-blue-500 text-white rounded-2xl p-3 text-sm">
                          So many things. Family, work, money.
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0" />
                    </div>

                    {/* Ebb Response */}
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Ebb</div>
                        <div className="bg-gray-100 rounded-2xl p-3 text-sm">
                          No wonder it's hard to sleep. Sounds like you're carrying a lot on your shoulders right now.
                        </div>
                        {/* Meditation Recommendation */}
                        <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-sm">Sleep with Ease</div>
                              <div className="text-xs text-gray-500">Meditation (9 min)</div>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetEbb; 