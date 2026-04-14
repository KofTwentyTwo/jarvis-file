# FAQ

## Firebase Setup

**Q: How do I create a Firebase project?**
Go to console.firebase.google.com, click "Add project", and follow the wizard. Enable Firestore Database and Authentication (Google sign-in provider).

**Q: Where do I find my Firebase config values?**
Firebase Console > Project Settings > General > Your apps > Web app. If no web app exists, click "Add app" and choose Web.

**Q: Is the Firebase API key secret?**
No. The Firebase API key is public by design -- it identifies the project for client-side SDK initialization. Security is enforced by Firestore rules, not API key secrecy.

## Cost

**Q: How much does this cost?**
Typical cost for a 10-person review team: $0-15/month. Firebase free tier covers hosting, auth, and moderate Firestore usage. The main cost is Anthropic API usage, which depends on comment volume.

## Auth

**Q: Can I use email/password auth instead of Google?**
Not in v1. Google sign-in via Firebase Auth is the only supported method.

**Q: Can I allow multiple domains?**
Not in v1. The auth gate restricts to a single Google Workspace domain.
