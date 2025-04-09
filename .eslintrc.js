module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "spellcheck"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "spellcheck/spell-checker": [
      "error",
      {
        comments: true,
        strings: true,
        identifiers: true,
        templates: true,
        lang: "en_US",
        skipWords: [
          // lang or framework or cs specific words
          "nodejs",
          "axios",
          "dotnet",
          "golang",
          "erlang",
          "kotlin",
          "cpp",
          "csharp",
          "algolia",
          "ecma",
          "lang",
          "dracula",
          "hotjar",
          "netlify",

          "faq",
          "sdk",
          "unassign",
          "quickstart",
          "Frontend",
          "onboarding",
          "Workspace",
          "pho",
          "integrations",
          "href",
          "dropdown",
          "docusaurus",
          "Fullstack",
          "autocompletion",
          "renderer",
          "io",
          "tagline",
          "favicon",
          "permitio",
          "repo",
          "multitenancy",
          "tailwindcss",
          "Prefixer",
          "io",
          "Closeable",
        ],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  overrides: {
    // disable for test files
    files: ["tests/**"],
    rules: {
      "spellcheck/spell-checker": ["off"],
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
