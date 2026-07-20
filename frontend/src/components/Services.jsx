import React from "react";
import useReveal from "../hooks/useReveal";
import "./Services.css";

const services = [
  {
    tag: "01",
    title: "Webinars",
    text: "Live sessions exploring toxicology, fingerprint patterns, and forensic investigation practices, led by practicing experts and academics.",
  },
  {
    tag: "02",
    title: "Quizzes",
    text: "Engaging forensic quizzes designed for learning and self-assessment, with e-certificates for active participants.",
  },
  {
    tag: "03",
    title: "Workshops",
    text: "Hands-on, multi-day workshops covering forensic anthropology, crime scene reconstruction, and medico-legal conclusions.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="services">
      <div className="container reveal" ref={ref}>
        <div className="section-eyebrow">
          <span className="evidence-tag">Exhibit D</span>
        </div>
        <h2 className="services__heading">Our Services</h2>
        <p className="services__sub">Webinars, quizzes and workshops</p>

        <div className="services__grid">
          {services.map((s) => (
            <div className="services__card" key={s.tag}>
              <span className="services__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
