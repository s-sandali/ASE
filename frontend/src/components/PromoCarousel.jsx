import { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    image: 'https://i.pinimg.com/1200x/13/17/5a/13175a7be14ce6bb9da92a4c0deac33e.jpg',
    badge: 'Weekend Offer',
    title: '20% OFF!',
    subtitle: 'Summit Sneakers! Hottest\nDeals Of The Month'
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/ba/d3/23/bad323bbf973cca110534879b8d0ed75.jpg',
    badge: 'Weekend Offer',
    title: '15% OFF!',
    subtitle: 'TurboTrainers! Grab The\nLatest Shoes'
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/1200x/05/ff/78/05ff786ad5ebf5f3384039ed3fc71a6b.jpg',
    badge: 'Weekend Offer',
    title: '10% OFF!',
    subtitle: 'Refined Classics!\nImported From USA'
  }
];

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="promo-carousel-section">
      <div className="promo-carousel-container">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`promo-carousel-slide ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="promo-carousel-overlay" />
            <div className="promo-carousel-content">
              <span className="promo-carousel-badge">{slide.badge}</span>
              <h2 className="promo-carousel-title">{slide.title}</h2>
              <p className="promo-carousel-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <div className="promo-carousel-indicators">
          <div className="promo-indicators-pill">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                className={`promo-indicator-dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
