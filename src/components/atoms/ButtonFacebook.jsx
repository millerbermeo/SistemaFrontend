import React from 'react';
import Icon from './Icons/Icon';  // Asegúrate de que la ruta sea correcta

export const ButtonFacebook = () => {
    return (
        <div>
            <a
                href="#"
                className="flex items-center justify-center w-full px-4 py-2 space-x-3 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700"
            >
                <Icon icon="Facebook" size={20} color="currentColor" /> {/* Usa el componente Icon */}
                <span className="text-sm text-white dark:text-gray-200">
                    Facebook
                </span>
            </a>
        </div>
    );
};
