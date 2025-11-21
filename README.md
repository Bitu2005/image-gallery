# Simple Image Gallery

Static responsive image gallery for deployment demo.

Files:
- index.html
- styles.css
- script.js
- images/ (contains uploaded.jpg and placeholders)

Run locally:
`python3 -m http.server 8000`

Then open http://localhost:8000

Note: The project includes the original local file path as a reference (file:///mnt/data/...). When deploying, use the relative path `images/uploaded.jpg` which is included in this repo.
