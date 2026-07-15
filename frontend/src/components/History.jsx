import React from "react";
import useReveal from "../hooks/useReveal";
import "./History.css";

const beliefs = ["Practical insights", "Research exposure", "Industry interaction"];
const offerings = [
  "Specialized Workshops",
  "Professional Internships",
  "Certification Programs",
  "Academic Collaborations",
];

export default function History() {
  const ref = useReveal();

  return (
    <section id="history" className="history">
      <div className="container history__inner reveal" ref={ref}>
        <div className="section-eyebrow">
          <span className="evidence-tag" style={{ background: "var(--ink)", color: "var(--rose)", borderColor: "var(--rose)" }}>
            Exhibit B
          </span>
        </div>

        <h2 className="history__heading">Our History</h2>
        <p className="history__quote">
          &ldquo;Nurturing Minds. Advancing Justice. Building a Forensic Community.&rdquo;
        </p>

        <div className="history__grid">
          <div className="history__block">
            <h3>The Founding Vision</h3>
            <p>
              Artha Forensic was founded with a clear vision — to bridge the gap between
              academic knowledge and practical exposure in the field of forensic science.
            </p>
          </div>

          <div className="history__block">
            <h3>Moving Beyond Textbooks</h3>
            <p>Built on the belief that forensic education should include:</p>
            <ul>
              {beliefs.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="history__block">
            <h3>What We Offer</h3>
            <ul>
              {offerings.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>

          <div className="history__block">
            <h3>A Growing Community</h3>
            <p>
              From a small initiative to a growing forensic community dedicated to
              Excellence, Integrity &amp; Innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
