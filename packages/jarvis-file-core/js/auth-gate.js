/**
 * Authentication Gate
 *
 * Firebase Auth with Google sign-in, restricted to the configured domain.
 * Reads all config from window.JF (set by jarvis-file.config.js).
 *
 * Phase 1 implementation: Refactor from Praesidium2 hardcoded values
 * to read from window.JF.firebase, window.JF.auth, window.JF.project.
 */

"use strict";

// TODO: Phase 1 -- extract from praesidium2-design auth-gate.js
// Replace hardcoded Firebase config with window.JF.firebase
// Replace hardcoded domain with window.JF.auth.allowedDomain
// Replace hardcoded project name/logo with window.JF.project
