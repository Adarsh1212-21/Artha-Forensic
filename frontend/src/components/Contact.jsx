import React from "react";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v11.52H3V8.98zm7.2 0h3.83v1.58h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.9h-4v-6.12c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.24v6.22h-4V8.98z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.27-.1-.46-.15-.66.15-.2.3-.75.95-.92 1.14-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.5.71.3 1.27.5 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.13-.27-.2-.56-.34z" />
      <path d="M12 2.5A9.5 9.5 0 003.4 16.6L2.5 21.5l5-1.3A9.5 9.5 0 1012 2.5zm0 1.8a7.7 7.7 0 11-3.9 14.3l-.3-.18-2.9.76.78-2.83-.2-.3A7.7 7.7 0 0112 4.3z" />
    </svg>
  ),
};

const channels = [
  { key: "email", label: "Email", value: "arthaforensic@gmail.com", href: "mailto:arthaforensic@gmail.com" },
  { key: "instagram", label: "Instagram", value: "@artha_forensic", href: "https://instagram.com/artha_forensic" },
  { key: "linkedin", label: "LinkedIn", value: "@arthaforensic", href: "https://linkedin.com/company/arthaforensic" },
  { key: "whatsapp", label: "WhatsApp", value: "+91 91407 35621", href: "https://wa.me/919140735621" },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid reveal" ref={ref}>
        <div className="contact__info">
          <div className="section-eyebrow">
            <span
              className="evidence-tag"
              style={{ background: "var(--ink)", color: "var(--rose)", borderColor: "var(--rose)" }}
            >
              Case Closed? Not Yet
            </span>
          </div>
          <h2 className="contact__heading">Contact Us</h2>
          <p className="contact__text">
            Questions about an upcoming webinar, workshop, or internship? Reach out to us
            directly through any of the channels below.
          </p>
        </div>

        <div className="contact__channels--cards">
          {channels.map((c) => (
            <a key={c.key} href={c.href} target="_blank" rel="noreferrer" className="contact__card">
              <span className="contact__icon">{icons[c.key]}</span>
              <span className="contact__card-text">
                <span className="contact__card-label">{c.label}</span>
                <span className="contact__card-value">{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}