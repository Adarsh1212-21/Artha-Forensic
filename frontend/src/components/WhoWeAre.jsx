import React from "react";
import useReveal from "../hooks/useReveal";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  const ref = useReveal();

  return (
    <section id="who-we-are" className="who">
      <div className="container who__grid reveal" ref={ref}>
        <div className="who__text">
          <div className="section-eyebrow">
            <span className="evidence-tag">Exhibit A</span>
          </div>
          <h2 className="who__heading">Who We Are</h2>
          <p className="who__body">
            Artha Forensic is an educational organization dedicated to advancing forensic
            science learning through webinars, workshops, and internships. We aim to bridge
            the gap between theory and practical exposure by providing industry-relevant
            skills, expert guidance, and meaningful learning experiences for aspiring
            forensic professionals.
          </p>
        </div>

        <div className="who__journey">
          <span className="who__journey-label">Our Journey</span>
          <p className="who__journey-quote">
            &ldquo;Driven by passion, dedication, and continuous growth.&rdquo;
          </p>

          <h3 className="who__journey-title">The Evolution</h3>
          <p>
            What started as a vision soon transformed into a platform that connects
            students, experts, and institutions across India.
          </p>

          <h3 className="who__journey-title">Building a Community</h3>
          <div className="who__stats">
            <div className="who__stat">
              <span className="who__stat-number">0</span>
              <span className="who__stat-label">Followers at launch</span>
            </div>
            <div className="who__stat-arrow">&rarr;</div>
            <div className="who__stat">
              <span className="who__stat-number">2.5K+</span>
              <span className="who__stat-label">Followers on LinkedIn</span>
            </div>
          </div>

          <ul className="who__tags">
            <li>Educational Excellence</li>
            <li>Strategic Partnerships</li>
            <li>Professional Growth</li>
            <li>Expert Insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
