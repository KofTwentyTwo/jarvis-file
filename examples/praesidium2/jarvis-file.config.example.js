// jarvis-file.config.js -- Praesidium2 Reference Implementation
// Credentials sanitized. Replace with your own Firebase project values.

window.JF = {
   project: {
      name: "Praesidium2",
      slug: "praesidium2-design",
      subtitle: "DMD Brands -- Confidential Design Document",
      logoLetter: "P",
      version: "v1.10",
   },

   firebase: {
      apiKey: "YOUR_FIREBASE_API_KEY",
      authDomain: "praesidium2-design.firebaseapp.com",
      projectId: "praesidium2-design",
      storageBucket: "praesidium2-design.firebasestorage.app",
      messagingSenderId: "000000000000",
      appId: "1:000000000000:web:abcdef1234567890",
   },

   auth: {
      allowedDomain: "dmdbrands.com",
      ownerEmail: "jmaes@dmdbrands.com",
   },

   docs: [
      { id: "index",           file: "index.html",           name: "Executive Summary", color: "#f59e0b", shortName: "EXEC SUMMARY" },
      { id: "system-design",   file: "system-design.html",   name: "System Design",     color: "#60a5fa", shortName: "SYSTEM DESIGN" },
      { id: "implementation",  file: "implementation.html",  name: "Implementation",    color: "#22d3ee", shortName: "IMPLEMENTATION" },
      { id: "business-review", file: "business-review.html", name: "Business Review",   color: "#f87171", shortName: "BUSINESS REVIEW" },
   ],

   team: [
      { handle: "jmaes",      name: "James Maes",      title: "CTO",                    type: "user" },
      { handle: "bchupp",     name: "Bryan Chupp",     title: "CMO",                    type: "user" },
      { handle: "cchupp",     name: "Chris Chupp",     title: "CEO",                    type: "user" },
      { handle: "bpotter",    name: "Bryan Potter",    title: "VP Me Health",           type: "user" },
      { handle: "mcarpenter", name: "Matt Carpenter",  title: "VP Product Dev",         type: "user" },
      { handle: "jarvis",     name: "Jarvis",          title: "Design review assistant", type: "agent" },
      { handle: "friday",     name: "F.R.I.D.A.Y.",   title: "Code review agent",      type: "agent" },
   ],

   assistant: {
      name: "Jarvis",
      email: "jarvis@praesidium2.ai",
      personality: "British, dry wit, technically brilliant, subtly protective of quality",
      personaFile: "jarvis/PERSONA.md",
      model: "claude-sonnet-4-6",
      agentModel: "claude-sonnet-4-6",
      maxReplyTokens: 200,
      replyDelayMs: 15000,
   },

   linkMap: [
      { pattern: "Executive Summary",   href: "index.html" },
      { pattern: "Implementation Plan",  href: "implementation.html" },
      { pattern: "Business Review",      href: "business-review.html" },
      { pattern: "System Design",        href: "system-design.html" },
   ],

   welcome: {
      messages: [
         { content: "Good day. I'm Jarvis, your guide through the Praesidium2 design documents." },
         { content: "A few things that might help:\n* Press **Cmd+K** to search across all documents\n* Hover any card and click the comment icon to leave a note\n* Use the nav bar at top to switch between documents" },
         { content: "What's your role? I can suggest where to start.", roleButtons: [
            { key: "executive", label: "Executive / C-Suite" },
            { key: "technical", label: "Technical / Engineering" },
            { key: "product",   label: "Product / Operations" },
            { key: "browsing",  label: "Just Browsing" },
         ]},
      ],
      roleResponses: {
         executive: "Start with the Executive Summary, it is the landing page.",
         technical: "Head to System Design for the full technical architecture.",
         product:   "The Business Review has deployment examples and ROI analysis.",
         browsing:  "No problem. Start with the Executive Summary and explore from there.",
      },
   },

   theme: {
      primaryColor: "#f59e0b",
      accentColor: "#ef4444",
      highlightColor: "#22d3ee",
   },
};
