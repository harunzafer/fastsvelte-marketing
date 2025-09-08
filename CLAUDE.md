# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Project Path**: `/home/harun/workspace/fastsvelte-marketing`
**Main FastSvelte Project**: `/home/harun/workspace/fastsvelte`

FastSvelte Marketing is the official marketing website for FastSvelte - a fullstack SaaS starter kit built with FastAPI (Python) and SvelteKit (TypeScript). This standalone SvelteKit application serves as the public face of the FastSvelte platform.

**Live Sites:**

- **Marketing Website**: https://fastsvelte.dev
- **Documentation**: https://docs.fastsvelte.dev

## About FastSvelte

FastSvelte is a fullstack SaaS starter kit that provides:

- **Backend**: FastAPI with PostgreSQL, using dependency injection and repository pattern
- **Frontend**: SvelteKit SPA with session-based authentication
- **Database**: PostgreSQL with Sqlich migrations
- **Landing**: Public SvelteKit marketing site (this repository)
- **Nexus-Svelte**: Premium TailwindCSS + DaisyUI admin dashboard theme

## Development Commands

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run format           # Format code with Prettier
npm run check            # Type checking with svelte-check
```

## Architecture Notes

### Key Components

- **Hero**: Features Swiper carousel showcasing FastSvelte capabilities
- **Features**: Highlights FastSvelte's key benefits (FastAPI backend, SvelteKit frontend, etc.)
- **Showcase**: Screenshots of actual FastSvelte dashboards and components
- **Topbar**: Navigation with links to docs.fastsvelte.dev
- **ConfigProvider**: Global theme context - required for ThemeToggle to work

### Important Dependencies

- `swiper`: Required for Hero carousel functionality
- `@iconify/tailwind4` + icon packs: Powers all iconify icons in components
- `daisyui`: Component styling system
- `tailwindcss-motion`: Animation utilities

### Asset Structure

```
static/images/
├── landing/     # Hero images, showcase screenshots, tech logos
├── logo/        # FastSvelte brand logos (light/dark variants)
└── avatars/     # User profile images for testimonials
```

## Content Strategy

### Messaging Focus

- Emphasize FastSvelte as a complete SaaS starter kit
- Highlight the FastAPI + SvelteKit combination
- Showcase the premium Nexus-Svelte theme included
- Direct users to documentation at docs.fastsvelte.dev

### Key CTAs

- "Get Started with FastSvelte"
- "View Documentation" → docs.fastsvelte.dev
- "Download Starter Kit"

## Development Notes

### CSS Architecture

- Main imports in `src/app.css` - follows Nexus-Svelte pattern
- Landing-specific styles in `src/lib/styles/pages/landing.css`
- Theme system uses CSS custom properties with DaisyUI integration

### Common Tasks

- **Update FastSvelte content**: Edit components in `src/routes/landing/components/`
- **Refresh screenshots**: Replace images in `static/images/landing/`
- **Update features**: Modify Features.svelte to reflect current capabilities
- **Documentation links**: Always link to docs.fastsvelte.dev

### Performance Requirements

- Maintain SSR compatibility for SEO
- Keep bundle size minimal for fast loading
- Optimize images for web delivery
- Test mobile responsiveness

## Instructions for Claude Code

When working on this project:

1. **Focus on FastSvelte branding** - this is the official marketing site
2. **Link to docs.fastsvelte.dev** for detailed information
3. **Keep content current** with actual FastSvelte capabilities
4. **Use existing component patterns** from the landing components
5. **Maintain responsive design** and theme compatibility
6. **Test theme switching** functionality
7. **Optimize for conversion** with clear CTAs and value props
8. **Run `npm run format`** before committing changes

### Content Guidelines

- Showcase actual FastSvelte application features and screenshots
- Emphasize the unique FastAPI + SvelteKit combination
- Include clear calls-to-action driving to docs.fastsvelte.dev
- Highlight the premium Nexus-Svelte theme inclusion
- Keep technical accuracy aligned with actual FastSvelte capabilities

This marketing website serves as the primary entry point for developers interested in FastSvelte, so prioritize clear value communication and professional presentation.
