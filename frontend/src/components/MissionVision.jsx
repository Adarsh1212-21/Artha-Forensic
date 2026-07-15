import React from "react";
import useReveal from "../hooks/useReveal";
import "./MissionVision.css";

const cards = [
  {
    icon: "\u2697", // scales-ish glyph fallback
    label: "Mission",
    text: "To provide aspiring forensic professionals with practical knowledge, ethical values, and investigative skills through hands-on learning, expert guidance, and real-world case exposure.",
  },
  {
    icon: "\u2696",
    label: "Vision",
    text: "To be a trusted forensic education platform that develops skilled, ethical, and industry-ready professionals committed to advancing justice through science.",
  },
  {
    icon: "\u2708",
    label: "Our Future",
    text: "To advance forensic education through specialized certification programs, collaborative research, international partnerships, and technology-driven training — empowering future forensic professionals with innovation, integrity, and a global perspective.",
  },
];

export default function MissionVision() {
  const ref = useReveal();

  return (
    <section id="mission" className="mv">
      <div className="container reveal" ref={ref}>
        <div className="section-eyebrow">
          <span className="evidence-tag">Exhibit C</span>
        </div>
        <h2 className="mv__heading">Mission, Vision &amp; Future</h2>

        <div className="mv__grid">
          {cards.map((c) => (
            <div className="mv__card" key={c.label}>
              <span className="mv__icon">{c.icon}</span>
              <h3>{c.label}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
