import './Events.css'
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

  return (
    <div className="container glass-card" style={{ marginTop: "40px" }}>
      <h1>Our Events</h1>
      <ul>
        <li> Women Self-Help Group Training</li>
        <li> Health Checkup Camps</li>
        <li> Education Awareness Drives</li>
        <li> Cultural & Social Development Events</li>
      </ul>
       <div className="gallery-grid">
      {photos.map((p, i) => (
        <img key={i} src={p} alt="ngo work" />
      ))}
    </div>
    </div>
  );
}
