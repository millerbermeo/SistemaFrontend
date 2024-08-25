import React from 'react';

const CardProduct = ({ image, title, description }) => {
    return (
        <div className='relative mb-24 w-[260px] 2xl:w-[340px] transition-transform transform hover:scale-105'>
            <img
                src={image}
                alt={title}
                className="absolute z-20 w-[220px] h-[220px] 2xl:w-[320px] 2xl:h-[320px] top-6 2xl:top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="relative rounded-xl overflow-hidden shadow-md w-[260px] 2xl:w-[340px] bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1]">
                <div className="relative flex justify-center h-32 2xl:h-52">
                    <div className="absolute inset-0 bg-[#E6E6FA] opacity-70"></div>
                </div>
                <div className="p-6 bg-white rounded-b-xl flex flex-col gap-y-4 text-gray-700 shadow-inner">
                    <h2 className="text-lg 2xl:text-2xl font-semibold">{title}</h2>
                    <p className="mt-1 text-sm 2xl:text-base text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
