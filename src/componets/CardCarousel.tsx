import React, { useState } from 'react';

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerSlide = 2; // Show 2 cards on mobile

  const items = [
    {
      src: '/gettyimages-962041782-2048x2048.jpg',
      title: 'Card 1',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      src: '/gettyimages-1080910832-612x612.jpg',
      title: 'Card 2',
      text: 'This card has supporting text below as a natural lead-in to additional content.',
    },
    {
      src: '/gettyimages-1319662868-612x612.jpg',
      title: 'Card 3',
      text: 'This card has even longer content than the first to show that equal height action.',
    },
    {
      src: '/logo.jpg',
      title: 'Card 4',
      text: 'Another piece of supporting text.',
    }
     
  ];

  // Calculate the start index for the current items to display
  const startIndex = activeIndex * itemsPerSlide;
  const currentItems = items.slice(startIndex, startIndex + itemsPerSlide * 2); // Show 2 cards

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 >= Math.ceil(items.length / itemsPerSlide) ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Math.ceil(items.length / itemsPerSlide) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container text-center my-3">
      <h2 className="font-weight-light">Card Carousel</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
            <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-group">
              {currentItems.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.src} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" onClick={handlePrev} role="button">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" onClick={handleNext} role="button">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
  
      </div>
  
    </div>
  );
};

export default CardCarousel;
