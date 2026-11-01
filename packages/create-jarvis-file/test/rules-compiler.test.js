"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");

const { compileRules } = require("../lib/rules-compiler");

const config = {
   auth: { allowedDomain: "example.com", ownerEmail: "owner@example.com" },
   project: { slug: "acme" },
};

test("scopes every collection to the project slug", () => {
   const rules = compileRules(config);
   assert.match(rules, /match \/acme_comments\/\{commentId\}/);
   assert.match(rules, /match \/acme_jarvis_chats\/\{chatId\}/);
});

test("restricts access to the allowed domain with the dots escaped", () => {
   const rules = compileRules(config);
   assert.match(rules, /matches\('\.\*@example\[\.\]com'\)/);
   assert.doesNotMatch(rules, /@example\.com'\)/);
});

test("never allows deleting comments", () => {
   assert.match(compileRules(config), /allow delete: if false;/);
});

test("fails loudly when the config has no auth section", () => {
   assert.throws(() => compileRules({ project: { slug: "acme" } }), TypeError);
});
