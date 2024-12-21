import React, { useState } from 'react';
import apple from '../Components/assests/apple.png'
import playstore from '../Components/assests/playstore.png'
import Frequently from './Frequently';

const Appstore = () => {


  return (
    <div className="w-full px-4 py-16 mx-auto max-w-4xl">
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold mb-4">
          Manage Your Business On the Go
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.
        </p>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <img src={apple} alt="Apple Logo" className="w-8 h-8" />
            App Store
          </button>
          <button className="flex items-center gap-2 px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <img src={playstore} alt="Google Play Logo" className="w-6 h-6" />
            Google Play
          </button>
        </div>
      </div>
      <div className='mt-[6%] w-[80%] text-center mx-auto'>
        <Frequently />
      </div>
      </div>
      );
};

      export default Appstore;