<div align="center">

## Maple's Library of Thoughts

</div>

> A public notebook about computer science, mathematics, robotics, AI, and whatever else I happen to be learning.

This repository contains the source code for my personal notes and portfolio site. It is built with Astro, Svelte, Tailwind CSS, Pagefind search, and a heavily customized version of the Twilight theme.

## Requirements

- Node.js 20 or newer
- pnpm 9.14.4, matching the `packageManager` field in `package.json`

Install dependencies:

```bash
pnpm install
```

## Development

Start the local development server:

```bash
pnpm dev
```

The dev script generates local icons first, then starts `astro dev`.

Useful commands:

```bash
pnpm check
pnpm type-check
pnpm check-stylus
pnpm new-post
```

- `pnpm check` runs Astro diagnostics.
- `pnpm type-check` runs TypeScript without emitting files.
- `pnpm check-stylus` validates inline Stylus compilation.
- `pnpm new-post` starts the helper script for creating a new post.

## Building

Create a production build:

```bash
pnpm build
```

The build script performs three steps:

1. Generates Iconify assets with `scripts/generate-icons.js`.
2. Runs `astro build`.
3. Generates the Pagefind search index for the output directory.

Preview the production output locally:

```bash
pnpm preview
```

The static build is written to `dist/` for standard, GitHub, Cloudflare, Netlify, and EdgeOne builds. Vercel output is handled through `.vercel/output/static` by `scripts/build-with-pagefind.cjs`.

## Project Structure

```text
src/
  components/          Astro and Svelte UI components
  components/common/   Shared buttons, icons, dropdowns, markdown, image wrappers
  components/navbar/   Navigation, search, theme, wallpaper, and translation controls
  components/sidebar/  Sidebar widgets, directory tree, tags, categories, profile
  components/post/     Post card, metadata, and license components
  components/data/     Reusable cards/items for projects, skills, and timeline data
  constants/           Shared constants and link presets
  content/             Markdown, MDX, JSON, and static content collections
  i18n/                Translation keys, language config, and local translations
  layouts/             Base and grid page layouts
  pages/               Astro routes
  plugins/             Markdown, rehype, remark, Mermaid, and Expressive Code plugins
  styles/              Global CSS, Stylus variables, markdown, navbar, and feature styles
  types/               Shared TypeScript types
  utils/               Data loading, formatting, routing, theme, and content helpers
```

Root-level files to know:

- `twilight.config.yaml` controls site title, language, navigation, sidebar widgets, profile, footer, wallpaper, analytics, comments, music player, and other theme behavior.
- `astro.config.mjs` contains Astro integrations and build configuration.
- `src/content.config.ts` defines Astro content collections and frontmatter schemas.
- `pagefind.yml` configures search indexing.
- `public/` contains static assets served from the site root.

## Components

Most reusable UI lives in `src/components/`.

- Use `.astro` components for server-rendered layout, content, and static UI.
- Use `.svelte` components when the component needs client-side state or interaction.
- Put broadly reusable controls in `src/components/common/`.
- Put route-specific or feature-specific components in the matching directory, such as `navbar/`, `sidebar/`, `post/`, or `data/`.
- Keep component styles consistent with the existing global styles in `src/styles/`.

When adding a new major section, prefer this pattern:

1. Add the page route in `src/pages/`.
2. Put reusable UI in `src/components/`.
3. Put content/data helpers in `src/utils/`.
4. Add shared types in `src/types/` if the data shape is reused.
5. Add display text to the translation files if the UI needs localization.

## Content

Posts live under `src/content/posts/` and can be organized by category folders:

```text
src/content/posts/cs/
src/content/posts/engineering/
src/content/posts/math/
src/content/posts/physics/
src/content/posts/thoughts/
```

Supported post frontmatter is defined in `src/content.config.ts`. Common fields include:

```yaml
---
title: "Post title"
published: 2026-07-23
updated: 2026-07-23
description: "Short summary for lists, feeds, and metadata."
cover: "/assets/images/example.jpg"
coverInContent: false
category: ["cs", "systems"]
tags: ["astro", "typescript"]
lang: "en"
pinned: false
draft: false
comment: true
---
```

Special pages such as `about.md` and `friends.md` live directly under `src/content/`. Timeline entries live in `src/content/timeline/*.json`, and project entries live in `src/content/projects/<project>/`.

## Language Translations

The site has two translation systems:

- Local UI translations for navigation, labels, buttons, page titles, and other theme strings.
- Optional client-side page translation configured in `twilight.config.yaml` under `site.translate`.

Local UI translations are stored in:

```text
src/i18n/i18nKey.ts
src/i18n/language.ts
src/i18n/languages/en.ts
src/i18n/languages/zh_hans.ts
src/i18n/languages/zh_hant.ts
src/i18n/translation.ts
```

To add or update a UI string:

1. Add the key to `src/i18n/i18nKey.ts`.
2. Add the translated value to every file in `src/i18n/languages/`.
3. Use `i18n(I18nKey.someKey)` from `src/i18n/translation.ts` in Astro/TypeScript code.

To add a new supported local language:

1. Create `src/i18n/languages/<lang>.ts`.
2. Add the language metadata to `LANGUAGE_CONFIG` in `src/i18n/language.ts`.
3. Import the new translation module in `src/i18n/language.ts`.
4. Add it to `localTranslations`.
5. Add region aliases to `LANGUAGE_REGION_MAP` if browser locale variants should resolve to it.

The site language defaults to `site.lang` in `twilight.config.yaml`. Post language can be set per post with the `lang` frontmatter field.

Client-side translation can be enabled in `twilight.config.yaml`:

```yaml
site:
  translate:
    enable: true
    service: "client.edge"
    showSelectTag: true
    autoDiscriminate: true
```

Use `ignoreClasses` and `ignoreTags` in that same config block for content that should not be translated, such as code blocks or branded text.

## Configuration

Most site-level customization belongs in `twilight.config.yaml`, including:

- Site URL, title, subtitle, default language, and timezone
- Navbar links and nested menu items
- Sidebar widget layout and visibility
- Profile, announcement, and footer content
- Theme color, default theme, wallpaper, and loading overlay
- Analytics and comment integrations
- Music player, particles, and Pio settings

Environment-backed analytics values can be provided through:

```bash
UMAMI_API_KEY=
UMAMI_TRACKING_CODE=
```

## Feeds, Search, and Generated Files

- RSS and Atom routes are defined under `src/pages/rss*` and `src/pages/atom*`.
- Sitemap and robots output are handled by Astro routes and integrations.
- Pagefind search files are generated during `pnpm build`.
- Generated build output in `dist/` should not be edited by hand.

## Deployment

The repository includes configuration for several deployment targets:

- `vercel.json` for Vercel
- `_headers` / `public/_headers` for static host headers
- `Dockerfile` and `docker-compose.yml` for containerized deployment
- Astro adapters for Cloudflare, Netlify, Vercel, and EdgeOne

Run `pnpm build` before deploying unless the hosting platform runs the build command automatically.

## Philosophy

This website is a garden, not a museum.

Things here change over time. Old opinions may disappear. New ideas may contradict older ones. Hopefully that's a sign that I'm still learning.

## Credits

Twilight (by Spr-Aachen): [Here](https://github.com/spr-aachen/twilight)

