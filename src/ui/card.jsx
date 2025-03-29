'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Card({
  color,
  title,
  imageUrl,
  imageAlt,
  imageWidth = 400,
  imageHeight = 300,
  children
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [cardHeight, setCardHeight] = useState('auto');
  const [isLoaded, setIsLoaded] = useState(!imageUrl);

  // Define color mappings
  const colorMap = {
    purple: "bg-purple-800 border-purple-600 hover:bg-purple-700",
    green: "bg-green-800 border-green-600 hover:bg-green-700",
    teal: "bg-teal-800 border-teal-600 hover:bg-teal-700",
    orange: "bg-orange-800 border-orange-600 hover:bg-orange-700",
  };

  // Validate color
  if (!Object.keys(colorMap).includes(color)) {
    throw new Error(`Invalid color: ${color}. Must be one of: ${Object.keys(colorMap).join(', ')}`);
  }
  const colorClasses = colorMap[color];

  // Handle image load completion
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Measure front/back to set container height
  useEffect(() => {
    if (frontRef.current && backRef.current && isLoaded) {
      const updateHeight = () => {
        const frontHeight = frontRef.current?.offsetHeight || 0;
        const backHeight = backRef.current?.offsetHeight || 0;
        // Use the maximum height to prevent layout shifts
        const maxHeight = Math.max(frontHeight, backHeight);
        setCardHeight(maxHeight);
      };

      // Initial height calculation
      updateHeight();

      // Recheck height after a short delay to account for any dynamic content
      const timeoutId = setTimeout(updateHeight, 100);

      // Add window resize listener to handle responsive changes
      window.addEventListener('resize', updateHeight);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [children, isFlipped, imageUrl, isLoaded]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="relative w-full min-w-0 cursor-pointer"
      style={{ height: cardHeight === 'auto' ? 'auto' : `${cardHeight}px` }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* FRONT */}
        <div
          ref={frontRef}
          className={`absolute w-full p-8 border rounded-sm backface-hidden ${colorClasses} ${isFlipped ? 'opacity-0' : 'opacity-100'} flex flex-col items-center`}
          onClick={handleFlip}
        >
          {title && <h3 className="mb-4 text-2xl text-white w-full text-center">{title}</h3>}
          {imageUrl && (
            <div className="mb-4 w-full flex justify-center">
              <Image
                src={imageUrl}
                alt={imageAlt || title || 'Card Image'}
                width={imageWidth}
                height={imageHeight}
                className="object-cover rounded-md mb-4"
                onLoad={handleImageLoad}
                priority
              />
            </div>
          )}

          <div>Click to read</div>
        </div>

        {/* BACK */}
        <div
          ref={backRef}
          className={`absolute w-full p-8 border rounded-sm backface-hidden ${colorClasses} ${isFlipped ? 'rotate-y-180 opacity-100' : 'rotate-y-180 opacity-0'}`}
          onClick={handleFlip}
        >
          {title && <h3 className="mb-4 text-2xl text-white w-full text-center">{title}</h3>}

          <div className="space-y-4">{children}</div>

        </div>
      </div>
    </div>
  );
}
