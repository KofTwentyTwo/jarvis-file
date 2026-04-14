# Jarvis File

Open source interactive AI-assisted design document platform. TypeScript/Node.js monorepo with three packages.

## Project Structure

```
packages/create-jarvis-file/  -- CLI generator (npx create-jarvis-file)
packages/jarvis-file-core/    -- Browser framework JS + CSS
packages/jarvis-file-backend/  -- Node.js AI services (Jarvis + change processor)
templates/                     -- HTML starter templates and .tmpl files
docs/                          -- User-facing documentation
specs/                         -- Design specifications
examples/praesidium2/          -- Reference implementation
```

## Commands

```bash
npm install           # install all deps (workspaces)
npm test              # run all tests
npm run lint          # lint all packages
```

## Key Design Decisions

- Single config file: `jarvis-file.config.js` sets `window.JF` (browser) and generates `jarvis-file.config.json` (Node.js)
- Firebase-only for v1 (Auth + Firestore + Hosting)
- Anthropic Claude only for v1 LLM
- Dark theme only for v1
- CLI copies files into user's project (no runtime dependency on framework packages)
- MIT licensed, published under @koftwentytwo on npm

## Tracker

GitHub Issues on this repo.

## Reference

- Design spec: `specs/jarvis-file-design.md`
- Origin project: praesidium2-design.web.app
