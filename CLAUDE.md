# Joshua's Portfolio — Next.js 16

## Commands
- Dev: `pnpm dev`
- Build: `pnpm build` (Turbopack)
- Lint: `pnpm lint` (Biome)
- Format: `pnpm format` (Biome)
- Type-check: `pnpm type-check` (tsc --noEmit)
- Test: `pnpm test` (Vitest)
- Analyze bundle: `pnpm analyze`

## Architecture
- **Framework**: Next.js 16 with **Pages Router** (NOT App Router)
- **Bundler**: Turbopack (default in Next.js 16)
- **Pages**: `src/pages/` — index, portfolio, services, pricing, gallery, contract, future, recruiter, products, 404
- **Components**: `src/components/` — 38 components (see list below)
- **Hooks**: `src/hooks/` — reusable animation hooks (Web Animations API)
- **Proxy**: `src/proxy.ts` (was middleware.ts — renamed in Next.js 16)
- **Path alias**: `~/` maps to `src/` (tsconfig paths)
- **Package manager**: pnpm

## TypeScript — Strict Mode
Strict is enabled with extra checks:
- `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`
- `noImplicitReturns`, `noFallthroughCasesInSwitch`
- Target: ES2022, Module: esnext, JSX: react-jsx

## Styling
- Tailwind CSS 3.4 with plugins: typography, forms, aspect-ratio, line-clamp
- Custom CSS variables for theming: `--primary`, `--secondary`, `--neutralBg`, `--primaryBg`, etc.
- Accent colors: accent-1 through accent-7
- Custom breakpoints up to 7xl (6400px)
- Custom `.container` and `.btn` utilities defined in tailwind plugin
- Biome handles formatting (no Tailwind class sorting — may add later)

## 3D & Animation
- Three.js v0.183 via `@react-three/fiber` v9 for 3D elements (WebGPU-capable, WebGL fallback)
- Web Animations API via custom hooks (`useEntrance`, `useScrollReveal`, `useStaggerReveal`)
- View Transitions API for page transitions (feature-detected, graceful fallback)
- `maath` for math helpers in 3D scenes
- All animations respect `prefers-reduced-motion`

## Animation Hooks (src/hooks/)
| Hook | Purpose |
|------|---------|
| `useEntrance` | Mount-time fade + scale animation |
| `useScrollReveal` | IntersectionObserver + element.animate() for scroll-triggered reveals |
| `useStaggerReveal` | Staggered children animation on scroll |

## Key Dependencies
- next-themes for dark/light mode
- swr for data fetching
- sharp for image optimization
- classnames + clsx for conditional classes
- date-fns for date formatting
- @heroicons/react for icons
- @vercel/analytics for analytics

## Images
- Cloudinary, Unsplash, TailwindUI domains allowed via `remotePatterns` in next.config
- SVG allowed (`dangerouslyAllowSVG: true`)
- Use next/image with sharp optimization

## Components (src/components/)
Acomplishments, ArticleDate, Button, CallToAction, Card, CardContainer,
Collections, Component, Container, ContractHero, Divider, Dot,
ErrorMessage, Footer, Form, FormBlock, FutureHero, FutureMain, GlassTopPicks,
Header, HeroScene, HomeCta, HomeHero, Keyboard, LightDarkMode, LoadingSpinner,
MobileMenu, Nav, Products, Projects, Prose, Recruiter,
Services, SimpleLayout, SuccessMessage,
Technologies, ThemeTemplate, TimeLine

## Conventions
- All new files must be TypeScript (.tsx for components, .ts for utilities)
- Import with `~/` alias, not relative paths
- Components are PascalCase single files in src/components/
- Use Tailwind utility classes exclusively, avoid custom CSS
- Use Web Animations API hooks (`~/hooks`) for animations, not CSS transitions
- Wrap pages with ThemeTemplate layout
- Use Container for consistent page structure
