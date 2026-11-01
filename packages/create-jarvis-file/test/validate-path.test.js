"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");

const { resolveProjectDir } = require("../lib/validate-path");

test("resolves a simple name under the current working directory", () => {
   assert.equal(resolveProjectDir("my-project"), process.cwd() + path.sep + "my-project");
});

test("trims surrounding whitespace", () => {
   assert.equal(resolveProjectDir("  docs  "), process.cwd() + path.sep + "docs");
});

test("rejects missing or non-string input", () => {
   for (const bad of [undefined, null, "", 42, {}]) {
      assert.throws(() => resolveProjectDir(bad), /required/);
   }
});

test("rejects parent directory traversal", () => {
   for (const bad of ["..", "../evil", "a/../b", "..\\evil"]) {
      assert.throws(() => resolveProjectDir(bad), /Invalid project directory/);
   }
});

test("rejects absolute paths", () => {
   for (const bad of ["/etc", "\\windows"]) {
      assert.throws(() => resolveProjectDir(bad), /Invalid project directory/);
   }
});

test("rejects nested paths and invalid filesystem characters", () => {
   for (const bad of ["a/b", "a\\b", "a:b", "a<b", "a|b", "a?b", "a*b", "a\0b"]) {
      assert.throws(() => resolveProjectDir(bad), /Invalid project directory/);
   }
});
