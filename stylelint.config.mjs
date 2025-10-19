/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  rules: {
    "no-empty-source": null,
    "color-hex-length": null,
    "custom-property-empty-line-before": null,
    "lightness-notation": null,
    "hue-degree-notation": null,
    "comment-empty-line-before": null,
    "rule-empty-line-before": null,
  },
  ignoreFiles: ["**/node_modules/**", "**/.next/**"],
}

export default config
