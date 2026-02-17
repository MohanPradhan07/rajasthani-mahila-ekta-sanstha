import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="container glass-card" style={{ marginTop: "40px" }}>
        <h2>Our Mission</h2>
        <p>
          We work to uplift women, support families, provide education, conduct
          awareness programs and develop strong communities.
        </p>
      </div>
    </>
  );
}
