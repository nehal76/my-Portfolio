# My Portfolio

A modern, interactive personal portfolio website built with React and Vite, featuring 3D animations, smooth transitions, and a professional design.

---

## 🚀 Tech Stack

### Frontend
| Technology | Version | Description |
|------------|---------|-------------|
| React | ^19.1.1 | UI library for building user interfaces |
| JavaScript | ES6+ | Core programming language |
| TypeScript | ^9.32.0 | Static typing for JavaScript |
| Vite | ^7.1.0 | Next-generation frontend build tool |

### Styling & UI
| Technology | Version | Description |
|------------|---------|-------------|
| Tailwind CSS | ^4.1.11 | Utility-first CSS framework |
| GSAP | ^2.1.2 | Animation library for complex animations |
| Lottie React | ^2.4.1 | JSON animation integration |

### Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| Lucide React | ^0.539.0 | Icon library |
| React Icons | ^5.5.0 | Icon components |
| Axios | ^1.6.0 | HTTP client |
| Sonner | ^2.0.7 | Toast notifications |
| React Globe.gl | ^2.27.2 | 3D globe visualization |
| @formspree/react | ^0.5.0 | Form handling |
| @gsap/react | ^2.1.2 | GSAP React integration |

### Dev Tools
| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| Git | Version control |
| Docker | Containerization |
| Jenkins | CI/CD automation |

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd my-app
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

---

## 🚦 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code analysis |

### Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Production files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
my-app/
├── public/
│   └── assets/
├── src/
│   ├── assets/
│   │   └── com/
│   │       ├── AboutSection.jsx
│   │       ├── Contact.jsx
│   │       ├── Footer.jsx
│   │       ├── Globe3D.jsx
│   │       ├── Hero.jsx
│   │       ├── Navbar.jsx
│   │       ├── ProjectShowCase.jsx
│   │       ├── TechStack.jsx
│   │       └── un.jsx
│   ├── Lotti/
│   │   ├── developer skills.json
│   │   └── salesMan.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Configuration

### Vite Configuration

The project uses Vite with Tailwind CSS plugin:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### ESLint Configuration

Code quality is maintained with ESLint. Run linting with:

```bash
npm run lint
```

---

## 🐳 Docker Support (Optional)

To containerize the application:

### 1. Build the Docker Image

```bash
docker build -t portfolio .
```

### 2. Run the Container

```bash
docker run -p 5173:5173 portfolio
```

---

## 📄 License

This project is for personal use. All rights reserved.

---

## 👤 Author

**Neha Ahmed**

- GitHub: [your-username]
- LinkedIn: [your-linkedin]
- Email: [your-email]

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [GSAP](https://greensock.com/gsap/) - Animations
- [Lucide](https://lucide.dev/) - Icons

---

*Last Updated: April 2026*
