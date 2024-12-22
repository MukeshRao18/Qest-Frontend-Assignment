import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const features = {
    discover: [
      { name: "Custom Branded website", icon: "🖥" },
      { name: "User Mobile App", icon: "📱" },
      { name: "Business Webpage", icon: "🌐" },
    ],
    manage: [
      { name: "Courses", icon: "📚" },
      { name: "Classess", icon: "🏫" },
      { name: "Appointments", icon: "📅" },
      { name: "Services", icon: "🛠" },
      { name: "Retreats", icon: "🏖" },
      { name: "Payments", icon: "💳" },
      { name: "Design Tools", icon: "🎨" },
    ],
    communicate: [
      { name: "Communication", icon: "📢" },
      { name: "Trail Session", icon: "🎯" },
      { name: "Staff Roles", icon: "👥" },
      { name: "Workshops", icon: "🎓" },
      { name: "Reporting tools", icon: "📊" },
      { name: "Multi-Location", icon: "📍" },
      { name: "Events", icon: "🎉" },
    ],
    grow: [
      { name: "AI Marketing Tools", icon: "🤖" },
      { name: "Social Media Integration", icon: "📱" },
      { name: "CRM", icon: "💼" },
    ],
  };

  return (
    <nav className="w-full relative">
      <div className="flex border-[1px] border-gray-300 rounded-md bg-white items-center justify-between w-[90%] md:w-[85%] max-w-7xl mx-auto py-3 px-4 md:px-3">
        <div>
          <h1 className="text-lg font-bold text-red-800">
            <span className="text-black">R</span>Max
          </h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-black px-3 py-2 rounded-md hover:bg-red-50">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowFeatures(true)}
              onMouseLeave={() => setShowFeatures(false)}
            >
              <Link to="/" className="flex items-center justify-center text-gray-700 hover:text-black px-3 py-2 rounded-md hover:bg-red-50">
                Features<ChevronDown className="relative top-0.5 left-0.5 w-5 h-5 text-gray-500" />
              </Link>
              {showFeatures && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-xl p-6 grid grid-cols-4 gap-6 z-50">
                  {Object.entries(features).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="font-semibold mb-4 text-lg capitalize">{category}</h3>
                      <div className="space-y-3">
                        {items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-600 hover:text-black">
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="col-span-4 mt-4 text-center">
                    <Link to="/" className="text-red-500 hover:text-red-600 inline-flex items-center">
                      See all features
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-black px-3 py-2 rounded-md hover:bg-red-50">
              Pricing
            </Link>
            <Link to="/" className="flex items-center justify-center text-gray-700 hover:text-black px-3 py-2 rounded-md hover:bg-red-50">
              Solutions<ChevronDown className="relative top-0.5 left-0.5 w-5 h-5 text-gray-500" />
            </Link>
          </div>
          <div className="flex items-center space-x-4 h-auto">
            <hr className="w-px h-5 bg-gray-400 border-0" />
            <Link to="/solutions" className="text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200">
              Login
            </Link>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Try For Free
            </button>
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden w-[90%] mx-auto bg-white shadow-lg px-4 pb-4 mt-2 rounded-md">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-black hover:bg-red-50 px-3 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <div className="space-y-2">
              <button 
                className="text-gray-700 hover:text-black w-full text-left flex justify-between items-center hover:bg-red-50 px-3 py-2 rounded-md"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                Features
                <svg className={`w-4 h-4 transform ${showFeatures ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showFeatures && (
                <div className="pl-4 space-y-4 mt-2">
                  {Object.entries(features).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h3 className="font-semibold capitalize">{category}</h3>
                      <div className="space-y-2 pl-2">
                        {items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-600">
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-black hover:bg-red-50 px-3 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black hover:bg-red-50 px-3 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              Solutions
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/solutions" className="text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200 text-center">
                Login
              </Link>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Try For Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;