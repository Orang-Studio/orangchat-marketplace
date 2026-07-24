import type { Theme } from "./api";

const theme: Theme = {
  id: "midnight",
  name: "Midnight",
  description: "A deep blue dark theme with a cool cyan accent.",
  authors: ["OrangChat"],
  vars: {
    "--oc-surface-0": "#0b1020",
    "--oc-surface-1": "#111830",
    "--oc-surface-2": "#161f3d",
    "--oc-surface-3": "#1d284b",
    "--oc-border": "#243056",
    "--oc-ink": "#e6ecff",
    "--oc-ink-secondary": "#aab6e0",
    "--oc-ink-muted": "#6b78a8",
    "--oc-primary": "#38bdf8",
    "--oc-primary-hover": "#54c7fa",
    "--oc-primary-active": "#22a7e0",
    "--oc-primary-soft": "#132a3e",
  },
};

export default theme;
