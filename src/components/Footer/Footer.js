import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe any time
          </p>

          <div className="input-areas">
            <form>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="footer-input"
              />
              <button className="footer-btn-primary">Subscribe</button>
            </form>
          </div>
        </section>

        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/signup">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Career</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of service</Link>
            </div>

            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/signup">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Career</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of service</Link>
            </div>

            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/signup">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Career</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of service</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/signup">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Career</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of service</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
