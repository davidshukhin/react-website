import React from 'react';
import { Star, Award, Users } from 'lucide-react';

function StatsDisplay() {
  return (
    <div className="py-20">
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-16">
        Join millions getting more mindful with Headspace
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Rating Stats */}
        <div className="bg-[#dec2b7] rounded-3xl p-8 text-center">
          <div className="flex justify-center text-orange-500 mb-4">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" strokeWidth={0.5} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">4.9 Stars</h2>
          <p className="text-gray-500">Average rating</p>
        </div>

        {/* Ratings Count */}
        <div className="bg-[#dacac4] rounded-3xl p-8 text-center">
          <div className="flex justify-center text-orange-500 mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">611.9K Ratings</h2>
          <p className="text-gray-500">On iOS and Google Play</p>
        </div>

        {/* Downloads */}
        <div className="bg-[#dec2b7] rounded-3xl p-8 text-center">
          <div className="flex justify-center text-orange-500 mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">100M</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Downloads</h3>
          <p className="text-gray-500">Across all platforms</p>
        </div>
      </div>
    </div>
  );
}

export default StatsDisplay; 