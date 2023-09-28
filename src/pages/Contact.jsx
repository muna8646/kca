import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { db } from '../firebase.config'; // Import the Firebase database instance
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const enteredEmail = e.target.email.value;
    const message = e.target.message.value;

    try {
      // Push the contact information to Firebase Realtime Database
      await db.ref('contacts').push({
        name,
        email: enteredEmail,
        message,
      });

      // Show a success toast notification
      toast.success('Message submitted successfully!', {
        position: 'top-right',
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear the form fields after submission
      e.target.reset();

      // Implement auto-reply here if desired
      // You can use Firebase Cloud Functions for this purpose
      // See the previous response for details on implementing auto-reply
      setEmail(enteredEmail); // Store the email for auto-reply
    } catch (error) {
      console.error('Error sending contact information to Firebase:', error);
    }
  };

  return (
      <div className="bg-blue-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">Contact Us</h1>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Follow Us on Social Media</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
  );
}

export default Contact;
