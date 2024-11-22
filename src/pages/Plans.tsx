import React from 'react';

const Plans = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 mb-8">Find the perfect plan for your meditation journey</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Basic</h2>
          <p className="text-gray-600 mb-4">Perfect for getting started</p>
          <p className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal text-gray-600">/month</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Basic meditation exercises
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Limited content access
            </li>
          </ul>
          <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>

        {/* Premium Monthly Plan */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow relative">
          <div className="absolute top-0 right-0 bg-[#FF8E4F] text-white px-3 py-1 rounded-tr-lg rounded-bl-lg text-sm">
            Popular
          </div>
          <h2 className="text-2xl font-bold mb-4">Premium Monthly</h2>
          <p className="text-gray-600 mb-4">Full access with monthly flexibility</p>
          <p className="text-3xl font-bold mb-6">$12.99<span className="text-lg font-normal text-gray-600">/month</span></p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Full content library access
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Personalized recommendations
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Offline downloads
            </li>
          </ul>
          <button className="w-full bg-[#3366FF] text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
            Start Free Trial
          </button>
        </div>

        {/* Premium Annual Plan */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-4">Premium Annual</h2>
          <p className="text-gray-600 mb-4">Best value for committed users</p>
          <p className="text-3xl font-bold mb-6">$5.83<span className="text-lg font-normal text-gray-600">/month</span></p>
          <p className="text-sm text-gray-600 mb-6">Billed annually as $69.99</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Everything in Premium Monthly
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Save 55% annually
            </li>
          </ul>
          <button className="w-full bg-[#3366FF] text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans; 