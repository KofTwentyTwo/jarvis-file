/**
 * Builds the jarvis-file.config.js content from prompt answers.
 *
 * Produces both the browser config (window.JF assignment) and
 * the Node.js config (JSON for backend services).
 */

"use strict";

/**
 * Template metadata for each starter template.
 */
const TEMPLATE_META = {
   "index": {
      file: "index.html",
      name: "Executive Summary",
      color: "#f59e0b",
      shortName: "EXEC SUMMARY",
   },
   "system-design": {
      file: "system-design.html",
      name: "System Design",
      color: "#60a5fa",
      shortName: "SYSTEM DESIGN",
   },
   "implementation": {
      file: "implementation.html",
      name: "Implementation Plan",
      color: "#22d3ee",
      shortName: "IMPLEMENTATION",
   },
   "business-review": {
      file: "business-review.html",
      name: "Business Review",
      color: "#f87171",
      shortName: "BUSINESS REVIEW",
   },
   "presentation": {
      file: "presentation.html",
      name: "Presentation",
      color: "#a78bfa",
      shortName: "PRESENTATION",
   },
};

/**
 * Build the full config object from prompt answers.
 * @param {object} answers - Collected prompt answers
 * @returns {object} Complete config object
 */
function buildConfig(answers) {
   const docs = (answers.templates || ["index"]).map((id) => ({
      id,
      ...TEMPLATE_META[id],
   }));

   const linkMap = docs.map((doc) => ({
      pattern: doc.name,
      href: doc.file,
   }));

   return {
      project: {
         name: answers.projectName,
         slug: answers.projectSlug,
         subtitle: `${answers.projectName} Design Document`,
         logoLetter: answers.projectName.charAt(0).toUpperCase(),
         version: "v0.1",
      },
      firebase: {
         apiKey: answers.firebaseApiKey,
         authDomain: answers.firebaseAuthDomain,
         projectId: answers.firebaseProjectId,
         storageBucket: answers.firebaseStorageBucket,
         messagingSenderId: answers.firebaseMessagingSenderId,
         appId: answers.firebaseAppId,
      },
      auth: {
         allowedDomain: answers.allowedDomain,
         ownerEmail: answers.ownerEmail,
      },
      docs,
      team: [
         {
            handle: answers.ownerName.toLowerCase().replace(/\s+/g, ""),
            name: answers.ownerName,
            title: "Owner",
            type: "user",
         },
         {
            handle: (answers.assistantName || "jarvis").toLowerCase(),
            name: answers.assistantName || "Jarvis",
            title: "Design review assistant",
            type: "agent",
         },
      ],
      assistant: {
         name: answers.assistantName || "Jarvis",
         email: answers.assistantEmail,
         personality: "Knowledgeable, concise, technically brilliant",
         personaFile: "jarvis/PERSONA.md",
         model: answers.chatModel || "claude-sonnet-4-6",
         agentModel: answers.agentModel || "claude-sonnet-4-6",
         maxReplyTokens: 200,
         replyDelayMs: 15000,
      },
      linkMap,
      welcome: {
         messages: [
            {
               content: `Good day. I'm ${answers.assistantName || "Jarvis"}, your guide through the ${answers.projectName} design documents.`,
            },
            {
               content:
                  "A few things that might help:\n* Press **Cmd+K** to search across all documents\n* Hover any card and click the comment icon to leave a note\n* Use the nav bar at top to switch between documents",
            },
            {
               content: "What's your role? I can suggest where to start.",
               roleButtons: [
                  { key: "executive", label: "Executive / C-Suite" },
                  { key: "technical", label: "Technical / Engineering" },
                  { key: "product", label: "Product / Operations" },
                  { key: "browsing", label: "Just Browsing" },
               ],
            },
         ],
         roleResponses: {
            executive: "Start with the Executive Summary, it is the landing page.",
            technical: "Head to System Design for the full technical architecture.",
            product: "The Business Review has deployment examples and ROI analysis.",
            browsing: "No problem. Start with the Executive Summary and explore from there.",
         },
      },
      theme: {
         primaryColor: "#f59e0b",
         accentColor: "#ef4444",
         highlightColor: "#22d3ee",
      },
   };
}

module.exports = { buildConfig, TEMPLATE_META };
