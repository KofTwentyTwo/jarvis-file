/**
 * Config Loader
 *
 * Loads jarvis-file.config.js and sets CSS custom properties from
 * window.JF.theme. This script must be included before all other
 * framework scripts.
 *
 * Expected load order in HTML:
 *   <script src="jarvis-file.config.js"></script>  <!-- sets window.JF -->
 *   <script src="js/config-loader.js"></script>     <!-- applies theme -->
 *   <script src="js/auth-gate.js"></script>
 */

"use strict";

(function () {
   if (!window.JF) {
      console.error("Jarvis File: window.JF not found. Include jarvis-file.config.js before config-loader.js");
      return;
   }

   var theme = window.JF.theme || {};
   var root = document.documentElement;

   if (theme.primaryColor) root.style.setProperty("--jf-primary", theme.primaryColor);
   if (theme.accentColor) root.style.setProperty("--jf-accent", theme.accentColor);
   if (theme.highlightColor) root.style.setProperty("--jf-highlight", theme.highlightColor);

   // Set page title from config
   if (window.JF.project && window.JF.project.name) {
      document.title = window.JF.project.name;
   }
})();
