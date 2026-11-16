# iPhone-Only GitHub Pages Deployment Guide
1. In iOS Files, tap `isuzu-crosswind-pwa.zip` once to extract the folder.
2. In Safari, open GitHub.com -> `+` -> `New repository`.
3. Tap `uploading an existing file` -> `Choose Files` -> select all extracted files.
4. Note: Because iOS Safari file picker selects individual files cleanly at root, upload root files first, then use `Add file -> Create new file` (typing e.g. `assets/og-image.png` or uploading via GitHub mobile) for subfolders if needed. All core PWA assets (`index.html`, `style.css`, `script.js`, `manifest.json`, `service-worker.js`, `offline.html`, `icon-192.png`, `icon-512.png`, `favicon.ico`) work immediately from the root folder!
