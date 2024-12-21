import React, { useState } from 'react';

const Solution = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-[80%] mx-auto px-4 py-12">
      {/* Header */}
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
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Get in touch with us.</h1>
        <h2 className="text-2xl md:text-3xl">We're here to assist you.</h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Business Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Search for your business listing"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="p-3 border rounded-l-lg w-24">
                <option>+91</option>
              </select>
              <input
                type="tel"
                placeholder="98510 00000"
                className="w-full p-3 border border-l-0 rounded-r-lg"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g xyz@gmail.com"
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Write here your message..."
            rows={4}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          Leave us a Message
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">We are always happy to assist you</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-2">Email Address</h4>
            <p className="text-gray-600">Support@RMax.com</p>
            <p className="text-sm text-gray-500 mt-2">
              Assistance hours:<br />
              Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Contact Number</h4>
            <p className="text-gray-600">+91-8657491236</p>
            <p className="text-sm text-gray-500 mt-2">
              Assistance hours:<br />
              Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;