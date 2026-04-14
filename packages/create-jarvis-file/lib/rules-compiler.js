/**
 * Firestore rules template compiler.
 *
 * Takes a config object and produces Firestore security rules
 * with the correct domain, owner email, and collection prefixes.
 */

"use strict";

/**
 * Compile Firestore rules from config.
 * @param {object} config - Complete config object
 * @returns {string} Firestore rules content
 */
function compileRules(config) {
   const domain = config.auth.allowedDomain;
   const domainEscaped = domain.replace(/\./g, "[.]");
   const owner = config.auth.ownerEmail;
   const slug = config.project.slug;

   return `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Comments -- restricted to @${domain}
    match /${slug}_comments/{commentId} {
      allow read: if request.auth != null
                  && request.auth.token.email.matches('.*@${domainEscaped}');

      allow create: if request.auth != null
                    && request.auth.token.email.matches('.*@${domainEscaped}')
                    && request.resource.data.authorEmail == request.auth.token.email
                    && request.resource.data.keys().hasAll([
                         'documentId', 'pageId', 'sectionId', 'content',
                         'authorName', 'authorEmail', 'parentId', 'status',
                         'docVersion', 'createdAt'
                       ]);

      allow update: if request.auth != null
                    && request.auth.token.email.matches('.*@${domainEscaped}')
                    && request.resource.data.diff(resource.data).affectedKeys()
                       .hasOnly(['status', 'resolvedBy', 'resolvedAt'])
                    && request.resource.data.status in ['open', 'resolved'];

      allow delete: if false;
    }

    // Chat messages -- restricted to @${domain}
    match /${slug}_jarvis_chats/{chatId} {
      allow read: if request.auth != null
                  && request.auth.token.email.matches('.*@${domainEscaped}');

      allow create: if request.auth != null
                    && request.auth.token.email.matches('.*@${domainEscaped}')
                    && request.resource.data.keys().hasAll([
                         'sessionId', 'role', 'content',
                         'authorName', 'authorEmail', 'createdAt'
                       ]);

      allow update: if false;
      allow delete: if false;
    }

    // Change requests -- owner-approved workflow
    match /${slug}_change_requests/{crId} {
      allow read: if request.auth != null
                  && request.auth.token.email.matches('.*@${domainEscaped}');

      allow update: if request.auth != null
                    && request.auth.token.email == '${owner}'
                    && request.resource.data.diff(resource.data).affectedKeys()
                       .hasOnly(['status', 'updatedAt']);
    }

    // Typing indicators -- ephemeral
    match /${slug}_typing_indicators/{indicatorId} {
      allow read, write: if request.auth != null
                         && request.auth.token.email.matches('.*@${domainEscaped}');
    }
  }
}
`;
}

module.exports = { compileRules };
