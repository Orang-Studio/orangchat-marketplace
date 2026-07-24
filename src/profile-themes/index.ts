/**
 * The bundled profile-theme catalog. Every profile theme lives in its own file
 * here and is registered by adding one import and one array entry. That single
 * point is what a reviewer checks against the pull request.
 */
import type { ProfileTheme } from "./api";

import neon from "./neon";
import parchment from "./parchment";
import terminal from "./terminal";

export * from "./api";

export const PROFILE_THEMES: ProfileTheme[] = [neon, parchment, terminal];

// Ids must be unique so the marketplace can key on them.
const seen = new Set<string>();
for (const t of PROFILE_THEMES) {
  if (seen.has(t.id)) throw new Error(`Duplicate profile theme id: ${t.id}`);
  seen.add(t.id);
}

export const profileThemeById = (id: string): ProfileTheme | undefined =>
  PROFILE_THEMES.find((t) => t.id === id);
