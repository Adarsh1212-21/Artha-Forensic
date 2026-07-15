# Artha Forensic — MERN Website

A full MERN stack (MongoDB, Express, React, Node) website built from the
Artha Forensic brochure: Who We Are, Our History, Mission/Vision/Future,
Services, Internships & Workshops (pulled from a live database), and a
working Contact form.

## Project structure

```
artha-forensic-mern/
├── backend/          Express + MongoDB API
│   ├── models/        Mongoose schemas (Contact, Event)
│   ├── routes/         API routes (/api/contact, /api/events)
│   └── server.js
└── frontend/          React app (Vite)
    ├── src/components/  One component per brochure section
    ├── src/hooks/        Scroll-reveal animation hook
    └── public/images/    <- Add your own images here (see README inside)
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set `MONGO_URI` to your MongoDB connection string — either a
local MongoDB instance (`mongodb://127.0.0.1:27017/artha-forensic`) or a free
MongoDB Atlas cluster.

Start the API:

```bash
npm run dev
```

The server runs on `http://localhost:5000` by default. It still starts even
without a working MongoDB connection (useful for frontend-only development),
but the contact form and events list won't persist data until MongoDB is
connected.

## 2. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

The site runs on `http://localhost:5173` and proxies `/api/*` requests to the
backend automatically (see `vite.config.js`).

## 3. Add your images

See `frontend/public/images/README.md` for the exact filenames the
components expect (hero photo, program posters, etc). Just drop files in with
matching names — no code changes required.

## 4. Populate real events (optional)

The "Internships, Workshops & Collaborations" section reads from MongoDB via
`GET /api/events`. Until you add real data it shows placeholder sample cards.
Add a real one with:

```bash
curl -X POST http://localhost:5000/api/events \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Forensic Toxicology Webinar",
    "type": "Webinar",
    "description": "Exploring toxicology and medico-legal conclusions.",
    "speaker": "Dr. Richa Mohapatra",
    "date": "2026-08-14",
    "imageUrl": "/images/programs/toxicology.jpg"
  }'
```

## 5. Building for production

```bash
cd frontend
npm run build
```

This outputs static files to `frontend/dist`, which you can serve from any
static host, or wire up Express to serve them directly from `backend/server.js`
for a single combined deployment.

## Design notes

The visual identity carries over the brochure's dark ink / deep maroon /
blush pink palette, with a recurring "evidence tag" label used to introduce
each section — a nod to the case-file and evidence-marker imagery in the
original brochure.
