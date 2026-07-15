# Add your images here

Drop your own images into this folder using these exact filenames (or update the
paths in the matching component if you'd rather rename them):

- `hero.jpg` — used in `src/components/Hero.jsx` as the full-bleed background
  (recommended: a dark, high-contrast forensic/investigation photo, similar to
  the brochure cover — landscape, at least 1600px wide).

- `programs/internship.jpg`, `programs/workshop.jpg`, `programs/collaboration.jpg`
  — poster-style images used as fallback cards in `src/components/Programs.jsx`
  before any real events are added to the database (4:3 aspect ratio works best).

- `programs/placeholder.jpg` — generic fallback shown if an event from the
  database doesn't have an `imageUrl` set.

Once real events are added via the backend (`POST /api/events`), each event's
`imageUrl` field can point to any image path you like (e.g. `/images/programs/webinar-toxicology.jpg`),
so you can keep adding new posters here as your program calendar grows.
