# Jarvis File

Interactive AI-assisted design documents. Deploy a fully functional, AI-powered design review site to your own Firebase project in under 30 minutes.

## What You Get

- **Authentication gate** -- Google sign-in restricted to your domain
- **Threaded comments** -- @mentions, resolve/reopen, typing indicators, real-time sync
- **AI design assistant** -- monitors comments, responds with contextual intelligence, files change requests
- **Automated change processor** -- Claude Agent SDK implements approved changes, commits, deploys
- **Full-text search** -- Cmd+K cross-document search with highlighted results and deep linking
- **Version tracking** -- revision dropdown, version history, archived snapshots
- **Dark-theme design system** -- cards, grids, stat boxes, badges, tables, responsive breakpoints
- **Starter templates** -- Executive Summary, System Design, Implementation Plan, Business Review, Presentation

## Quick Start

```bash
npx @koftwentytwo/create-jarvis-file my-project
cd my-project
firebase deploy
cd jarvis && npm install
ANTHROPIC_API_KEY=sk-... npm start
```

Then open `https://my-project.web.app`.

## Packages

| Package | Description |
|---------|-------------|
| [`@koftwentytwo/create-jarvis-file`](packages/create-jarvis-file) | CLI generator -- interactive prompts, file scaffolding |
| [`@koftwentytwo/jarvis-file-core`](packages/jarvis-file-core) | Browser framework -- auth gate, comments, search, chat, design system CSS |
| [`@koftwentytwo/jarvis-file-backend`](packages/jarvis-file-backend) | Node.js AI services -- comment monitor, chat responder, change processor |

## How It Works

Jarvis File extracts the battle-tested interactive design document platform built for [Praesidium2](https://praesidium2-design.web.app) into a reusable open source product. The CLI generator scaffolds a complete project with your configuration, and the framework JS reads everything from a single `jarvis-file.config.js` file.

## Documentation

- [Getting Started](docs/getting-started.md) -- zero-to-deployed walkthrough
- [Configuration](docs/configuration.md) -- full config schema reference
- [Design System](docs/design-system.md) -- CSS component guide
- [Jarvis Backend](docs/jarvis-backend.md) -- AI backend setup and persona customization
- [Templates](docs/templates.md) -- template customization guide
- [FAQ](docs/faq.md) -- Firebase setup, auth issues, cost estimation

## Tech Stack

- **Hosting**: Firebase Hosting (static HTML)
- **Database**: Cloud Firestore (real-time comments, chat, change requests)
- **Auth**: Firebase Auth (Google sign-in)
- **AI**: Anthropic Claude (chat responses, change implementation)
- **Agent**: Claude Agent SDK (automated change processor)

## Cost

Typical cost for a 10-person review team: $0-15/month (mostly within Firebase free tiers, plus Anthropic API usage based on comment volume).

## License

MIT
