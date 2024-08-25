// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white flex items-center z-20 sticky top-0 justify-between px-6 h-[63px] border-b border-gray-200">
            {/* Logo o Título */}
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-gray-800">Mi Aplicación</h1>
            </div>

            {/* Botones y enlaces */}
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-blue-500">
                    <Bell size={20} />
                </button>
                <button className="text-gray-600 hover:text-blue-500">
                    <User size={20} />
                </button>
                <Link
                    to="/logout"
                    className="text-gray-600 hover:text-red-500"
                >
                    Logout
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
