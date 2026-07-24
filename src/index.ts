/**
 * @orangchat/marketplace - the community marketplace catalog, bundled into the
 * app at build time. Three kinds of contribution, each in its own folder and
 * each arriving by reviewed pull request, never as a runtime upload:
 *
 *   plugins/         JavaScript that tweaks the client (start/stop lifecycle)
 *   themes/          colour themes that override the app's --oc-* tokens
 *   profile-themes/  CSS that restyles a user's own profile card
 *
 * Nothing here is fetched or evaluated at runtime, so an entry is exactly as
 * trustworthy as the pull request that added it.
 */

export * from "./plugins";
export * from "./themes";
export * from "./profile-themes";
