# Personal One-Pager — Георгий Гущенко

## Overview
A premium, minimalist personal website (digital business card) for Georgy Gushchenko — analytics and project management leader in fintech. Built as a static one-pager served by Express.js.

## Project Architecture
- **Frontend**: Static HTML/CSS/JS in `public/`
- **Server**: `server.js` — Express.js serving static files on port 5000
- **Spec**: `spec.md` — original content and design specification

## Key Files
- `public/index.html` — main page with all sections (hero, profile, expertise, experience, achievements, education, contact)
- `public/styles.css` — styling with "quiet luxury" aesthetic
- `public/main.js` — scroll-based fade-in animations via IntersectionObserver
- `server.js` — Express static server on port 5000

## Tech Stack
- Node.js 20
- Express.js
- Vanilla HTML/CSS/JS
- Google Fonts (Inter)

## Deployment
- Configured as static deployment serving `public/` directory

## Recent Changes
- 2026-02-06: Initial build from spec.md
