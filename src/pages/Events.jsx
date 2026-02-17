import './Events.css'
export default function Events() {
     const photos = [
    "/public/img.jpg",
    "/public/img1.jpg",
    "/public/img8.jpg",
    "/public/img3.jpg",
    "/public/img4.jpg",
    "/public/img5.jpg",
    "/public/img6.jpg",
    "/public/img2.jpg",
    
  
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
