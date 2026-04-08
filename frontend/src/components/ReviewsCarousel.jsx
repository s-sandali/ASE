import { useRef } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    shoeImg: 'https://i.pinimg.com/736x/f7/0d/9d/f70d9da7ac703a9ebb07e936837880ec.jpg',
    userImg: 'https://i.pinimg.com/236x/9b/da/02/9bda024e50b719387cd088d57f176ae6.jpg',
    name: 'Harper Jackson',
    text: "“I've never worn shoes this stylish that also feel like walking on clouds. The quality is top-notch, and I get compliments everywhere I go!”",
    rating: 5
  },
  {
    id: 2,
    shoeImg: 'https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjq0glc43if6fc_tn.webp',
    userImg: 'https://i.pinimg.com/736x/8a/d1/f3/8ad1f3e7ce85e6a654af840413d2dc37.jpg',
    name: 'Mason Jack',
    text: "“Finding shoes that fit well is always a struggle for me. But here, the sizing guide was spot on and the shoes feel custom-made. Highly recommend!”",
    rating: 5
  },
  {
    id: 3,
    shoeImg: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQa53OmlZBtyA9yu98U220C9NRk6yRf10qYNVV8n0xs_vgGiM5W',
    userImg: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtAZfl64je8hcsSpWAVHR3ifjn7yRhetLwRV7J7vkdXTJZ8fIw',
    name: 'Avery Wyatt',
    text: "“I've never worn shoes this stylish that also feel like walking on clouds. The quality is top-notch, and I get compliments everywhere I go!”",
    rating: 5
  },
  {
    id: 4,
    shoeImg: 'https://i.pinimg.com/1200x/4e/99/2b/4e992b660b78fe2afbe6584487715feb.jpg',
    userImg: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSDlQJqr2gHJnOxUdOYFOPqNTmv86GSRQ_Y3NOT_HZc6Zl4Mfz',
    name: 'Evelyn Carter',
    text: "“Incredible comfort and style. I was hesitant to buy shoes online, but these exceeded all my expectations. Will definitely be a returning customer!”",
    rating: 5
  }
];

export default function ReviewsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2 + 16; // scroll by roughly one card width
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2 className="reviews-title">What People Says</h2>
        <div className="reviews-nav">
          <button className="nav-btn" onClick={() => scroll('left')}>
            <ArrowLeft size={20} />
          </button>
          <button className="nav-btn" onClick={() => scroll('right')}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="reviews-carousel-wrapper">
        <div className="reviews-scroll-container" ref={scrollRef}>
          {REVIEWS.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-shoe-img">
                <img src={review.shoeImg} alt="Shoe reviewed" />
              </div>
              <div className="review-content">
                <p className="review-text">{review.text}</p>
                <div className="review-author">
                  <img src={review.userImg} alt={review.name} className="author-img" />
                  <div className="author-info">
                    <h4 className="author-name">{review.name}</h4>
                    <div className="author-rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#f97316" color="#f97316" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
