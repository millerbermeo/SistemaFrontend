import React from 'react';

const CardProduct = ({ image, title, description, bg }) => {
    return (
        <div className='relative cursor-pointer mb-20 2xl:mb-24 w-[247.5px] 2xl:scale-100 2xl:w-[320px] transition-transform transform hover:scale-105'>
            <img
                src={image}
                alt={title}
                className="absolute z-20 w-[232.5px] h-[232.5px] 2xl:w-[310px] 2xl:h-[310px] top-6 2xl:top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="relative rounded-xl overflow-hidden  w-[247.5px] 2xl:w-[320px] shadow-lg">
                <div className="relative flex justify-center h-40 2xl:h-52">
                    <div className={`absolute inset-0`} style={{ backgroundColor: bg }}></div>
                </div>
                <div className="px-6 p-2 bg-white rounded-b-2xl flex flex-col h-32 text-gray-800 ">
                    <h2 className="text-xl font-bold text-center">{title}</h2>
                    <p className="mt-2 text-sm text-gray-600 text-center h-14">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
