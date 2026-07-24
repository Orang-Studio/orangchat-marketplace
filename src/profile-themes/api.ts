/**
 * The profile-theme contract. A profile theme is the CSS a user applies to
 * their own profile card - the same thing the profile editor's "Profile theme
 * (CSS)" box holds. Unlike a colour Theme it is freeform CSS, but it is only
 * ever rendered the way profile CSS already is: sanitized and scoped to a single
 * card at render time (the host strips external URLs, script, and anything that
 * could escape the card box). So a shared profile theme can restyle a card and
 * never do more than that.
 *
 * Profile themes are reviewed as source and bundled into the build, so one is
 * exactly as trustworthy as the pull request that added it. Target the stable
 * hook classes:
 *
 *   .oc-profile-card   the whole card
 *   .oc-pf-banner      the top banner strip
 *   .oc-pf-avatar      the avatar holder
 *   .oc-pf-body        the info panel
 *   .oc-pf-name        display name
 *   .oc-pf-username    @username
 *   .oc-pf-pronouns    pronouns
 *   .oc-pf-bio         the About-me block
 *   .oc-pf-member      the Member-since block
 */

export interface ProfileTheme {
  /** Stable id, kebab-case. */
  id: string;
  name: string;
  description?: string;
  /** GitHub handles or names of the people who made it. */
  authors: string[];
  /** The profile-card CSS. Applied to the installer's own card. */
  css: string;
}
