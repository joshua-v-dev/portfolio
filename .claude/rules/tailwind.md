---
globs: "**/*.tsx,**/*.css"
---

# Tailwind CSS Conventions (Portfolio)

## Setup
- Tailwind CSS 3.4 with plugins: typography, forms, aspect-ratio, line-clamp
- Prettier plugin auto-sorts Tailwind classes

## Theming
- Custom CSS variables: `--primary`, `--secondary`, `--neutralBg`, `--primaryBg`
- Accent colors: accent-1 through accent-7
- Dark/light mode via `next-themes`

## Custom Utilities
- Custom `.container` and `.btn` utilities defined in tailwind plugin
- Custom breakpoints up to 7xl (6400px)

## Rules
- Use Tailwind utility classes exclusively, avoid custom CSS
- Use `classnames` or `clsx` for conditional class composition
- Always include responsive breakpoints for layout components
- Use Framer Motion for animations, not CSS transitions or Tailwind animate
