# xT Docs

Documentation for [xT Development](https://github.com/xT-Development) FiveM resources and RedM
developer links. Built with [Fumadocs](https://fumadocs.dev).

Replaces the old GitBook site at `xtdev.gitbook.io/xt-docs`.

## Local Development

```sh
pnpm i
pnpm dev
```

Then visit http://localhost:3000.

To build and run the production site:

```sh
pnpm build
pnpm start
```

## Structure

Pages live in `content/`, one folder per resource:

```
content/
  index.mdx                 Welcome
  free-resources/           free resources
  paid-resources/           paid resources
  redm-links/               RedM developer links
```

Each resource folder has an `index.mdx` plus `features.mdx`, `dependencies.mdx`, and - where
applicable - `installation-and-usage.mdx`.

Navigation is controlled by the `meta.json` in each folder. Sidebar labels come from each page's
frontmatter `title`, so `meta.json` only carries ordering:

- `pages` lists the folder's children in order. **Anything not listed is hidden**, which is how
  work-in-progress resources are kept out of the nav.
- `pagesIndex: "index"` names the folder's own landing page. It is required whenever `pages` is
  set, otherwise the folder loses its index and (for a root folder) its navbar tab.
- `root: true` on the three top-level sections renders them as navbar tabs and scopes the sidebar
  to the active section.

Site chrome lives in `lib/layout.shared.tsx` (logo, navbar, links), `app/(docs)/layout.tsx`
(sidebar and tabs) and `app/(docs)/[[...slug]]/page.tsx` (page body, edit link, footer).

The routes sit in an `app/(docs)/` route group with `baseUrl: '/'` in `lib/source.ts`, so pages
are served from the root (`/paid-resources/weather`) rather than under `/docs`.

## Notes

**Components are registered globally** in `components/mdx.tsx`, so MDX files carry no `import`
statements. Available without importing: `Cards`/`Card`, `Callout`, `Tabs`/`Tab`,
`Files`/`Folder`/`File`, `Steps`, plus the local `Frameworks`, `Badge` and `YouTube`.

`components/steps.tsx` is a small wrapper that applies Fumadocs' `fd-steps` / `fd-step` classes to
`###` headings, reproducing the auto-numbered steps this site used under Nextra. Fumadocs' own
`Steps`/`Step` pair does not number anything on its own.

**Code fences use `title=`**, not `filename=`, e.g. ` ```lua title="configs/server.lua" `.
Shiki has no `cfg` grammar and errors on unknown languages, so `server.cfg` blocks are tagged
`bash` - the `title` still shows the real filename in the rendered header.

The brand accent (`#00ffcc`) is set in `app/global.css` by overriding `--color-fd-primary`, with a
darkened variant for light mode so active nav items stay legible on white.

## License

MIT.
