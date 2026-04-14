/**
 * Firestore initialization for backend services.
 *
 * Initializes Firebase Admin SDK with service account credentials
 * and returns a Firestore database reference.
 */

"use strict";

const admin = require("firebase-admin");

let initialized = false;

/**
 * Initialize Firestore with service account credentials.
 * @param {object} config - Jarvis File config object
 * @returns {FirebaseFirestore.Firestore} Firestore database reference
 */
function initFirestore(config) {
   if (!initialized) {
      admin.initializeApp({
         credential: admin.credential.applicationDefault(),
         projectId: config.firebase.projectId,
      });
      initialized = true;
   }

   return admin.firestore();
}

module.exports = { initFirestore };
