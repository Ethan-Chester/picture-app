"use client"; 

import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-64 h-64 object-cover mb-4"
      />
      <div className="flex gap-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
