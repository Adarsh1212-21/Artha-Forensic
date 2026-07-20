import {
  FaDna,
  FaSearch,
  FaFingerprint,
  FaLaptopCode,
  FaBalanceScale,
  FaCamera,
} from "react-icons/fa";

import "./ExpertisePanel.css";

const expertise = [
  {
    icon: <FaDna />,
    title: "DNA Analysis",
    desc: "Unraveling genetic evidence with precision.",
  },
  {
    icon: <FaSearch />,
    title: "Crime Scene Investigation",
    desc: "Examining every detail to uncover the truth.",
  },
  {
    icon: <FaFingerprint />,
    title: "Fingerprint Identification",
    desc: "Every print tells a unique story.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Cyber Forensics",
    desc: "Tracking digital footprints and cyber crimes.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Legal Awareness",
    desc: "Connecting forensic science with justice.",
  },
  {
    icon: <FaCamera />,
    title: "Digital Evidence",
    desc: "Capturing and preserving electronic evidence.",
  },
];

export default function ExpertisePanel() {
  return (
    <div className="expertise-panel">
      <div className="panel-header">
        <span className="panel-dot"></span>
        <h3>Our Expertise</h3>
      </div>

      {expertise.map((item, index) => (
        <div className="expertise-card" key={index}>
          <div className="expertise-icon">{item.icon}</div>

          <div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}

    </div>
  );
}