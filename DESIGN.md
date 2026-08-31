---
name: Structure & Logic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#3a495f'
  on-tertiary: '#ffffff'
  tertiary-container: '#516177'
  on-tertiary-container: '#ccdcf7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system is built for high-utility SaaS environments and academic platforms where information density must be balanced with absolute clarity. The brand personality is authoritative yet accessible, favoring a "Corporate Modern" aesthetic that prioritizes functional elegance over decorative flourishes.

The visual direction utilizes a "Quiet Professionalism" approach:
- **Minimalism:** Use of generous white space to separate complex data sets.
- **Precision:** Perfect alignment and consistent mathematical ratios in all layouts.
- **Trust:** A cooling color palette and stable typography to evoke a sense of reliability and institutional knowledge.

## Colors

The palette is centered around a "Deep Indigo" primary hue, symbolizing intelligence and stability. 

- **Primary (#4F46E5):** Used for primary actions, active states, and critical signifiers.
- **Slate Neutrals:** A range of cool grays (from Slate-50 to Slate-950) provides the structural foundation. 
- **Functional States:** Use semantic colors sparingly—Emerald-600 for success, Rose-600 for errors, and Amber-500 for warnings—ensuring they are always paired with icons for accessibility.

In **Dark Mode**, surfaces are slightly desaturated to reduce eye strain, and the primary indigo is lightened by 10% to maintain AA contrast ratios against the near-black backgrounds.

## Typography

This design system uses **Hanken Grotesk** as the primary typeface (as the closest available alternative to Satoshi/General Sans) to achieve a modern, geometric, and professional feel.

- **Scale:** A major third type scale is used for hierarchy.
- **Labels:** Technical data, metadata, and small captions use **JetBrains Mono** to reinforce the academic and "system-driven" nature of the product.
- **Readability:** Body text should never go below 14px for accessibility. For long-form reading, `body-lg` is preferred.
- **Tracking:** Headlines use slightly tighter tracking (-1% to -2%) to feel more cohesive, while small labels use increased tracking (+5%) for legibility at small sizes.

## Layout & Spacing

The layout is governed by a **strict 8px grid system** (with 4px sub-increments). This ensures a mathematical rhythm across all components.

- **Grid Model:** A 12-column fluid grid for desktop with 24px gutters. For tablets, transition to an 8-column grid. For mobile, a 4-column grid with 16px side margins.
- **Alignment:** All text and icons must be baseline-aligned to the 4px grid.
- **Sectioning:** Vertical spacing between major sections should use the `xl` (40px) or double-`xl` (80px) tokens to maintain a sense of openness and "academic" clarity.

## Elevation & Depth

This design system avoids heavy shadows, instead using **Tonal Layers** and **Refined Borders** to create depth.

- **Level 0 (Base):** The main background color.
- **Level 1 (Surface):** Used for cards and navigation bars. Defined by a 1px solid border (`Slate-200` in light, `Slate-800` in dark).
- **Level 2 (Overlay):** Used for dropdowns and popovers. These use a very subtle, highly diffused shadow: `0px 10px 15px -3px rgba(0, 0, 0, 0.05)`.
- **Level 3 (Modal):** Highest elevation. Uses a darker backdrop blur (12px) and a more pronounced shadow to focus user attention.

In dark mode, depth is primarily communicated through lighter surface fills rather than shadows.

## Shapes

The shape language is "Soft" (0.25rem/4px radius) to maintain a rigorous, professional appearance while feeling modern.

- **Components:** Buttons, input fields, and small chips use the base 4px radius.
- **Containers:** Large cards and modals use `rounded-lg` (8px) to soften the overall interface without appearing "playful."
- **Full Rounding:** Only used for status indicators (dots) or specific icon wrappers; avoid pill-shaped buttons to maintain the "Corporate Modern" aesthetic.

## Components

### Buttons
- **Primary:** Solid Indigo fill, white text, 4px corner radius. Subtle hover state: Primary color darkened by 5%.
- **Secondary:** Transparent fill, Slate-200 border, Slate-900 text.
- **Ghost:** No border or fill. Used for low-priority actions in toolbars.

### Input Fields
- **Default:** White background, 1px Slate-200 border, 4px radius. 
- **Focus State:** 1px Indigo border with a 3px Indigo "halo" (10% opacity).
- **Labels:** Always placed above the field in `body-sm` bold.

### Cards
- **Structure:** Level 1 elevation (1px border). 24px internal padding. 
- **Header:** Use a subtle bottom border (1px) to separate the title from the content.

### Chips & Tags
- **Style:** Light gray backgrounds with Slate-700 text. Use `label-caps` for a more systematic, academic look.

### Lists
- **Data Tables:** High density. 12px vertical padding on rows. Zebra striping (Slate-50) is recommended for tables exceeding 10 rows.