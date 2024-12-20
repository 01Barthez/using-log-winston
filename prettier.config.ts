import type { Options } from "prettier";

const config: Options = {
  arrowParens: "always",
  bracketSpacing: true,
  insertPragma: false,
  printWidth: 120,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: true,
  endOfLine: "auto",
  overrides: [
    {
      files: ".prettierrc",
      options: { parser: "typescript" },
    },
  ],
};

export default config;