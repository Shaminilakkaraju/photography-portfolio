import React from 'react';
import './Testimonials.css';

import client1 from './images/client1.jpg';
import client2 from './images/client2.jpg';
import client3 from './images/client3.jpg';
import client4 from './images/client4.jpg';
import client5 from './images/client5.jpg';
import client6 from './images/client6.jpg';
import client7 from './images/client7.jpg';
import client8 from './images/client8.jpg';
import client9 from './images/client9.jpg';
import client10 from './images/client10.jpg';

const testimonialData = [
  {
    content: "The best photography service I've ever experienced! Highly recommend!",
    author: "John Doe",
    image: client1,
    alt: "Client 1"
  },
  {
    content: "Amazing photos and professional service. Couldn't be happier!",
    author: "Emily Smith",
    image: client2,
    alt: "Client 2"
  },
  {
    content: "A true artist behind the lens. Captured our special moments perfectly.",
    author: "Michael Johnson",
    image: client3,
    alt: "Client 3"
  },
  {
    content: "Absolutely stunning photographs! Couldn't have asked for better.",
    author: "Sarah Williams",
    image: client4,
    alt: "Client 4"
  },
  {
    content: "Professional, friendly, and exceptional work. Highly recommended!",
    author: "David Brown",
    image: client5,
    alt: "Client 5"
  },
  {
    content: "Outstanding service and breathtaking photos. Couldn't be happier!",
    author: "Laura Taylor",
    image: client6,
    alt: "Client 6"
  },
  {
    content: "Highly professional team with an artistic eye. Loved every shot!",
    author: "Mark Anderson",
    image: client7,
    alt: "Client 7"
  },
  {
    content: "Incredible attention to detail. The photos speak for themselves!",
    author: "Jessica Clark",
    image: client8,
    alt: "Client 8"
  },
  {
    content: "Exceptional service from start to finish. Would recommend without hesitation!",
    author: "Ashley Johnson",
    image: client9,
    alt: "Client 9"
  },
  {
    content: "Absolutely fantastic experience. The photos exceeded all expectations!",
    author: "Rachel Miller",
    image: client10,
    alt: "Client 10"
  },
];

const Testimonials = () => {
  const handleHover = (e) => {
    e.currentTarget.classList.toggle('scroll');
  };

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
              <p>- {testimonial.author}</p>
            </div>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
