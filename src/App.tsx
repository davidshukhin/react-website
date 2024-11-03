import React from 'react';
import { Menu, CircleUser, Moon, Wind, Brain, PlayCircle, TestTube } from 'lucide-react';
import Navbar from './components/Navbar';
import PricingCard from './components/PricingCard';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import TestimonialsSection from './components/TestimonialSection';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <div className="bg-[#4BA3FF] text-white text-center py-2">
        <a href="#" className="hover:underline">
          Get 14 days free now →
        </a>
      </div>
      
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
          <div className="flex-1 space-y-8 justify-center items-center">
            <h1 className="text-center text-5xl font-bold text-gray-800">
              Your everyday mental health app
            </h1>
            <p className="text-xl text-gray-600">Find some headspace:</p>
            
            <div className="space-y-4">
              <PricingCard 
                type="Annual"
                price="5.83"
                trial={14}
                isPopular={true}
                yearlyPrice="69.99"
              />
              <PricingCard 
                type="Monthly"
                price="12.99"
                trial={7}
                isPopular={false}
              />
            </div>

            <p className="text-sm text-gray-500">
              After your free trial, the annual subscription is $69.99 USD and automatically renews each year.
            </p>
            <p className="text-sm text-gray-500">
              Are you a post-secondary or university student? Save 85%, with valid SheerID student verification, for our{' '}
              <a href="#" className="text-blue-600 hover:underline">student plan</a>.
            </p>

            <button className="bg-[#3366FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
              Try for free
            </button>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 transform -rotate-6">
              <div className="bg-white rounded-[2.5rem] p-2 shadow-xl">
                <div className="bg-[#FFE9B0] rounded-[2rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80" 
                    alt="Meditation interface" 
                    className="w-full"
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#9AE6B4] rounded-lg"></div>
                    <div>
                      <h3 className="font-semibold">Managing Anxiety</h3>
                      <p className="text-sm text-gray-500">10-20 min • Course</p>
                    </div>
                  </div>
                  <button className="bg-[#3366FF] text-white w-20 py-2 rounded-full text-sm">
                    Play
                  </button>
                </div>
              </div>
            </div>
            
            <div className="absolute top-20 right-0 z-20 transform rotate-6">
              <div className="bg-[#1A1A2E] rounded-[2.5rem] p-2 shadow-xl">
                <div className="bg-[#2D2D44] rounded-[2rem] overflow-hidden">
                  <div className="p-6">
                    <div className="bg-[#4A90E2] h-32 rounded-xl mb-4"></div>
                    <h3 className="text-white font-semibold mb-2">Rainday Antiques</h3>
                    <p className="text-gray-400 text-sm">Sleepcast • 45 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 py-20 space-y-16 items-center justify-center">
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-orange-500" />}
            title="Everything your mind needs"
            description="Take care of your mental health with proven courses and expert-led guidance to help you meet your goals."
          />
          
          <FeatureCard
            icon={<Wind className="w-12 h-12 text-yellow-500" />}
            title="Have more good days"
            description="Let go of everyday stress and anxiety with 500+ guided meditations and programs."
          />
          
          <FeatureCard
            icon={<Moon className="w-12 h-12 text-purple-700" />}
            title="Get the sleep of your dreams"
            description="Sleep more soundly every night with bedtime meditations, exercises, and relaxing sounds."
          />
        </div>

        <div>
          {/* <h1  className="text-center text-5xl font-bold text-gray-800">Headspace Stories</h1> */}
          <div className="flext-1">
          <TestimonialsSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;