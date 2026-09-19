# Optimum Sync website

Company website: Home, Services (4 detail pages), About, Blog, Contact and an AI chat assistant.
Built with React, Vite, Tailwind CSS v4 and React Router. Deployed on Vercel.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run format     # Prettier
```

## Folder structure

```
src/
├── components/
│   ├── layout/   Navbar, Footer, Layout, Logo
│   ├── ui/       Button, Container, Section, SectionHeading, PageHeader,
│   │             Card, Input, Badge, Accordion, Reveal
│   └── chat/     ChatWidget (P6)
├── data/         navigation.js  (menu links, the 4 services, contact info, socials)
├── hooks/        usePageTitle.js
├── pages/        Home, Services, ServiceDetail, About, Blog, Contact, Privacy, Terms, NotFound
├── styles/       index.css      (brand colors, fonts, gradients)
├── App.jsx       routes
└── main.jsx
```

## Who owns what

| Person | Owns |
| --- | --- |
| P1 | Project setup, routing, design tokens, `layout/`, `ui/`, `data/navigation.js`, `vercel.json` |
| P2 | `pages/Home.jsx` and its sections |
| P3 | `pages/Services.jsx`, `pages/ServiceDetail.jsx`, service enquiry flow |
| P4 | `pages/About.jsx` (mission, Why Us, process, case studies) |
| P5 | `pages/Contact.jsx`, `pages/Blog.jsx`, FAQ, WhatsApp |
| P6 | `components/chat/ChatWidget.jsx`, AI API, GitHub Actions, Vercel |

Need something changed in another person's area? Ask them or open a small PR to their files.

## Using the UI kit

Colors come from `styles/index.css` (the pastel palette from the brand sheet), so use classes like `bg-brand`, `text-charcoal`, `bg-pale-mint`, `border-light-gray`, `text-text-secondary`. Don't hard-code hex values.

| Class name | Hex | Use it for |
| --- | --- | --- |
| `charcoal` | #1F2937 | Headings, navbar, footer, icons |
| `brand` | #209FE3 | Buttons, links, active states |
| `mint` | #5EEAD4 | Highlights, icons, accents |
| `pale-blue` | #E6F7FF | Section backgrounds, hero areas |
| `pale-mint` | #E8FBF6 | Card backgrounds, info sections |
| `off-white` | #F8FAFC | Page background (set on `body`) |
| `light-gray` | #E2E8F0 | Borders, dividers, input fields |
| `slate` | #94A3B8 | Secondary text, icons |
| `soft-gray` | #F1F5F9 | Hover states, disabled elements |
| `text-primary` / `text-secondary` / `text-muted` | #111827 / #64748B / #94A3B8 | Text |
| `success` / `error` / `warning` / `info` | #10B981 / #F87171 / #FBBF24 / #A78BFA | Status |
| `sky-blue` / `teal-mint` / `lavender` | #93C5FD / #A7F3D0 / #C7D2FE | Accents, badges, charts |
| `brand-light`, `brand-dark`, `ink` | #38BDF8 / #1479B0 / #111827 | Helpers: gradient end, hover and small blue text, darkest surface |

Gradients: `bg-blue-gradient` (hero, buttons) and `bg-mint-gradient` (cards, banners).
White text on `brand` is fairly low contrast (about 2.9:1). Use it for large or bold text and buttons. For small blue text on white, use `text-brand-dark`.

```jsx
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import PageHeader from "../components/ui/PageHeader";
import usePageTitle from "../hooks/usePageTitle";

export default function Example() {
  usePageTitle("Example", "One-sentence description for search results.");
  return (
    <>
      <PageHeader title="Example" subtitle="Short intro." crumbs={[{ label: "Example" }]} />
      <Section id="details" title="Details" bg="gray">
        <Button to="/contact">Get started</Button>
      </Section>
    </>
  );
}
```

| Component | Use it for | Key props |
| --- | --- | --- |
| `Button` | Every button and link-button | `variant` (primary, secondary, outline, dark), `to` (internal), `href` (external) |
| `Container` | Standard page width and side padding | `className` |
| `Section` | A page section with optional title | `id`, `title`, `subtitle`, `bg` (white, gray, blue, mint, dark) |
| `SectionHeading` | A heading block inside custom layouts | `title`, `subtitle`, `align`, `dark` |
| `PageHeader` | Top banner of every inner page | `title`, `subtitle`, `crumbs`, children for buttons |
| `Card` | Content card with hover lift | `className` |
| `Input` | Form fields (also `as="textarea"`) | `label`, `error`, any input prop |
| `Badge` | Tags, blog categories, statuses | `tone` (blue, mint, lavender, gray, success, warning, error, info) |
| `Accordion` | FAQ and process steps | `items=[{ q, a }]`, `allowMultiple`, `defaultOpen` |
| `Reveal` | Scroll-in animation. Use sparingly | `delay` (ms), `as` |

Rules:
- Every page calls `usePageTitle(...)` at the top.
- Keep the section ids that the footer links to: `#why-us` and `#case-studies` on About, `#faq` on Contact.
- Services are defined once in `data/navigation.js` (exactly 4). Change them there and the navbar, footer and Services page update together.
- The chat button sits bottom-right at `z-40`. Don't put other fixed elements in that corner.

## Git workflow

- Branches: `feature/<area>` (for example `feature/home-page`, `feature/services`). Never commit straight to `main`.
- Commit messages: `feat:`, `fix:`, `style:`, `docs:`, `chore:` followed by a short description.
- Open a pull request for every branch and have one teammate review it before merging.
- Pull `main` before you start work each day and before you open a PR.

## Deployment

Vercel builds from `main`. `vercel.json` rewrites every path to `index.html`, so refreshing on `/services/web-development` works. Add secrets (for example `AI_API_KEY`) in the Vercel project settings, not in the repo. Update the `og:image` URL in `index.html` after the first deploy.
