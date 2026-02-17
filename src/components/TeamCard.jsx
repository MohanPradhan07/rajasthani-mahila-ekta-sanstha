import "./TeamCard.css";

export default function TeamCard({ name, role, img }) {
  return (
    <div className="team-card glass-card">
      <div className="team-img">
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
