import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  type: string;
  price: string;
  trial: number;
  isPopular?: boolean;
  yearlyPrice?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ type, price, trial, isPopular, yearlyPrice }) => {
  return (
    <div className={`border rounded-lg p-6 ${isPopular ? 'bg-[#FFF7D6]' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600">{type}</p>
          {yearlyPrice && (
            <p className="text-sm text-gray-500">billed at ${yearlyPrice} USD/yr</p>
          )}
        </div>
        {isPopular && (
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Best value
          </span>
        )}
      </div>
      
      <div className="mt-4">
        <p className="text-2xl font-bold">{trial} days free</p>
        <p className="mt-1 text-gray-600">${price} USD/month</p>
      </div>

      {isPopular && (
        <div className="mt-4 flex items-center text-blue-600">
          <Check className="w-5 h-5 mr-2" />
          <span className="text-sm">Selected</span>
        </div>
      )}
    </div>
  );
};

export default PricingCard;