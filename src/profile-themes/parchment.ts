import type { ProfileTheme } from "./api";

const theme: ProfileTheme = {
  id: "parchment",
  name: "Parchment",
  description: "A warm, paper-toned card with a serif name.",
  authors: ["OrangChat"],
  css: `
.oc-pf-body {
  background: #f4ecd8;
  color: #3a2f1c;
}
.oc-pf-name {
  color: #6b4f1d;
  font-family: Georgia, "Times New Roman", serif;
}
.oc-pf-username { color: #8a7448; }
.oc-pf-heading { color: #9a6b2f; }
.oc-pf-banner { background: #d9c7a0; }
`.trim(),
};

export default theme;
