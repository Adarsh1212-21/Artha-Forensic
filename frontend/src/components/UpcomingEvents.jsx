import React from "react";
import useReveal from "../hooks/useReveal";
import "./UpcomingEvents.css";

const EVENTS = [
  {
    icon: "💻",
    tag: "Workshop",
    title: "Modern Forensic Science & Digital Forensic Investigation",
    meta: "Sat, 25 July 2026 · 7–8 PM · Google Meet",
    href: "#event-digital-forensic-workshop",
  },
  {
    icon: "📚",
    tag: "Course",
    title: "CUET PG Six Month Online Course",
    meta: "Begins 1 August",
    href: "#event-cuet-course",
  },
];

export default function UpcomingEvents() {
  const ref = useReveal();

  return (
    <section id="upcoming-events" className="upcoming">
      <div className="container reveal" ref={ref}>
        <div className="section-eyebrow">
          
        </div>
        <h2 className="upcoming__heading">Upcoming Events</h2>
        <p className="upcoming__sub">Webinars, workshops &amp; internships happening soon</p>

        <div className="upcoming__grid">
          {EVENTS.map((event) => (
            <a href={event.href} className="upcoming__card" key={event.title}>
              <span className="upcoming__icon">{event.icon}</span>
              <span className="upcoming__tag">{event.tag}</span>
              <h3 className="upcoming__title">{event.title}</h3>
              <span className="upcoming__meta">{event.meta}</span>
              <span className="upcoming__link">Learn More &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}