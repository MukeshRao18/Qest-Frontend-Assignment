import React from 'react';

const Intro = () => {
  return (
    <div className="mt-[4%] px-4">

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-x-1">
        <div className="border border-gray-300 flex flex-col items-end justify-center text-center p-3 rounded-l-md">
          <p className="text-sm leading-3 font-medium text-black text-end">AI</p>
          <p className="text-md leading-3 font-bold text-red-800">
            <span className="text-black">R</span>Max
          </p>
        </div>
        <div className="w-full sm:w-[25%] border border-gray-300 p-3 flex items-start text-gray-400 rounded-r-md">
          <input
            type="text"
            placeholder="Curious? Let AI Uncover Answers!"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="mt-[4%] flex justify-center">
        <p className="w-full sm:w-[60%] lg:w-[40%] font-bold text-black text-2xl sm:text-3xl lg:text-4xl text-center">
          Maximize Your Impact{' '}
          <span className="text-red-500">Business With</span>{' '}
          <span>R</span>
          <span className="text-red-800">Max</span>
        </p>
      </div>

      <div className="mt-[4%] flex justify-center">
        <p className="w-full sm:w-[70%] lg:w-[50%] text-black text-sm text-center text-slate-600">
          Enhance your business with Rmax's all-in-one platform -- streamlining client engagement, automating workflows, and fueling growth.
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="border border-red-500 bg-red-500 text-white p-3 rounded-md text-center cursor-pointer w-full sm:w-auto">
          Get Started <span>{'->'}</span>
        </div>
        <div className="border border-black text-black p-3 rounded-md text-center cursor-pointer w-full sm:w-auto">
          Book a Demo
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className="mt-8 w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="border border-gray-200 text-black p-3 rounded-md">
            Seamless Onboarding
          </div>
          <div className="border border-gray-200 text-black p-3 rounded-md">
            Client Engagement
          </div>
          <div className="border border-gray-200 text-black p-3 rounded-md">
            Generate Report
          </div>
          <div className="border border-gray-200 text-black p-3 rounded-md">
            Revenue Growth
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
