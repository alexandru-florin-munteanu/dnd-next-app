import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface WFImageCarouselProps {
  images: string[];
}

const WFImageCarousel: React.FC<WFImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [objectFits, setObjectFits] = useState<
    ("object-fit-cover" | "object-fit-fill")[]
  >([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);

  const handleNavClick = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? activeIndex === 0
          ? images.length - 1
          : activeIndex - 1
        : activeIndex === images.length - 1
        ? 0
        : activeIndex + 1;

    setActiveIndex(newIndex);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;

    if (touchStartRef.current - touchEnd > 50) {
      // Swipe left
      handleNavClick("next");
    } else if (touchStartRef.current - touchEnd < -50) {
      // Swipe right
      handleNavClick("prev");
    }
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  useEffect(() => {
    const checkImages = async () => {
      const fits = await Promise.all(
        images.map(async (src) => {
          const img = new Image();
          img.src = src;
          await img.decode();
          return img.height > 450 ? "object-fit-cover" : "object-fit-fill";
        })
      );
      setObjectFits(fits);
    };

    checkImages();
  }, [images]);
  return (
    <div
      className="image-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchMove}
    >
      <button
        className="image-carousel__nav image-carousel__nav--prev"
        onClick={() => handleNavClick("prev")}
      >
        <FaChevronLeft />
      </button>
      <div className="image-carousel__track" ref={trackRef}>
        {images.map((image, index) => (
          <div key={index} className="image-carousel__slide">
            <img
              src={image}
              alt={`Carousel slide ${index}`}
              className={objectFits[index]}
            />
          </div>
        ))}
      </div>
      <button
        className="image-carousel__nav image-carousel__nav--next"
        onClick={() => handleNavClick("next")}
      >
        <FaChevronRight />
      </button>
      <div className="image-carousel__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`image-carousel__dot${
              activeIndex === index ? " image-carousel__dot--active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default WFImageCarousel;
