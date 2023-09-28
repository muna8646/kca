import React from 'react';

function About() {
  return (
      <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
            About Esipil Tech Hub
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <p className="text-gray-700 text-base sm:text-lg">
              Esipil Tech Hub is a leading technology organization dedicated to
              empowering and fostering innovation in the ever-evolving tech
              landscape. We are committed to providing cutting-edge resources,
              training, and opportunities for tech enthusiasts and professionals.
            </p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Our mission is to bridge the gap between aspiring technologists and
              the latest advancements in technology. We offer a wide range of
              programs, workshops, and events designed to cultivate skills and
              connect tech enthusiasts with like-minded individuals.
            </p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Join us on our journey to explore the endless possibilities of
              technology, learn from industry experts, and contribute to the
              ever-changing world of tech.
            </p>
          </div>
        </div>
      </div>
  );
}

export default About;
