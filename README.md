# Danica Rose Salve — Portfolio (React + Vite + Tailwind CSS)

A clean, professional, fully responsive portfolio built with **React**,
**Vite**, and **Tailwind CSS**, with logos from **react-icons**
(Simple Icons for your tech stack, Feather icons for UI, Font Awesome
for your social links).

Sections: Hero, About, Tech Stack, Projects (filterable by Academic /
Client-Based / Personal / Hardware — each with a screenshot carousel),
Certificates (filterable by type), Internship Experience, and Contact.

## Requirements

You'll need **Node.js** installed (v18 or later). Check with:

```bash
node -v
```

If you don't have it, get it from https://nodejs.org

## 1. Install & run locally

Unzip the project, then from inside the `portfolio-react` folder:

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173) — the
site hot-reloads as you edit.

## 2. Add your content

Everything you need to edit lives in **`src/data.js`**. It's commented
section by section:

- `PROFILE` — name, tagline, bio, contact info, socials
- `TECH_STACK` — already filled in with everything you listed
- `PROJECTS` — one object per project (Academic / Client-Based /
  Personal / Hardware). Fill in overview/problem/solution/links and
  add image paths.
- `CERTIFICATES` — 2 placeholders currently. Delete them and add your
  real trainings/seminars/certifications using the same shape.
- `INTERNSHIP` — already filled in from what you sent.

You never need to touch the component files in `src/components/` to
update content.

## 3. Add your images

Drop screenshots into `public/images/projects/`, then reference them
in `src/data.js` with a leading slash (no "public" in the path):

```js
images: [
  "/images/projects/gym-mgmt-1.jpg",
  "/images/projects/gym-mgmt-2.jpg",
  "/images/projects/gym-mgmt-3.jpg"
]
```


Add as many as you want per project — the modal automatically becomes
a swipeable carousel with arrows and dots.

**Figma projects**: set `cover` to your cover image, and
`links.figma` to your file's view-only share link (in Figma:
Share → Anyone with the link → Can view → Copy link).

**Multimedia pieces**: fill `images` with the artwork and use
`overview` to describe what's behind the image and the tools used.

## 4. Add your resume

Save it as a PDF at exactly:

```
public/resume/Danica-Rose-Salve-Resume.pdf
```

Every "Download Resume" button already points to that path.

## 5. Turn on the contact form (free, no backend)

The form currently points to a placeholder Formspree endpoint.

1. Go to https://formspree.io and sign up free.
2. Create a form, copy the endpoint (looks like
   `https://formspree.io/f/abcd1234`).
3. Open `src/components/Contact.jsx`, find:
   ```jsx
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   and replace `YOUR_FORM_ID` with your real one.
4. Optionally delete the small note under the submit button.

Formspree's free tier covers 50 submissions/month, plenty for a
portfolio.

## 6. Push to GitHub

From inside the `portfolio-react` folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Then on GitHub.com:
1. Click **+ → New repository** (top right). Name it e.g.
   `portfolio`. Leave it empty (no README/license).
2. Copy the commands GitHub shows under "…or push an existing
   repository from the command line":

```bash
git branch -M main
git remote add origin https://github.com/dncslv/portfolio.git
git push -u origin main
```

`node_modules` and `dist` are already excluded via `.gitignore`, so
only your source code gets pushed — that's expected and correct.

## 7. Deploy for free — Vercel or Netlify

Both platforms detect Vite automatically, but in case they ask:

| Setting | Value |
|---|---|
| Framework preset | **Vite** |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

**Vercel**
1. https://vercel.com → sign up/log in with GitHub.
2. **Add New → Project** → select your `portfolio` repo.
3. Settings auto-fill from the table above — click **Deploy**.
4. You get a free `.vercel.app` URL in about a minute.

**Netlify** (alternative)
1. https://netlify.com → sign up/log in with GitHub.
2. **Add new site → Import an existing project** → pick your repo.
3. Build command `npm run build`, publish directory `dist`.
4. Click **Deploy site** → free `.netlify.app` URL.

Either way, every `git push` after this triggers an automatic
redeploy — no manual steps.

## 8. Optional: custom domain

Both platforms let you attach a custom domain (e.g.
`danicasalve.dev`) for free — you'd only pay for the domain itself,
usually ~$10–15/year from a registrar like Namecheap.

---

## File map

```
portfolio-react/
├── index.html
├── src/
│   ├── data.js               → ALL your editable content lives here
│   ├── App.jsx                → assembles the page
│   ├── index.css               → Tailwind + global styles
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── TechStack.jsx
│       ├── Projects.jsx
│       ├── ProjectModal.jsx
│       ├── Certificates.jsx
│       ├── Internship.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── public/
│   ├── resume/                → put your resume PDF here
│   └── images/projects/       → put project screenshots here
└── tailwind.config.js         → color palette & fonts
```
