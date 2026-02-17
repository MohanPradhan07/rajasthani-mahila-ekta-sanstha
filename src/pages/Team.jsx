import TeamCard from "../components/TeamCard";
import img2 from "../assets/team/img2.jpg";
import img3 from "../assets/team/img3.jpg";
import img4 from "../assets/team/img4.jpg";
import img5 from "../assets/team/img5.jpg";
import img6 from "../assets/team/img6.jpg";
import img7 from "../assets/team/img7.jpg";
import img8 from "../assets/team/img8.jpg";

export default function Team() {
  const members = [
    { name: "सौ. सीमा सोहनदास वैष्णव ", role: "अध्यक्ष ", img: img6 },
    { name: "सौ. मीना महेंद्र प्रजापति", role: "सदस्य", img: img8 },
    { name: "सौ. संतोष किशोरसिंह राजपुरोहित", role: "उपाध्यक्ष", img: img7 },
    { name: "सौ. लक्ष्मी गणपतदास वैष्णव", role: "खजिनदार", img: img3 },
    { name: "सौ. नीलम नरपतसिंह पुरोहित", role: "उपखजिनदार", img: img4 },
    { name: "सौ. मुन्नीदेवी सोहनदास वैष्णव ", role: "सलाहगार", img: img5 },
    { name: "सौ. लता धर्मानंद पंत", role: "सचिव", img: img2 },
  ];

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h1>Our Team</h1>
      <div className="team-grid">
        {members.map((m, i) => (
          <TeamCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
}
