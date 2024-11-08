import React from 'react'

function ArticleDisplay() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-right justify-end text-5xl font-bold text-gray-800 mb-8">Latest articles</h1>
      
      {/* First row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
        <div className="md:col-span-5 bg-amber-400 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Meditation</span>
          <div className="mt-auto pt-20">
            <h2 className="text-xl font-semibold bg-white/90 p-4 rounded-2xl">Simple ways to make meditation a daily habit</h2>
          </div>
        </div>
        
        <div className="md:col-span-4 bg-orange-500 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">Meditation</span>
          <div className="mt-auto pt-20">
            <h2 className="text-xl font-semibold bg-white/90 p-4 rounded-2xl">Meditation for beginners</h2>
          </div>
        </div>
        
        <div className="md:col-span-3 bg-blue-500 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Mindfulness</span>
          <div className="mt-auto pt-20">
            <h2 className="text-xl font-semibold bg-white/90 p-4 rounded-2xl">Self-care ideas that stick, even when you're busy</h2>
          </div>
        </div>
      </div>

      {/* Second row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4 bg-blue-600 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">Stress</span>
          <div className="mt-auto pt-20">
            <h2 className="text-xl font-semibold bg-white/90 p-4 rounded-2xl">Coping with tragedy and tragic events</h2>
          </div>
        </div>

        <div className="md:col-span-4 bg-orange-400 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Mindfulness</span>
          <div className="mt-auto pt-20">
            <h2 className="text-xl font-semibold bg-white/90 p-4 rounded-2xl">Don't get caught in the self-improvement trap</h2>
          </div>
        </div>

        <div className="md:col-span-4 bg-orange-500 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">Stress</span>
          <div className="mt-auto pt-20">
            <h2 className="text-xl font-semibold bg-white/90 p-4 rounded-2xl">Breathing exercises to reduce stress</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
          View all articles
        </button>
      </div>
    </div>
  )
}

export default ArticleDisplay