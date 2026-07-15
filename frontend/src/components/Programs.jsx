import React from "react";
import useReveal from "../hooks/useReveal";
import "./Programs.css";

// Add, edit, or remove entries here manually whenever you want to update
// what's shown — no backend or database needed.
const PROGRAMS = [
  {
    id: 1,
    title: "DNA — The Blueprint of Life",
    type: "Internship",
    description: "A one-month online internship covering DNA profiling fundamentals and case applications.",
    speaker: "Dr. Mehak Dwivedi",
    imageUrl: "/images/programs/internship.jpg",
  },
  {
    id: 2,
    title: "Forensic Anthropology Workshop",
    type: "Workshop",
    description: "A two-day workshop on skeletal analysis for forensic profile reconstruction.",
    speaker: "Dr. Anjali Sabarwal",
    imageUrl: "/images/programs/workshop.jpg",
  },
  {
    id: 3,
    title: "Forensic Fusion 3.0",
    type: "Collaboration",
    description: "A media collaboration and national seminar exploring evolving dimensions of forensic science.",
    speaker: "Academic Partners",
    imageUrl: "/images/programs/collaboration.jpg",
  },
];

export default function Programs() {
  const ref = useReveal();

  return (
    <section id="programs" className="programs">
      <div className="container reveal" ref={ref}>
        <div className="section-eyebrow">
          <span className="evidence-tag">Exhibit E</span>
        </div>
        <h2 className="programs__heading">Internships, Workshops &amp; Collaborations</h2>
        <p className="programs__sub">Digital collaborations with universities across India</p>

        <div className="programs__grid">
          {PROGRAMS.map((p) => (
            <article className="programs__card" key={p.id}>
              <div
                className="programs__image"
                style={{ backgroundImage: `url('${p.imageUrl}')` }}
              />
              <div className="programs__body">
                <span className="programs__type">{p.type}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.speaker && <span className="programs__speaker">Speaker — {p.speaker}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}