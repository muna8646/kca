import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../assets/image/pexel.jpg';
import backgroundImage2 from '../assets/image/mk.jpg';
import backgroundImage3 from '../assets/image/ta.jpg';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Footer from '../footer';

function Home() {
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getBackgroundClass = (index) => {
    switch (index) {
      case 0:
        return 'bg-image-1';
      case 1:
        return 'bg-image-2';
      case 2:
        return 'bg-image-3';
      default:
        return '';
    }
  };

  const backgroundStyles = {
    backgroundImage: `url(${backgrounds[currentBackgroundIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s',
    width: '100%', // Set the background width to 100% for responsiveness
    height: '600px', // Set the background height
  };

  return (
      <div>
        <div
            className={`min-h-screen flex justify-center items-center ${getBackgroundClass(
                currentBackgroundIndex
            )}`}
            style={backgroundStyles}
        >
          <div className="p-8 bg-white rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-semibold mb-4 text-blue-600">
              Welcome to Esipil Tech Hub
            </h1>
            <p className="text-gray-700 mb-6">
              Unlock your potential with our online learning platform.
            </p>
            <div className="mb-8">
              <Link
                  to="/Topic"
                  className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Explore Courses
              </Link>
            </div>
            <p className="text-gray-700">
              Whether you're a beginner or an expert, we have something for
              everyone.
              <br />
              Join our community of learners and embark on a journey of knowledge
              and growth.
            </p>
          </div>
        </div>
        <About />
        <Contact />
        <Footer />
      </div>
  );
}

export default Home;
