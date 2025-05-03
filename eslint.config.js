import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.config({
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  }),
  {
    ignores: ["package.json"], // 👈 This tells ESLint to skip this file
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "react-native/no-inline-styles": "off",
      "prettier/prettier": ["error", { semi: false, singleQuote: true }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
