import React from 'react';

const Business = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#FFD700] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wider">HEADSPACE FOR ORGANIZATIONS</p>
              <h1 className="text-5xl font-bold text-gray-900">Mental healthcare for every moment</h1>
              <p className="text-lg text-gray-800">
                Helping members care for their mental health through guided meditations, coaching, therapy, psychiatry services, mindfulness practices, and EAP services.
              </p>
              <button className="bg-[#3366FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
                Request a demo
              </button>
            </div>

            {/* Right Image/Illustration */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
                <div className="bg-[#FF8E4F] rounded-xl p-4 mb-4">
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-medium">Lina, Coach</p>
                      <p className="text-sm text-gray-600">Let's work this out together.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium">Letting Go of Stress</p>
                    <p className="text-sm text-blue-500">Guided Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFD700] rounded-2xl p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-6">
                <div className="text-4xl">✨</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Help your employees and their families feel clearer, sharper, and kinder with Headspace Core
                  </h2>
                  <p className="mt-2 text-gray-800">
                    Request a demo to learn how you can give Headspace Core to your team before the end of the year.
                  </p>
                </div>
              </div>
              <button className="bg-[#3366FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors whitespace-nowrap">
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FF8E4F] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold">Personalized Support</h3>
              <p className="text-gray-600">
                Tailored mental health solutions for your organization's unique needs
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FF8E4F] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-gray-600">
                87% of members report better stress management within 60 days
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FF8E4F] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold">Comprehensive Care</h3>
              <p className="text-gray-600">
                From meditation to therapy, we provide end-to-end mental health support
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Business; 