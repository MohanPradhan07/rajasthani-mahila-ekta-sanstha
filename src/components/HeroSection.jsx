import "./HeroSection.css";
import banner from "../assets/banner.jpg"; // rename your image to banner.jpg and put inside src/assets folder

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>

      <img src={banner} className="hero-img" alt="NGO Banner" />

      {/* <div className="hero-content glass-card">
        <h1>महिला सक्षमीकरण • समाज विकास • एकता</h1>
        <p>
          राजस्थानि महिला एकता संस्था महिला विकास, सामाजिक जागरूकता,
          शिक्षण, आरोग्य आणि समाज upliftment साठी कार्य करते.
        </p>

        <a href="/about" className="hero-btn">Learn More</a>
      </div> */}
    </div>
  );
}
