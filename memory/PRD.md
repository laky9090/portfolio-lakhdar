# PRD — Portfolio Lakhdar DAMAR

## Problem statement (original)
> "peux-tu faire un beau design avec une vraie claque visuelle, un portfolio, une vraie claque visuel. Je suis freelance et j'aimerais pouvoir le partager aux recruteurs à chaque fois. Je veux qu'il soit très vendeur et qu'on a envie de m'embaucher en tombant sur la page."

## Persona
- **User**: Lakhdar DAMAR — freelance senior IT Infrastructure Project Manager
- **Audience**: Recruiters & decision makers (DSI, Head of Infra, PMO) in regulated industries (Banking, Insurance, Pharma, Industry).

## Core requirements
- Single-page premium portfolio, "vendeur" (selling) on first scroll
- Dark mode premium tech + editorial luxe (Fraunces serif + Inter + JetBrains Mono, charcoal #0A0A0C, champagne gold #D4AF37, electric cyan #00E5FF accents)
- Sections: Hero, Profil, Pourquoi me recruter (chiffres clés animés), Expertises clés, Stack technique, Parcours (timeline), Certifications/Formations/Langues, Témoignages, Contact (formulaire)
- Functional contact form persisted to MongoDB
- All data extracted from provided CV (AXA, Sanofi, Abeille Assurances, BNP, TotalEnergies, Lacoste, Corelia, Gebo Cermex)

## What's implemented (2026-06-10)
- Backend FastAPI: `GET /api/`, `GET /api/health`, `POST /api/contact`, `GET /api/contact` — all validated by testing_agent (11/11 pytest passing)
- Frontend single-page portfolio with 9 sections, animated counter, marquee logo strip, alternating timeline with company logos (Clearbit), filterable tech stack, glassmorphism cards, grain overlay
- Sticky glass nav with mobile menu
- Sonner toaster + functional contact form with validation
- All interactive elements carry `data-testid`

## Placeholders / TODO (next iterations)
- Real contact details (email, phone, LinkedIn URL, location) — currently `contact@lakhdar-damar.fr`, `+33 6 00 00 00 00`, etc.
- Real profile photo (avatar uses initials "L")
- Real Resend integration for sending email notifications on form submission
- Real testimonials with named references
- Optional: PDF CV download, blog/articles section, multi-language EN version

## Prioritized backlog
- **P0** — Plug real contact info + photo
- **P0** — Wire Resend email forwarding for the contact form
- **P1** — Add downloadable PDF CV button in Hero & Nav
- **P1** — Add EN language toggle (key recruiters are international)
- **P2** — Blog / case studies with markdown content
- **P2** — Analytics dashboard for the freelancer (anonymous visit insights)
