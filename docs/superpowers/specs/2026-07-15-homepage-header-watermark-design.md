# Homepage header `://` watermark

## Problem

The htee docs landing page (`doc/user/site/src/pages/index.tsx`) still shows
placeholder branding carried over from the `mq` template: a terminal-icon +
"ht" wordmark in `HomepageHeader`. The htee project's symbol is `://` (the
scheme-authority separator in a URL), and it isn't represented anywhere on
the page.

## Requirements

- Add the `://` symbol to `HomepageHeader`.
- Centered (horizontally and vertically) within the hero banner.
- Very large — a dominant background element, not inline text.
- Rendered as a lighter green, semi-transparent watermark, sitting behind
  the existing header content (icon, "ht" title, tagline, CTA buttons),
  which remain left-aligned and unchanged.
- Purely decorative: not read by screen readers, doesn't intercept clicks,
  doesn't cause horizontal/vertical overflow/scrollbars at any viewport
  width.

## Design

**Component** (`index.tsx`): add a `HeroWatermark` component rendering a
single `<span>` containing the text `://`, marked `aria-hidden="true"`,
placed as the first child inside `.heroBanner`'s container so it sits
behind the existing content in DOM/paint order.

**Styling** (`index.module.css`):
- `.heroBanner` gets `position: relative; overflow: hidden;` so the
  watermark can be absolutely positioned and clipped without expanding the
  page.
- `.heroWatermark`: `position: absolute; inset: 0; display: flex;
  align-items: center; justify-content: center; pointer-events: none;`
  Font size via `clamp(8rem, 24vw, 22rem)` for responsive scaling.
  Color: a fixed lighter green (`#bef264`, distinct from the
  pink/primary hero text color) at reduced opacity (~0.18) so it reads as
  a subtle background texture rather than a bold shape. Same value in both
  light and dark mode — it's independent of the primary color, which
  already flips between the two themes.
- The existing `.heroTitleRow`, `.heroTagline`, `.heroButtons` wrapper
  (the `<div className="container">` content) gets `position: relative;
  z-index: 1;` so it paints above the watermark.

No changes to `HomepageHeader`'s existing left-aligned layout, tagline, or
CTA buttons — only the new watermark layer is added.

## Out of scope

- Replacing the "ht" wordmark/terminal icon with different branding —
  that's a separate task.
- Any SVG-based rendering of the symbol — plain text is simpler, reuses
  the page's font stack, and is trivial to recolor.
