import React from 'react'
import Carousel from '../../organisms/Carousel';
import HomeLayout from '../../layouts/HomeLayout';
import CardIcon from '../../molecules/CardIcon';
import CardProduct from '../../molecules/CardProduct';
import Facebook from '../../atoms/Icons/Facebook';
import Instagram from '../../atoms/Icons/Instagram';
import TikTok from '../../atoms/Icons/TikTok';
import CardImage from '../../molecules/CardImage';
import { ButtonOne } from '../../atoms/buttons/ButtonOne';



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
      title: 'Bubble Tea Clásico',
      description: 'Disfruta de la receta original de bubble tea con',
      bg: '#FFDEDE' // Color de fondo pastel rojo claro
    },
    {
      image: 'te2.png',
      title: 'Bubble Tea de Fresa',
      description: 'Un refrescante bubble tea con sabor a fresa',
      bg: '#FFB6C1' // Color de fondo rosado claro
    },
    {
      image: 'te3.png',
      title: 'Bubble Tea de Matcha',
      description: 'Elige este bubble tea si prefieres un sabor único',
      bg: '#B2F7EF' // Color de fondo verde menta claro
    },
    {
      image: 'te4.png',
      title: 'Bubble Tea de Taro',
      description: 'Prueba nuestro bubble tea de taro',
      bg: '#D8BFD8' // Color de fondo lavanda claro
    },
    {
      image: 'te5.png',
      title: 'Bubble Tea de Mango',
      description: 'Este bubble tea de mango es perfecto para los amantes',
      bg: '#FFE4B5' // Color de fondo melocotón claro
    },
    {
      image: 'te6.png',
      title: 'Bubble Tea Vegano',
      description: 'Una opción vegana con leche de almendra y perlas de tapioca',
      bg: '#E0FFFF' // Color de fondo azul cielo claro
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
        <div className='w-full flex-wrap flex gap-12 bg-[#ffffff] justify-center items-center pt-14'>
          {CardImg.map((card, index) => (
            <CardIcon key={index} img={card.img} tittle={card.tittle} />
          ))}
        </div>
        {/* [#f5f7fa] */}
        <section className='bg-[#ffffff] w-full'>
          <div className='w-full md:w-[90%] flex p-6 mx-auto gap-10 flex-col lg:flex-row lg:mt-20 justify-center items-start 2xl:px-16 pt-8 lg:pt-20'>

            <div className="w-full md:max-w-[35%] 2xl:max-w-[30%]">
              {/* Título principal */}
              <h2 className="text-6xl font-bold text-gray-900 mb-4 text-center md:text-left">Productos <span className='text-5xl text-pink-500'>Favoritos</span></h2>

              {/* Descripción corta */}
              <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
                Descubre nuestros productos más populares y síguenos en redes sociales para más novedades.
              </p>

              {/* Sección de redes sociales */}
              <h3 className="text-xl font-semibold text-gray-800 mb-6 2xl:mb-2 text-center md:text-left">Síguenos</h3>
              <div className="flex gap-4 gap-y-6 flex-col md:flex-row items-center w-full">
                {/* Iconos de redes sociales */}
                <div className='flex gap-4 scale-125 md:scale-100'>
                  <Facebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors duration-200" />
                  <Instagram className="w-8 h-8 text-pink-500 hover:text-pink-700 transition-colors duration-200" />
                  <TikTok className="w-8 h-8 text-black hover:text-gray-700 transition-colors duration-200" />
                </div>
                <ButtonOne />
              </div>
            </div>

            <div className='w-full relative grid place-items-center mt-32 md:mt-0 grid-cols-1 md:grid-cols-3 gap-x-20 2xl:gap-x-16 -translate-y-8'>
              {products.map((product, index) => (
                <CardProduct
                  key={index}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  bg={product.bg}
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