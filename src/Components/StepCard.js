import React from 'react';

const StepCard = ({ stepNumber, icon, title, description }) => {
    return (
        <div className='relative mt-[8%] w-full md:mt-[1%] w-[45%] lg:w-[30%] max-w-sm mx-auto'>
            <div className="absolute left-28 -top-2 md:left-24 -top-3 w-8 h-8 rounded-full bg-white text-black text-sm font-bold flex items-center justify-center shadow-md z-10">
                {stepNumber}
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-full shadow-lg bg-white'>
                    <div className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-red-200'>
                        <img src={icon} alt={title} className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col mt-6 md:mt-8 lg:mt-10 items-center justify-center'>
                <div className='text-neutral-800 font-bold text-center text-sm md:text-base'>
                    {title}
                </div>
                <div className='text-center w-full text-slate-600 text-xs md:text-sm leading-5 md:leading-6 mt-3 md:mt-4 lg:mt-5'>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default StepCard;