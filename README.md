# Tell Me Tails — Landing site

This is a simple static multi-page prototype for "Tell Me Tails!" — a storytelling companion for young children.

What you get:
- `index.html` — homepage with hero, features, newsletter signup (client-side only)
- `about.html` — simple about / team page
- `contact.html` — contact form using `mailto:` (client default)
- `styles.css` — styling using the provided color palette
- `script.js` — client-side newsletter capture (stores subscribers in localStorage)
- `assets/logo.svg` — placeholder logo (simple SVG)

How to run locally (Windows):
1. Open the folder in File Explorer and double-click `index.html`, or
2. From PowerShell in this folder, run:

```powershell
start .\index.html
```

Notes:
- The newsletter form is client-side only for now: it validates the email and stores addresses in `localStorage` under the key `tm_subscribers`.
- To deploy: upload the folder to GitHub Pages, Netlify, or any static host.

Next steps I can do for you:
- Wire the subscribe form to Mailchimp/ConvertKit/SendGrid or a simple server endpoint
- Add real logo and Instagram link
- Add more UX polish and animations
- Implement analytics or A/B launch page for collecting college / press emails

Tell me which items you want next and I will implement them.