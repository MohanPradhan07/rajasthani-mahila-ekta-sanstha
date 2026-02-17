import "./Gallery.css";

export default function Gallery() {
  const photos = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ];

  return (
    <div className="container glass-card" style={{ marginTop: "40px" }}>
      <h1>Gallery</h1>

      <div className="gallery-grid">
        {photos.map((p, i) => (
          <div className="gallery-item" key={i}>
            <img src={p} alt={`Gallery image ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
