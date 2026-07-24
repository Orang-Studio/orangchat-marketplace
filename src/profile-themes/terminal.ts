import type { ProfileTheme } from "./api";

const theme: ProfileTheme = {
  id: "terminal",
  name: "Terminal",
  description: "A green-on-black monospace card for the command-line at heart.",
  authors: ["OrangChat"],
  css: `
.oc-pf-body {
  background: #000000;
  color: #33ff66;
  font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
}
.oc-pf-name {
  color: #33ff66;
  font-family: ui-monospace, monospace;
}
.oc-pf-name::before { content: "> "; }
.oc-pf-username { color: #1f9c3f; }
.oc-pf-heading { color: #1f9c3f; }
.oc-pf-banner { background: #0a0a0a; }
`.trim(),
};

export default theme;
