import React from 'react';
import { Search } from 'lucide-react';

const HelpCategories = [
  {
    title: "Top FAQ",
    description: "Get quick answers to the most frequently asked questions about our products, services and policies."
  },
  {
    title: "Getting Started",
    description: "Whether you're a new member looking to explore, or you just need a refresher, take a look here for basic info and gui..."
  },
  {
    title: "Subscriptions & Billing",
    description: "You're in control of your subscription and billing details. Start or manage a subscription, update your payment info,..."
  },
  {
    title: "Account Management",
    description: "This is where you can manage your account and profile settings."
  },
  {
    title: "Troubleshooting",
    description: "Having issues with the app or website? Take a look at troubleshooting steps here, or report any problems you're exper..."
  },
  {
    title: "Scheduling Care",
    description: "Here you'll find step-by-step instructions, essential info, and troubleshooting tips for scheduling sessions with you..."
  },
  {
    title: "Family Plan & Dependents",
    description: "Whether you're setting up a new family plan or making updates to an existing one, here you will find the information ..."
  },
  {
    title: "Our Approach to Care/Meditation",
    description: "Learn more about our approach and commitment to mental health, including the benefits of mindfulness and meditation."
  },
  {
    title: "Privacy",
    description: "Your peace of mind is our priority. Here, you'll find answers to questions about privacy, security, and data handling..."
  }
];

const Help = () => {
  return (
    <main>
      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-r from-blue-500 via-[#FF8E4F] to-[#FFD700] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Help Center</h1>
            <button className="text-gray-600 hover:text-gray-900">
              Submit a request
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Describe your issue"
                className="w-full py-4 pl-12 pr-4 text-gray-900 rounded-lg border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HelpCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Emergency Resources */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Mental Health Resources / Crisis / Emergency Resources
          </h2>
          <p className="text-gray-600">
            If you or someone you know is experiencing a crisis, click here to access resources to find assistance.
          </p>
        </div>
      </section>

      {/* Chat Bubble */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-[#FF8E4F] text-white w-16 h-16 rounded-full shadow-lg hover:bg-[#e67e3f] transition-colors flex items-center justify-center">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default Help; 