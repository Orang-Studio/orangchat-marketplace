import type { ProfileTheme } from "./api";

const theme: ProfileTheme = {
  id: "neon",
  name: "Neon",
  description: "A dark card with a glowing purple name and a striped banner.",
  authors: ["OrangChat"],
  css: `
.oc-pf-body {
  background: #14091f;
  color: #e9d5ff;
}
.oc-pf-name {
  color: #c084fc;
  letter-spacing: 0.02em;
  text-shadow: 0 0 8px rgba(192, 132, 252, 0.6);
}
.oc-pf-username { color: #9a7fc0; }
.oc-pf-banner {
  background: repeating-linear-gradient(45deg, #7c3aed, #7c3aed 10px, #4c1d95 10px, #4c1d95 20px);
}
`.trim(),
};

export default theme;
