
import { sunicon } from '../../constants/images';

function FeatureSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Mental Health Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 mb-2">
            <img 
              src={sunicon}
              alt="Mental health icon" 
              className="w-full h-full"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Everything your mind needs
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Take care of your mental health with proven courses and expert-led guidance to help you meet your goals.
          </p>
        </div>

        {/* Good Days Feature */}
        <div className="flex flex-col items-center text-center">
        <div className="w-48 h-48 mb-2">
            <img 
              src={sunicon}
              alt="Mental health icon" 
              className="w-full h-full"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Have more good days
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Let go of everyday stress and anxiety with 500+ guided meditations and programs.
          </p>
        </div>

        {/* Sleep Feature */}
        <div className="flex flex-col items-center text-center">
        <div className="w-48 h-48 mb-2">
            <img 
              src={sunicon}
              alt="Mental health icon" 
              className="w-full h-full"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Get the sleep of your dreams
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Sleep more soundly every night with bedtime meditations, exercises, and relaxing sounds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection; 