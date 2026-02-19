import "./Events.css";

export default function Events() {
  const photos = [
    "/img.jpg",
    "/img1.jpg",
    "/img8.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img2.jpg",
  ];

  const photo1 = [
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
    "/img15.jpg",
    "/img16.jpg",
  ];

  return (
    <div className="container glass-card" style={{ marginTop: "40px" }}>
      <h1>Our Events</h1>
      <ul>
        <li> Women Self-Help Group Training</li>
        <li> Cultural & Social Development Events</li>
      </ul>
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <img key={i} src={p} alt="ngo work" />
        ))}
      </div>
      <br />
      <br />
      <h2>* नारी शक्ति सम्मान 2025 - अंतर्राष्ट्रीय महिला दिवस *</h2>
      <div className="gallery-grid">
        {photo1.map((p, i) => (
          <img key={i} src={p} alt="ngo work" />
        ))}
      </div>
    </div>
  );
}
