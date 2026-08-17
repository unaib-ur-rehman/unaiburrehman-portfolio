# Implementation Prompt — Portfolio (Next.js + Tailwind + Framer Motion)

Use the claude_design MCP (https://api.anthropic.com/v1/design/mcp, auth via /design-login) to import this project:
https://claude.ai/design/p/51cc4bda-e010-4e29-b68f-2b182dbe6541?file=Portfolio.dc.html

Focus on these files (the whole project is readable):
- `Portfolio.dc.html`

Also read these files the selection imports:
- `image-slot.js`
- `support.js`

Implement: `Portfolio.dc.html`

---

Build a single-page personal portfolio site for **Unaib ur Rehman**, an experienced Full-Stack Developer and Designer.

## Stack

- **Next.js 14+** (App Router, TypeScript, `app/` directory)
- **Tailwind CSS** for all styling — no CSS modules, no styled-components
- **Framer Motion** for animation
- `next/font/google` for typography (no `<link>` tags)
- Single page at `app/page.tsx`, composed of section components in `components/`
- Fully responsive, 320px → 1920px. No horizontal overflow at any width.
- Semantic HTML, keyboard accessible, respects `prefers-reduced-motion`

## Design language

Editorial brutalist-minimal. Warm off-white paper, near-black ink, one hot accent. Enormous display type, thin hairline rules between sections, generous vertical rhythm, monospace labels. No gradients, no drop shadows except on the modal, no decorative illustration.

### Color tokens

Define as CSS variables on `:root` and `[data-theme="dark"]`, then expose to Tailwind via `theme.extend.colors` so classes like `bg-paper text-ink border-line` work.

| Token | Light | Dark |
|---|---|---|
| `--accent` | `#E8452A` | `#E8452A` |
| `--ink` (text) | `#16150F` | `#F3F1EA` |
| `--paper` (background) | `#F6F4EF` | `#121210` |
| `--muted` (secondary text) | `#6B6860` | `#9A968C` |
| `--line` (hairlines) | `rgba(0,0,0,.12)` | `rgba(255,255,255,.14)` |

Note the inversion: in dark mode `--ink` becomes the light color and `--paper` the dark one, so every `bg-paper` / `text-ink` pairing flips automatically. Ship a theme toggle in the nav that persists to `localStorage` and respects `prefers-color-scheme` on first visit.

Selection color: accent background, white text.

### Typography

| Family | Weights | Used for |
|---|---|---|
| **Bricolage Grotesque** | 400, 600, 700, 800 | Display headings, section headings, card titles, logo |
| **Instrument Sans** | 400, 500, 600 | Body copy, buttons, links |
| **Space Mono** | 400, 700 | Eyebrow labels, section numbers, years, tags, chips, arrows |

Headings use tight tracking (`-0.02em` to `-0.035em`) and tight leading (`0.92`–`1.1`). Body copy is `1.55`–`1.65` leading. Fluid sizing throughout with `clamp()`.

## Page structure

Sections are numbered with a monospace eyebrow in the format `01 — About`, where the number is in accent color and the label is uppercase, letter-spaced `0.06em`, muted. Every section is separated by a 1px `--line` top border and padded `clamp(50px, 9vh, 96px)` vertically. Content is capped at `max-width: 1200px` with `clamp(20px, 5vw, 64px)` horizontal padding.

### Sticky nav

Full-width, sticky at top, `z-50`. Background is the paper color at ~88% opacity with `backdrop-blur`. 1px bottom hairline.

- **Left:** a 9px accent dot + "Unaib ur Rehman" in Bricolage Grotesque 800, 18px.
- **Right:** monospace 12.5px links — About, Skills, Work, Dev, Design, Certs — at 72% opacity, plus a "Get in touch" pill button with a 1px ink border and full rounding. Add the theme toggle here.
- Links must never break mid-word (`whitespace-nowrap`); the whole bar wraps to two rows on narrow screens rather than overflowing.
- Smooth-scroll to anchors; every section needs `scroll-margin-top: 90px`.

### Hero

- Eyebrow row: a short 26px rule, then `PORTFOLIO — 2026` in monospace uppercase, and pushed to the far right an "Available for work" status with a pulsing accent dot (accent dot with a soft accent halo ring).
- Headline, Bricolage Grotesque 800, `clamp(52px, 11vw, 148px)`, leading `0.92`, three lines:
  > Full-Stack
  > Developer **&** Designer
  
  The ampersand is accent-colored.
- Below, a two-column footer row (wraps on mobile): left is an intro paragraph at `clamp(17px, 1.5vw, 20px)` —
  > I'm **Unaib ur Rehman** — an experienced full-stack developer who also designs. I build products end to end: React front ends, Node.js APIs, and the interfaces that hold them together.
  
  Right is two pill buttons: "View work →" (solid ink fill, paper text) and "Contact" (outlined).

### 01 — About

Two columns: narrow monospace label rail on the left, content on the right (stacks on mobile).

- Lead statement in Bricolage Grotesque 500 at `clamp(22px, 2.6vw, 34px)`:
  > An experienced Full-Stack Developer — shipping production apps across the stack, with a designer's eye for the interface.
- Body paragraph in muted:
  > I work end to end: architecting APIs and data models in Node.js, building fast React front ends, and designing the UI myself when it needs to be right. Owning both sides means fewer handoffs and better products. Outside of work, I'm passionate about cricket, football, entrepreneurship, and good food.
- A row of outlined monospace pill tags: Cricket, Football, Entrepreneurship, Good food.

### 02 — Engineering & Design Stack

Three auto-fitting columns (`minmax(min(100%, 230px), 1fr)`). Each has a numbered heading (accent monospace number + Bricolage Grotesque 700 title) and a list where each item sits on its own row with a 1px bottom hairline.

1. **Frontend** — JavaScript (ES6+), React.js, HTML & CSS, State Management, Responsive Design
2. **Backend** — Node.js, REST APIs, Databases & Data Modeling, Authentication, Deployment
3. **Design & Tooling** — UI / UX Design, Figma, Photoshop & Illustrator, Git & GitHub

### 03 — Experience

A stack of rows separated by hairlines. Each row is a three-part flex layout: monospace year range (110px fixed), role title + description, and the company name right-aligned in semibold. On mobile it collapses so the year and company sit on one line and the title/description block drops below.

| Years | Role | Company | Description |
|---|---|---|---|
| 2023 — Now | Full-Stack Developer | Company Name | Building and shipping production features across the stack — React front ends backed by Node.js services and APIs. |
| 2022 — 2023 | Frontend Developer | Company Name | Developed responsive, component-driven interfaces in React and integrated them against REST APIs. |
| 2021 — 2022 | Developer & Designer, Freelance | Self-employed | Delivered full web products for clients end to end — from UI design through frontend build and backend integration. |

### 04 — Development Projects

Auto-fitting card grid (`minmax(min(100%, 290px), 1fr)`, gap `clamp(16px, 2vw, 24px)`). Each card is a button: rounded `18px`, 1px line border, a background 3% tinted toward ink, `min-height: 210px`, padded `clamp(24px, 3vw, 34px)`.

Card top row: accent monospace tech tag on the left, muted "View details →" on the right. Bottom: project title in Bricolage Grotesque 700 at `clamp(22px, 2.2vw, 28px)`, then a one-line muted description.

Clicking anywhere on the card opens the project modal.

Four placeholder projects — stacks: `React + Node`, `React · API`, `Node.js · Backend`, `Full-Stack`. Each links to `https://github.com/unaib-ur-rehman/`.

### 05 — UI / UX Projects

Same grid, different card anatomy — these are visual case studies.

The eyebrow row reads `05 — UI / UX Projects` with a lowercase note beside it: "Open a case study for full details".

Each card, top to bottom:
1. A 4:3 mockup image area, full-bleed to the card edges, with a 1px bottom hairline. Use `next/image` with a placeholder until real assets exist.
2. Padded content: accent monospace tag, title in Bricolage Grotesque 700, one-line muted description, then a "Case study →" outlined monospace pill button, self-aligned left, that inverts to solid ink on hover.

**Important:** the open-modal handler goes on the "Case study →" button only, never on the image area or the card wrapper — the image stays independently interactive and there is no nested-button markup.

Four placeholder case studies — tags: `Mobile App · UI/UX`, `Web App · UI/UX`, `Dashboard · UI`, `Branding · Visual`. Each links to `https://www.behance.net/unaiburrehman`.

### Project detail modal

Shared by both project sections, driven by a single piece of state holding the active project (`null` when closed).

- Fixed overlay, `z-200`, ink at 62% opacity with `backdrop-blur`, scrollable, content aligned to the top with `clamp(12px, 4vh, 48px)` padding.
- Dialog panel: `max-width: 860px`, paper background, `22px` radius, `overflow-hidden`, a large soft shadow (`0 30px 80px rgba(0,0,0,.35)`).
- **Header:** accent monospace kind label ("Development Project" / "UI / UX Case Study"), title in Bricolage Grotesque 800 at `clamp(26px, 4vw, 42px)`, and a 42px circular outlined close button on the right. 1px bottom hairline.
- **Mockup:** full-width 16:9 image area, hairline below.
- **Body** (`clamp(22px, 3.4vw, 36px)` padding, stacked with `clamp(24px, 3vw, 32px)` gaps):
  - "Overview" monospace label + a detail paragraph at 16.5px.
  - "Tech stack" monospace label + a wrapping row of outlined monospace pill chips.
  - Action row: a solid ink pill linking out ("View repository ↗" / "View on Behance ↗") and an outlined "Close" button.
- Behavior: closes on the ✕, on backdrop click, and on `Escape`. Body scroll locks while open and **must reliably unlock on every close path**. Trap focus inside the dialog and restore focus to the triggering button on close. Use `role="dialog"` + `aria-modal="true"` + `aria-labelledby`.

### 06 — Education

Same row pattern as Experience but two columns: monospace year range, then degree (Bricolage Grotesque 700) over school name in muted. Two placeholder entries.

### 07 — Certifications

Auto-fitting card grid (`minmax(min(100%, 270px), 1fr)`). Each card: 1px border, `18px` radius, `min-height: 170px`, and inside — a top row with accent issuer and muted year in monospace, the certification name in Bricolage Grotesque 700 pushed to fill, and a monospace credential ID line above a hairline at the bottom. Four placeholder entries.

### Footer / contact

Full-bleed **ink background with paper text** (inverted from the page), `clamp(64px, 12vh, 130px)` top padding, rounded off the page flow.

- "Get in touch" monospace eyebrow at 60% opacity.
- Headline in Bricolage Grotesque 800 at `clamp(44px, 8vw, 108px)`, leading `0.95`:
  > Let's build
  > something **bold.**
  
  with "bold." in accent.
- **Social grid:** auto-fitting `minmax(min(100%, 210px), 1fr)` with a `1px` gap. Draw the hairlines by giving the *container* the ink background and each tile an inset `0 0 0 1px rgba(255,255,255,.14)` ring — this way any empty grid cell is invisible. Six tiles, each a row with the label in semibold left and a `↗` at 55% opacity right, hover lightens the tile:

  | Label | URL |
  |---|---|
  | GitHub | https://github.com/unaib-ur-rehman/ |
  | LinkedIn | https://www.linkedin.com/in/unaib-ur-rehman31/ |
  | Behance | https://www.behance.net/unaiburrehman |
  | Stack Overflow | https://stackoverflow.com/users/23595049/rehman-unaib |
  | Instagram | https://www.instagram.com/unaiburrehman31/ |
  | Email | *(placeholder — `mailto:your@email.com`)* |

- Bottom bar above a hairline: "© 2026 Unaib ur Rehman" left, "Back to top ↑" right, both monospace 12.5px at 60% opacity and both `whitespace-nowrap`.

## Animation spec (Framer Motion)

Keep it restrained and editorial. Motion should feel like paper settling, not like a product tour. Every animation below must be disabled or reduced to a plain opacity fade when `prefers-reduced-motion: reduce` is set — implement this once with a `useReducedMotion()` hook and a shared variants factory.

**Global easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, `0.4s` default duration.

1. **Hero entrance (on mount, not scroll).** Headline lines animate in individually — each line masked by `overflow-hidden` with the text rising from `y: 100%` to `0` over `0.8s`, staggered `0.08s`. Eyebrow row fades down from `y: -8` first; the intro paragraph and buttons fade up from `y: 16` after the headline, staggered `0.06s`.
2. **Section reveals.** Use `whileInView` with `viewport={{ once: true, amount: 0.15 }}`. Section eyebrows fade in from `y: 12`; content blocks follow with a `0.1s` delay. Never leave content stuck invisible if the observer doesn't fire — the fallback state must be visible.
3. **Staggered lists.** Skills columns, experience rows, education rows, certification cards and project cards each animate as a container with `staggerChildren: 0.06`, children fading up from `y: 20`.
4. **Card hover.** Project and certification cards lift `y: -3` and shift their border to accent over `0.25s`. UI/UX card images scale to `1.03` inside their `overflow-hidden` frame on card hover. Use `whileHover`, and pair with `whileTap={{ scale: 0.99 }}`.
5. **Button hover.** Pills fill or invert on hover with a `0.2s` color transition. The "View work →" arrow slides `x: 4` on hover. Footer social tiles lighten their background.
6. **Modal.** Wrap in `AnimatePresence`. Backdrop fades `0 → 1` over `0.2s`; the panel springs in from `opacity: 0, scale: 0.96, y: 16` with a spring (`stiffness: 300, damping: 30`). Exit reverses in `0.15s`. Modal body sections stagger in `0.04s` apart.
7. **Status dot.** The "Available for work" dot pulses its halo ring infinitely — `scale: 1 → 1.6`, `opacity: 0.4 → 0` over `2s`, easing out, repeating.
8. **Nav.** On scroll past the hero, the nav's bottom hairline fades in and the bar tightens its vertical padding slightly (`18px → 12px`) with a `0.25s` transition.
9. **Scroll progress.** A 2px accent bar pinned to the very top of the viewport, driven by `useScroll()` `scaleX`.

## Data

Keep all content in a typed `lib/content.ts` module — `profile`, `skills`, `experience`, `devProjects`, `designProjects`, `education`, `certifications`, `socials` — so copy edits never touch JSX. Project objects should carry: `id`, `tag`, `name`, `desc`, `detail`, `stack: string[]`, `link`, `linkLabel`, `kind`, `image`.

Everything marked *placeholder* above (company names, project titles, project details, education entries, certifications, the email address) should be left as clearly labeled placeholder text for the owner to fill in.

## Deliverables

- `app/layout.tsx` — fonts, metadata, theme script (no flash of wrong theme)
- `app/page.tsx` — section composition
- `components/` — `Nav`, `Hero`, `About`, `Skills`, `Experience`, `DevProjects`, `DesignProjects`, `Education`, `Certifications`, `Footer`, `ProjectModal`, `ThemeToggle`, `Reveal` (shared scroll-reveal wrapper)
- `lib/content.ts`, `lib/motion.ts` (shared variants)
- `tailwind.config.ts` with the color tokens, font families and fluid type scale wired up
