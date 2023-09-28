import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/image/logo.png';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const containerStyle = {
    paddingTop: '64px',
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
      <div>
        <nav
            className={`fixed top-0 left-0 right-1 bg-blue-900 p-4 lg:p-2 ${
                isMenuOpen ? 'open' : ''
            }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                  src={logo}
                  alt="Esipil Tech Hub Logo"
                  className="w-18 h-8 logo" // Apply a custom class for logo
              />
              <span className="text-white text-lg font-semibold">
              Esipil Tech Hub
            </span>
            </Link>

            {/* Responsive Menu Icon */}
            <div className="lg:hidden">
              <button
                  onClick={toggleMenu}
                  className="text-white hover:text-blue-500 focus:outline-none"
              >
                {isMenuOpen ? '☰' : 'X'}
              </button>
            </div>

            {/* Navigation Links (Hidden on Small Screen) */}
            <ul className={`lg:flex space-x-6 menu ${isMenuOpen ? 'hidden' : ''}`}>
              <li>
                <Link to="/" className="text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Topic" className="text-white hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/SigninForm" className="text-white hover:underline">
                  Students
                </Link>
              </li>


              <li>
                <Link to="/About" className="text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Get Started Button */}
            <Link to="/signup">
              <button
                  className={`lg:block bg-white text-blue-500 px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 get-started ${
                      isMenuOpen ? 'open' : ''
                  }`}
              >
                Register
              </button>
            </Link>
          </div>
        </nav>

        {/* Navigation Links (Displayed in a Box on Small Screen) */}
        {isMenuOpen && (
            <div
                className={`lg:hidden p-4 ${
                    isMenuOpen ? 'block' : 'hidden'
                }`} // Apply 'block' class to display the links in a box
            >
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/" className="text-white hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Topic" className="text-white hover:underline">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/SigninForm" className="text-white hover:underline">
                    Students
                  </Link>
                </li>

                <li>
                  <Link to="/About" className="text-white hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-white hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
        )}

        <div style={containerStyle}>
          {/* Content of your pages */}
        </div>
      </div>
  );
}

export default App;
