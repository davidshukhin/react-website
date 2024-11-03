import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "Headspace has completely transformed my daily routine. The sleep meditations have helped me overcome my insomnia.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "David Chen",
    location: "Toronto, Canada",
    text: "As someone dealing with anxiety, the guided meditations have been a game-changer. I feel more centered and calm.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    text: "The variety of content is amazing. From quick meditation breaks to deep sleep stories, there's something for every moment.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Brown",
    location: "Sydney, Australia",
    text: "I've tried many meditation apps, but Headspace's approach to mindfulness is uniquely effective and engaging.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative py-16">
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-8">
        What our members say
      </h1>
      
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 py-4 -mx-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;