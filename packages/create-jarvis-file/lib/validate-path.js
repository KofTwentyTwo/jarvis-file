/**
 * Path validation for CLI input.
 *
 * Sanitizes and validates the user-provided project directory argument
 * before any filesystem operations. This is the single entry point for
 * path validation -- downstream code receives a pre-validated absolute path.
 */

"use strict";

const path = require("path");

const FORBIDDEN_PATTERNS = [
   /\.\./,       // Parent directory traversal
   /^[/\\]/,     // Absolute paths (must be relative to cwd)
   /[<>:"|?*]/,  // Invalid filesystem characters
   /\0/,         // Null bytes
];

/**
 * Validate and resolve a user-provided directory name to an absolute path.
 * Rejects path traversal attempts and invalid characters.
 *
 * @param {string} rawInput - Raw CLI argument (e.g., "my-project")
 * @returns {string} Validated absolute path under the current working directory
 * @throws {Error} If the input contains traversal patterns or invalid characters
 */
function resolveProjectDir(rawInput) {
   if (!rawInput || typeof rawInput !== "string") {
      throw new Error("Project directory name is required.");
   }

   const trimmed = rawInput.trim();

   for (const pattern of FORBIDDEN_PATTERNS) {
      if (pattern.test(trimmed)) {
         throw new Error(
            `Invalid project directory: "${trimmed}". ` +
            "Must be a simple directory name (e.g., 'my-project'), not a path."
         );
      }
   }

   // Only allow a single directory name, no nested paths
   if (trimmed.includes("/") || trimmed.includes("\\")) {
      throw new Error(
         `Invalid project directory: "${trimmed}". ` +
         "Must be a single directory name, not a nested path."
      );
   }

   // Resolve to absolute path under cwd
   const cwd = process.cwd();
   const resolved = cwd + path.sep + trimmed;

   return resolved;
}

module.exports = { resolveProjectDir };
