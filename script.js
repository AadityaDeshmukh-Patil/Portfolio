/**
 * ============================================================================
 * THE DEVELOPER ROAD TRIP — JAVASCRIPT ENGINE
 * A Modern Classic 2D Interactive Portfolio Experience
 * Vanilla JavaScript (ES6+), Modular, Accessible, and Performance-Optimized
 * ============================================================================
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DATA SOURCE & EDITABLE PORTFOLIO CONTENT
  // Edit your personal information, projects, skills, and goals right here!
  // ==========================================================================

  const PORTFOLIO_DATA = {
    developer: {
      name: "Aaditya Deshmukh Patil",
      role: "Computer Science Student (AI & ML) · Aspiring Technology Builder",
      monogram: "ADP",
      tagline: "Learning to Build. Thinking Beyond the Code.",
      supporting: "One idea, one experiment, and one project at a time.",
      location: "Newton School of Technology · Pune, India",
      bio: "I'm Aaditya, a Computer Science student at Newton School of Technology with a growing interest in AI, Machine Learning, and the art of building technology. My journey is about more than learning to write code. I want to understand how things work, how different technologies connect, and how an idea can become something useful in the real world. I'm strengthening my programming and problem-solving fundamentals while exploring web development, intelligent systems, electronics, IoT, and robotics. My long-term goal is to become a technology founder: someone who identifies meaningful problems, builds practical solutions, and turns promising ideas into products people can use. I'm still learning, experimenting, and discovering my direction. This portfolio is a snapshot of that journey.",
      timeline: [
        {
          year: "FOUNDATIONS",
          title: "Programming & Problem Solving",
          desc: "Building a rock-solid base in Python programming, fundamental data structures, algorithms, and active competitive programming practice."
        },
        {
          year: "EXPLORATION",
          title: "Intelligent Systems & Web Tech",
          desc: "Studying core AI and Machine Learning principles while engineering interactive, responsive web applications."
        },
        {
          year: "HARDWARE & IOT",
          title: "Bridging Physical & Digital Systems",
          desc: "Experimenting with electronics, embedded systems, robotics, and the Internet of Things to connect software with physical environments."
        },
        {
          year: "THE VISION",
          title: "Aspiring Technology Founder",
          desc: "Aiming to identify meaningful problems, build practical solutions, and transform promising ideas into products people use."
        }
      ],
      socials: {
        email: "mailto:aadityadeshmukhpatil@example.com",
        github: "https://github.com/aadityadeshmukhpatil",
        linkedin: "https://linkedin.com/in/aadityadeshmukhpatil",
        twitter: "https://x.com/aadityapatil"
      }
    },

    // My Learning Garage Categories
    skills: [
      {
        category: "Programming and Problem Solving",
        icon: "💻",
        skills: [
          "Python programming",
          "Variables, data types, conditionals, loops, and functions",
          "Problem-solving fundamentals",
          "Data structures and algorithms",
          "Competitive programming practice"
        ]
      },
      {
        category: "Web Development",
        icon: "🌐",
        skills: [
          "HTML and CSS",
          "JavaScript fundamentals",
          "Responsive website development",
          "Building interactive web experiences"
        ]
      },
      {
        category: "AI and Machine Learning",
        icon: "🤖",
        skills: [
          "Foundations of Artificial Intelligence",
          "Machine Learning fundamentals",
          "Exploring how data and algorithms can solve practical problems"
        ]
      },
      {
        category: "Beyond Software",
        icon: "⚡",
        skills: [
          "Electronics and embedded technology",
          "Internet of Things (IoT)",
          "Robotics and automation",
          "Exploring the connection between software, hardware, and intelligent systems"
        ]
      }
    ],

    // Featured Projects (Learning and Technical Explorations)
    projects: [
      {
        id: "algo-visualizer",
        name: "Algorithmic Problem-Solving & Pathfinding",
        badge: "DSA EXPLORATION",
        shortDesc: "Interactive pathfinding and algorithmic visualizer exploring graph search algorithms, computational complexity, and optimization fundamentals.",
        fullDesc: "Built as an exploration into graph theory and data structures. This project visualizes classical pathfinding and sorting routines step-by-step, helping unpack how data structures operate under the hood with clear complexity breakdowns.",
        tech: ["Python", "JavaScript", "Algorithms & DSA", "Interactive Canvas", "CSS Grid"],
        features: [
          "Step-by-step interactive visualization of graph traversals and search heuristics",
          "Real-time complexity analysis and operation counter",
          "Custom obstacle grid creation and dynamic weight assignment",
          "Responsive design crafted for intuitive exploration"
        ],
        demoUrl: "#",
        repoUrl: "https://github.com/aadityadeshmukhpatil/algo-visualizer"
      },
      {
        id: "web-audio-lab",
        name: "Interactive Web & Audio Experience",
        badge: "WEB EXPERIMENT",
        shortDesc: "Browser-based interactive sound synthesizer experimenting with real-time browser APIs, event loops, and responsive UI controls.",
        fullDesc: "An exploratory dive into the Web Audio API and interactive frontend engineering. This project synthesizes tones dynamically without external audio libraries, exploring how browser audio nodes, user input events, and responsive styling converge.",
        tech: ["HTML5", "Modern CSS", "JavaScript ES6", "Web Audio API"],
        features: [
          "Browser-synthesized audio using native Web Audio oscillators and gain nodes",
          "Responsive, tactile controls for interactive experimentation",
          "Zero external dependencies, running purely on web standards",
          "Touch and keyboard accessibility integration"
        ],
        demoUrl: "#",
        repoUrl: "https://github.com/aadityadeshmukhpatil/interactive-web-audio"
      },
      {
        id: "iot-telemetry",
        name: "IoT & Hardware Telemetry Hub",
        badge: "EMBEDDED & IOT",
        shortDesc: "Exploratory sensor monitoring dashboard connecting embedded electronics and hardware telemetry to a lightweight web interface.",
        fullDesc: "Created to understand the vital bridge between hardware and software. This prototype streams environmental telemetry from microcontroller sensors into a clean browser dashboard, studying data flow from the physical world into software interfaces.",
        tech: ["Electronics & Sensors", "IoT", "Microcontrollers", "WebSockets", "Data Visualization"],
        features: [
          "Real-time telemetry stream from hardware sensors to web dashboard",
          "Telemetry graphs tracking environmental sensor variations",
          "Modular architecture connecting microcontroller code with web frontend",
          "Exploration of low-latency data communication protocols"
        ],
        demoUrl: "#",
        repoUrl: "https://github.com/aadityadeshmukhpatil/iot-telemetry-hub"
      },
      {
        id: "ml-classifier",
        name: "Practical Machine Learning Studio",
        badge: "AI/ML FOUNDATIONS",
        shortDesc: "Foundational machine learning project demonstrating data preprocessing, feature extraction, and algorithm training for practical classification.",
        fullDesc: "An applied exploration of machine learning fundamentals. This project walks through the lifecycle of an ML model: from ingesting and normalizing data to training baseline algorithms and evaluating performance on real-world datasets.",
        tech: ["Python", "Machine Learning", "Data Preprocessing", "Algorithms", "Model Evaluation"],
        features: [
          "Hands-on implementation of machine learning fundamentals and evaluation metrics",
          "Data cleaning, feature scaling, and visualization pipelines",
          "Exploration of practical problem-solving using predictive algorithms",
          "Clear, documented experiments comparing model accuracy and tradeoffs"
        ],
        demoUrl: "#",
        repoUrl: "https://github.com/aadityadeshmukhpatil/ml-foundations-studio"
      }
    ],

    // Education & Learning Milestones
    milestones: [
      {
        type: "education",
        icon: "🎓",
        title: "B.Tech in Computer Science (Focus on AI & ML)",
        organization: "Newton School of Technology",
        period: "Undergraduate Student · Present",
        description: "Specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. Strengthening core programming, mathematical foundations, data structures, and intelligent software design."
      },
      {
        type: "tech",
        icon: "💻",
        title: "Programming & Problem-Solving Journey",
        organization: "Independent Practice & Competitive Coding",
        period: "Ongoing Practice",
        description: "Sharpening algorithmic thinking in Python through consistent problem-solving practice, exploring arrays, strings, trees, graphs, and recursion."
      },
      {
        type: "hardware",
        icon: "⚡",
        title: "Electronics, IoT & Robotics Exploration",
        organization: "Hardware & Embedded Systems Experiments",
        period: "Ongoing Exploration",
        description: "Diving into microcontrollers, sensors, automation, and robotics to understand how physical hardware interacts with intelligent software."
      },
      {
        type: "founder",
        icon: "🚀",
        title: "Aspiring Technology Founder Pathway",
        organization: "Ideation & Practical Product Building",
        period: "Long-term Ambition",
        description: "Developing the cross-disciplinary skills needed to identify meaningful problems, build practical solutions, and turn promising ideas into products people can use."
      }
    ],

    // Milestones & Recognitions
    achievements: [
      {
        icon: "🎓",
        title: "Newton School of Technology — CS (AI/ML)",
        date: "Current Program",
        description: "Accepted into the specialized Computer Science program with a focus on Artificial Intelligence and Machine Learning."
      },
      {
        icon: "💡",
        title: "Algorithmic Problem-Solving Discipline",
        date: "Consistent Practice",
        description: "Building strong fundamentals across core algorithms, complexity analysis, and competitive programming in Python."
      },
      {
        icon: "🛠️",
        title: "Hands-on Full-Stack & Systems Prototypes",
        date: "Ongoing Builds",
        description: "Developing end-to-end projects spanning responsive web experiences, data processing pipelines, and interactive applications."
      },
      {
        icon: "🤖",
        title: "Hardware, IoT & Intelligent Systems Projects",
        date: "Active Exploration",
        description: "Experimenting at the intersection of embedded electronics, robotics, and intelligent algorithms to solve practical problems."
      }
    ],

    // Future Destination & Goals
    future: {
      nowLearning: "Deepening my foundations in Artificial Intelligence and Machine Learning, advancing Python data structures and algorithms, and mastering responsive, interactive web technologies.",
      problemsToSolve: "Identifying real-world friction and creating practical, intelligent technology solutions that turn promising ideas into products people can use.",
      techToExplore: "Intelligent autonomous agents, neural network architectures, robotics and automation systems, and connected IoT hardware.",
      longTermGoal: "To become a technology founder who creates innovative products, solves meaningful real-world problems, and turns promising ideas into technology people can use."
    }
  };

  // Checkpoints Road Coordinates along the 2D Highway
  const CHECKPOINTS = [
    { id: 0, title: "Start Line", tag: "WELCOME · MILE 0.0", x: 80, mile: 0.0, landmarkId: "landmark-0" },
    { id: 1, title: "About Me", tag: "STOP 01 · 0.8 MILES", x: 1000, mile: 0.8, landmarkId: "landmark-1" },
    { id: 2, title: "My Learning Garage", tag: "STOP 02 · 1.8 MILES", x: 2100, mile: 1.8, landmarkId: "landmark-2" },
    { id: 3, title: "Projects Vista", tag: "STOP 03 · 3.0 MILES", x: 3400, mile: 3.0, landmarkId: "landmark-3" },
    { id: 4, title: "Experience & Edu", tag: "STOP 04 · 4.2 MILES", x: 4600, mile: 4.2, landmarkId: "landmark-4" },
    { id: 5, title: "Achievements", tag: "STOP 05 · 5.2 MILES", x: 5700, mile: 5.2, landmarkId: "landmark-5" },
    { id: 6, title: "Future Destination", tag: "STOP 06 · 6.1 MILES", x: 6800, mile: 6.1, landmarkId: "landmark-6" },
    { id: 7, title: "Contact Station", tag: "FINAL STOP · 7.0 MILES", x: 7900, mile: 7.0, landmarkId: "landmark-7" }
  ];

  const WORLD_WIDTH = 8200; // Total road width in pixels

  // ==========================================================================
  // 2. RETRO WEB AUDIO API SYNTHESIZER (No external audio file dependencies!)
  // Muted by default per instructions; toggle with the sound button.
  // ==========================================================================

  class RetroAudioEngine {
    constructor() {
      this.ctx = null;
      this.muted = true; // Off by default
      this.initialized = false;
      this.engineGain = null;
      this.engineOsc = null;
    }

    init() {
      if (this.initialized) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
        this.initialized = true;
      } catch (e) {
        console.warn("Web Audio not supported in this environment.", e);
      }
    }

    toggleMute() {
      if (!this.initialized) this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.muted = !this.muted;
      return !this.muted;
    }

    playCoinCollect() {
      if (this.muted || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.36);
      } catch (e) {}
    }

    playCheckpointArrival() {
      if (this.muted || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);

          gain.gain.setValueAtTime(0.08, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.4);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.45);
        });
      } catch (e) {}
    }

    playCarHorn() {
      if (this.muted || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        // Vintage dual-tone car horn: F4 (349Hz) + A4 (440Hz)
        [349.23, 440.00].forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.1, now);
          gain.gain.linearRampToValueAtTime(0.12, now + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.33);
        });
      } catch (e) {}
    }
  }

  const audio = new RetroAudioEngine();

  // ==========================================================================
  // 3. APPLICATION STATE
  // ==========================================================================

  const state = {
    carX: 80,
    carVelocity: 0,
    cameraX: 80,
    activeStopId: 0,
    isCardOpen: false,
    cardManualDismissedStop: null,
    isDriving: false,
    keys: { left: false, right: false },
    touch: { left: false, right: false },
    collectedCoins: new Set(),
    hornCount: 0,
    isReaderMode: false,
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  // DOM Elements Cache
  const dom = {
    // Opening screen
    openingScreen: document.getElementById('opening-screen'),
    btnStartJourney: document.getElementById('btn-start-journey'),
    btnOpenReaderMode: document.getElementById('btn-open-reader-mode'),
    
    // Header & HUD
    siteHeader: document.querySelector('.site-header'),
    brandLink: document.getElementById('brand-link'),
    navCheckpointLinks: document.getElementById('nav-checkpoint-links'),
    hudStrip: document.getElementById('hud-strip'),
    hudOdometer: document.getElementById('hud-odometer'),
    hudCoinCount: document.getElementById('hud-coin-count'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    progressTrack: document.getElementById('progress-track'),
    pips: document.querySelectorAll('.checkpoint-pips .pip'),
    soundBtn: document.getElementById('sound-btn'),
    soundIcon: document.getElementById('sound-icon'),
    modeToggleBtn: document.getElementById('mode-toggle-btn'),
    mapToggleBtn: document.getElementById('map-toggle-btn'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),

    // Viewport & Scenery
    gameViewport: document.getElementById('game-viewport'),
    worldContainer: document.getElementById('world-container'),
    layerMountains: document.getElementById('layer-mountains'),
    layerHills: document.getElementById('layer-hills'),
    layerClouds: document.getElementById('layer-clouds'),
    celestialBody: document.getElementById('celestial-body'),

    // Car Character
    carCharacter: document.getElementById('car-character'),
    rearWheel: document.querySelector('.rear-wheel'),
    frontWheel: document.querySelector('.front-wheel'),
    carHeadlightBeam: document.getElementById('car-headlight-beam'),
    exhaustPoint: document.getElementById('exhaust-pipe-point'),

    // Checkpoint Card
    checkpointOverlay: document.getElementById('checkpoint-overlay'),
    cardStopLabel: document.getElementById('card-stop-label'),
    cardScrollBody: document.getElementById('card-scroll-body'),
    btnMinimizeCard: document.getElementById('btn-minimize-card'),
    btnContinueJourney: document.getElementById('btn-continue-journey'),
    btnPrevStop: document.getElementById('btn-prev-stop'),
    btnNextStop: document.getElementById('btn-next-stop'),

    // Modals & Extras
    projectModalBackdrop: document.getElementById('project-modal-backdrop'),
    modalProjectTitle: document.getElementById('modal-project-title'),
    modalProjectBody: document.getElementById('modal-project-body'),
    btnCloseProjectModal: document.getElementById('btn-close-project-modal'),

    mapModalBackdrop: document.getElementById('map-modal-backdrop'),
    mapStopsGrid: document.getElementById('map-stops-grid'),
    btnCloseMapModal: document.getElementById('btn-close-map-modal'),

    coinToast: document.getElementById('coin-toast'),
    coinToastText: document.getElementById('coin-toast-text'),

    // Mobile Controls
    mobileControlsBar: document.getElementById('mobile-controls-bar'),
    btnTouchLeft: document.getElementById('btn-touch-left'),
    btnTouchRight: document.getElementById('btn-touch-right'),
    btnTouchHonk: document.getElementById('btn-touch-honk'),

    // Reader Mode Container
    readerModeContainer: document.getElementById('reader-mode-container'),
    btnReturnToGame: document.getElementById('btn-return-to-game'),
    readerSkillsGrid: document.getElementById('reader-skills-grid'),
    readerProjectsDeck: document.getElementById('reader-projects-deck'),
    readerMilestonesFlow: document.getElementById('reader-milestones-flow'),
    readerAchievementsGrid: document.getElementById('reader-achievements-grid'),
    readerFutureNarrative: document.getElementById('reader-future-narrative'),
    readerContactDiner: document.getElementById('reader-contact-diner')
  };

  // ==========================================================================
  // 4. TEMPLATE GENERATORS FOR CHECKPOINT CARDS & READER MODE
  // ==========================================================================

  function renderAboutContent() {
    const dev = PORTFOLIO_DATA.developer;
    return `
      <h2 class="card-headline">The Person Behind the Code</h2>
      <p class="card-lead">${dev.tagline}</p>
      
      <div class="profile-editorial">
        <div class="profile-avatar-frame">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#FAF7F2"/>
            <circle cx="50" cy="40" r="20" fill="#A3AD91"/>
            <path d="M20 90 C20 65 35 60 50 60 C65 60 80 65 80 90 Z" fill="#D9684B"/>
            <circle cx="50" cy="38" r="8" fill="#FFFDF9"/>
            <circle cx="50" cy="38" r="4" fill="#232522"/>
          </svg>
        </div>
        <div class="profile-bio-text">
          <h3>${dev.name}</h3>
          <span class="profile-role-badge">${dev.role}</span>
          <div style="font-size: 0.88rem; color: var(--c-charcoal-muted); line-height: 1.6; display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
            <p>I'm Aaditya, a Computer Science student at Newton School of Technology with a growing interest in AI, Machine Learning, and the art of building technology.</p>
            <p>My journey is about more than learning to write code. I want to understand how things work, how different technologies connect, and how an idea can become something useful in the real world.</p>
            <p>I'm strengthening my programming and problem-solving fundamentals while exploring web development, intelligent systems, electronics, IoT, and robotics.</p>
            <p>My long-term goal is to become a technology founder: someone who identifies meaningful problems, builds practical solutions, and turns promising ideas into products people can use.</p>
            <p>I'm still learning, experimenting, and discovering my direction. This portfolio is a snapshot of that journey.</p>
          </div>
        </div>
      </div>

      <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--c-red); text-transform: uppercase; margin-top: 20px;">
        MY LEARNING PATHWAY
      </h4>
      <div class="timeline-mini">
        ${dev.timeline.map(item => `
          <div class="timeline-mini-item">
            <span class="timeline-mini-year">${item.year}</span>
            <div class="timeline-mini-title">${item.title}</div>
            <p style="font-size: 0.78rem; color: var(--c-charcoal-muted);">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderSkillsContent() {
    return `
      <h2 class="card-headline">My Learning Garage</h2>
      <p class="card-lead">
        Every skill begins with curiosity and improves with practice. These are the areas I'm learning, practicing, and exploring as I build my technical foundation.
      </p>

      <div class="skills-garage-grid">
        ${PORTFOLIO_DATA.skills.map(cat => `
          <div class="skill-category-box">
            <div class="skill-cat-title">
              <span class="cat-icon">${cat.icon}</span>
              <span>${cat.category}</span>
            </div>
            <div class="skill-pills-wrap">
              ${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderProjectsContent() {
    return `
      <h2 class="card-headline">Featured Project Stops</h2>
      <p class="card-lead">
        Click any vehicle creation along the road to inspect full architectural details, live demos, and source code.
      </p>

      <div class="projects-deck">
        ${PORTFOLIO_DATA.projects.map(proj => `
          <div class="project-card" data-project-id="${proj.id}">
            <div class="project-top-line">
              <h3 class="project-card-title">${proj.name}</h3>
              <span class="project-badge-tag">${proj.badge}</span>
            </div>
            <p class="project-desc">${proj.shortDesc}</p>
            <div class="project-tech-tags">
              ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            <div class="project-actions">
              <button type="button" class="btn-project-link btn-inspect-modal" data-inspect-id="${proj.id}">
                Inspect Project 🔍
              </button>
              <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-link">
                GitHub ↗
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderExperienceContent() {
    return `
      <h2 class="card-headline">Education &amp; Experience</h2>
      <p class="card-lead">
        Key educational milestones and professional activities encountered along my path.
      </p>

      <div class="milestones-flow">
        ${PORTFOLIO_DATA.milestones.map(m => `
          <div class="milestone-item">
            <div class="milestone-icon-box">${m.icon}</div>
            <div class="milestone-content">
              <h4>${m.title}</h4>
              <div class="milestone-sub">${m.organization} · ${m.period}</div>
              <p>${m.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderAchievementsContent() {
    return `
      <h2 class="card-headline">Achievements &amp; Honors</h2>
      <p class="card-lead">
        Recognitions, competitive coding milestones, and community contributions.
      </p>

      <div class="achievements-grid">
        ${PORTFOLIO_DATA.achievements.map(a => `
          <div class="trophy-card">
            <div class="trophy-medal">${a.icon}</div>
            <div class="trophy-text">
              <h4>${a.title}</h4>
              <span class="trophy-date">${a.date}</span>
              <p style="font-size: 0.82rem; color: var(--c-charcoal-muted); margin-top: 4px;">${a.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderFutureContent() {
    const f = PORTFOLIO_DATA.future;
    return `
      <h2 class="card-headline">The Horizon &amp; Beyond</h2>
      <p class="card-lead">
        Where this road trip is heading next: ambitions, learning frontiers, and founder goals.
      </p>

      <div class="future-narrative">
        <div class="future-goal-card">
          <h4>🔭 WHAT I AM LEARNING NOW</h4>
          <p>${f.nowLearning}</p>
        </div>
        <div class="future-goal-card">
          <h4>⚡ PROBLEMS I WANT TO SOLVE</h4>
          <p>${f.problemsToSolve}</p>
        </div>
        <div class="future-goal-card">
          <h4>🛠️ TECHNOLOGIES I WANT TO EXPLORE</h4>
          <p>${f.techToExplore}</p>
        </div>
        <div class="future-goal-card" style="border-left: 4px solid var(--c-red);">
          <h4>🎯 LONG-TERM FOUNDER AMBITION</h4>
          <p>${f.longTermGoal}</p>
        </div>
      </div>
    `;
  }

  function renderContactContent() {
    const dev = PORTFOLIO_DATA.developer;
    return `
      <div class="journey-complete-banner">
        <div class="complete-trophy-icon">🏆</div>
        <h2 class="complete-title">Road Trip Complete!</h2>
        <p style="font-size: 0.92rem; color: var(--c-charcoal-muted); margin-bottom: 12px;">
          You navigated the vintage roadster across the entire scenic highway.
        </p>
        <div class="complete-stats-row">
          <div class="stat-item">
            <strong>7.0 MI</strong>
            <span>ROAD TRAVELLED</span>
          </div>
          <div class="stat-item">
            <strong>${state.collectedCoins.size} / 7</strong>
            <span>COINS FOUND</span>
          </div>
          <div class="stat-item">
            <strong>8 / 8</strong>
            <span>CHECKPOINTS</span>
          </div>
        </div>
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 24px;">
          <button type="button" class="btn-project-link" id="btn-replay-trip" style="padding: 6px 14px;">
            ↺ Replay Road Trip
          </button>
          <button type="button" class="btn-project-link" id="btn-switch-reader-from-complete" style="padding: 6px 14px;">
            📖 Full Reader Mode
          </button>
        </div>
      </div>

      <h2 class="card-headline">The Contact Station</h2>
      <div class="contact-quote">
        “Every great journey begins with curiosity. Let's connect and build something meaningful.”
      </div>

      <div class="contact-diner">
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--c-red); text-transform: uppercase; margin-bottom: 8px;">
            DIRECT DISPATCH
          </h4>
          <div class="social-links-deck">
            <a href="${dev.socials.email}" class="social-pill">✉️ Email Me</a>
            <a href="${dev.socials.github}" target="_blank" rel="noopener noreferrer" class="social-pill">🐙 GitHub</a>
            <a href="${dev.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-pill">💼 LinkedIn</a>
            <a href="${dev.socials.twitter}" target="_blank" rel="noopener noreferrer" class="social-pill">🐦 Twitter / X</a>
          </div>
        </div>

        <form class="contact-form-retro" id="contact-form">
          <div class="form-group">
            <label class="form-label" for="form-name">YOUR NAME *</label>
            <input type="text" id="form-name" class="form-input" placeholder="e.g. Eleanor Vance" required />
            <span class="form-feedback" id="feedback-name">Please provide your name.</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="form-email">YOUR EMAIL *</label>
            <input type="email" id="form-email" class="form-input" placeholder="e.g. eleanor@example.com" required />
            <span class="form-feedback" id="feedback-email">Please enter a valid email address.</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="form-message">TRANSMISSION MESSAGE *</label>
            <textarea id="form-message" class="form-textarea" rows="3" placeholder="Share a project idea, say hello, or ask a question..." required></textarea>
            <span class="form-feedback" id="feedback-message">Please enter a message transmission.</span>
          </div>

          <button type="submit" class="btn-send-message" id="btn-submit-contact">
            Send Transmission 📮
          </button>
          <div id="form-success-banner" style="display:none; font-family: var(--font-mono); font-size: 0.8rem; color: var(--c-sage-dark); font-weight: 700; margin-top: 6px;">
            ✓ Transmission dispatched successfully! I will reply shortly.
          </div>
        </form>
      </div>
    `;
  }

  function getStopContent(stopId) {
    switch (stopId) {
      case 0:
        return `
          <h2 class="card-headline">Welcome to Mile 0.0</h2>
          <p class="card-lead">
            You're at the starting line of my developer road trip. Press <strong>→</strong> or <strong>D</strong> to drive your vintage roadster forward to explore my skills garage, projects, education, and vision.
          </p>
          <p style="font-size: 0.85rem; color: var(--c-charcoal-muted);">
            Along the highway, you can collect knowledge coins, inspect projects, or jump straight to any section using the map above!
          </p>
        `;
      case 1: return renderAboutContent();
      case 2: return renderSkillsContent();
      case 3: return renderProjectsContent();
      case 4: return renderExperienceContent();
      case 5: return renderAchievementsContent();
      case 6: return renderFutureContent();
      case 7: return renderContactContent();
      default: return `<p>Welcome traveler.</p>`;
    }
  }

  // Populate static Reader Mode sections
  function populateReaderMode() {
    dom.readerSkillsGrid.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
      <div class="skill-category-box">
        <div class="skill-cat-title"><span class="cat-icon">${cat.icon}</span> ${cat.category}</div>
        <div class="skill-pills-wrap">${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
      </div>
    `).join('');

    dom.readerProjectsDeck.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
      <div class="project-card">
        <div class="project-top-line">
          <h3 class="project-card-title">${proj.name}</h3>
          <span class="project-badge-tag">${proj.badge}</span>
        </div>
        <p class="project-desc">${proj.fullDesc}</p>
        <div class="project-tech-tags">${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
        <div class="project-actions">
          <button type="button" class="btn-project-link btn-inspect-modal" data-inspect-id="${proj.id}">Inspect Details 🔍</button>
          <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-project-link">GitHub ↗</a>
        </div>
      </div>
    `).join('');

    dom.readerMilestonesFlow.innerHTML = PORTFOLIO_DATA.milestones.map(m => `
      <div class="milestone-item">
        <div class="milestone-icon-box">${m.icon}</div>
        <div class="milestone-content">
          <h4>${m.title}</h4>
          <div class="milestone-sub">${m.organization} · ${m.period}</div>
          <p>${m.description}</p>
        </div>
      </div>
    `).join('');

    dom.readerAchievementsGrid.innerHTML = PORTFOLIO_DATA.achievements.map(a => `
      <div class="trophy-card">
        <div class="trophy-medal">${a.icon}</div>
        <div class="trophy-text">
          <h4>${a.title}</h4>
          <span class="trophy-date">${a.date}</span>
          <p style="font-size: 0.85rem; color: var(--c-charcoal-muted); margin-top: 4px;">${a.description}</p>
        </div>
      </div>
    `).join('');

    dom.readerFutureNarrative.innerHTML = `
      <div class="future-goal-card"><h4>🔭 WHAT I AM LEARNING NOW</h4><p>${PORTFOLIO_DATA.future.nowLearning}</p></div>
      <div class="future-goal-card"><h4>⚡ PROBLEMS I WANT TO SOLVE</h4><p>${PORTFOLIO_DATA.future.problemsToSolve}</p></div>
      <div class="future-goal-card"><h4>🛠️ TECHNOLOGIES I WANT TO EXPLORE</h4><p>${PORTFOLIO_DATA.future.techToExplore}</p></div>
      <div class="future-goal-card" style="border-left: 4px solid var(--c-red);"><h4>🎯 LONG-TERM GOAL</h4><p>${PORTFOLIO_DATA.future.longTermGoal}</p></div>
    `;

    dom.readerContactDiner.innerHTML = renderContactContent();
  }

  // Populate Route Map Modal
  function populateRouteMap() {
    dom.mapStopsGrid.innerHTML = CHECKPOINTS.map(cp => `
      <div class="map-stop-card ${state.activeStopId === cp.id ? 'active' : ''}" data-jump-stop="${cp.id}">
        <span class="stop-mile">MILE ${cp.mile.toFixed(1)}</span>
        <div class="stop-name">${cp.title}</div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 5. CHECKPOINT REVEAL LOGIC
  // ==========================================================================

  function openCheckpointCard(stopId) {
    const stop = CHECKPOINTS.find(s => s.id === stopId);
    if (!stop) return;

    state.activeStopId = stopId;
    state.isCardOpen = true;

    // Update Card Contents
    dom.cardStopLabel.textContent = stop.tag;
    dom.cardScrollBody.innerHTML = getStopContent(stopId);
    dom.checkpointOverlay.classList.add('active');

    // Update Continue Journey button label if at destination
    if (stopId === CHECKPOINTS.length - 1) {
      dom.btnContinueJourney.textContent = "↺ Replay Trip";
    } else {
      dom.btnContinueJourney.textContent = "Continue Journey ➔";
    }

    // Highlight Landmark on road
    document.querySelectorAll('.landmark-anchor').forEach(el => el.classList.remove('active'));
    const landmarkEl = document.getElementById(stop.landmarkId);
    if (landmarkEl) landmarkEl.classList.add('active');

    // Update Nav bar & Progress Pips
    updateNavSelection(stopId);

    // Audio chime
    audio.playCheckpointArrival();

    // Attach form and project inspect listeners inside card
    attachDynamicCardListeners();
  }

  function closeCheckpointCard(isManualDismiss = false) {
    state.isCardOpen = false;
    dom.checkpointOverlay.classList.remove('active');
    if (isManualDismiss) {
      state.cardManualDismissedStop = state.activeStopId;
    }
  }

  function updateNavSelection(stopId) {
    // Update top header buttons
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      const target = parseInt(btn.getAttribute('data-target-stop'), 10);
      btn.classList.toggle('active', target === stopId);
    });

    // Update progress HUD pips
    dom.pips.forEach(pip => {
      const pStop = parseInt(pip.getAttribute('data-stop'), 10);
      pip.classList.toggle('current', pStop === stopId);
      pip.classList.toggle('visited', pStop < stopId);
    });

    // Update map cards if open
    document.querySelectorAll('.map-stop-card').forEach(card => {
      const cStop = parseInt(card.getAttribute('data-jump-stop'), 10);
      card.classList.toggle('active', cStop === stopId);
    });
  }

  function attachDynamicCardListeners() {
    // Project Inspection click handler
    dom.cardScrollBody.querySelectorAll('[data-inspect-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pId = e.currentTarget.getAttribute('data-inspect-id');
        openProjectModal(pId);
      });
    });

    // Replay journey button from complete banner
    const replayBtn = dom.cardScrollBody.querySelector('#btn-replay-trip');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        driveToStop(0);
      });
    }

    const readerFromCompleteBtn = dom.cardScrollBody.querySelector('#btn-switch-reader-from-complete');
    if (readerFromCompleteBtn) {
      readerFromCompleteBtn.addEventListener('click', () => {
        closeCheckpointCard();
        setViewMode(true);
      });
    }

    // Contact form validation & dispatch
    const form = dom.cardScrollBody.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', handleContactSubmit);
    }
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const msgInput = document.getElementById('form-message');
    const successBanner = document.getElementById('form-success-banner');

    let valid = true;
    if (!nameInput.value.trim()) {
      document.getElementById('feedback-name').classList.add('show');
      valid = false;
    } else {
      document.getElementById('feedback-name').classList.remove('show');
    }

    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
      document.getElementById('feedback-email').classList.add('show');
      valid = false;
    } else {
      document.getElementById('feedback-email').classList.remove('show');
    }

    if (!msgInput.value.trim()) {
      document.getElementById('feedback-message').classList.add('show');
      valid = false;
    } else {
      document.getElementById('feedback-message').classList.remove('show');
    }

    if (valid) {
      const btn = document.getElementById('btn-submit-contact');
      btn.disabled = true;
      btn.textContent = "Dispatched ✈️";
      if (successBanner) successBanner.style.display = 'block';
      audio.playCoinCollect();
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.textContent = "Send Transmission 📮";
      }, 4000);
    }
  }

  // ==========================================================================
  // 6. PROJECT INSPECTION MODAL
  // ==========================================================================

  function openProjectModal(projectId) {
    const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!proj) return;

    dom.modalProjectTitle.textContent = proj.name;
    dom.modalProjectBody.innerHTML = `
      <div class="modal-mockup">
        <svg width="100%" height="100%" viewBox="0 0 400 160" preserveAspectRatio="none">
          <rect width="100%" height="100%" fill="#FAF7F2"/>
          <line x1="0" y1="30" x2="400" y2="30" stroke="#232522" stroke-width="1.5"/>
          <circle cx="20" cy="15" r="4" fill="#D9684B"/>
          <circle cx="34" cy="15" r="4" fill="#E9C879"/>
          <circle cx="48" cy="15" r="4" fill="#A3AD91"/>
          <text x="200" y="20" font-family="'Space Mono', monospace" font-size="10" fill="#232522" text-anchor="middle">${proj.id}.dev</text>
          <!-- Stylized diagram -->
          <rect x="40" y="50" width="90" height="80" rx="4" fill="#E8E2D5" stroke="#232522" stroke-width="1.5"/>
          <rect x="155" y="50" width="90" height="80" rx="4" fill="#E9C879" stroke="#232522" stroke-width="1.5"/>
          <rect x="270" y="50" width="90" height="80" rx="4" fill="#A3AD91" stroke="#232522" stroke-width="1.5"/>
          <path d="M130 90 L155 90" stroke="#232522" stroke-width="2" stroke-dasharray="3 3"/>
          <path d="M245 90 L270 90" stroke="#232522" stroke-width="2" stroke-dasharray="3 3"/>
        </svg>
      </div>

      <p style="font-size: 0.95rem; color: var(--c-charcoal); line-height: 1.6; margin-bottom: 16px;">
        ${proj.fullDesc}
      </p>

      <div class="modal-section-title">KEY ARCHITECTURAL HIGHLIGHTS</div>
      <ul class="modal-feature-list">
        ${proj.features.map(f => `<li><span>${f}</span></li>`).join('')}
      </ul>

      <div class="modal-section-title">TECHNOLOGY STACK</div>
      <div class="project-tech-tags" style="margin-bottom: 20px;">
        ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px; padding-top: 16px; border-top: var(--border-hairline);">
        <a href="${proj.demoUrl}" class="btn-primary-journey" style="padding: 10px 22px; font-size: 0.82rem;" target="_blank" rel="noopener noreferrer">
          Launch Live Project ↗
        </a>
        <a href="${proj.repoUrl}" class="btn-secondary-reader" style="padding: 9px 18px; font-size: 0.82rem;" target="_blank" rel="noopener noreferrer">
          Inspect Code on GitHub 🐙
        </a>
      </div>
    `;

    dom.projectModalBackdrop.classList.add('active');
  }

  function closeProjectModal() {
    dom.projectModalBackdrop.classList.remove('active');
  }

  // ==========================================================================
  // 7. COLLECTIBLE KNOWLEDGE COINS
  // ==========================================================================

  function checkCoinCollisions() {
    const coins = document.querySelectorAll('.knowledge-coin:not(.collected)');
    coins.forEach(coin => {
      const coinX = parseFloat(coin.style.left);
      if (Math.abs(state.carX - coinX) < 45) {
        collectCoin(coin);
      }
    });
  }

  function collectCoin(coinEl) {
    const id = coinEl.getAttribute('data-coin-id');
    const fact = coinEl.getAttribute('data-fact');
    state.collectedCoins.add(id);

    coinEl.classList.add('collected');
    dom.hudCoinCount.textContent = `${state.collectedCoins.size} / 7`;
    audio.playCoinCollect();

    // Show toast notification
    dom.coinToastText.querySelector('span').textContent = fact;
    dom.coinToast.classList.add('visible');
    setTimeout(() => {
      dom.coinToast.classList.remove('visible');
    }, 4200);
  }

  // ==========================================================================
  // 8. EXHAUST SMOKE PUFFS & CAR HONK EASTER EGG
  // ==========================================================================

  let lastExhaustTime = 0;
  function emitExhaustPuff() {
    const now = performance.now();
    if (now - lastExhaustTime < 180) return;
    lastExhaustTime = now;

    const puff = document.createElement('div');
    puff.className = 'exhaust-puff';
    const size = Math.floor(Math.random() * 8) + 8;
    puff.style.width = `${size}px`;
    puff.style.height = `${size}px`;
    dom.exhaustPoint.appendChild(puff);

    setTimeout(() => {
      puff.remove();
    }, 650);
  }

  function honkHorn() {
    audio.playCarHorn();
    state.hornCount++;

    // Visual car bounce
    dom.carCharacter.style.transform = 'scale(1.08) translateY(-4px)';
    setTimeout(() => {
      dom.carCharacter.style.transform = '';
    }, 150);

    // Easter egg celebration
    if (state.hornCount === 3) {
      dom.coinToastText.innerHTML = `
        <strong>🏆 EASTER EGG UNLOCKED!</strong>
        <span>“Beep Beep! You found the vintage roadster horn!”</span>
      `;
      dom.coinToast.classList.add('visible');
      setTimeout(() => {
        dom.coinToast.classList.remove('visible');
      }, 4000);
    }
  }

  // ==========================================================================
  // 9. DAY-TO-EVENING DYNAMIC LIGHTING
  // ==========================================================================

  function updateDynamicLighting(progress) {
    // progress is 0.0 to 1.0 along the highway
    const root = document.documentElement;

    if (progress < 0.28) {
      // Fresh Morning
      root.style.setProperty('--sky-top', '#C7D9E2');
      root.style.setProperty('--sky-bottom', '#F5F0E8');
      root.style.setProperty('--sun-color', '#F8E2A2');
      root.style.setProperty('--sun-glow', 'rgba(248, 226, 162, 0.45)');
      dom.gameViewport.classList.remove('night-mode');
    } else if (progress < 0.65) {
      // Clear Midday
      root.style.setProperty('--sky-top', '#B5D2E4');
      root.style.setProperty('--sky-bottom', '#FAF7F2');
      root.style.setProperty('--sun-color', '#FFEBA8');
      root.style.setProperty('--sun-glow', 'rgba(255, 235, 168, 0.55)');
      dom.gameViewport.classList.remove('night-mode');
    } else if (progress < 0.85) {
      // Warm Golden Sunset
      root.style.setProperty('--sky-top', '#E4A37C');
      root.style.setProperty('--sky-bottom', '#F2C898');
      root.style.setProperty('--sun-color', '#E87D55');
      root.style.setProperty('--sun-glow', 'rgba(232, 125, 85, 0.6)');
      dom.gameViewport.classList.add('night-mode');
    } else {
      // Cozy Evening / Twilight at Contact Rest Stop
      root.style.setProperty('--sky-top', '#483E54');
      root.style.setProperty('--sky-bottom', '#7D5C6F');
      root.style.setProperty('--sun-color', '#E89D75');
      root.style.setProperty('--sun-glow', 'rgba(232, 157, 117, 0.5)');
      dom.gameViewport.classList.add('night-mode');
    }

    // Move the sun across the sky arc
    const sunX = 15 + progress * 70; // 15% to 85% of screen width
    const sunY = 12 + Math.sin(progress * Math.PI) * -6 + (progress > 0.6 ? (progress - 0.6) * 35 : 0);
    dom.celestialBody.style.left = `${sunX}%`;
    dom.celestialBody.style.top = `${sunY}%`;
  }

  // ==========================================================================
  // 10. PHYSICS & GAME ANIMATION LOOP
  // ==========================================================================

  let targetAutoCruiseX = null;

  function driveToStop(stopId) {
    const stop = CHECKPOINTS.find(s => s.id === stopId);
    if (!stop) return;
    targetAutoCruiseX = stop.x;
    closeCheckpointCard();
  }

  function gameLoop() {
    // 1. Process Input or Auto-Cruise
    const wantsRight = state.keys.right || state.touch.right;
    const wantsLeft = state.keys.left || state.touch.left;

    if (wantsRight || wantsLeft) {
      targetAutoCruiseX = null; // User manual control overrides auto cruise
    }

    const accel = 0.55;
    const maxSpeed = 7.5;
    const maxReverse = -3.5;
    const friction = 0.90;

    if (targetAutoCruiseX !== null) {
      const dist = targetAutoCruiseX - state.carX;
      if (Math.abs(dist) < 4) {
        state.carX = targetAutoCruiseX;
        state.carVelocity = 0;
        const reachedStop = CHECKPOINTS.find(s => Math.abs(s.x - targetAutoCruiseX) < 10);
        targetAutoCruiseX = null;
        if (reachedStop) {
          openCheckpointCard(reachedStop.id);
        }
      } else {
        const dir = Math.sign(dist);
        state.carVelocity = Math.max(Math.min(dist * 0.1, maxSpeed * dir), maxReverse);
      }
    } else {
      if (wantsRight) {
        state.carVelocity = Math.min(state.carVelocity + accel, maxSpeed);
      } else if (wantsLeft) {
        state.carVelocity = Math.max(state.carVelocity - accel, maxReverse);
      } else {
        state.carVelocity *= friction;
        if (Math.abs(state.carVelocity) < 0.05) state.carVelocity = 0;
      }
    }

    // 2. Apply Velocity
    state.carX += state.carVelocity;

    // Boundaries
    if (state.carX < 0) {
      state.carX = 0;
      state.carVelocity = 0;
    }
    if (state.carX > WORLD_WIDTH) {
      state.carX = WORLD_WIDTH;
      state.carVelocity = 0;
    }

    // 3. Update Car Position & Wheels
    state.isDriving = Math.abs(state.carVelocity) > 0.15;
    dom.carCharacter.style.left = `${state.carX}px`;

    if (state.isDriving) {
      dom.carCharacter.classList.add('driving');
      emitExhaustPuff();

      // Spin wheels
      const wheelRotation = (state.carX * 2.8) % 360;
      dom.rearWheel.style.transform = `translate(26px, 48px) rotate(${wheelRotation}deg)`;
      dom.frontWheel.style.transform = `translate(84px, 48px) rotate(${wheelRotation}deg)`;

      // If card was open and player moves away from checkpoint (> 160px), auto-close card
      if (state.isCardOpen) {
        const activeCp = CHECKPOINTS.find(s => s.id === state.activeStopId);
        if (activeCp && Math.abs(state.carX - activeCp.x) > 160) {
          closeCheckpointCard();
        }
      }
    } else {
      dom.carCharacter.classList.remove('driving');
    }

    // 4. Camera Follows Car (Centered at ~30% from viewport left)
    const viewportWidth = window.innerWidth;
    const targetCameraX = state.carX - (viewportWidth * 0.28);
    state.cameraX += (targetCameraX - state.cameraX) * 0.12;

    // Scenery Parallax Transforms
    dom.worldContainer.style.transform = `translateX(${-state.cameraX}px)`;
    dom.layerHills.style.transform = `translateX(${-state.cameraX * 0.35}px)`;
    dom.layerMountains.style.transform = `translateX(${-state.cameraX * 0.15}px)`;
    dom.layerClouds.style.transform = `translateX(${-state.cameraX * 0.05}px)`;

    // 5. Checkpoint Proximity Detection (Auto-stop when approaching naturally)
    if (!state.isCardOpen && targetAutoCruiseX === null && Math.abs(state.carVelocity) < 2.0) {
      for (const cp of CHECKPOINTS) {
        if (Math.abs(state.carX - cp.x) < 40) {
          if (state.cardManualDismissedStop !== cp.id) {
            openCheckpointCard(cp.id);
            break;
          }
        }
      }
    }

    // Reset manual dismissed flag when user has driven sufficiently far
    if (state.cardManualDismissedStop !== null) {
      const dismissedCp = CHECKPOINTS.find(s => s.id === state.cardManualDismissedStop);
      if (dismissedCp && Math.abs(state.carX - dismissedCp.x) > 180) {
        state.cardManualDismissedStop = null;
      }
    }

    // 6. Coins Collisions
    checkCoinCollisions();

    // 7. HUD Metrics & Dynamic Lighting
    const roadProgress = Math.min(Math.max(state.carX / WORLD_WIDTH, 0), 1);
    dom.progressBarFill.style.width = `${roadProgress * 100}%`;
    const milesDriven = (roadProgress * 7.0).toFixed(1);
    dom.hudOdometer.textContent = `${milesDriven} MI`;

    updateDynamicLighting(roadProgress);

    // Request next animation frame
    requestAnimationFrame(gameLoop);
  }

  // ==========================================================================
  // 11. VIEW MODE SWITCHER (Interactive 2D Drive Mode vs. Pure Reader Mode)
  // ==========================================================================

  function setViewMode(isReader) {
    state.isReaderMode = isReader;
    if (isReader) {
      document.body.classList.add('reader-mode-active');
      dom.modeToggleBtn.textContent = "🚗 Drive Mode";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove('reader-mode-active');
      dom.modeToggleBtn.textContent = "📖 Reader Mode";
    }
  }

  // ==========================================================================
  // 12. EVENT LISTENERS & INITIALIZATION
  // ==========================================================================

  function bindEvents() {
    // Start Journey CTA
    dom.btnStartJourney.addEventListener('click', () => {
      dom.openingScreen.classList.add('hidden');
      audio.init();
      driveToStop(1); // Auto-cruise to Stop 1 (About Me)
    });

    // Explore My Work CTA
    dom.btnOpenReaderMode.addEventListener('click', () => {
      dom.openingScreen.classList.add('hidden');
      audio.init();
      if (state.isReaderMode) {
        const projEl = document.getElementById('reader-projects');
        if (projEl) projEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        driveToStop(3); // Cruise directly to Stop 3: Projects Vista
      }
    });

    dom.btnReturnToGame.addEventListener('click', () => {
      setViewMode(false);
    });

    dom.modeToggleBtn.addEventListener('click', () => {
      setViewMode(!state.isReaderMode);
    });

    // Sound FX Mute Toggle
    dom.soundBtn.addEventListener('click', () => {
      const active = audio.toggleMute();
      dom.soundIcon.textContent = active ? '🔊' : '🔇';
    });

    // Route Map Modal
    dom.mapToggleBtn.addEventListener('click', () => {
      populateRouteMap();
      dom.mapModalBackdrop.classList.add('active');
    });

    dom.btnCloseMapModal.addEventListener('click', () => {
      dom.mapModalBackdrop.classList.remove('active');
    });

    dom.mapStopsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-jump-stop]');
      if (!card) return;
      const stopId = parseInt(card.getAttribute('data-jump-stop'), 10);
      dom.mapModalBackdrop.classList.remove('active');
      if (state.isReaderMode) {
        setViewMode(false);
      }
      driveToStop(stopId);
    });

    // Brand link (return to start line)
    if (dom.brandLink) {
      dom.brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (state.isReaderMode) {
          setViewMode(false);
        }
        driveToStop(0);
      });
    }

    // Mobile Menu Button (opens map/navigation drawer)
    if (dom.mobileMenuBtn) {
      dom.mobileMenuBtn.addEventListener('click', () => {
        populateRouteMap();
        dom.mapModalBackdrop.classList.add('active');
      });
    }

    // HUD Coins metric click summary
    const coinMetricEl = document.getElementById('hud-coins-metric');
    if (coinMetricEl) {
      coinMetricEl.addEventListener('click', () => {
        dom.coinToastText.innerHTML = `
          <strong>KNOWLEDGE COINS (${state.collectedCoins.size} / 7)</strong>
          <span>Drive along the scenic road to collect all golden developer insights!</span>
        `;
        dom.coinToast.classList.add('visible');
        setTimeout(() => {
          dom.coinToast.classList.remove('visible');
        }, 3600);
      });
    }

    // Checkpoint Card Controls
    dom.btnMinimizeCard.addEventListener('click', () => {
      closeCheckpointCard(true);
    });

    dom.btnContinueJourney.addEventListener('click', () => {
      if (state.activeStopId >= CHECKPOINTS.length - 1) {
        // Replay journey from start!
        driveToStop(0);
      } else {
        const nextStopId = Math.min(state.activeStopId + 1, CHECKPOINTS.length - 1);
        driveToStop(nextStopId);
      }
    });

    dom.btnPrevStop.addEventListener('click', () => {
      const prevStopId = Math.max(state.activeStopId - 1, 0);
      driveToStop(prevStopId);
    });

    dom.btnNextStop.addEventListener('click', () => {
      const nextStopId = Math.min(state.activeStopId + 1, CHECKPOINTS.length - 1);
      driveToStop(nextStopId);
    });

    // Top Header Nav Jump Links
    dom.navCheckpointLinks.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-target-stop]');
      if (!btn) return;
      const targetStop = parseInt(btn.getAttribute('data-target-stop'), 10);
      if (state.isReaderMode) {
        setViewMode(false);
      }
      driveToStop(targetStop);
    });

    // Pips in HUD Progress Track
    dom.progressTrack.addEventListener('click', (e) => {
      const pip = e.target.closest('.pip');
      if (pip) {
        const stopId = parseInt(pip.getAttribute('data-stop'), 10);
        driveToStop(stopId);
        return;
      }
      // Click along line
      const rect = dom.progressTrack.getBoundingClientRect();
      const clickRatio = (e.clientX - rect.left) / rect.width;
      const targetX = clickRatio * WORLD_WIDTH;
      targetAutoCruiseX = targetX;
      closeCheckpointCard();
    });

    // Keyboard Driving Controls (Arrows, A/D, Space, Escape, H)
    window.addEventListener('keydown', (e) => {
      // Don't steer if user is typing into an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        state.keys.right = true;
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        state.keys.left = true;
      } else if (e.key === 'h' || e.key === 'H') {
        honkHorn();
      } else if (e.key === 'Escape') {
        closeCheckpointCard(true);
        closeProjectModal();
        dom.mapModalBackdrop.classList.remove('active');
      } else if (e.key === ' ') {
        // Spacebar brake
        state.carVelocity *= 0.4;
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        state.keys.right = false;
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        state.keys.left = false;
      }
    });

    // Mobile Touch Driving Controls
    const setupTouchBtn = (btn, dir) => {
      const start = (e) => {
        e.preventDefault();
        state.touch[dir] = true;
        btn.classList.add('pressed');
      };
      const end = (e) => {
        e.preventDefault();
        state.touch[dir] = false;
        btn.classList.remove('pressed');
      };
      btn.addEventListener('touchstart', start, { passive: false });
      btn.addEventListener('touchend', end, { passive: false });
      btn.addEventListener('mousedown', start);
      btn.addEventListener('mouseup', end);
      btn.addEventListener('mouseleave', end);
    };

    setupTouchBtn(dom.btnTouchLeft, 'left');
    setupTouchBtn(dom.btnTouchRight, 'right');

    dom.btnTouchHonk.addEventListener('click', honkHorn);

    // Car click easter egg
    dom.carCharacter.addEventListener('click', honkHorn);

    // Project Inspection Modal Close
    dom.btnCloseProjectModal.addEventListener('click', closeProjectModal);
    dom.projectModalBackdrop.addEventListener('click', (e) => {
      if (e.target === dom.projectModalBackdrop) closeProjectModal();
    });

    // Route Map Modal Backdrop Click
    dom.mapModalBackdrop.addEventListener('click', (e) => {
      if (e.target === dom.mapModalBackdrop) dom.mapModalBackdrop.classList.remove('active');
    });

    // Landmark clicks in world
    document.querySelectorAll('.landmark-anchor').forEach(landmark => {
      landmark.addEventListener('click', () => {
        const stopId = parseInt(landmark.getAttribute('data-stop'), 10);
        driveToStop(stopId);
      });
    });

    // Reader Mode Project Inspection
    dom.readerModeContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-inspect-id]');
      if (btn) {
        const pId = btn.getAttribute('data-inspect-id');
        openProjectModal(pId);
      }
    });

    // Accessible reduced motion detection
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', (e) => {
      state.prefersReducedMotion = e.matches;
      if (e.matches) {
        setViewMode(true);
      }
    });

    // If user prefers reduced motion on load, default to Reader Mode
    if (state.prefersReducedMotion) {
      setViewMode(true);
    }
  }

  // ==========================================================================
  // 13. BOOTSTRAP APPLICATION
  // ==========================================================================

  function init() {
    populateReaderMode();
    bindEvents();
    requestAnimationFrame(gameLoop);
    console.log("%c🚗 The Developer Road Trip is Ready to Cruise!", "font-weight: bold; color: #D9684B; font-size: 14px;");
  }

  // Launch when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
