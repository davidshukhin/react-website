import React from 'react';

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#FFD700] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-6xl font-bold text-gray-900">
                About<br />Headspace
              </h1>
              <p className="text-xl text-gray-800">
                Headspace's mission is to provide every person access to lifelong mental health support.
              </p>
            </div>

            {/* Right Decorative Circle */}
            <div className="absolute top-0 right-0 -mr-40 mt-20">
              <div className="w-[400px] h-[400px] bg-[#FF8E4F] rounded-full relative">
                <div className="absolute top-1/4 left-1/4 text-4xl">
                  <div className="rotate-0 text-gray-800">⌣</div>
                  <div className="rotate-180 text-gray-800">⌣</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Curved bottom */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1440 0 1040 120 720 120C400 120 0 0 0 0L0 120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who we are */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/3">
              <div className="bg-[#FFD700] rounded-full p-8 w-48 h-48 flex items-center justify-center">
                <div className="bg-white rounded-full p-6 w-32 h-32 flex items-center justify-center">
                  <span className="text-4xl">😊</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Who we are</h2>
              <p className="text-xl text-gray-700">
                Think of Headspace as your lifelong guide to better mental health. We're here for you whenever you need us, wherever you are, helping you get through tough times and find joy in every day.
              </p>
            </div>
          </div>

          {/* What we do */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="bg-[#FF8E4F] rounded-full p-8 w-48 h-48 flex items-center justify-center">
                <div className="bg-white rounded-full p-6 w-32 h-32 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">What we do</h2>
              <p className="text-xl text-gray-700">
                Through evidence-based meditation and mindfulness tools, mental health coaching, therapy, psychiatry, and more, we help you create life-changing habits to support your mental health and find a healthier, happier you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FF8E4F]">70M+</div>
              <p className="text-gray-600">Downloads worldwide</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FF8E4F]">190+</div>
              <p className="text-gray-600">Countries served</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FF8E4F]">600k+</div>
              <p className="text-gray-600">5-star reviews</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About; 