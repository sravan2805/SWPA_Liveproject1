import React from 'react';
import Heroimage1 from '../../assets/Homepage_2.webp'

const RestaurantBanner = () => {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .banner-container {
      display: flex;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      font-family: 'Dancing Script', cursive;
      padding: 40px;
    }

    .image-section {
      flex: 1;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-frame {
      border-radius: 15px;
      padding: 8px;
      width: 100%;
      max-width: 600px;
    }

    .food-image {
      width: 100%;
      height: 500px;
      border-radius: 10px;
      display: flex;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(250, 250, 250, 0.207);
      transform: translateZ(0);
      transition: transform var(--transition-speed);
    }
    
    .food-image:hover {
        transform: scale(1.05);
    }
  

    .content-section {
      flex: 1;
      padding: 40px;
      color: white;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      font-size: 5.5em;
      margin-bottom: 30px;
      line-height: 1.2;
      font-weight: 700;
    }

    .subtitle {
      font-size: 3.5em;
      margin-bottom: 20px;
      font-weight: 400;
      color: var(--primary-color);
    }

    .year {
      font-size: 3em;
      border-bottom: 2px solid white;
      display: inline-block;
      padding-bottom: 5px;
      font-weight: 400;
      color: var(--primary-color);
    }

    @media (max-width: 1200px) {
      .title {
        font-size: 3.5em;
      }
      .subtitle {
        font-size: 2.8em;
      }
      .year {
        font-size: 2.5em;
      }
    }

    @media (max-width: 768px) {
      .banner-container {
        flex-direction: column;
        padding: 20px;
      }

      .image-section,
      .content-section {
        width: 100%;
        padding: 20px;
      }

      .content-section {
        text-align: center;
      }

      .title {
        font-size: 5em;
      }

      .subtitle {
        font-size: 2.3em;
      }

      .year {
        font-size: 2em;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="banner-container">
        <div className="image-section">
          <div className="image-frame">
            <img 
              src={Heroimage1}
              alt="chicken biryani"
              className="food-image"
            />
          </div>
        </div>
        <div className="content-section">
          <h1 className="title">Good Times With Loved Ones</h1>
          <h2 className="subtitle">Serving Tasty Bits</h2>
          <div className="year">Since 2024</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantBanner;