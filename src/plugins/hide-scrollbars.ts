import type { Plugin } from "./api";

const plugin: Plugin = {
  id: "hide-scrollbars",
  name: "Hide Scrollbars",
  description:
    "Hides every scrollbar while keeping the scroll. Cleaner, if you navigate by wheel or trackpad.",
  authors: ["OrangChat"],
  start: (ctx) =>
    ctx.css(`
      *::-webkit-scrollbar { display: none !important; }
      * { scrollbar-width: none !important; }
    `),
};

export default plugin;
