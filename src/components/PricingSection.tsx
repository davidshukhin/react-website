import React, { useState } from 'react';
import { Check } from 'lucide-react';

function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');

  return (
    <div className="bg-[#2F2F2F] text-white py-20 px-4 rounded-t-[3rem] rounded-b-[3rem] mb-16">
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
            className={`bg-orange-500 rounded-2xl p-6 relative cursor-pointer transition-all ${
              selectedPlan === 'annual' ? 'ring-4 ring-white' : 'hover:ring-2 hover:ring-white/50'
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
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                {selectedPlan === 'annual' && <div className="w-3 h-3 rounded-full bg-white" />}
              </div>
            </div>
          </div>

          {/* Monthly Plan */}
          <div 
            className={`bg-white text-black rounded-2xl p-6 cursor-pointer transition-all ${
              selectedPlan === 'monthly' ? 'ring-4 ring-orange-500' : 'hover:ring-2 hover:ring-orange-500/50'
            }`}
            onClick={() => setSelectedPlan('monthly')}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm mb-1">Monthly</div>
                <div className="text-2xl font-bold mb-1">7 days free</div>
                <div className="text-xl">$12.99 USD/month</div>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                {selectedPlan === 'monthly' && <div className="w-3 h-3 rounded-full bg-black" />}
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
  );
}

export default PricingSection; 