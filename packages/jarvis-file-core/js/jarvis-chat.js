/**
 * AI Chat Assistant (Client-Side)
 *
 * Chat window UI with welcome flow, role-based suggestions,
 * Firestore-backed conversation history, and link auto-detection.
 * All config read from window.JF.
 *
 * Phase 1 implementation: Refactor from Praesidium2 hardcoded values.
 */

"use strict";

// TODO: Phase 1 -- extract from praesidium2-design jarvis-chat.js
// Replace JARVIS_EMAIL with window.JF.assistant.email
// Replace CHAT_COLLECTION with window.JF.project.slug + "_jarvis_chats"
// Replace LINK_MAP with window.JF.linkMap (compile regex at init)
// Replace WELCOME_MESSAGES with window.JF.welcome.messages
// Replace ROLE_RESPONSES with window.JF.welcome.roleResponses
// Namespace localStorage/sessionStorage: "jf_" + window.JF.project.slug + "_"
