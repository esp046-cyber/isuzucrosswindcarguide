const fs = require("fs");
const required = ["index.html", "style.css", "script.js", "manifest.json", "service-worker.js", "offline.html"];
const missing = required.filter(f => !fs.existsSync(f));
if (missing.length) {
  console.error("Missing files:", missing);
  process.exit(1);
}
console.log("All core PWA files verified successfully.");
