# Requirements: Social Casino Landing Page

**Defined**: 2026-05-21
**Core Value**: Modular architecture for rapid visual re-theming with 90+ PageSpeed score.

## v1 Requirements

### Landing Page Structure (UI)
- [ ] **UI-01**: Sticky promo bar with "CLAIM OFFER" button.
- [ ] **UI-02**: Header with Logo, Login, and Sign Up buttons.
- [ ] **UI-03**: Hero section with headline, CTA ("CREATE ACCOUNT"), and special offer badge.
- [ ] **UI-04**: Social Proof section (player cards with photos and likes).
- [ ] **UI-05**: Games & Providers sections (game grid, partner logos).
- [ ] **UI-06**: Footer with compliance links (Responsible Social Gameplay, Terms, Privacy) and 18+ disclaimer.
- [ ] **UI-07**: Accordion-style FAQ section.

### Registration Flow (REG)
- [ ] **REG-01**: 3-step form with 4-point progress indicator.
- [ ] **REG-02**: Step 1: Email (validation) and Password (toggle visibility) + Required Checkboxes.
- [ ] **REG-03**: Step 2: First Name, Last Name, Date of Birth (Age validation 18+).
- [ ] **REG-04**: Step 3: Address, City, Postal Code, State (USA list), Phone (+1 prefix).
- [ ] **REG-05**: Post-registration purchase offer screen with mock payment CTA.
- [ ] **REG-06**: Error handling and loading states for form submission.

### Integration (INT)
- [ ] **INT-01**: Form data submission to Google Sheets API / Apps Script.
- [ ] **INT-02**: Inclusion of timestamp and site version/source in submitted data.

### Theming & Content (THEME)
- [ ] **THEME-01**: Design token system (CSS Variables) for colors, fonts, spacing.
- [ ] **THEME-02**: Content configuration file (all texts and image references outside components).
- [ ] **THEME-V1**: Implementation of SpinQuest visual style.
- [ ] **THEME-V2**: Implementation of "Luck Is a Journey" visual style.

### Performance & Quality (PERF)
- [ ] **PERF-01**: PageSpeed Mobile score ≥ 90.
- [ ] **PERF-02**: Image optimization (WebP, proper sizing).
- [ ] **PERF-03**: SEO metadata (Title, Description, Favicon).

## Out of Scope

| Feature | Reason |
|---------|--------|
| Live Games | Focus is on landing page and registration conversion only. |
| User Dashboard | Post-registration experience limited to purchase offer screen. |
| JWT/Database Auth | Data persistence is handled via Google Sheets; no real login logic. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| UI-01, UI-02, UI-03 | Phase 1 | Pending |
| UI-04, UI-05, UI-06, UI-07 | Phase 2 | Pending |
| REG-01, REG-02, REG-03, REG-04 | Phase 3 | Pending |
| INT-01, INT-02, REG-05, REG-06 | Phase 4 | Pending |
| THEME-01, THEME-02, THEME-V1 | Phase 5 | Pending |
| THEME-V2 | Phase 6 | Pending |
| PERF-01, PERF-02, PERF-03 | Phase 7 | Pending |

**Coverage:**
- v1 requirements: 20 total
- Mapped to phases: 20
- Unmapped: 0 ✓

---
*Requirements defined: 2026-05-21*
*Last updated: 2026-05-21 after initial definition*
