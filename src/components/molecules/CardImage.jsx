import React from 'react';

const CardImage = ({ images }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4 p-4">
      {images.map((imageObj, index) => (
        <div
          key={index}
          className={`relative w-full max-w-[300px] h-[300px] overflow-hidden rounded-3xl shadow-lg`}
          style={{ backgroundColor: imageObj.backgroundColor }}
        >
          <img
            src={imageObj.url}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full transform hover:scale-105 transition-transform duration-300 ease-in-out object-cover opacity-90 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export default CardImage;
