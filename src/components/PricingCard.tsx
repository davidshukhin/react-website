import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  type: 'Annual' | 'Monthly';
  price: string;
  trial: number;
  isPopular?: boolean;
  yearlyPrice?: string;
  isSelected: boolean;
  onSelect: () => void;
}

function PricingCard({ 
  type, 
  price, 
  trial, 
  isPopular, 
  yearlyPrice,
  isSelected,
  onSelect 
}: PricingCardProps) {
  return (
    <div 
      onClick={onSelect}
      className={`
        relative p-6 rounded-2xl cursor-pointer transition-all
        ${isSelected ? 
          'bg-orange-500 text-white ring-4 ring-white' : 
          'bg-white text-black hover:ring-2 hover:ring-orange-500/50'
        }
      `}
    >
      {isPopular && (
        <div className="absolute -top-3 left-6 bg-white text-black text-sm px-3 py-1 rounded-full">
          Best value
        </div>
      )}
      
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm mb-1">
            {type === 'Annual' ? `${type} - billed at $${yearlyPrice} USD/yr` : type}
          </div>
          <div className="text-2xl font-bold mb-1">{trial} days free</div>
          <div className="text-xl">${price} USD/month</div>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 ${isSelected ? 'border-white' : 'border-black'} flex items-center justify-center`}>
          {isSelected && (
            <div className={`w-3 h-3 rounded-full ${isSelected ? 'bg-white' : 'bg-black'}`} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;