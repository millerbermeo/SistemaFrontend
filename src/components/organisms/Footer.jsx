import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Sobre Nosotros */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">Sobre Nosotros</h2>
            <p className="text-gray-400 text-sm">
              Somos una empresa comprometida con ofrecer los mejores productos y servicios para nuestros clientes.
              Nos esforzamos por innovar y mejorar constantemente.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">Enlaces Rápidos</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Servicios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Productos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">Contáctanos</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="mr-2" />
                Dirección: 1234 Calle Falsa, Ciudad, País
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="mr-2" />
                Teléfono: +1 (234) 567-890
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="mr-2" />
                Email: info@empresa.com
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
