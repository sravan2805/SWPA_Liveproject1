import React from 'react';
import './ReviewPage.css';

const ReviewPage = () => {
  return (
    <div className="review-page">
      {/* Our Happy Customer Section */}
      <section className="happy-customers">
        <h2>Our Happy Customer</h2>
        <p>
          Campfire Restaurant in Madanapalle is a popular spot offering Indian,
          Chinese and continental dishes known for its open air dining and cozy
          ambiance is great place for casual meals or small celebrations
        </p>
        
        <div className="reviews">
          <div className="review-card">
            <img src="path_to_image" alt="Lakshmi" className="reviewer-image" />
            <h4>Lakshmi</h4>
            <p>A review praising the restaurant’s food, cozy ambiance, and great service.</p>
          </div>

          <div className="review-card">
            <img src="path_to_image" alt="Suresh M" className="reviewer-image" />
            <h4>Suresh M</h4>
            <p>Complete satisfaction with the quality of food and unique ambiance.</p>
          </div>

          <div className="review-card">
            <img src="path_to_image" alt="Emily Carter" className="reviewer-image" />
            <h4>Emily Carter</h4>
            <p>Favorite restaurant for great food, drinks, and open-air experience.</p>
          </div>

          <div className="review-card">
            <img src="path_to_image" alt="Olivia Parker" className="reviewer-image" />
            <h4>Olivia Parker</h4>
            <p>The restaurant offers a memorable dining experience with professional staff.</p>
          </div>
        </div>

        <p className="tagline">Gather 'round the campfire, where stories ignite and warmth connects us all.</p>
      </section>
    </div>
  );
};

export default ReviewPage;
