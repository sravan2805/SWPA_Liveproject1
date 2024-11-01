import React from 'react';
import './Delicious_menu.css';
import assets from '../../assets/assets';

const Delicious_menu = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-title"><u>Delicious Menu</u></h2>
      <div className="menu-section">
        <div className="menu-item">
          <img src={assets.DBiryani} alt="Biryani" className="menu-image" />
          <div className="menu-text">
            <h3>Biryani</h3>
            <p>Chicken biryani, Campfire Spl. Biryani, Mutton Biryani, Mushroom Biryani, Tandoori Chicken Biryani</p>
          </div>
        </div>
        <div className="menu-item soup-item"> {/* Add a specific class for the soups item */}
          <div className="menu-text">
            <h3>Soups</h3>
            <p>Chicken Manchow Soup, Sweet Corn Chicken Soup, Hot & Sour Chicken Soup</p>
          </div>
          <img src={assets.DSoups} alt="Soup" className="menu-image" />
        </div>
        <div className="menu-item">
          <img src={assets.DTandoori} alt="Tandoori Chicken" className="menu-image" />
          <div className="menu-text">
            <h3>Tandoori Chicken</h3>
            <p>Tandoori Roti, Tandoori Chicken Full, Chicken Tikka Full, Banjara Kebab Full</p>
          </div>
        </div>
      </div>
      <button className="view-all-button">Our Menu</button>
    </div>
  );
};

export default Delicious_menu;