/**
 * The theme contract. A theme recolours the app by overriding the `--oc-*`
 * custom properties the stylesheet defines. It carries colours and nothing else
 * - no freeform CSS, no url(), no code - so installing one can only ever
 * recolour the app, never inject script or an overlay that could fake a prompt.
 *
 * Themes are reviewed as source and bundled into the build, so a theme is
 * exactly as trustworthy as the pull request that added it.
 */

/** The design tokens a theme may set. Every key must be one of these. */
export type ThemeVar =
  | "--oc-surface-0"
  | "--oc-surface-1"
  | "--oc-surface-2"
  | "--oc-surface-3"
  | "--oc-surface-4"
  | "--oc-border"
  | "--oc-border-strong"
  | "--oc-ink"
  | "--oc-ink-secondary"
  | "--oc-ink-muted"
  | "--oc-ink-on-primary"
  | "--oc-primary"
  | "--oc-primary-hover"
  | "--oc-primary-active"
  | "--oc-primary-soft"
  | "--oc-success"
  | "--oc-warning"
  | "--oc-danger"
  | "--oc-info";

export interface Theme {
  /** Stable id, kebab-case. Used as the storage key, so never rename it. */
  id: string;
  name: string;
  description?: string;
  /** GitHub handles or names of the people who made it. */
  authors: string[];
  /** Token -> colour. Values must be plain colours (hex or rgb/hsl()). */
  vars: Partial<Record<ThemeVar, string>>;
}
