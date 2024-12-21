import React from 'react';
import Frequently from './Frequently';

const Pricing = () => {
  const features = [
    { name: 'Users', starter: '1', premium: '15' },
    { name: 'Branches', starter: '1', premium: '10' },
    { name: 'Courses', starter: '3', premium: '15/branch' },
    { name: 'Max. Students Allowed', starter: '25', premium: '500' },
    { name: 'Communication', starter: '25', premium: 'Yes' },
    { name: 'Bulk Updates', starter: '25', premium: 'Yes' },
    { name: 'User Roles', starter: '25', premium: 'Yes' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Flexible Plans,<br className="md:hidden" />
          Transparent Pricing
        </h2>
        <p className="text-gray-600 mb-4">Find the Perfect Fit for You</p>
        <p className="text-red-500">30-day free trial with money-back guarantee.</p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-8 text-center">Compare our plans</h3>

        <div className="w-full flex items-center justify-center overflow-x-auto">
          <div>
            <table className="w-full border-separate border-spacing-x-6">
              <thead>
                <tr>
                  <th className="pb-16 text-left w-1/3">Features</th>
                  <th className="pb-8 text-left">
                    <div className="text-lg font-bold">Starter</div>
                    <div className="text-sm text-gray-600">$17/month, billed monthly</div>
                  </th>
                  <th className="pb-8 text-left">
                    <div className="text-lg font-bold">Premium</div>
                    <div className="text-sm text-gray-600">$88/month, billed monthly</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="py-4 font-medium text-left">Basic Management</td>
                </tr>
                {features.map((feature, index) => (
                  <tr key={index}>
                    <td className="py-4 text-left text-gray-600">{feature.name}</td>
                    <td className="py-4 text-left border-b">{feature.starter}</td>
                    <td className="py-4 text-left border-b">{feature.premium}</td>
                  </tr>
                ))}
                <tr>
                  <td className="pt-8"></td>
                  <td className="pt-8">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors inline-flex items-center gap-2">
                      Get Started
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <p className="text-sm text-gray-500 mt-2">No credit card required</p>
                  </td>
                  <td className="pt-8">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors inline-flex items-center gap-2">
                      Get Started
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <p className="text-sm text-gray-500 mt-2">No credit card required</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='mt-[6%] w-[60%] text-center mx-auto'>
        <Frequently />
      </div>

    </div>
  );
};

export default Pricing;