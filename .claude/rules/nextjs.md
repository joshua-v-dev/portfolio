---
globs: "src/**/*.ts,src/**/*.tsx"
---

# Next.js Conventions (Portfolio)

## Router
- This project uses **Pages Router** (NOT App Router)
- Pages live in `src/pages/`
- API routes in `src/pages/api/`

## Page Structure
- Wrap pages with `ThemeTemplate` layout component
- Use `SectionWrapper` and `Container` for consistent spacing
- Set page metadata via `next/head`

## Images
- Use `next/image` with sharp optimization
- Allowed domains: Cloudinary, Unsplash, TailwindUI (configured in next.config)
- SVG allowed (`dangerouslyAllowSVG: true`)

## Imports
- Use `~/` path alias (maps to `src/`)
- Never use relative paths for project imports

## Data Fetching
- Use SWR for client-side data fetching
- Use `getStaticProps`/`getServerSideProps` for page-level data
