// ESLint flat config for the Jarvis File packages (`npm run lint` and each package's `lint` script).
// ESLint's recommended rules only: correctness checks, no layout rules. The Node packages are CommonJS;
// jarvis-file-core/js holds browser scripts that share globals through window.JF.
import js from "@eslint/js";
import globals from "globals";

export default [
   {
      ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
   },
   js.configs.recommended,
   {
      rules: {
         // An underscore prefix marks a binding kept for the planned implementation but not used yet.
         "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
      },
   },
   {
      files: ["**/*.js"],
      languageOptions: {
         sourceType: "commonjs",
         globals: { ...globals.node },
      },
   },
   {
      files: ["packages/jarvis-file-core/js/**/*.js"],
      languageOptions: {
         sourceType: "script",
         globals: { ...globals.browser },
      },
   },
];
