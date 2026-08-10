/**
 * The bundled colour-theme catalog. Every theme lives in its own file here and
 * is registered by adding one import and one array entry. That single point is
 * what a reviewer checks against the pull request.
 */
import type { Theme } from "./api";

import forest from "./forest";
import midnight from "./midnight";
import sunset from "./sunset";

export * from "./api";

export const THEMES: Theme[] = [midnight, sunset, forest];

// Ids are storage keys, so a collision would make two themes fight over one
// slot. Fail loudly at load rather than silently in the field.
const seen = new Set<string>();
for (const t of THEMES) {
  if (seen.has(t.id)) throw new Error(`Duplicate theme id: ${t.id}`);
  seen.add(t.id);
}
