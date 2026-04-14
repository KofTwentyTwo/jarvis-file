/**
 * Threaded Comment System
 *
 * Real-time comments with @mentions, resolve/reopen, typing indicators.
 * All config read from window.JF -- Firebase config, team directory,
 * collection names, and localStorage keys.
 *
 * Phase 1 implementation: Refactor from Praesidium2 hardcoded values.
 */

"use strict";

// TODO: Phase 1 -- extract from praesidium2-design comments.js
// Replace FIREBASE_CONFIG with window.JF.firebase
// Replace ALLOWED_DOMAIN with window.JF.auth.allowedDomain
// Replace MENTION_USERS with window.JF.team
// Namespace collections: window.JF.project.slug + "_comments"
// Namespace localStorage: "jf_" + window.JF.project.slug + "_"
