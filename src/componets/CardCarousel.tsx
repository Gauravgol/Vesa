import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardsData = [
  {
    src: '/gettyimages-962041782-2048x2048.jpg',
    title: 'Card 1',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    src: '/gettyimages-1319662868-612x612.jpg',
    title: 'Card 3',
    text: 'This card has even longer content than the first to show that equal height action.',
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
    src: '/gettyimages-1080910832-612x612.jpg',
    title: 'Card 2',
    text: 'This card has supporting text below as a natural lead-in to additional content.',
  },

  {
    src: '/gettyimages-962041782-2048x2048.jpg',
    title: 'Card 1',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    src: '/gettyimages-1319662868-612x612.jpg',
    title: 'Card 3',
    text: 'This card has even longer content than the first to show that equal height action.',
  },
  {
    src: '/gettyimages-962041782-2048x2048.jpg',
    title: 'Card 1',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },


];

const CardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = cardsData.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 1 < cardsData.length) setStartIndex(startIndex + 4);
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) setStartIndex(startIndex - 4);
  };

  return (
    <div className="d-flex flex-column align-items-center my-3 w-100 py-2">
      <h2 className="font-weight-light">Card Carousel</h2>
      <div className="d-flex w-100 overflow-hidden position-relative ">
        {startIndex !== 0 && (
          <button className="btn btn-light position-absolute rounded-circle" onClick={handlePrev} style={{ top: '50%', left: '0', transform: 'translateY(-50%)', zIndex: 1, }}>
            {`<`}
          </button>
        )}

        {startIndex + visibleCards.length < cardsData.length && (
          <button className="btn btn-light position-absolute rounded-circle" onClick={handleNext} style={{ top: '50%', right: '0', transform: 'translateY(-50%)', zIndex: 1, }}>
            {`>`}
          </button>
        )}

        {visibleCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 mx-2" style={{ width: '24%', position: 'relative' }}>
            <div className="card" style={{ width: '100%', aspectRatio: '4/3', position: 'relative' }}>
              <div className="card-img-wrapper" style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                <img src={card.src} className="card-img-top" alt={card.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
        <></>
      </div>
    </div>
  );
};

export default CardCarousel;
