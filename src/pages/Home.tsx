import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';
import TestimonialsSection from '../components/TestimonialSection';
import TryFreeCard from '../components/TryFreeCard';
import ArticleDisplay from '../components/ArticleDisplay';
import StatsDisplay from '../components/StatsDisplay';
import PricingSection from '../components/PricingSection';
import FeatureSection from '../components/FeatureSection';
import MeetEbb from '../components/MeetEbb';
import { heroleft, heroright } from '../../constants/images';
const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState<'Annual' | 'Monthly'>('Annual');

  return (
    <main>
         {/* Hero Section with Images */}
         <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-16">
            {/* Left Image */}
            <div className="hidden lg:block w-1/3">
              <img 
                src={heroleft} 
                alt="Decorative left" 
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>

            {/* Center Content */}
            <div className="flex-1 space-y-8 max-w-xl">
              <h1 className="text-center text-5xl font-bold text-gray-800">
                Your everyday mental health app
              </h1>
              <p className="text-xl text-center text-gray-600">Find some headspace:</p>
              
              <div className="space-y-4">
                <PricingCard 
                  type="Annual"
                  price="5.83"
                  trial={14}
                  isPopular={true}
                  yearlyPrice="69.99"
                  isSelected={selectedPlan === 'Annual'}
                  onSelect={() => setSelectedPlan('Annual')}
                />
                <PricingCard 
                  type="Monthly"
                  price="12.99"
                  trial={7}
                  isPopular={false}
                  isSelected={selectedPlan === 'Monthly'}
                  onSelect={() => setSelectedPlan('Monthly')}
                />
              </div>

              <p className="text-sm text-center text-gray-500">
                After your free trial, the annual subscription is $69.99 USD and automatically renews each year.
              </p>
              <p className="text-sm text-center text-gray-500">
                Are you a post-secondary or university student? Save 85%, with valid SheerID student verification, for our{' '}
                <a href="#" className="text-blue-600 hover:underline">student plan</a>.
              </p>

              <div className="flex justify-center">
                <button className="bg-[#3366FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
                  Try for free
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block w-1/3">
              <img 
                src={heroright} 
                alt="Decorative right" 
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      {/* Hero Section with Images */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
    
      </div>

      <FeatureSection />
      <MeetEbb />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsSection />
      </div>

      <TryFreeCard />
      <ArticleDisplay />
      <StatsDisplay />
      <PricingSection />
    </main>
  );
};

export default Home; 