# xT Docs

Documentation for [xT Development](https://github.com/xT-Development) FiveM resources and RedM developer links. Built with [Nextra 4](https://nextra.site).

Replaces the old GitBook site at `xtdev.gitbook.io/xt-docs`.

## Local Development

```sh
pnpm i
pnpm dev
```

Then visit http://localhost:3000.

To build the production site (this also generates the Pagefind search index):

```sh
pnpm build
pnpm start
```

## Structure

Pages live in `content/`, one folder per resource:

```
content/
  index.mdx                 Welcome
  free-resources/           9 free resources
  paid-resources/           11 paid resources
  redm-links/               RedM developer links
```

Each resource folder has an `index.mdx` (marked `asIndexPage: true`) plus
`features.mdx`, `dependencies.mdx`, and - where applicable - `installation-and-usage.mdx`.

Navigation and ordering are controlled by the `_meta.ts` file in each folder. The four
top-level entries in `content/_meta.ts` use `type: 'page'`, which renders them as tabs in
the top navbar rather than in the sidebar.

Site chrome (logo, navbar, footer, links) lives in `app/layout.tsx`.

## Notes

`zod` is pinned to `4.1.12` via a `pnpm.overrides` entry in `package.json`. Nextra 4.6.1
declares `zod@^4.1.12`, but zod `>= 4.2` changed `z.custom()` so that it no longer accepts
`undefined`. That breaks `nextra-theme-docs`, whose `<Layout>` validates its props after
destructuring `children` out of them - every page then fails to prerender with
`Invalid input: expected nonoptional, received undefined → at children`. Remove the
override once Nextra ships a fix.

## License

MIT.
