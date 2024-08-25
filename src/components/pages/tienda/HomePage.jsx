import React from 'react'
import Sidebar from '../../molecules/Sidebar'
import MainLayout from '../../layouts/MainLayout'
import { Button, ButtonGroup } from "@nextui-org/button";
import Carousel from '../../organisms/Carousel';
import NavbarHome from '../../molecules/NavbarHome';
import HomeLayout from '../../layouts/HomeLayout';
import CardIcon from '../../molecules/CardIcon';
import CardProduct from '../../molecules/CardProduct';
import Facebook from '../../atoms/Icons/Facebook';
import Instagram from '../../atoms/Icons/Instagram';
import TikTok from '../../atoms/Icons/TikTok';
import CardImage from '../../molecules/CardImage';
import { ButtonOne } from '../../atoms/buttons/ButtonOne';
import Footer from '../../organisms/Footer';


const HomePage = () => {

  const images = [
    'leonardo5.jpg',
    'leonardo7.jpg',
    'leonardo3.jpg',
  ];

  const CardImg = [
    { img: 'product1.png', tittle: 'Producto 1' },
    { img: 'product2.png', tittle: 'Producto 2' },
    { img: 'product3.png', tittle: 'Producto 3' },
    { img: 'product4.png', tittle: 'Producto 4' },
    { img: 'product5.png', tittle: 'Producto 5' },
    { img: 'product6.png', tittle: 'Producto 6' },
  ];

  const products = [
    {
      image: 'te1.png',
      title: 'Crédito inmediato',
      description: 'Damos respuesta a tu solicitud en menos de 5 minutos.'
    },
    {
      image: 'te2.png',
      title: 'Crédito a largo plazo',
      description: 'Opciones de financiamiento con tasas accesibles.'
    },
    {
      image: 'te3.png',
      title: 'Crédito educativo',
      description: 'Financia tu educación con nuestros créditos flexibles.'
    },
    {
      image: 'te4.png',
      title: 'Crédito inmediato',
      description: 'Damos respuesta a tu solicitud en menos de 5 minutos.'
    },
    {
      image: 'te5.png',
      title: 'Crédito a largo plazo',
      description: 'Opciones de financiamiento con tasas accesibles.'
    },
    {
      image: 'te6.png',
      title: 'Crédito educativo',
      description: 'Financia tu educación con nuestros créditos flexibles.'
    }
  ];

  const imagesCard = [
    {
      url: 'leonardo1.jpg',
      backgroundColor: '#65BAAF'
    },
    {
      url: 'leonardo3.jpg',
      backgroundColor: '#D8BFD8'
    },
    {
      url: 'leonardo4.jpg',
      backgroundColor: '#FFD700'
    },
    {
      url: 'leonardo7.jpg',
      backgroundColor: '#87CEEB'
    },
    // {
    //   url: 'https://www.gastrolabweb.com/u/fotografias/m/2023/7/24/f608x342-50138_79861_5050.jpg',
    //   backgroundColor: '#FF69B4'
    // }
  ];

  return (
    <>
      <HomeLayout>
        <Carousel images={images} />
        <div className='w-full flex space-x-12 bg-[#ffffff] justify-center items-center pt-14'>
          {CardImg.map((card, index) => (
            <CardIcon key={index} img={card.img} tittle={card.tittle} />
          ))}
        </div>
  
      <section className='bg-[#F5F9FF] w-full'>
        <div className='w-[90%] flex mx-auto gap-10  mt-20 justify-center items-start 2xl:px-16 pt-20'>
          <div className="w-full max-w-[28%] 2xl:max-w-[30%] p-6 pl-0">
            {/* Título principal */}
            <h2 className="text-6xl font-bold text-gray-900 mb-4">Productos Favoritos</h2>

            {/* Descripción corta */}
            <p className="text-lg text-gray-600 mb-6">
              Descubre nuestros productos más populares y síguenos en redes sociales para más novedades.
            </p>

            {/* Sección de redes sociales */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Síguenos</h3>
            <div className="flex gap-4">
              {/* Iconos de redes sociales */}
              <Facebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors duration-200" />
              <Instagram className="w-8 h-8 text-pink-500 hover:text-pink-700 transition-colors duration-200" />
              <TikTok className="w-8 h-8 text-black hover:text-gray-700 transition-colors duration-200" />
              <ButtonOne />
            </div>
          </div>
          <div className='w-full relative grid grid-cols-3 gap-x-20 2xl:gap-x-16'>
            {products.map((product, index) => (
              <CardProduct
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>

        </div>
      </section>


      <section className='flex bg-[#ffffff] w-full'>
        <div className="flex flex-col md:flex-row items-center w-[70%] mx-auto mt-8">
          {/* <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
            <img className="w-3/4 md:w-1/2 rounded-full shadow-lg" src="apk.jpg" alt="App Logo" />
          </div> */}

          <div className="">
            <img className="-rotate-12" src="apk2.png" alt="App Logo" />
          </div>

          <div className="md:w-1/2 max-w-xl p-6 md:pl-0 text-center md:text-left">
            <h2 className="text-6xl font-extrabold text-gray-900 mb-4">Descarga nuestra aplicación</h2>
            <p className="text-xl text-gray-700 mb-6">
              Haz los pedidos de forma más rápida desde nuestra aplicación.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Métodos de pago</h3>
            <div className="flex justify-center md:justify-start gap-6 items-center">
              <img className="w-16 p-1.5" src="bancolombia2.png" alt="Bancolombia" />
              <img className="w-16" src="nequi.webp" alt="Nequi" />
              <img className="w-16" src="daviplata.png" alt="Daviplata" />
            </div>
          </div>
        </div>

      </section>

      <section className='bg-[#F5F9FF] w-full py-10'>
        <h3 className='text-4xl text-center font-extrabold text-gray-900 mb-4'>Bubba Galeria</h3>

        <p className='text-xl text-gray-700 mb-6 text-center'>Imagenes de la tienda Bubba donde encontraras los mejores tés</p>
        <CardImage images={imagesCard} />
      </section>

      </HomeLayout>
    </>
  )
}

export default HomePage