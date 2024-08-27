import React from 'react';
import useNavigation from '../../utils/useNavigation';

const NavbarHome = () => {

  const { goTo } = useNavigation();
  return (
    <nav className="bg-white w-[80%] left-1/2 transform -translate-x-1/2 fixed top-4 2xl:top-6 py-2.5 rounded-full shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-3xl font-bold text-purple-600">Bu</span>
          <span className="text-3xl font-bold text-slate-600">bba</span>
        </div>
        {/* Menú de navegación */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Productos</a></li>
          <li><a href="#" className="hover:text-blue-600">Catalogo</a></li>
          <li><a href="#" className="hover:text-blue-600">Sobre nosotros</a></li>
        </ul>
        {/* Barra de búsqueda */}
        <div className="relative hidden md:block">
          <input
            type="text"
            className="border rounded-full py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Buscar..."
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        {/* Botones */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-700 text-white py-1 px-4 rounded-full hover:bg-blue-800 transition">
            Regístrate ahora
          </button>
          <button onClick={()=>goTo('/login')} className="bg-gray-100 text-gray-700 py-1 px-4 rounded-full hover:bg-gray-200 transition flex items-center space-x-1">
            <span>Ingresar</span>
            <span>▼</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
