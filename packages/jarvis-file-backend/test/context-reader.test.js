"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const { extractFullText } = require("../lib/context-reader");

function withTempFile(contents, run) {
   const dir = fs.mkdtempSync(path.join(os.tmpdir(), "jarvis-context-"));
   const file = path.join(dir, "doc.html");
   fs.writeFileSync(file, contents);
   try {
      run(file);
   } finally {
      fs.rmSync(dir, { recursive: true, force: true });
   }
}

test("strips tags, scripts and styles and normalizes whitespace", () => {
   const html = "<html><style>p{color:red}</style><body><h1>Title</h1>\n<p>Some   <b>bold</b> text</p>" +
      "<script>alert(1)</script></body></html>";
   withTempFile(html, (file) => {
      assert.equal(extractFullText(file), "Title Some bold text");
   });
});

test("decodes the common HTML entities", () => {
   withTempFile("<p>R&amp;D &lt;draft&gt;&nbsp;done</p>", (file) => {
      assert.equal(extractFullText(file), "R&D <draft> done");
   });
});

test("returns an empty string for a file that does not exist", () => {
   assert.equal(extractFullText(path.join(os.tmpdir(), "jarvis-no-such-file.html")), "");
});
