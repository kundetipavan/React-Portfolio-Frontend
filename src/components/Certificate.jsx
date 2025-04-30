import React, { useState, useEffect } from 'react';
 
const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'HTML Certificate',
      image: 'public/pavan html.jpeg',
      previewLink: 'public/pavan html.jpeg'
    },
    {
      id: 2,
      title: 'CSS Certificate',
      image: 'public/pavan css.jpeg',
      previewLink: 'public/pavan css.jpeg'
    },
    {
      id: 3,
      title: 'REACT Certificate',
      image: 'public/looma.jpg',
      previewLink: 'public/looma.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <div className="certificates-container">
      <h2>My Certificates</h2>
      <p className="subtext">Slide here to see next →</p>
      <div className="slider">
        <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <img src={cert.image} alt={cert.title} />
              <div>
              <h3>{cert.title}</h3>
              <a href={cert.previewLink} className="preview-btn">Preview</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;