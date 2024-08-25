import React from 'react'

const CardIcon = ({ img, tittle }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <img className="w-16 h-16 bg-slate-200 rounded-full p-2 mb-1.5" src={img} alt={tittle} />
        <span className='text-sm text-gray-700 font-medium'>{tittle}</span>
      </div>
    );
  };
export default CardIcon