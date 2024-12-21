import React, { useState, useRef, useEffect } from "react";
import health from "../Components/assests/health.png";
import sports from "../Components/assests/sports.png";
import image from "../Components/assests/image.png";

const SlideContent = ({ title, description, link }) => {
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const checkTruncation = () => {
      const element = descriptionRef.current;
      if (element) {
        setIsTextTruncated(element.scrollHeight > element.clientHeight);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [description]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-start">{title}</h3>
      <p
        ref={descriptionRef}
        className={`text-sm text-gray-600 ${!isExpanded ? "line-clamp-2" : ""}`}
      >
        {description}
      </p>
      {isTextTruncated && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-sm hover:underline"
        >
          {isExpanded ? "Show less" : "Know more..."}
        </button>
      )}
    </div>
  );
};

const Carousel = () => {
  const slides = [
    {
      title: "Sports",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses.",
      img: sports,
      link: "#",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Health and wellness service providers—from yoga instructors and gyms.",
      img: health,
      link: "#",
    },
    {
      title: "Learning Activities",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios.",
      img: image,
      link: "#",
    },
    {
      title: "Sports",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses.",
      img: sports,
      link: "#",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Health and wellness service providers—from yoga instructors and gyms.",
      img: health,
      link: "#",
    },
    {
      title: "Learning Activities",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios.",
      img: image,
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Handle responsive changes
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full mx-auto my-8">
      <h2 className="w-full text-4xl font-bold text-center mb-4">
        Empowering Service 
        <br />
        Providers Across Industries
      </h2>
      <p className="w-full text-center text-gray-600 mb-8 mt-3 px-4">
        Whether you're in sports, education, wellness, household services, or niche markets, our technology
        <br />
        simplifies your business operations, making it easier for you to focus on what you do best.
      </p>

      <div className="flex items-center justify-center w-full gap-8">
        <button
          onClick={handlePrev}
          className={`z-10 bg-black rounded-full shadow-lg p-2 text-white ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <span className="text-xl">&lt;</span>
        </button>

        <div className="w-[70%] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  visibleSlides === 3 ? "w-1/3" : "w-full"
                } px-4`}
              >
                <div className="h-full">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <SlideContent 
                    title={slide.title}
                    description={slide.description}
                    link={slide.link}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className={`z-10 bg-black rounded-full shadow-lg p-2 text-white ${
            currentIndex >= slides.length - visibleSlides
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentIndex >= slides.length - visibleSlides}
        >
          <span className="text-xl">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
