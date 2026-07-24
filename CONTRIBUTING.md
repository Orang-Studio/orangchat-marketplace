# Contributing to the OrangChat marketplace

Marketplace entries are reviewed as source and bundled into OrangChat. Nothing
is fetched or evaluated from GitHub while the app is running.

## Contribution flow

1. Fork this repository.
2. Add one file to the matching folder:
   - `src/plugins/`
   - `src/themes/`
   - `src/profile-themes/`
3. Import it and add it to the catalog array in that folder's `index.ts`.
4. Run `pnpm typecheck`.
5. Open a pull request describing the change and include screenshots for visual
   themes when possible.

Stable IDs must be lowercase kebab-case and must never be reused. Authors should
list their GitHub handles.

## Plugins

Plugins run in the browser for people who enable them. They must be readable,
small, local by default, and fully reversible. Obfuscated, generated, or
minified code is not accepted. Plugins must not collect messages, tokens, or
account data, fake prompts, or make unexplained network requests.

## Themes

App themes may only define supported `--oc-*` color variables. Values must be
hex, `rgb()`, `rgba()`, `hsl()`, or `hsla()` colors.

## Profile themes

Profile themes contain CSS for the documented `.oc-profile-card` and `.oc-pf-*`
hooks. OrangChat sanitizes and scopes this CSS before rendering it. External
URLs, imports, fixed positioning, and attempts to escape the profile card are
not accepted.

## Style

Match the surrounding TypeScript. Do not use em dashes in descriptions or docs.
