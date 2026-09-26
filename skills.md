# Skills & Technical Capabilities

This document outlines the core technical proficiencies, architectural patterns, and execution standards required for building and maintaining the "New Investors" platform.

## 1. Frontend & Framework Expertise

- **Next.js (App Router):** Server vs. Client component boundaries, React Server Components (RSC) optimization, and dynamic route handlers (`[locale]`).
- **TypeScript:** Strict type checking, interface design for investment metrics, property entities, and API payloads.
- **State Management:** Reactive local state, URL-driven filtering for investment opportunities, and client-side calculator synchronization.

## 2. Internationalization & Bi-directional Layouts (i18n)

- **next-intl:** Dynamic locale routing, dictionary loading, server-side `getTranslations`, and client-side `useTranslations`.
- **RTL/LTR Precision:** Full UI mirroring for Arabic (`dir="rtl"`) and English (`dir="ltr"`), avoiding hardcoded absolute directions in favor of logical properties (`start`, `end`, `ms-`, `me-`).

## 3. Styling & Theming (Tailwind CSS)

- **Theme Architecture:** Dual-mode implementation using `next-themes` (Default: Light mode, Secondary: Dark mode).
- **Brand System Integration:** Strict adherence to extracted brand tokens (`#0F2847` Navy and `#C5A869` Gold).
- **Responsive Layouts:** Mobile-first architecture with custom drawer interactions and desktop-optimized grids.

## 4. Micro-interactions & Motion (Framer Motion)

- **Hardware-Accelerated Animations:** Opacity and transform transitions for smooth 60fps performance.
- **Interactive UI Components:** Smooth drawer sliding transitions, card hover elevation states, and animated numeric sliders for ROI calculations.
