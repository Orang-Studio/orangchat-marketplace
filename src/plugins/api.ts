/**
 * The plugin API contract. This is the stable surface a plugin is written
 * against, and the only thing the host app promises to keep working.
 *
 * **PluginContext is a convention, not a boundary.** `plugin.start(ctx)` is a
 * same-realm call, so a plugin can reach `indexedDB`, `fetch` and the DOM
 * regardless of how narrow this interface is. Plugins are trustworthy because
 * they are reviewed as source and bundled into the build - nothing here is
 * fetched or evaluated at runtime - and a plugin is therefore exactly as
 * trustworthy as the pull request that added it. Nothing about the shape of
 * this API contributes to that.
 *
 * This matters more since DMs became end-to-end encrypted (docs/E2EE.md §10.6):
 * the page holds decrypted messages now, so a bad merge costs more than it used
 * to. Sandboxing (iframe/Worker + postMessage) becomes mandatory the day
 * plugins load at runtime, and is defence in depth until then.
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
   * Entries the host adds to a message's right-click menu, under "Apps", while
   * the plugin is enabled. Actions receive a read-only view of the message and
   * nothing else - no tokens, no client internals.
   */
  messageActions?: PluginMessageAction[];
  /**
   * Called when the plugin is enabled, and re-called when its settings change,
   * after the previous run's teardown. Returns a teardown, or nothing.
   */
  start: (ctx: PluginContext) => (() => void) | void;
}

/** What an action is handed about the message it was invoked on. */
export interface PluginMessage {
  id: string;
  channelId: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  /** True when the viewer wrote it. */
  own: boolean;
}

export interface PluginMessageAction {
  /** Unique within the plugin; used as the menu item key. */
  id: string;
  label: string;
  /** Hide the entry for messages it doesn't apply to. */
  visible?: (message: PluginMessage) => boolean;
  run: (message: PluginMessage, ctx: PluginContext) => void;
}

/** The default value for each of a plugin's settings. */
export function pluginDefaults(plugin: Plugin): PluginSettingValues {
  const out: PluginSettingValues = {};
  for (const s of plugin.settings ?? []) out[s.key] = s.default;
  return out;
}
