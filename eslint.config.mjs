import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ),
  {
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          shorthandFirst: true,
          reservedFirst: ["key"],
        },
      ],
      "import/order": [
        "error",
        {
          pathGroups: [
            {
              pattern: "@/**",
              group: "external",
              position: "after",
            },
          ],
          groups: ["builtin", "external", "internal", "unknown", "parent", "sibling", "index", "object", "type"],
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],
    },
  },
];

export default eslintConfig;
