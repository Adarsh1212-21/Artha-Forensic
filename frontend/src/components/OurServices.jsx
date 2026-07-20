import React from "react";
import useReveal from "../hooks/useReveal";
import "./OurServices.css";

const CATEGORIES = [
  {
    title: "Internships",
    items: [
      {
        title: "DNA — The Blueprint of Life",
        text: "A one-month internship on DNA profiling led by Mr. Rupinder Singla (Scientific Assistant, FSL Nagpur), with 8 live sessions and a project submission.",
        image: "/images/services/internship1.jpeg",
      },
      {
        title: "Forensic Science Virtual Internship",
        text: "A one-month program exploring toxicology, ballistics, and medicine with Ms. Madhuri Vagal (Forensic Scientist & Clinical Psychologist). Live classes 3 days a week with certification.",
        image: "/images/services/internship2.jpeg",
      },
    ],
  },
  {
    title: "Courses & Workshops",
    items: [
      {
        title: "CUET PG Online Course",
        text: "A six-month complete CUET PG preparation batch led by expert faculty from NFSU and BHU, with live classes, doubt-solving mentorship, and curated notes and PDFs. Includes regular mock tests, PYQ discussions, and personalized university guidance for institutions like NFSU and BHU.",
        image: "/images/services/course1.jpeg",
        imageHeight: "450px",
      },
      {
        title: "Decoding Death: Workshop",
        text: "A 2-day workshop on thanatology and medico-legal reports, led by Dr. Shivam Dwivedi (Assistant Professor, Chandigarh University).",
        image: "/images/services/workshop1.jpeg",
      },
      {
        title: "Forensic Anthropology Workshop",
        text: "A 2-day workshop on skeletal analysis for biological profile reconstruction, led by Dr. Anjali Sehrawat — accessible for non-medical students too.",
        image: "/images/services/workshop2.jpeg",
      },
    ],
  },
  {
    title: "Collaborations",
    items: [
      {
        title: "Forensic Fusion 3.0",
        text: "A media collaboration with Mody University's Department of Forensic Science — where science meets creativity.",
        image: "/images/services/collaboration1.jpeg",
      },
      {
        title: "EDFMCI-2026 National Seminar",
        text: "A media collaboration with the Dr. A.P.J. Abdul Kalam Institute of Forensic Science & Criminology, Bundelkhand University.",
        image: "/images/services/collaboration2.jpeg",
      },
    ],
  },
];

// If the category has an odd number of items, the first one renders alone,
// then the rest are paired up two-by-two.
function chunkPairs(items) {
  const pairs = [];
  let rest = items;

  if (items.length % 2 !== 0) {
    pairs.push([items[0]]);
    rest = items.slice(1);
  }

  for (let i = 0; i < rest.length; i += 2) {
    pairs.push(rest.slice(i, i + 2));
  }

  return pairs;
}

function Thumb({ item }) {
  return (
    <div
      className="duo__thumb"
      style={{
        backgroundImage: `url('${item.image}')`,
        ...(item.imageHeight ? { height: item.imageHeight } : {}),
      }}
    />
  );
}

function Note({ item }) {
  return (
    <div className="duo__note">
      <h4>{item.title}</h4>
      <p>{item.text}</p>
    </div>
  );
}

function ServicePair({ pair }) {
  const [first, second] = pair;

  if (!second) {
    // Odd one out — simple single photo + note row
    return (
      <div className="duo duo--single">
        <Thumb item={first} />
        <Note item={first} />
      </div>
    );
  }

  // Flat DOM order: photo, note, photo, note.
  // Desktop CSS (grid) rearranges this into thumb / stacked-notes / thumb.
  // Mobile CSS lets this natural order flow top to bottom, unchanged.
  return (
    <div className="duo">
      <Thumb item={first} />
      <Note item={first} />
      <Thumb item={second} />
      <Note item={second} />
    </div>
  );
}

export default function OurServices() {
  const ref = useReveal();

  return (
    <section id="services" className="our-services">
      <div className="our-services__heading-wrap">
        <div className="section-eyebrow">
          <span className="evidence-tag">Exhibit D</span>
        </div>
        <h2 className="our-services__heading">Our Services</h2>
        <p className="our-services__sub">Internships, courses, workshops &amp; collaborations</p>
      </div>

      <div className="our-services__inner reveal" ref={ref}>
        {CATEGORIES.map((cat) => (
          <div className="service-category" key={cat.title}>
            <h3 className="service-category__title">{cat.title}</h3>
            <div className="service-category__pairs">
              {chunkPairs(cat.items).map((pair, i) => (
                <ServicePair pair={pair} key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}