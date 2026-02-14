# Joshua's Portfolio — Next.js 14

## Commands
- Dev: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Format: `pnpm format` (Prettier with tailwindcss plugin)
- Type-check: `pnpm type-check` (tsc --noEmit)
- Analyze bundle: `pnpm analyze`

## Architecture
- **Framework**: Next.js 14 with **Pages Router** (NOT App Router)
- **Pages**: `src/pages/` — index, portfolio, services, pricing, gallery, contract, future, recruiter, products, 404
- **Components**: `src/components/` — 42 components (see list below)
- **Path alias**: `~/` maps to `src/` (tsconfig paths)
- **Package manager**: pnpm

## TypeScript — Strict Mode
Strict is enabled with extra checks:
- `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`
- `noImplicitReturns`, `noFallthroughCasesInSwitch`
- Target: ES2022, Module: esnext

## Styling
- Tailwind CSS 3.4 with plugins: typography, forms, aspect-ratio, line-clamp
- Custom CSS variables for theming: `--primary`, `--secondary`, `--neutralBg`, `--primaryBg`, etc.
- Accent colors: accent-1 through accent-7
- Custom breakpoints up to 7xl (6400px)
- Custom `.container` and `.btn` utilities defined in tailwind plugin
- Prettier plugin sorts Tailwind classes automatically

## 3D & Animation
- Three.js via `@react-three/fiber` for 3D elements
- Framer Motion (`framer-motion` + `motion`) for page transitions and animations
- `popmotion` for animation utilities
- `maath` for math helpers in 3D scenes

## Key Dependencies
- next-auth for authentication
- next-themes for dark/light mode
- swr for data fetching
- sharp for image optimization
- classnames + clsx for conditional classes
- date-fns for date formatting
- @heroicons/react for icons
- @vercel/analytics for analytics

## Images
- Cloudinary, Unsplash, TailwindUI domains allowed in next.config
- SVG allowed (`dangerouslyAllowSVG: true`)
- Use next/image with sharp optimization

## Components (src/components/)
Acomplishments, ArticleDate, Button, CallToAction, Card, CardContainer,
Collections, Component, Container, ContractHero, Divider, Dot, Element,
ErrorMessage, Footer, Form, FormBlock, FutureHero, FutureMain, GlassTopPicks,
Header, HomeCta, HomeHero, Keyboard, LightDarkMode, LoadingSpinner,
MobileMenu, Nav, NowPlaying, Products, Projects, Prose, Recruiter, Refresh,
SectionWrapper, Services, SimpleLayout, SlideShow, SuccessMessage,
Technologies, ThemeTemplate, TimeLine

## Conventions
- All new files must be TypeScript (.tsx for components, .ts for utilities)
- Import with `~/` alias, not relative paths
- Components are PascalCase single files in src/components/
- Use Tailwind utility classes exclusively, avoid custom CSS
- Use Framer Motion for animations, not CSS transitions
- Wrap pages with ThemeTemplate layout
- Use SectionWrapper and Container for consistent page structure
