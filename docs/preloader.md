# Minimal centered portfolio preloader

The portfolio uses `src/components/PageLoader.tsx` with the `.page-loader*` rules in
`src/app/globals.css`. The overlay is centered and uses the portfolio's paper, ink,
Barlow Condensed, and Inter tokens. It shows the owner's name, a short portfolio
subtitle, and one restrained progress line. It has no illustration.

## Integration

`src/app/layout.tsx` starts the overlay before the first paint on `/`, unless the
visitor prefers reduced motion. Keep the `id="site-content"` wrapper because the
loader locks it while active and reveals it at the end.

```tsx
<PageLoader durationMs={4000} transitionMs={450} />
<div id="site-content">{children}</div>
```

The early script in the document head sets `data-site-loader` only on the home
page. Without JavaScript, the page content remains visible.

## Progress behavior

When `progress` is omitted, the line fills over the four-second opening sequence.
The label reads `Opening sequence · simulated` so the animation is not mistaken
for a measurement of network activity.

When a real 0–100 value is available, pass it as `progress`. The loader waits at
the end of its normal intro until progress reaches 100, then fades away. If work
stalls, `maxWaitMs` releases the page without fabricating a completed value.

```tsx
<PageLoader progress={assetPreparationProgress} />
```

This value should reflect a real preparation task. For example, an adapter can
track settled image decoding and `document.fonts.ready`; it should not be
presented as byte-level download progress unless the resource pipeline measures
bytes.

## Timing props

| Prop | Default | Purpose |
|---|---:|---|
| `durationMs` | `4000` | Normal intro duration; minimum 3000 ms |
| `transitionMs` | `450` | Overlay fade and page reveal duration |
| `progress` | omitted | Real 0–100 preparation progress |
| `maxWaitMs` | `12000` | Escape deadline in real-progress mode |
| `revealOffset` | `14` | Page's starting vertical reveal offset in pixels |

GSAP animates the line, overlay fade, and page reveal. The overlay only runs on
`/`. It respects `prefers-reduced-motion`; when reduced motion is enabled it
shows the page immediately. While active, it locks scrolling and makes the page
content inert, then restores prior styles and state when it finishes. A CSS
failsafe hides the overlay if hydration does not complete.
