import React from 'react';
import { Calendar,  Star, Briefcase, ChevronRight } from 'lucide-react';
import computer from '../Components/assests/computer.png'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-red-500" />,
      title: "Scheduling",
      description: "Manage appointments, classes, and events, workshops with...",
    },
    {   
      icon:'',
      title: "Client Management & CRM",
      description: "Keep track of customer data, preferences, and interactions to...",
    },
    {
      icon: <Star className="w-6 h-6 text-red-500" />,
      title: "AI Powered Insights",
      description: "Know exactly what is happening in business and get actionable...",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-red-500" />,
      title: "Marketing & Engagement Tools",
      description: "Boost client retention and grow your business with integrated...",
    },
    {
      icon:'',
      title: "Custom Branded website",
      description: "Qest's Custom Branded Website Builder allows you to create a fully personalized...",
      isCustomBranded: true,
    },
    {
      icon:'',
      title: "Multi-Location Management",
      description: "Manage multiple locations with ease, assigning roles and permissions...",
    }
  ];

  return (
    <div className="w-full px-4 py-12 mx-auto max-w-[80%]">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Why Rmax?</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stake holders.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <div 
            key={index}
            className="p-6 rounded-lg bg-white border border-transparent hover:border-red-500 transition-all duration-300"
          >
            <div className="mb-4 w-full flex items-center justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
            <button className="text-blue-600 text-sm w-full flex items-center justify-center gap-1 hover:gap-2 transition-all">
              View details
              <ChevronRight className="w-4 h-4"/>
            </button>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 p-6 rounded-lg bg-white border border-transparent hover:border-red-500 transition-all duration-300">
          <img
            src={computer}
            alt="Analytics Dashboard"
            className="rounded-lg w-full h-auto"
          />
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2 text-center">Billing & Payments</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Streamline invoicing and payments with automated workflows, reducing...
            </p>
            <button className="text-blue-600 text-sm w-full flex items-center justify-center gap-1 hover:gap-2 transition-all">
              View details
              <ChevronRight className="w-4 h-4"/>
            </button>
          </div>
        </div>
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white border border-transparent hover:border-red-500 transition-all duration-300">
            <div className="mb-4 w-full flex items-center justify-center">{features[3].icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-center">{features[3].title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">{features[3].description}</p>
            <button className="text-blue-600 text-sm w-full flex items-center justify-center gap-1 hover:gap-2 transition-all">
              View details
              <ChevronRight className="w-4 h-4"/>
            </button>
          </div>
          
          <div className="row-span-2 p-6 rounded-lg bg-white border border-transparent hover:border-red-500 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-center">{features[4].title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">{features[4].description}</p>
            <button className="text-blue-600 text-sm w-full flex items-center justify-center gap-1 hover:gap-2 transition-all">
              View details
              <ChevronRight className="w-4 h-4"/>
            </button>
            
            <img
              src={computer}
              alt="Custom Branded Website"
              className="rounded-lg w-full h-auto my-4"
            />
          </div>

          <div className="p-6 rounded-lg bg-white border border-transparent hover:border-red-500 transition-all duration-300">
            <div className="mb-4 w-full flex items-center justify-center">{features[5].icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-center">{features[5].title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">{features[5].description}</p>
            <button className="text-blue-600 text-sm w-full flex items-center justify-center gap-1 hover:gap-2 transition-all">
              View details
              <ChevronRight className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;