import React, { useState } from 'react';
import { Check, X, ChevronRight } from 'lucide-react';

const Plan = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="w-full px-4 py-8 mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">That's Right For You</h1>
        <p className="text-gray-600 mb-4">Simple and transparent pricing. Start for free, upgrade when you love it.</p>
        <p className="text-red-500 mb-8">30 day free trial in a button</p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <span>Running a Growth Business or Enterprise?</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Talk to Sales
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span>Monthly</span>
          <button 
            className={`w-12 h-6 rounded-full p-1 ${billingCycle === 'yearly' ? 'bg-gray-300' : 'bg-gray-200'}`}
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          >
            <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : ''}`} />
          </button>
          <span>Yearly</span>
          <span className="text-red-500">SAVE 25%</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-[70%] mx-auto">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-red-500 font-semibold mb-4">STARTER</h2>
          <div className="mb-4">
            <span className="text-5xl font-bold">$17</span>
            <span className="text-gray-600">/ month</span>
          </div>
          <p className="text-gray-600 mb-6">billed monthly</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Commercial License</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>100+ HTML UI Elements</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Unlimited Domain Support</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="text-gray-400" />
              <span className="text-gray-400">6 Month Premium Support</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="text-gray-400" />
              <span className="text-gray-400">Life Time Updates</span>
            </div>
          </div>

          <button className="w-full bg-red-50 text-red-500 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-red-100">
            Get Started
            <ChevronRight className="w-4 h-4" />
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">No credit card required</p>
        </div>

        {/* Premium Plan */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-red-500 font-semibold mb-4">PREMIUM</h2>
          <div className="mb-4">
            <span className="text-5xl font-bold">$88</span>
            <span className="text-gray-600">/ month</span>
          </div>
          <p className="text-gray-600 mb-6">billed monthly</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Commercial License</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>100+ HTML UI Elements</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Unlimited Domain Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>6 Month Premium Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              <span>Life Time Updates</span>
            </div>
          </div>

          <button className="w-full bg-red-50 text-red-500 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-red-100">
            Get Started
            <ChevronRight className="w-4 h-4" />
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">No credit card required</p>
        </div>
      </div>
      <div className='text-center mt-4'>
      <a className='text-blue-600 underline'>Explore In-Depth Differences</a>
      </div>
      
    </div>
  );
};

export default Plan;