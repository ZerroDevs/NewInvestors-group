# Agent Directives & Operational Rules

This document governs the operational workflow, architectural constraints, and quality gates for AI coding agents operating on this repository.

## 1. Golden Rules of Development

1. **Never Duplicate Pages Blindly:** Create modular, component-driven layouts. Shared UI elements must live inside `src/components/ui/` or `src/components/layout/`.
2. **Never Hardcode Text:** All visible copy (titles, subheadings, labels, placeholders, errors) must be registered in both `messages/en.json` and `messages/ar.json`.
3. **Preserve Asset Paths:** Always reference existing brand assets in `public/assets/images/`:
   - Transparent logo: `Logo-nobg.png` (or `.jpeg`)
   - Container logo: `Logo-bg.jpeg`
4. **Theme Preference:** The base/default theme must always render as `light` mode. Dark mode must remain an explicit option.

## 2. Component Design Standards

- Client Components must be explicitly declared with `'use client'` only when utilizing state, hooks, or browser event listeners.
- Image assets must utilize `next/image` with specified dimensions or responsive `fill` properties to prevent cumulative layout shift (CLS).
- Navigation elements must support both desktop menu bars and mobile drawer navigation with synchronized locale-aware links.

## 3. Quality & Verification Gates

Before completing a task, the agent must ensure:

- The TypeScript build passes without missing properties or implicit `any` types.
- Both language dictionaries (`en.json`, `ar.json`) contain identical key paths.
- All Tailwind color utilities align with the Navy (`#0F2847`) and Gold (`#C5A869`) brand guidelines.
