# Nathapoom Wangsatang — Portfolio

A personal portfolio for a Computer Engineering student at Sripatum University,
Bangkok, Thailand, seeking internship opportunities. Areas of interest are
full-stack development, quality assurance and testing, IoT and embedded systems,
and AI engineering.

## Stack

- Next.js 16 App Router, React 19, and TypeScript
- Tailwind CSS v4 and global CSS using a monochrome palette
- Barlow Condensed for headings, Inter for body text, and IBM Plex Mono for metadata
- Framer Motion for entrances and the mobile menu; GSAP for the centered preloader
- Lucide UI icons, local Devicon technology logos, and ThreeUI's floating email control

## Run locally

Use a Node.js version supported by Next.js 16 (20.9 or newer).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Font downloads require network access during builds.

## Checks and production build

```bash
npx eslint src
npx tsc --noEmit
npm run build
```

`output: "export"` generates the static website in `out/`. The site uses local
images with Next.js image optimization disabled. It has no email backend or
server actions. Serve `out/` with a static web server; `next start` is not used
for this export mode.

## Content and behavior

The page contains navigation, Hero, About, Projects, Skills, Certificates,
Contact, and Footer. Experience appears only when real work history is added.

- Project images open their GitHub repositories in a new tab.
- Each project has keyboard-accessible expandable contribution details.
- Skills show local color logos in four responsive groups.
- Four certificate cards link to credential pages or the original image.
- Contact includes email, GitHub, LinkedIn, phone, and location.
- The floating email button remains in the lower-right corner.
- The centered preloader respects reduced motion and labels its timed progress
  as simulated. See [docs/preloader.md](docs/preloader.md).

| File | Purpose |
|---|---|
| `src/lib/data.ts` | Projects, repositories, years, skills, certificates, and site metadata |
| `src/components/Hero.tsx` | Intro copy and four areas of interest |
| `src/components/Projects.tsx` | Linked project images and expandable details |
| `src/components/Contact.tsx` | Public contact channels and floating email control |
| `src/app/globals.css` | Palette, layout, responsive rules, focus, and reduced motion |
| `src/app/layout.tsx` | Fonts, metadata URL, and preloader integration |
| `src/app/opengraph-image.tsx` | Monochrome social sharing image |

## Deployment

Import the GitHub repository into Vercel as a Next.js project. The build command
is `npm run build`; Next.js produces the static export in `out/`. Keep framework
defaults unless the hosting dashboard explicitly requires the export directory.

The metadata URL uses `NEXT_PUBLIC_SITE_URL` when provided, then Vercel's
`VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL`. Local builds fall back to
`http://localhost:3000`. This avoids publishing an unowned custom domain. When
using another static host, set `NEXT_PUBLIC_SITE_URL` to the real public URL
before building.

Dependencies, build output, environment files, and local agent instructions are
excluded through `.gitignore`. Publish the application and the assets it uses.
Personal photographs, certificate images, and project previews are portfolio
content. Technology logo attribution and license are in `public/icons/skills/`;
brand provenance is in `public/brand/SOURCE.txt`.
