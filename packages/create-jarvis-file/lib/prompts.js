/**
 * Interactive prompts for project setup.
 *
 * Every prompt has a sensible default. The generator walks the user
 * through project identity, Firebase config, auth, team directory,
 * AI assistant settings, and template selection.
 */

"use strict";

const prompts = require("prompts");
const path = require("path");

/**
 * Run the interactive prompt sequence.
 * @param {string} projectDir - The target directory name
 * @returns {Promise<object>} Collected answers
 */
async function runPrompts(projectDir) {
   const defaultName = path.basename(projectDir);
   const defaultSlug = defaultName.toLowerCase().replace(/[^a-z0-9-]/g, "-");

   const questions = [
      // -- Project Identity --
      {
         type: "text",
         name: "projectName",
         message: "Project name",
         initial: defaultName,
      },
      {
         type: "text",
         name: "projectSlug",
         message: "Project slug (used for Firebase, localStorage, collections)",
         initial: defaultSlug,
      },

      // -- Firebase --
      {
         type: "text",
         name: "firebaseProjectId",
         message: "Firebase project ID",
         initial: (prev) => prev,
      },
      {
         type: "text",
         name: "firebaseApiKey",
         message: "Firebase API key",
      },
      {
         type: "text",
         name: "firebaseAuthDomain",
         message: "Firebase auth domain",
         initial: (_, values) => `${values.firebaseProjectId}.firebaseapp.com`,
      },
      {
         type: "text",
         name: "firebaseStorageBucket",
         message: "Firebase storage bucket",
         initial: (_, values) => `${values.firebaseProjectId}.firebasestorage.app`,
      },
      {
         type: "text",
         name: "firebaseMessagingSenderId",
         message: "Firebase messaging sender ID",
      },
      {
         type: "text",
         name: "firebaseAppId",
         message: "Firebase app ID",
      },

      // -- Auth --
      {
         type: "text",
         name: "allowedDomain",
         message: "Allowed auth domain (e.g., yourcompany.com)",
      },
      {
         type: "text",
         name: "ownerEmail",
         message: "Owner email (change request approver)",
      },
      {
         type: "text",
         name: "ownerName",
         message: "Owner display name",
         initial: (_, values) => values.ownerEmail?.split("@")[0] || "",
      },

      // -- AI Assistant --
      {
         type: "text",
         name: "assistantName",
         message: "AI assistant name",
         initial: "Jarvis",
      },
      {
         type: "text",
         name: "assistantEmail",
         message: "AI assistant email",
         initial: (_, values) =>
            `${(values.assistantName || "jarvis").toLowerCase()}@${values.projectSlug}.ai`,
      },
      {
         type: "select",
         name: "chatModel",
         message: "LLM model for chat responses",
         choices: [
            { title: "claude-sonnet-4-6 (recommended)", value: "claude-sonnet-4-6" },
            { title: "claude-haiku-4-5", value: "claude-haiku-4-5-20251001" },
            { title: "claude-opus-4-6", value: "claude-opus-4-6" },
         ],
         initial: 0,
      },
      {
         type: "select",
         name: "agentModel",
         message: "LLM model for change processor",
         choices: [
            { title: "claude-sonnet-4-6 (recommended)", value: "claude-sonnet-4-6" },
            { title: "claude-opus-4-6", value: "claude-opus-4-6" },
         ],
         initial: 0,
      },

      // -- Templates --
      {
         type: "multiselect",
         name: "templates",
         message: "Starter templates to include",
         choices: [
            { title: "Executive Summary", value: "index", selected: true },
            { title: "System Design", value: "system-design", selected: true },
            { title: "Implementation Plan", value: "implementation", selected: true },
            { title: "Business Review", value: "business-review", selected: true },
            { title: "Presentation", value: "presentation", selected: true },
         ],
      },
   ];

   const onCancel = () => {
      console.log("\nSetup cancelled.");
      process.exit(0);
   };

   return prompts(questions, { onCancel });
}

module.exports = { runPrompts };
