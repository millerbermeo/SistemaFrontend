import React from 'react';
import Icon from './Icons/Icon';  // Asegúrate de que la ruta sea correcta

export const ButtonGoogle = () => {
    return (
        <div className="">
           <button
                type="button"
                className="text-gray-800  w-full bg-[#f8f8f8] hover:bg-[#e8e8e8] focus:ring-4 focus:outline-none focus:ring-[#ffffff]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
            >
                <Icon icon="Dribbble" className="mr-2 -ml-1 w-4 h-4" />  {/* Usa el componente Icon */}
                Google
                <div></div>
            </button>
        </div>
    );
};
