import React from 'react';
import StepCard from './StepCard';
import airplay from '../Components/assests/airplay.png';
import inbox from '../Components/assests/inbox-download.png';
import user from '../Components/assests/user.png';


const Intro2 = () => {
    const steps = [
        {
            stepNumber: 1,
            icon: user,
            title: 'Claim your preset profile',
            description:
                'Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.',
        },
        {
            stepNumber: 2,
            icon: inbox,
            title: 'Add services',
            description:
                'Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates.',
        },
        {
            stepNumber: 3,
            icon: airplay,
            title: 'Build Website',
            description:
                'Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient Client experience.',
        },
    ];

    return (
        <div className="mt-[3%] mb-[3%] w-full md:mt-[5%] px-4 w-full mx-auto">
            {/* Heading */}
            <div className="w-full">
                <h1 className="text-center text-xl md:text-2xl lg:text-4xl text-black font-bold px-2">
                    Onboard business in 3 simple steps
                </h1>
            </div>
            {/* Subheading */}
            <div className="mt-2 md:mt-3 lg:mt-4">
                <p className="text-center text-xs md:text-sm text-slate-600 px-2">
                    Quick assisted onboarding with a 30-day free trial. No credit card needed.
                </p>
            </div>
            {/* Steps */}
            <div className='w-full flex items-center justify-center'>
            <div className="mt-[5%] w-[80%] md:mt-[6%] md:flex flex-row items-center justify-center">
                {steps.map((step, index) => (
                    <StepCard
                        key={index}
                        stepNumber={step.stepNumber}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
            </div>
        </div>
    );
};

export default Intro2;