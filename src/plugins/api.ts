/**
 * The plugin API contract. This is the stable surface a plugin is written
 * against, and the only thing the host app promises to keep working. Everything
 * a plugin can do to the page goes through PluginContext, on purpose: a plugin
 * cannot reach past what is handed to it.
 *
 * Plugins are reviewed as source and bundled into the build. Nothing here is
 * fetched or evaluated at runtime, so a plugin is exactly as trustworthy as the
 * pull request that added it.
 */

/** A single user-tunable knob a plugin exposes on its card. */
export type PluginSetting =
  | {
      type: "boolean";
      key: string;
      label: string;
      default: boolean;
    }
  | {
      type: "color";
      key: string;
      label: string;
      default: string;
    }
  | {
      type: "select";
      key: string;
      label: string;
      default: string;
      options: { value: string; label: string }[];
    };

/** Values a plugin's settings currently hold, keyed by setting key. */
export type PluginSettingValues = Record<string, string | boolean>;

/**
 * What a running plugin can do to the page. Deliberately narrow: a plugin
 * injects scoped CSS and/or runs setup that returns its own teardown. Anything
 * a plugin adds, it must be able to remove. stop() has to leave no trace, or
 * toggling it off would not.
 */
export interface PluginContext {
  /** Inject a style element; returns a disposer that removes it. */
  css: (text: string) => () => void;
  /** Read one of this plugin's own setting values. */
  setting: <T extends string | boolean>(key: string) => T | undefined;
}

export interface Plugin {
  /** Stable id, kebab-case. Used as the storage key, so never rename it. */
  id: string;
  name: string;
  description: string;
  /** GitHub handles or names of the people who wrote it. */
  authors: string[];
  settings?: PluginSetting[];
  /**
   * Called when the plugin is enabled, and re-called when its settings change,
   * after the previous run's teardown. Returns a teardown, or nothing.
   */
  start: (ctx: PluginContext) => (() => void) | void;
}

/** The default value for each of a plugin's settings. */
export function pluginDefaults(plugin: Plugin): PluginSettingValues {
  const out: PluginSettingValues = {};
  for (const s of plugin.settings ?? []) out[s.key] = s.default;
  return out;
}
