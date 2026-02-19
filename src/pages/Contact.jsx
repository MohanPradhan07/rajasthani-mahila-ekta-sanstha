import { FaInstagram, FaFacebook } from "react-icons/fa";
import './Contact.css';

export default function Contact() {
  return (
    <div className="container glass-card" style={{ marginTop: "40px" }}>
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* --- Social Icons Section --- */}
      <div className="social-links">
        <a
          href="https://www.instagram.com/shgatu_2009?igsh=a3c4Y3MydmU2bWN3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>

        <a
          href="https://www.facebook.com/share/1DpDc4tKyA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="social-icon1" />
        </a>
      </div>
    </div>
  );
}
