# Configuration

Full reference for `jarvis-file.config.js` -- the single source of truth for your Jarvis File instance.

## Config Schema

TODO: Phase 4 -- document all config fields from Section 2.1 of the design spec.

| Section | Key Fields |
|---------|-----------|
| `project` | name, slug, subtitle, logoLetter, version |
| `firebase` | apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId |
| `auth` | allowedDomain, ownerEmail |
| `docs` | Array of document definitions (id, file, name, color, shortName) |
| `team` | Array of team members for @mentions (handle, name, title, type) |
| `assistant` | name, email, personality, model, agentModel, maxReplyTokens, replyDelayMs |
| `linkMap` | Auto-linking patterns for chat messages |
| `welcome` | Welcome flow messages and role-based responses |
| `theme` | primaryColor, accentColor, highlightColor |
