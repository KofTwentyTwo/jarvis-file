# Jarvis Backend

Setup and configuration for the AI backend services.

## Architecture

Two Node.js processes run alongside the static site:

1. **jarvis.js** -- Comment monitor + chat responder. Watches Firestore for new comments and chat messages, generates Claude responses, posts them back.

2. **change-processor.js** -- Automated change implementation. Watches for approved change requests, spawns a Claude Code agent to implement changes, commits and deploys.

## Requirements

- Node.js 18+
- Firebase service account key (`service-account-key.json`)
- `ANTHROPIC_API_KEY` environment variable
- `GOOGLE_APPLICATION_CREDENTIALS` pointing to the service account key

## Persona Customization

Edit `jarvis/PERSONA.md` to change the AI assistant's personality, response guidelines, and behavior. The persona file is loaded as the system prompt for comment and chat responses.

TODO: Phase 4 -- full setup guide, troubleshooting, and advanced configuration.
