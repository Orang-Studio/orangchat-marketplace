/**
 * The bundled plugin catalog. Every plugin lives in its own file here and is
 * registered by adding one import and one array entry. That single point is what
 * a reviewer checks against the pull request.
 */
import type { Plugin } from "./api";

import biggerEmoji from "./bigger-emoji";
import customAccent from "./custom-accent";
import hideScrollbars from "./hide-scrollbars";

export * from "./api";

export const PLUGINS: Plugin[] = [hideScrollbars, biggerEmoji, customAccent];

// Ids must be unique - two plugins sharing one would collide in storage. Caught
// at module load so a bad merge fails loudly in dev, not silently in the field.
const seen = new Set<string>();
for (const p of PLUGINS) {
  if (seen.has(p.id)) throw new Error(`Duplicate plugin id: ${p.id}`);
  seen.add(p.id);
}

export const pluginById = (id: string): Plugin | undefined =>
  PLUGINS.find((p) => p.id === id);
