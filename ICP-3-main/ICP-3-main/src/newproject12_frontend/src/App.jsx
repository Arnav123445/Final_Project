import React from 'react';

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>MySite</h1>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h2>Welcome to MySite</h2>
        <p>Your one-stop destination for amazing services.</p>
        <button>Get Started</button>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"This site is awesome!"</p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial">
          <p>"A fantastic experience from start to finish."</p>
          <span>- Jane Smith</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 MySite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
