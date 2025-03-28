"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PhotoWall() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Using the actual photos from your public/photos directory
    const photoFiles = [
      { id: 1, src: '/photos/carmen-1.jpg', alt: 'Carmen', width: 1080, height: 720 },
      { id: 2, src: '/photos/dani-1.jpg', alt: 'Dani', width: 720, height: 900 },
      { id: 3, src: '/photos/gabi-1.jpg', alt: 'Gabi', width: 1080, height: 1080 },
      { id: 4, src: '/photos/itzel-1.jpg', alt: 'Itzel', width: 1080, height: 860 },
      { id: 5, src: '/photos/jeni-1.jpg', alt: 'Jeni', width: 1080, height: 1350 },
      { id: 6, src: '/photos/jessie-1.jpg', alt: 'Jessie', width: 1080, height: 1080 },
      { id: 7, src: '/photos/nelly-1.jpg', alt: 'Nelly', width: 1080, height: 633 },
      { id: 8, src: '/photos/tanya-1.jpg', alt: 'Tanya', width: 1080, height: 1080 },
    ];

    setPhotos(photoFiles);
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square relative overflow-hidden cursor-pointer"
            onClick={() => openModal(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
