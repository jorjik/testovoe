# Social Casino Landing Page (US)

## What This Is

A high-performance landing page for a social casino (sweepstakes) product targeting the US market. The project includes a lander, a multi-step registration flow, and a post-registration offer screen, all designed for rapid visual adaptation between two distinct styles (v1: SpinQuest, v2: Luck Is a Journey).

## Core Value

Modular architecture that enables near-instant visual re-theming without разметка changes, while maintaining top-tier PageSpeed performance (Mobile 90+).

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Responsive landing page structure (v1 style: SpinQuest)
- [ ] Multi-step registration flow (3 steps with progress indicator)
- [ ] Post-registration purchase offer screen
- [ ] Google Sheets integration for form data collection
- [ ] Theming system (v2 style: Luck Is a Journey)
- [ ] Performance optimization (SEO, Image opt, Critical CSS)

### Out of Scope

- [ ] Real payment integration — [Only mock CTA required]
- [ ] User dashboard/games functional — [Landing page and registration only]
- [ ] Backend database — [Google Sheets is the designated data store]

## Context

- **Market**: US (Social Casino / Sweepstakes model)
- **Compliance**: Age verification (18+), "No Purchase Necessary" disclaimers, Responsible Social Gameplay links.
- **Visuals**: Modern, high-trust, premium aesthetics.
- **Reference**: SpinQuest (lander structure), Luck Is a Journey (visual style adaptation).

## Constraints

- **Performance**: Lighthouse Mobile Score ≥ 90 (Hard requirement).
- **First Load**: Initial bundle size ≤ 700 KB (Recommended), 1 MB max.
- **Tech Stack**: Next.js (App Router), TypeScript, Vanilla CSS (as per TZ/User context).
- **Hosting**: Static/SSG (Vercel/Netlify/Cloudflare).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js App Router | Modern, fast, SEO-friendly, easy static export. | — Pending |
| Vanilla CSS Variables | Low overhead, fulfills the requirement for easy re-theming via design tokens. | — Pending |
| Google Sheets via Apps Script | Lightweight backend solution for static hosting. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone**:
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-21 after initialization*
