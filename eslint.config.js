// eslint.config.js
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import imports from "eslint-plugin-import";
import a11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        React: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react: react,
      "react-hooks": reactHooks,
      import: imports,
      prettier: prettier,
      "jsx-a11y": a11y,
    },
    rules: {
      // TypeScript específicas
      "@typescript-eslint/no-explicit-any": "error",
      // "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      // "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      // "@typescript-eslint/naming-convention": [
      //   "error",
      //   {
      //     selector: "interface",
      //     format: ["PascalCase"],
      //     prefix: ["I"],
      //   },
      //   {
      //     selector: "typeAlias",
      //     format: ["PascalCase"],
      //     prefix: ["T"],
      //   },
      //   {
      //     selector: "enum",
      //     format: ["PascalCase"],
      //     prefix: ["E"],
      //   },
      // ],

      // React específicas
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "react/jsx-max-props-per-line": [
        "error",
        {
          maximum: 1,
          when: "multiline",
        },
      ],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
      "react/hook-use-state": "error",
      // "react/no-array-index-key": "error",
      "react/no-unused-prop-types": "error",
      "react/prop-types": "off", // TypeScript se encarga de esto
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off", // TypeScript se encarga de esto

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // Imports
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Accesibilidad
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-static-element-interactions": "error",

      // Buenas prácticas generales
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "max-len": [
        "error",
        {
          code: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
