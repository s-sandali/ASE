import { useState } from 'react';
import { Link } from 'react-router-dom';
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg';
import shoe3 from '../assets/shoe3.jpg';
import shoe4 from '../assets/shoe4.jpg';
import { Recycle, ShieldCheck, Truck, Globe, Star } from 'lucide-react';
import shoe5 from '../assets/shoe5.jpg';
import shoe6 from '../assets/shoe6.jpg';
import shoe7 from '../assets/shoe7.jpg';
import shoe8 from '../assets/shoe8.jpg';
import shoe9 from '../assets/shoe9.jpg';
import shoe10 from '../assets/shoe10.jpg';
import shoe11 from '../assets/shoe11.jpg';
import shoe12 from '../assets/shoe12.jpg';

const BEST_SELLERS = [
  { id: 'bs1', name: 'Eclipse Sneakers', price: 'LKR 129,000.00', oldPrice: 'LKR 135,000.00', rating: '4.3', img: shoe5 },
  { id: 'bs2', name: 'Grvity Oxford Shoe', price: 'LKR 120,000.00', oldPrice: 'LKR 126,000.00', rating: '4.3', img: shoe6 },
  { id: 'bs3', name: 'Flexora Boot', price: 'LKR 156,000.00', oldPrice: 'LKR 159,000.00', rating: '4.1', img: shoe7 },
  { id: 'bs4', name: 'Boltrek Sports Shoe', price: 'LKR 96,000.00', oldPrice: 'LKR 105,000.00', rating: '4.3', img: shoe8 },
  { id: 'bs5', name: 'Formal Movo Shoe', price: 'LKR 129,000.00', oldPrice: 'LKR 132,000.00', rating: '4.1', img: shoe9 },
  { id: 'bs6', name: 'Flexora High Neck', price: 'LKR 138,000.00', oldPrice: 'LKR 144,000.00', rating: '4.2', img: shoe10 },
  { id: 'bs7', name: 'Runx Running Shoe', price: 'LKR 138,000.00', oldPrice: 'LKR 144,000.00', rating: '4.4', img: shoe11 },
  { id: 'bs8', name: 'Yono Loafers', price: 'LKR 153,000.00', oldPrice: 'LKR 156,000.00', rating: '4.5', img: shoe12 },
];

const COLLECTIONS = [
  {
    id: 'sports',
    label: 'Sports Collection',
    desc: [
      'Performance-driven footwear for every sport.',
      'Stay safe with shoes built for durability.',
      'Designed for athletes, made for champions.',
      'Boost your performance with our sports collection.',
    ],
    emoji: '👟',
    color: '#fff4f0',
  },
  {
    id: 'luxury',
    label: 'Luxury Collection',
    desc: [
      'Premium materials, exquisite craftsmanship.',
      'Handcrafted details for the discerning eye.',
      'Elevate every outfit with timeless elegance.',
      'Experience footwear at its finest.',
    ],
    emoji: '👠',
    color: '#f9f5ff',
  },
  {
    id: 'kids',
    label: 'Kids Collection',
    desc: [
      'Fun designs that kids absolutely love.',
      'Durable construction for active little ones.',
      'Lightweight and easy to put on.',
      'Sizes for every growing foot.',
    ],
    emoji: '👟',
    color: '#f0fff4',
  },
  {
    id: 'casual',
    label: 'Casual Collection',
    desc: [
      'Everyday comfort meets modern style.',
      'Versatile designs for any occasion.',
      'All-day support you can feel.',
      'Look great without trying too hard.',
    ],
    emoji: '🥿',
    color: '#fffbeb',
  },
];

const FEATURES = [
  { id: 'lightweight', icon: '🪶', label: 'Lightweight', desc: 'Feather-light construction for all-day comfort' },
  { id: 'durable', icon: '🏗️', label: 'Durable Build', desc: 'Built to last through any adventure' },
  { id: 'breathable', icon: '💨', label: 'Breathable Design', desc: 'Advanced airflow keeps feet fresh all day' },
  { id: 'style', icon: '✨', label: 'Modern Style', desc: 'Contemporary designs for every occasion' },
  { id: 'fit', icon: '👟', label: 'Perfect Fit', desc: 'Ergonomic design for your natural foot shape' },
  { id: 'care', icon: '🧹', label: 'Easy Care', desc: 'Simple maintenance for long-lasting looks' },
];

const POPULAR = [
  { id: 'pop-sports', cat: 'Sports', bg: '#dbeafe', emoji: '👟' },
  { id: 'pop-casual', cat: 'Casual', bg: '#fef3c7', emoji: '🥿' },
  { id: 'pop-kids', cat: 'Kids', bg: '#dcfce7', emoji: '👟' },
];

const TESTIMONIALS = [
  {
    id: 'anna',
    name: 'Anna de Forsi',
    role: 'Runner',
    stars: 5,
    text: 'I absolutely love these shoes! They are stylish, comfortable, and perfect for my everyday runs. The quality is excellent and they make every step feel amazing.',
  },
  {
    id: 'ali',
    name: 'Ali Mansour',
    role: 'Designer',
    stars: 5,
    text: 'Stylish shoes are a game changer. They fit perfectly, feel incredibly supportive, and are durable enough for my active lifestyle. Highly recommend!',
  },
  {
    id: 'omar',
    name: 'Omar Al-Hakem',
    role: 'Designer',
    stars: 5,
    text: 'These shoes combine fashion and comfort flawlessly. Lightweight, breathable, and high quality — they\'re my absolute favourite pair.',
  },
];

export default function Landing() {
  const [activeTab, setActiveTab] = useState('sports');
  const activeCol = COLLECTIONS.find((c) => c.id === activeTab);

  return (
    <div className="landing">

      {/* ── New Hero ──────────────────────────────────── */}
      <section className="new-hero-section">
        <div className="new-hero-bg">
          <img src={shoe2} alt="Shoes background" />
        </div>
        <div className="new-hero-overlay"></div>
        <div className="new-hero-container">
          <div className="new-hero-content">
            <h1 className="new-hero-title">
              Explore<br />Premium<br />Shoes
            </h1>
            <div className="new-hero-actions">
              <Link to="/products" className="new-hero-btn btn-white">
                Shop Now <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
              <Link to="/products" className="new-hero-btn btn-outline">
                Categories <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
          <div className="new-hero-card">
            <div className="new-hero-card-img">
              <img src={shoe1} alt="New Arrival" />
            </div>
            <div className="new-hero-card-footer">
              <Link to="/products">
                Explore New Arrivals <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Banner ────────────────────────────── */}
      <section className="features-banner">
        <div className="features-banner-container">
          <div className="feature-item">
            <Recycle size={32} strokeWidth={1.5} />
            <h3>Sustainable Materials</h3>
            <p>We believe great style shouldn't come at the planet's expense.</p>
          </div>
          <div className="feature-item">
            <ShieldCheck size={32} strokeWidth={1.5} />
            <h3>Warranty Included</h3>
            <p>Every pair comes with a hassle-free 6-month warranty</p>
          </div>
          <div className="feature-item">
            <Truck size={32} strokeWidth={1.5} />
            <h3>Delivery &amp; Shipping</h3>
            <p>Your shoes will be dispatched within 1-2 business days</p>
          </div>
          <div className="feature-item">
            <Globe size={32} strokeWidth={1.5} />
            <h3>Eco-Friendly Fabrics</h3>
            <p>Crafted with sustainability in mind, our shoes feature eco-friendly fabrics</p>
          </div>
        </div>
      </section>




      {/* ── Promo Cards ────────────────────────────────── */}
      <section className="promo-cards-section">
        <div className="promo-cards-container">
          <div className="promo-card" style={{ backgroundImage: `url(${shoe3})` }}>
            <div className="promo-badge">20% OFF</div>
            <div className="promo-content">
              <h2>Explore All<br />Formal Shoes</h2>
              <Link to="/products" className="promo-btn">
                Shop Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
          <div className="promo-card" style={{ backgroundImage: `url(${shoe4})` }}>
            <div className="promo-badge">25% OFF</div>
            <div className="promo-content">
              <h2>Grab The Latest<br />Running Shoes</h2>
              <Link to="/products" className="promo-btn">
                Shop Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Sellers ───────────────────────────────── */}
      <section className="best-sellers-section">
        <h2 className="section-title">Best Sellers</h2>
        <div className="best-sellers-grid">
          {BEST_SELLERS.map((item) => (
            <div key={item.id} className="bs-card">
              <div className="bs-card-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="bs-card-body">
                <div className="bs-card-header">
                  <h3>{item.name}</h3>
                  <div className="bs-rating">
                    <Star size={14} fill="#f97316" color="#f97316" />
                    <span>({item.rating})</span>
                  </div>
                </div>
                <div className="bs-card-price">
                  <span className="current-price">{item.price}</span>
                  <span className="old-price">{item.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
