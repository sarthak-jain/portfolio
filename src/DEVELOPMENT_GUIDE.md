# Portfolio Website - Development Guide

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/sarthak-jain/portfolio.git
cd portfolio
```

### 2. Switch to the source branch
```bash
git checkout sarthak-portfolio
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start local dev server
```bash
npm start
```
Open **http://localhost:3000** to preview changes locally.

## Making Changes

Edit files in `src/` — the browser will hot-reload automatically.

### Key Files

| File | Purpose |
|------|---------|
| `src/views/Home.jsx` | Hero section (intro, typing animation, resume button) |
| `src/views/About.jsx` | About me + tech stack icons |
| `src/views/Experience.jsx` | Experience & education timeline |
| `src/views/Projects.jsx` | Projects section |
| `src/views/Contact.jsx` | Contact info (phone, email, address, form) |
| `src/constants.js` | Tech stack icons, social links, services data |
| `src/components/Navbar.jsx` | Navigation bar links |
| `public/CNAME` | Custom domain configuration |
| `public/Sarthak-Jain-Resume.pdf` | Resume PDF for download |

## Committing & Pushing Changes

```bash
git add .
git commit -m "Your commit message"
git push
```

## Deploying to Live Site

```bash
npm run deploy
```

This builds the app and pushes it to the `gh-pages` branch. The live site at **www.sarthakjain18.com** will update in 1-2 minutes.

## Branch Structure

| Branch | Purpose |
|--------|---------|
| `sarthak-portfolio` | Source code (make all changes here) |
| `gh-pages` | Auto-generated build (serves the live site — do not edit directly) |
