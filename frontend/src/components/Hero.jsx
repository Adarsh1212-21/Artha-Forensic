import React from "react";
import ExpertisePanel from "./ExpertisePanel.jsx";
import "./Hero.css";

function AnimatedWord({ text, delayStart }) {
  return (
    <span className="hero__word">
      {text.split("").map((letter, i) => {
        // Groups of 3 letters, alternating white/pink, restarting at each word
        const groupIndex = Math.floor(i / 3);
        const isPink = groupIndex % 2 === 1;
        return (
          <span
            key={i}
            className={`hero__letter ${isPink ? "hero__letter--pink" : "hero__letter--white"}`}
            style={{ animationDelay: `${(delayStart + i) * 0.06}s` }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
}


export default function Hero() {
  return (
    <section id="top" className="hero">
      {/*
        Add your hero photograph at:
        frontend/public/images/hero.jpg
        (recommended: a dark, high-contrast forensic scene, matches brochure cover)
      */}
      <div className="hero__bg" style={{ backgroundImage: "url('/images/services/hero.png')" }} />
      <div className="hero__scrim" />

      <ExpertisePanel />



      <div className="container hero__content">
        <div className="hero__labels">
          <span>Educational Excellence</span>
          <span className="dot" />
          <span>Forensic Science</span>
          <span className="dot" />
          <span>Legal Awareness</span>
        </div>

        <h1 className="hero__title">
          <AnimatedWord text="Artha" delayStart={0} />
          <br />
          <AnimatedWord text="Forensic" delayStart={5} />
        </h1>

        <p className="hero__tagline">Empowering Justice Through Science &amp; Technology</p>

        <div className="hero__banner">
          <span className="evidence-tag">Case File #01</span>
          <h2 className="hero__subtitle">Building Forensic Minds, Shaping Legal Futures</h2>
        </div>

        <div className="hero__meta">
          <span>Webinars</span>
          <span>Quizzes</span>
          <span>Courses</span>
          <span>Internships</span>
        </div>

        <div className="hero__cta">
          <a href="#services" className="btn btn-primary">
            Explore Programs
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
