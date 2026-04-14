#!/usr/bin/env node

/**
 * create-jarvis-file CLI
 *
 * Interactive generator for Jarvis File projects.
 * Walks through project setup prompts and scaffolds a complete
 * AI-assisted design document site ready for Firebase deployment.
 *
 * Usage:
 *   npx @koftwentytwo/create-jarvis-file my-project
 *   npm create jarvis-file my-project
 */

"use strict";

const path = require("path");
const { runPrompts } = require("../lib/prompts");
const { buildConfig } = require("../lib/config-builder");
const { generateProject } = require("../lib/generator");
const { resolveProjectDir } = require("../lib/validate-path");

async function main() {
   const rawDir = process.argv[2];

   if (!rawDir) {
      console.error("Usage: create-jarvis-file <project-directory>");
      console.error("");
      console.error("Example:");
      console.error("  npx @koftwentytwo/create-jarvis-file my-project");
      process.exit(1);
   }

   const projectDir = resolveProjectDir(rawDir);

   console.log("");
   console.log("  Jarvis File -- Interactive AI-Assisted Design Documents");
   console.log("  -------------------------------------------------------");
   console.log("");

   const answers = await runPrompts(path.basename(projectDir));
   const config = buildConfig(answers);
   await generateProject(projectDir, config);

   console.log("");
   console.log(`  Your Jarvis File project is ready.`);
   console.log("");
   console.log(`    cd ${projectDir}`);
   console.log("");
   console.log("  1. Add your Firebase service account key:");
   console.log("     cp ~/Downloads/service-account-key.json jarvis/");
   console.log("");
   console.log("  2. Deploy Firestore rules + hosting:");
   console.log("     firebase deploy");
   console.log("");
   console.log("  3. Start the AI assistant:");
   console.log("     cd jarvis && npm install");
   console.log("     ANTHROPIC_API_KEY=sk-... npm start");
   console.log("");
   console.log(`  4. Open your site:`);
   console.log(`     https://${config.firebase.projectId}.web.app`);
   console.log("");
}

main().catch((err) => {
   console.error("Error:", err.message);
   process.exit(1);
});
