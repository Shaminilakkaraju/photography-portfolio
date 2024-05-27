import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import team1 from './images/team1.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';
import team4 from './images/team4.jpg';
import team5 from './images/team5.jpg';
import team6 from './images/team6.jpg';

const About = () => (
  <div className="about">
    <h2>About Us</h2>
    <p>
      We are a team of passionate photographers dedicated to capturing the beauty and essence of life through our lenses. Our mission is to tell visual stories that inspire and connect with our audience.
    </p>
    <div className="team-photos">
      <h3>Meet the Team</h3>
      <div className="team-members">
        <div className="team-member">
          <img src={team1} alt="Team Member 1" className="team-photo" />
          <h4>Jane Doe</h4>
          <p><strong>Portrait Photographer - </strong>Jane has a keen eye for detail and loves creating timeless portraits that tell your story.</p>
        </div>
        <div className="team-member">
          <img src={team2} alt="Team Member 2" className="team-photo" />
          <h4>Sarah Jones</h4>
          <p><strong>Landscape Photographer -</strong> Sarah is passionate about capturing the beauty of nature in her photographs, bringing breathtaking landscapes to life.</p>
        </div>
        <div className="team-member">
          <img src={team3} alt="Team Member 3" className="team-photo" />
          <h4>Mary Johnson</h4>
          <p><strong>Event Photographer -</strong> Mary excels in capturing candid moments and emotions, ensuring every event is remembered for years to come.</p>
        </div>
        <div className="team-member">
          <img src={team4} alt="Team Member 4" className="team-photo" />
          <h4>John Smith</h4>
          <p><strong>Lead Photographer -</strong> With over 10 years of experience, John specializes in capturing stunning wedding moments, turning them into lifelong memories.</p>
        </div>
        <div className="team-member">
          <img src={team5} alt="Team Member 5" className="team-photo" />
          <h4>David Miller</h4>
          <p><strong>Product Photographer -</strong> David brings products to life through his lens, showcasing their unique features and qualities in captivating images.</p>
        </div>
        <div className="team-member">
          <img src={team6} alt="Team Member 6" className="team-photo" />
          <h4>Michael Brown</h4>
          <p><strong>Travel Photographer -</strong> Michael's passion for travel and photography comes together as he captures the beauty and diversity of cultures around the world.</p>
        </div>
      </div>
    </div>
    <div className="call-to-action">
      <p>Ready to capture your special moments? Let's chat!</p>
      <Link to="/contactus"><button>Contact Us</button></Link>
    </div>
    <div className="testimonial-link">
    <p>Curious to see what our clients say about us?</p>
    <p><Link to="/testimonials">Check out our testimonials</Link></p>
    </div>
  </div>
);

export default About;


