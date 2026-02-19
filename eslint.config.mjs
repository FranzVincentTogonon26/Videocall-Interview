import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default defineConfig([
	{ files: ["backend/**/*.js"], languageOptions: { globals: globals.node } },
	{ 
    files: ["backend/**/*.js"], 
    plugins: { js, react }, 
    extends: ["js/recommended"],
    settings: {
          react: {
            version: "detect",
          },
        }, 
  },
]);
