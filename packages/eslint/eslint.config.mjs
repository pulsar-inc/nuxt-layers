import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";

export default createConfigForNuxt({}, [
  prettierConfig,
  {
    files: [
      "**/*.?([cm])ts",
      "**/*.?([cm])js",
      "**/*.vue",
      "**/*.{c,le,sc,postc,pc}ss",
      // "**/*.{g,graph}ql",
      // "**/*.json",
    ],
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "vue/require-default-prop": "off",
    },
  },
]);
