# OrangChat Marketplace

Community contributions for OrangChat: plugins, colour themes, and profile
themes.

Everything here is reviewed as source and bundled into the app at build time.
Nothing in this repo is fetched or evaluated at runtime, so an entry is exactly
as trustworthy as the pull request that added it. There is no way to install a
contribution that has not been read and merged first.

## How it fits together

This repo is pulled into the main OrangChat build as the `@orangchat/marketplace`
package. The app reads three catalogs from `src/index.ts` and shows them under
the Marketplace settings section, split into three categories.

```
src/
  index.ts            re-exports the three catalogs below
  plugins/            JavaScript that tweaks the client
    api.ts            the Plugin contract
    index.ts          the catalog: exports PLUGINS
    hide-scrollbars.ts, bigger-emoji.ts, custom-accent.ts
  themes/             colour themes that override the app's --oc-* tokens
    api.ts            the Theme contract + allow-listed variables
    index.ts          the catalog: exports THEMES
    midnight.ts, sunset.ts, forest.ts
  profile-themes/     CSS that restyles a user's own profile card
    api.ts            the ProfileTheme contract + the hook classes
    index.ts          the catalog: exports PROFILE_THEMES
    neon.ts, parchment.ts, terminal.ts
```

## The three categories

- **Plugins** run in the browser with full page access, so a merged plugin can
  read and change anything on the page for everyone who enables it. Review is
  strictest here. A plugin injects scoped CSS and/or runs a start/stop lifecycle
  that must leave no trace when disabled.
- **Themes** carry colours only: a map of allow-listed `--oc-*` tokens to colour
  values. Installing one can recolour the app and nothing else.
- **Profile themes** are freeform CSS for a person's own profile card. They are
  rendered the way profile CSS already is, sanitized and scoped to a single card,
  so they cannot load external URLs, run script, or escape the card box.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). In short: add one file in the right
folder, register it with one import and one array entry in that folder's
`index.ts`, run `pnpm typecheck`, and open a pull request.
