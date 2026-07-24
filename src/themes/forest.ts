import type { Theme } from "./api";

const theme: Theme = {
  id: "forest",
  name: "Forest",
  description: "Muted greens with an earthy accent.",
  authors: ["OrangChat"],
  vars: {
    "--oc-surface-0": "#0d1410",
    "--oc-surface-1": "#131d17",
    "--oc-surface-2": "#18261d",
    "--oc-surface-3": "#1f3125",
    "--oc-border": "#2a4131",
    "--oc-ink": "#e8f3ea",
    "--oc-ink-secondary": "#b0c9b6",
    "--oc-ink-muted": "#6f8a76",
    "--oc-primary": "#4caf6a",
    "--oc-primary-hover": "#5fc27e",
    "--oc-primary-active": "#3d9a58",
    "--oc-primary-soft": "#16281c",
  },
};

export default theme;
