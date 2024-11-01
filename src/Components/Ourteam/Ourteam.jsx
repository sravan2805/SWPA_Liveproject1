import React from 'react';
import './Ourteam.css';
import facebook from "../../assets/facebook_image.png";
import instagram from "../../assets/instagram_image.jpeg";
import call from "../../assets/call_image.png";
import backgroundImage from "../../assets/background image.jpg";

const Ourteam = () => {
  const teamMembers = [
    {
      id: 1,
      image: 'https://insidesources.com/wp-content/uploads/2021/05/bigstock-Happy-young-waiter-with-toothy-397229225-300x300.jpg',
      socialLinks: {
        phone: '#',
        instagram: '#',
        facebook: '#'
      }
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nbyTsewqEKx4ejH5yu9Tcau6vbLYUrDPpg&s',
      socialLinks: {
        phone: '#',
        instagram: '#',
        facebook: '#'
      }
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwB4daGf2VpI_h5cCS-AK51GDNpG26fyKL3w&s',
      socialLinks: {
        phone: '#',
        instagram: '#',
        facebook: '#'
      }
    }
  ];

  return (
    <div className="team-outer-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="team-inner-container">
        {/* Title Section */}
        <div className="title-wrapper">
          <div className="title-oval">
            <h1>Our team</h1>
          </div>
          <p className="mission-statement">
            We strive to ensure that our restaurant workers have a comfortable and productive environment,
            enabling them to deliver exceptional dining experiences and services for our valued customers.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="team-members-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="member-card">
              <div className="profile-circle">
                <img src={member.image} alt="Team member" />
                <div className="profile-border"></div>
              </div>
              <div className="social-icons">
                <a href={member.socialLinks.phone} className="social-circle">
                  <img src={call} alt="Phone" className="call-icon" />
                </a>
                <a href={member.socialLinks.instagram} className="social-circle">
                  <img src={instagram} alt="Instagram" className='instagram-icon'/>
                </a>
                <a href={member.socialLinks.facebook} className="social-circle">
                  <img src={facebook} alt="Facebook" className="facebook-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="quotes-wrapper">
          <p className="quote-text">"A taste of perfection, served fresh daily!"</p>
          <p className="quote-text">"Bringing people together, one plate at a time."</p>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;