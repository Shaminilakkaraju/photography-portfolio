import React, { useState } from 'react';
import './Gallery.css';

import pg1 from './images/pg1.jpg';
import pg2 from './images/pg2.jpg';
import pg3 from './images/pg3.jpg';
import pg4 from './images/pg4.jpg';
import pg5 from './images/pg5.jpg';
import pg6 from './images/pg6.jpg';
import pg7 from './images/pg7.jpg';
import pg8 from './images/pg8.jpg';
import pg9 from './images/pg9.jpg';
import pg10 from './images/pg10.jpg';
import pg11 from './images/pg11.jpg';
import pg12 from './images/pg12.jpg';
import pg13 from './images/pg13.jpg';
import pg14 from './images/pg14.jpg';
import pg15 from './images/pg15.jpg';
import pg16 from './images/pg16.jpg';
import pg17 from './images/pg17.jpg';
import pg18 from './images/pg18.jpg';
import pg19 from './images/pg19.jpg';
import pg20 from './images/pg20.jpg';
import pg21 from './images/pg21.jpg';
import pg22 from './images/pg22.jpg';
import pg23 from './images/pg23.jpg';
import pg24 from './images/pg24.jpg';
import pg25 from './images/pg25.jpg';
import pg26 from './images/pg26.jpg';
import pg27 from './images/pg27.jpg';
import pg28 from './images/pg28.jpg';
import pg29 from './images/pg29.jpg';
import pg30 from './images/pg30.jpg';
import pg31 from './images/pg31.jpg';
import pg32 from './images/pg32.jpg';
import pg33 from './images/pg33.jpg';
import pg34 from './images/pg34.jpg';
import pg35 from './images/pg35.jpg';
import pg36 from './images/pg36.jpg';
import pg37 from './images/pg37.jpg';
import pg38 from './images/pg38.jpg';
import pg39 from './images/pg39.jpg';
import pg40 from './images/pg40.jpg';
import pg41 from './images/pg41.jpg';
import pg42 from './images/pg42.jpg';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (event) => {
    const files = event.target.files;
    const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
    setPhotos([...photos, ...newPhotos]);
  };

  const handleDelete = (index, type) => {
    if (type === 'uploaded') {
      setPhotos(photos.filter((_, i) => i !== index));
    } else {
      predefinedPhotos.splice(index, 1);
      setPhotos([...photos]);
    }
  };

  const predefinedPhotos = [
    pg1, pg2, pg3, pg4, pg5, pg6, pg7, pg8, pg9, pg10,
    pg11, pg12, pg13, pg14, pg15, pg16, pg17, pg18, pg19, pg20,
    pg21, pg22, pg23, pg24, pg25, pg26, pg27, pg28, pg29, pg30,
    pg31, pg32, pg33, pg34, pg35, pg36, pg37, pg38, pg39, pg40, pg41, pg42
  ];

  return (
    <div className="gallery-wrapper">
      <input type="file" multiple onChange={handleUpload} className="upload-input" />
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-container">
            <img src={photo} alt={`Uploaded ${index + 1}`} className="photo" />
            <button className="delete-button" onClick={() => handleDelete(index, 'uploaded')}>x</button>
          </div>
        ))}
        {predefinedPhotos.map((photo, index) => (
          <div key={index} className="photo-container">
            <img src={photo} alt="" className="photo" />
            <button className="delete-button" onClick={() => handleDelete(index, 'predefined')}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

