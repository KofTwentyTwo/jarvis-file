# Getting Started

Zero-to-deployed walkthrough for Jarvis File.

## Prerequisites

- Node.js 18+
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project (create one at console.firebase.google.com)
- An Anthropic API key (console.anthropic.com)
- A Google Workspace domain for auth restriction

## Steps

1. **Create your project**
   ```bash
   npx @koftwentytwo/create-jarvis-file my-project
   ```

2. **Configure Firebase** -- the CLI will prompt for your Firebase project details

3. **Deploy**
   ```bash
   cd my-project
   firebase deploy
   ```

4. **Start the AI assistant**
   ```bash
   cd jarvis && npm install
   cp ~/Downloads/service-account-key.json .
   ANTHROPIC_API_KEY=sk-... npm start
   ```

5. **Open your site** at `https://your-project.web.app`

## What Gets Created

See [Configuration](configuration.md) for the full file listing and config schema.
