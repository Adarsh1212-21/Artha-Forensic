import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {new Date().getFullYear()} Artha Forensic. All rights reserved.</span>
        <span className="footer__tag">Building Forensic Minds, Shaping Legal Futures</span>
      </div>
    </footer>
  );
}
