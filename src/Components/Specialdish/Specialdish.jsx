import React from 'react';
import './Specialdish.css';
import assets from '../../assets/assets1.js'; 

const Specialdish = () => {
  return (
    <div className="special-dish-container">
      <div className="special-dish-heading">
        <div className="signature-badge">Signature Dish</div>
        <h1 className="dish-title"><u>4 AM Biryani</u></h1>
        <p className="dish-description">
          "A dish that speaks for itself – crafted with love, served at the special time."
        </p>
      </div>
      <div className="dish-image-container">
        <img src={assets.fourAmBiryani} alt="4 AM Biryani" className="dish-image" />
        <img src={assets.star} alt="Star" className="star-image" /> 
      </div>
      <p className="menu-instruction">for more details visit our menu</p>
      <button className="menu-button">Our Menu</button>
    </div>
  );
};

export default Specialdish;
