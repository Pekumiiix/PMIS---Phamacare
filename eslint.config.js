import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/node_modules/**", ".output/**", "dist/**"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  pluginPrettier,
  eslintConfigPrettier,

  {
    name: "app/main-rules",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],

      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "prefer-const": "error",
      "no-unreachable": "error",
      "no-use-before-define": "off",
      "comma-dangle": "off",
      "no-global-assign": "off",
      quotes: "off",
      "space-before-function-paren": "off",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "no-restricted-syntax": [
        "error",
        {
          selector: 'JSXElement[openingElement.name.name="button"]',
          message:
            "Use the custom <Button> component instead of the native HTML <button>.",
        },
        {
          selector: 'JSXElement[openingElement.name.name="input"]',
          message:
            "Use the custom <Input> component instead of the native HTML <input>.",
        },
        {
          selector: 'JSXElement[openingElement.name.name="label"]',
          message:
            "Use the custom <Label> component instead of the native HTML <label>.",
        },
        {
          selector: 'JSXElement[openingElement.name.name="form"]',
          message:
            "Use the custom <FormBase> component instead of the native HTML <form>.",
        },
      ],

      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message:
                "Import named exports from 'react' instead (e.g., import { useState } from 'react').",
            },
          ],
        },
      ],

      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^@?\\w"],
            ["^@/"],
            [
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
            ],
            ["^.+\\.?(css|scss)$"],
          ],
        },
      ],
    },
  },

  {
    name: "app/ui-components-overrides",
    files: ["src/components/ui/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "no-restricted-syntax": "off",
      "no-restricted-imports": "off",
    },
  },
);
