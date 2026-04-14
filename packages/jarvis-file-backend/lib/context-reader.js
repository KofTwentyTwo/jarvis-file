/**
 * HTML Context Reader
 *
 * Extracts text content from HTML design document sections
 * to provide context for AI responses. Used when Jarvis
 * needs to understand the content being discussed in a comment.
 */

"use strict";

const fs = require("fs");

/**
 * Extract text content from a specific section of an HTML file.
 * @param {string} htmlPath - Path to the HTML file
 * @param {string} sectionId - Section identifier to extract
 * @returns {string} Plain text content of the section
 */
function extractSectionText(htmlPath, sectionId) {
   // TODO: Phase 1 -- implement HTML section text extraction
   // Parse HTML, find section by data-section-id or heading,
   // strip tags, return plain text for LLM context
   return "";
}

/**
 * Extract all text content from an HTML file.
 * @param {string} htmlPath - Path to the HTML file
 * @returns {string} Plain text content of the full document
 */
function extractFullText(htmlPath) {
   if (!fs.existsSync(htmlPath)) {
      return "";
   }

   const html = fs.readFileSync(htmlPath, "utf-8");

   // Strip HTML tags, decode entities, normalize whitespace
   return html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/\s+/g, " ")
      .trim();
}

module.exports = { extractSectionText, extractFullText };
