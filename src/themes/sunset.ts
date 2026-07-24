import type { Theme } from "./api";

const theme: Theme = {
  id: "sunset",
  name: "Sunset",
  description: "Warm dusk tones with a pink-orange accent.",
  authors: ["OrangChat"],
  vars: {
    "--oc-surface-0": "#1a1015",
    "--oc-surface-1": "#241820",
    "--oc-surface-2": "#2e1f29",
    "--oc-surface-3": "#3a2733",
    "--oc-border": "#4a3240",
    "--oc-ink": "#ffeef0",
    "--oc-ink-secondary": "#e6bcc4",
    "--oc-ink-muted": "#a87d88",
    "--oc-primary": "#ff6a8a",
    "--oc-primary-hover": "#ff85a0",
    "--oc-primary-active": "#e85578",
    "--oc-primary-soft": "#3a1f2a",
  },
};

export default theme;
