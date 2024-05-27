import React, { useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';
import photo6 from './images/photo6.jpg';
import photo7 from './images/photo7.jpg';
import photo8 from './images/photo8.jpg';
import photo9 from './images/photo9.jpg';
import photo10 from './images/photo10.jpg';

const Home = () => {
  const scrollRef = useRef(null);

  return (
    <div className="home">
       <h1>Welcome to Our Photography Studio</h1>
      <p>Discover the beauty of our world through our lens.</p>
      <div className="highlighted-work">
        <h2>Our Works</h2>
        <div className="photo-scroll-container" ref={scrollRef}>
          <div className="photo-scroll">
            <img src={photo1} alt="Highlight 1" className="highlight-photo" />
            <img src={photo2} alt="Highlight 2" className="highlight-photo" />
            <img src={photo3} alt="Highlight 3" className="highlight-photo" />
            <img src={photo4} alt="Highlight 4" className="highlight-photo" />
            <img src={photo5} alt="Highlight 5" className="highlight-photo" />
            <img src={photo6} alt="Highlight 6" className="highlight-photo" />
            <img src={photo7} alt="Highlight 7" className="highlight-photo" />
            <img src={photo8} alt="Highlight 8" className="highlight-photo" />
            <img src={photo9} alt="Highlight 9" className="highlight-photo" />
            <img src={photo10} alt="Highlight 10" className="highlight-photo" />
          </div>
        </div>
      </div> 
      <div className="call-to-action">
      <Link to="/gallery"><button>Explore Our Gallery</button></Link>
    </div>
    </div>
  );
};

export default Home;
