# Research: Phase 1 - Foundation & Scaffolding

## Theme Switching Architecture

For Next.js App Router and Vanilla CSS:
- **Design Tokens**: Defined in `styles/tokens.css` using CSS variables.
- **Theme Definitions**: `styles/themes/v1.css` and `styles/themes/v2.css` containing overrides for the tokens.
- **Root Layout**: Injects a script to apply the theme based on an environment variable or URL parameter (since we need separate links for V1 and V2).
- **Performance**: Vanilla CSS variables have zero runtime overhead in JS. Using `next/font` for typography optimization.

## Content Management

- **Config**: `config/content.ts` exporting a structured object.
- **Localization**: Not required (US English only), but structure should allow it.
- **Assets**: Images will be referenced by keys in the config to allow different images per theme.

## Component Strategy

- **Atomic Components**: Button, Input, ProgressIndicator.
- **Layout Components**: Header, Footer, StickyBar.
- **Theme Provider**: A simple wrapper or body attribute manager.

## Quality Gates

- No inline styles.
- CSS variables for all colors/fonts.
- All text keys present in `content.ts`.
