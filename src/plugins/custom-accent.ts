import type { Plugin } from "./api";

const plugin: Plugin = {
  id: "custom-accent",
  name: "Custom Accent",
  description:
    "Overrides the orange accent with a colour of your choosing, everywhere it appears.",
  authors: ["OrangChat"],
  settings: [{ type: "color", key: "color", label: "Accent colour", default: "#ff6a1a" }],
  start: (ctx) => {
    const color = ctx.setting<string>("color") ?? "#ff6a1a";
    return ctx.css(`
      :root {
        --oc-primary: ${color} !important;
        --oc-primary-hover: ${color} !important;
        --oc-primary-active: ${color} !important;
      }
    `);
  },
};

export default plugin;
