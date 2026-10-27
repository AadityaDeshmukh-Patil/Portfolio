# 🚗 The Developer Road Trip — Interactive Portfolio Website

> A modern classic, nostalgic, playful, and responsive 2D interactive road trip portfolio built with **HTML5, CSS3, and vanilla JavaScript**.

![Road Trip Preview](assets/favicon.svg)

---

## 🌟 Overview

**The Developer Road Trip** reimagines the developer portfolio as an interactive 2D side-scrolling journey. Rather than scrolling through a generic wall of text, visitors take the wheel of a vintage 1970s red roadster and cruise down a scenic highway discovering your technical skills, software projects, learning milestones, and future ambitions.

### Key Highlights
- **Playable 2D World**: Drive using Left/Right Arrow keys, `A`/`D`, spacebar brake, horn honk (`H`), or mobile on-screen touch buttons.
- **Modern Classic Aesthetic**: Warm ivory (`#F5F0E8`), deep charcoal (`#232522`), muted sage green (`#A3AD91`), vintage racing red (`#D9684B`), and soft sky blue (`#C7D9E2`).
- **Smooth Checkpoint Reveals**: When the car arrives at each landmark, the car slows down into the parking bay, the building illuminates, and an editorial portfolio card slides gracefully into view.
- **Collectible Knowledge Coins**: Floating golden coins along the road that award developer insights and philosophy when collected.
- **Dynamic Day-to-Evening Lighting**: The sky gradient, sun position, and lighting dynamically shift from fresh morning sky into warm noon, amber sunset, and dusk with illuminated headlights and cozy station lights.
- **Deep-Dive Project Inspection**: Click "Inspect Project" on any featured vehicle creation to open a modal with architectural highlights, feature lists, and tech badges.
- **Dual Mode (Drive Mode & Reader Mode)**: Instant toggle between the interactive 2D game world and an accessible, clean, editorial linear portfolio reader.
- **Synthesized Web Audio FX**: Optional engine purr, checkpoint arpeggio, coin chime, and retro dual-tone car horn synthesized via the browser's Web Audio API (zero audio files needed, muted by default).
- **Zero Heavy Frameworks**: Pure semantic HTML5, modern CSS3 (Custom Properties, Flexbox, Grid), and modular Vanilla JS.

---

## 🗺️ Journey Itinerary (Checkpoints)

| Checkpoint | Milestone | Landmark / Theme | Contents |
| :--- | :--- | :--- | :--- |
| **Start** | Mile 0.0 | Starting Line Arch | Welcome banner, driving instructions, vintage roadster ready to roll. |
| **Stop 1** | Mile 0.8 | Editorial Writer's Cottage | **About Me**: Developer background, bio, focus areas, and journey timeline. |
| **Stop 2** | Mile 1.8 | Retro Service Station | **Skills Garage**: Tool racks covering Languages, Frontend, Backend, DSA, AI/ML, and Tools. |
| **Stop 3** | Mile 3.0 | Scenic Highway Overlook | **Project Stops**: Featured software projects with live demos, repos, and inspection modals. |
| **Stop 4** | Mile 4.2 | Academy & Clock Tower | **Education & Experience**: Timelines for degree, internships, mentorship, and activities. |
| **Stop 5** | Mile 5.2 | Golden Trophy Pavilion | **Achievements**: Hackathon wins, open-source PR milestones, certifications, and honors. |
| **Stop 6** | Mile 6.1 | Horizon Vista & Observatory | **Future Destination**: Technologies currently learning, problems to solve, long-term vision. |
| **Stop 7** | Mile 7.0 | Cozy Roadside Rest Station | **Contact Station**: Direct social links, transmission message form, and trip completion summary. |

---

## 🕹️ Controls Guide

| Control | Desktop | Mobile / Touch |
| :--- | :--- | :--- |
| **Drive Forward** | `→` (Right Arrow) or `D` | Tap or hold `▶` button |
| **Drive Reverse** | `←` (Left Arrow) or `A` | Tap or hold `◀` button |
| **Brake** | `Spacebar` | Release touch buttons |
| **Honk Horn (Easter Egg!)** | `H` or click the car | Tap `🎺` button |
| **Close Card / Modal** | `Escape` or click `✕` | Tap `✕` button |
| **Fast-Travel / Direct Jump** | Click any stop in top nav or Route Map | Tap any stop in Route Map |
| **Switch View Mode** | Click `📖 Reader Mode` in header | Tap `📖 Reader Mode` button |

---

## 🚀 Running the Project Locally

No installation or build steps are required! You can open and test the site immediately.

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Right-click on `index.html` in the file explorer.
3. Select **"Open with Live Server"**.
4. The website will launch automatically in your browser at `http://127.0.0.1:5500/index.html`.

### Option 2: Python Built-In HTTP Server
Open your terminal inside this folder and run:
```bash
python3 -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

### Option 3: Double-Click
Simply double-click `index.html` in your operating system's file manager to open it in Google Chrome, Safari, Firefox, or Edge.

---

## 🎨 How to Customize With Your Information

All portfolio text, projects, skills, and links are centralized in a single clean JavaScript object at the top of **`script.js`**. You do not need to modify any game physics or animation code!

Open **`script.js`** and locate `const PORTFOLIO_DATA`:

```javascript
const PORTFOLIO_DATA = {
  developer: {
    name: "Your Name",
    role: "Full-Stack Developer",
    monogram: "YN",
    tagline: "Your personal motto or headline...",
    location: "City, Country / Remote",
    bio: "A short paragraph introducing who you are...",
    timeline: [
      { year: "2021", title: "Started Coding", desc: "Description..." }
    ],
    socials: {
      email: "mailto:your.email@example.com",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://x.com/yourusername"
    }
  },
  
  // Customize your skill categories & tags
  skills: [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "Python", ...]
    }
  ],

  // Add, edit, or remove projects
  projects: [
    {
      id: "my-cool-project",
      name: "Project Name",
      badge: "WEB APPLICATION",
      shortDesc: "Brief summary shown on the highway...",
      fullDesc: "In-depth summary shown inside the inspection modal...",
      tech: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Feature highlight 1",
        "Feature highlight 2"
      ],
      demoUrl: "https://your-live-demo.com",
      repoUrl: "https://github.com/yourusername/project"
    }
  ],

  // Milestones, Achievements, and Future Goals
  milestones: [...],
  achievements: [...],
  future: {
    nowLearning: "...",
    problemsToSolve: "...",
    techToExplore: "...",
    longTermGoal: "..."
  }
};
```

When you edit this object:
- **Both Drive Mode and Reader Mode update in sync automatically.**
- No duplicate content to maintain!

---

## 📁 Project Structure

```
├── index.html         # Main semantic HTML structure, landmarks, modals & reader view
├── style.css          # Design tokens, typography, retro theme, parallax scenery & responsive rules
├── script.js          # Central PORTFOLIO_DATA, 2D physics engine, audio synth, and modal logic
├── assets/
│   └── favicon.svg    # Retro racing roadster vector favicon
├── .gitignore         # Ignores .DS_Store, temporary logs, and local environment files
└── README.md          # Setup, customization, and deployment documentation
```

---

## 🚢 Free 1-Click Deployment

Because this project is built entirely on native static web standards, it can be hosted for free anywhere:

### GitHub Pages
1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Within 60 seconds, your portfolio will be live at `https://<username>.github.io/<repo-name>/`!

### Netlify / Vercel
- **Netlify**: Drag and drop the folder directly onto [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Import the GitHub repo and click Deploy (no build command or output directory needed).

---

## ♿ Accessibility & Performance

- **Reduced Motion Support**: Automatically respects `prefers-reduced-motion: reduce` by defaulting to the clean editorial Reader Mode.
- **Keyboard Navigable**: All checkpoints, buttons, modals, and forms can be focused and triggered with `Tab`, `Enter`, `Escape`, and arrow keys.
- **Zero Asset Latency**: Built with CSS vectors, inline SVG landmarks, and Web Audio API synthesis—achieving instantaneous first paint and a lightweight footprint (< 100 KB total).

---

## 📄 License

Created with ❤️. Feel free to use this template for your personal developer portfolio!

