import React, { useState } from 'react';
import { Check } from 'lucide-react';

function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');

  return (
    <>
      <div className="bg-[#2F2F2F] text-white mb-20">
        {/* Main Content */}
        <div className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">Try Headspace for free</h2>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-3">
                <Check className="text-orange-500 mt-1" />
                <span>Stress less with hundreds of meditations</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-orange-500 mt-1" />
                <span>Get in the zone with Focus music</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-orange-500 mt-1" />
                <span>Unwind with sleep sounds and music</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-orange-500 mt-1" />
                <span>Try mood-boosting workouts, yoga, and more</span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Annual Plan */}
              <div 
                className={`rounded-2xl p-6 relative cursor-pointer transition-all
                  ${selectedPlan === 'annual' 
                    ? 'bg-orange-500 text-white ring-4 ring-white' 
                    : 'bg-white text-black hover:ring-2 hover:ring-orange-500/50'
                  }`}
                onClick={() => setSelectedPlan('annual')}
              >
                <div className="absolute -top-3 left-6 bg-white text-black text-sm px-3 py-1 rounded-full">
                  Best value
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm mb-1">Annual - billed at $69.99 USD/yr</div>
                    <div className="text-2xl font-bold mb-1">14 days free</div>
                    <div className="text-xl">$5.83 USD/month</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    selectedPlan === 'annual' ? 'border-white' : 'border-black'
                  } flex items-center justify-center`}>
                    {selectedPlan === 'annual' && 
                      <div className={`w-3 h-3 rounded-full ${
                        selectedPlan === 'annual' ? 'bg-white' : 'bg-black'
                      }`} />
                    }
                  </div>
                </div>
              </div>

              {/* Monthly Plan */}
              <div 
                className={`rounded-2xl p-6 cursor-pointer transition-all
                  ${selectedPlan === 'monthly' 
                    ? 'bg-orange-500 text-white ring-4 ring-white' 
                    : 'bg-white text-black hover:ring-2 hover:ring-orange-500/50'
                  }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm mb-1">Monthly</div>
                    <div className="text-2xl font-bold mb-1">7 days free</div>
                    <div className="text-xl">$12.99 USD/month</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    selectedPlan === 'monthly' ? 'border-white' : 'border-black'
                  } flex items-center justify-center`}>
                    {selectedPlan === 'monthly' && 
                      <div className={`w-3 h-3 rounded-full ${
                        selectedPlan === 'monthly' ? 'bg-white' : 'bg-black'
                      }`} />
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="text-center text-sm text-gray-400 space-y-2 mb-8">
              <p>After your free trial, the annual subscription is $69.99 USD and automatically renews each year.</p>
              <p>
                Are you a post-secondary or university student? Save 85%, with valid SheerID student verification, for our{' '}
                <a href="#" className="text-orange-500 hover:underline">student plan</a>.
              </p>
            </div>

            {/* Footer Links and Button */}
            <div className="text-center space-y-6">
              <div className="text-sm">
                <a href="#" className="text-orange-500 hover:underline">Terms & conditions</a>
                <span className="mx-2">·</span>
                <a href="#" className="text-orange-500 hover:underline">Cancel anytime</a>
              </div>
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Try for free
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="w-full">
          <svg
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24"
            preserveAspectRatio="none"
          >
            <path
              d="M0 96H1440V0C1440 0 1082.5 95 720 95C357.5 95 0 0 0 0V96Z"
              fill="#FAF9F7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default PricingSection; 