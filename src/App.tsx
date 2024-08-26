import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css"; // Include this if you have any other global styles

import image1 from "./assets/MainPage/MASON_CONVERTER.png";
import image2 from "./assets/MainPage/Nemesis-MixSigPCB_Final.png";
import image3 from "./assets/MainPage/PCB_Jacob.jpg";
import image4 from "./assets/MainPage/PSU_Jacob.png";
import image5 from "./assets/MainPage/PSU2_Jacob.png";
import image6 from "./assets/MainPage/STM32_Jacob.png";
import image7 from "./assets/MainPage/STM32.png";
import Projects from "./Projects";

const images = [image1, image2, image3, image4, image5, image6, image7];

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
  };

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, [images.length]);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    resetInterval();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  return (
    <div className="relative w-full max-w-3xl overflow-hidden mx-auto h-96">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 1 }}
        >
          <img
            src={images[currentIndex]}
            alt={`carousel-item-${currentIndex}`}
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </motion.div>
      </AnimatePresence>
      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handlePrevious}
      >
        &#9664;
      </button>
      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &#9654;
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="p-8 text-center">
        <h2 className="font-bold">Welcome to the Electronics Design Club!</h2>
        <p className="mt-4">
          We are a community of electronics enthusiasts, makers, and innovators.
          Join us to learn, collaborate, and create amazing projects.
        </p>
        <p className="mt-2">
          We offer workshops, seminars, and hands-on projects to help you
          develop your skills in electronics design and prototyping.
        </p>
        <p className="mt-2">
          Whether you are a beginner or an experienced engineer, we have
          something for everyone. Come and be a part of our vibrant community!
        </p>
      </div>

      {/* Carousel Component */}
      <Carousel images={images} />

      <h2 className="text-center mt-8">
        Checkout Some of Our Member's Projects:
      </h2>
      <Projects />
    </>
  );
}

export default App;
