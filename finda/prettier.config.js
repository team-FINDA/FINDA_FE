module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: true,
  printWidth: 120,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  vueIndentScriptAndStyle: false,
  plugins: ["prettier-plugin-tailwindcss"],
  importOrder: ["^[^./(@/)]", "^(@/)", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderTypeScriptVersion: "5.0.0",
};
