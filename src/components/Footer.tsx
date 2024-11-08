import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <>
      {/* Curved Separator - Upward Curve */}
      <div className="bg-[#2F2F2F] relative">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 transform rotate-180"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96H1440V0C1440 0 1082.5 95 720 95C357.5 95 0 0 0 0V96Z"
            fill="#FAF9F7"
          />
        </svg>
      </div>

      <footer className="bg-[#2F2F2F] px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20">
            <div className="text-4xl">🙂</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Stay in the loop</h2>
              <p className="text-gray-600 mb-2">
                Be the first to get updates on our latest content, special offers, and new features.
              </p>
              <p className="text-sm text-gray-500">
                By signing up, you're agreeing to receive marketing emails from Headspace. You can unsubscribe at any time. For more details, check out our{' '}
                <a href="#" className="underline">Privacy Policy.</a>
              </p>
            </div>
            <div className="w-full md:w-auto flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 md:w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              <button className="bg-[#2F2F2F] text-white px-6 py-2 rounded-full hover:bg-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4">Get some Headspace</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Send a gift</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Redeem a code</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Student Plan</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">All articles</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Subscribe</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Headspace for Work</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Administrator Portal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Explore our content library</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Headspace</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Leadership</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Partnership request</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sleep App</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sitemap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Mental health resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Accessibility Statement</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">My Headspace</h3>
              <button className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>

            <div>
              <h3 className="font-bold mb-4">Get the app</h3>
              <div className="space-y-3">
                <a href="#" className="block">
                  <img 
                    src="/app-store-badge.svg" 
                    alt="Download on the App Store" 
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="/google-play-badge.svg" 
                    alt="Get it on Google Play" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer; 