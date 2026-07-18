# Enoch Mendoza — Portfolio

A personal portfolio website for **Enoch Mendoza**, a MERN Stack Developer.
Built as a single-page React app with a soft anime-inspired pastel theme, smooth
scroll-reveal animations, and full light/dark mode support.

🔗 **Live demo:** _add your deployed URL here_

## ✨ Features

- **Single-page design** — Home, About, Skills, Projects, Services, and Contact sections
- **Anime pastel theme** — soft lavender/pink/purple palette with floating gradient blobs
- **Light & dark mode** — toggle in the navbar, remembers your choice, respects system preference
- **Smooth scroll-reveal** — sections and cards gently fade and slide into view as you scroll
- **Fully responsive** — adapts across mobile, tablet, and desktop, with a slide-in mobile menu
- **Real tech-stack icons** — brand SVGs for each skill
- **Working contact form** — opens your mail client with the message pre-filled

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) — build tool & dev server
- Plain CSS (custom properties, flexbox & grid)
- [Oxlint](https://oxc.rs/) — linting

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Create a production build
npm run build

# Preview the production build locally
npm run preview

# Lint the project
npm run lint
```

## 📁 Project Structure

```
src/
├── assets/            # Images and tech-stack SVG icons
├── components/        # Navbar, Hero, About, Skills, Projects, Services, Contact, Footer
├── hooks/             # useTheme (dark mode), useScrollReveal (animations)
├── App.jsx            # Assembles all sections into one page
├── App.css            # All styles + theme tokens
└── main.jsx           # App entry point
```

## 📬 Contact

- **Email:** denenoch.mendoza@gmail.com

---

Made with 💜 & React.
