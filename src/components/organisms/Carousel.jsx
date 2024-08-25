import React, { useState, useEffect } from 'react';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3500); // Cambia cada 1.5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const fondos = ['#E6E6FA', '#D8BFD8', '#D9C3E4'];

  return (
    <div className="relative w-full mx-auto">
      {/* Contenedor de la imagen con transición */}
      <div className="overflow-hidden h-[65vh]">
        <div
          className="flex w-full transition-transform duration-700 h-full ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {fondos.map((fondo, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
              style={{ backgroundColor: fondo }}
            ></div>
          ))}

          {/* {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain flex-shrink-0"
            />
          ))} */}

        </div>
      </div>

      {/* Botones de control */}
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-opacity-50 text-slate-300 rounded-full hover:bg-opacity-75"
        onClick={handlePrev}
      >
        <CircleChevronLeft size={35} />
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-opacity-50 text-slate-300 rounded-full hover:bg-opacity-75"
        onClick={handleNext}
      >
        <CircleChevronRight size={35} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {fondos.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


// import React, { useState, useEffect } from 'react';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     }, 1500); // Cambia cada 1.5 segundos

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative w-full mx-auto">
//       {/* Contenedor de la imagen con transición */}
//       <div className="overflow-hidden h-[50vh]">
//         <div
//           className="flex transition-transform duration-700 h-full ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover flex-shrink-0"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Botones de control */}
//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//         onClick={handlePrev}
//       >
//         &#10094;
//       </button>
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//         onClick={handleNext}
//       >
//         &#10095;
//       </button>

//       {/* Indicadores */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
//               currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
