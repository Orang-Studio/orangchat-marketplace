import type { Plugin } from "./api";

const plugin: Plugin = {
  id: "bigger-emoji",
  name: "Bigger Emoji",
  description: "Enlarges custom emoji in messages. Pick how big.",
  authors: ["OrangChat"],
  settings: [
    {
      type: "select",
      key: "size",
      label: "Emoji size",
      default: "2.75rem",
      options: [
        { value: "2.25rem", label: "Large" },
        { value: "2.75rem", label: "Huge" },
        { value: "3.5rem", label: "Gigantic" },
      ],
    },
  ],
  start: (ctx) => {
    const size = ctx.setting<string>("size") ?? "2.75rem";
    return ctx.css(`
      .oc-emoji { width: ${size} !important; height: ${size} !important; }
    `);
  },
};

export default plugin;
