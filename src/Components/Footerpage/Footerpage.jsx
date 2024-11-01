import React from 'react';
import Map from "../../assets/Map.jpg"; // Adjust this path
import Web_plus_academy_logo from "../../assets/Web_plus_academy_logo.jpg";
import backgroundImage from "../../assets/background image.jpg"; // Adjust this path
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MapSection = () => {
  return (
    <div 
    className="w-full text-white relative" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
    
      
        {/* Map Container */}
        <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg  p-4 mb-8">
          <div className="relative w-full h-70 rounded-lg overflow-hidden">
            <img 
              src={Map} 
              alt="Location map"
              className="w-full h-full object-cover"
            />
        </div>
        

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {/* About Us */}
          <div className="space-y-2">
            <h2 className="text-yellow-400 text-xl font-bold mb-4">About us</h2>
            <p className="text-gray-300">834197XXXX</p>
            <p className="text-gray-300">camfire@gmail.com</p>
            <p className="text-gray-300">
              Anantapur Tirupati Hwy<br />
              Kadiri, Angallu<br />
              Chittoor - 517326<br />
              Near MITS college
            </p>
          </div>

          {/* Opening Hours */}
          <div className="space-y-2">
            <h2 className="text-orange-400 text-xl font-bold mb-4">Opening hours</h2>
            <p className="text-gray-300">Every day: 12pm-10pm</p>
            <p className="text-gray-300">Sunday: 10am-10pm</p>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <h2 className="text-red-400 text-xl font-bold mb-4">Details</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Menu</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-300 hover:text-white transition-colors duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-300 hover:text-white transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-300 hover:text-white transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 hover:text-white transition-colors duration-300" />
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>© 2024 Camfire. All Rights Reserved |</p>
          <p>Script Design & Development</p>
          <p>WEB PLUS ACADEMY</p>
        </div>
      </div>

      {/* Logo positioned at the bottom right corner */}
      <div className="absolute bottom-4 right-4">
        <img 
          src={Web_plus_academy_logo}
          alt="Web Plus Academy Logo" 
          className="w-24 h-auto"
        />
      </div>
    </div>
  );
};

export default MapSection;