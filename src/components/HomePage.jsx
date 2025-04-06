import React from 'react';
import '../styles/main.css';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Share Food, Reduce Waste</h1>
          <p className="hero-description">
            Connect with your community to share excess food and reduce waste.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">1</div>
              <h3 className="feature-title">List Your Food</h3>
              <p className="feature-description">
                Take a photo and share details about the food you want to share.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-number">2</div>
              <h3 className="feature-title">Connect</h3>
              <p className="feature-description">
                Get notifications when someone is interested in your food items.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-number">3</div>
              <h3 className="feature-title">Share</h3>
              <p className="feature-description">
                Arrange pickup or delivery and share your food with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Listings Section */}
      <section className="food-listings">
        <div className="container">
          <h2 className="section-title">Available Food</h2>
          
          <div className="listings-grid">
            {/* These will be replaced with dynamic data later */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="food-card">
                <div className="food-image"></div>
                <div className="food-content">
                  <h3 className="food-title">Food Item {item}</h3>
                  <p className="food-description">
                    Fresh and delicious food item available for sharing.
                  </p>
                  <div className="food-footer">
                    <span className="expiry">Expires in 2 days</span>
                    <button className="view-button">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;