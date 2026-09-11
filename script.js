/* ============================================================
   PORTFOLIO — script.js
   Animations, interactions, and dynamic content
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────────────────
   SKILLS DATA — Kunal Keshav
   ────────────────────────────────────────────────────────── */
const SKILLS = [
  // AI & Agents
  { name: 'LangChain', category: 'ai', icon: 'brain' },
  { name: 'LangGraph', category: 'ai', icon: 'brain' },
  { name: 'OpenAI GPT-4', category: 'ai', icon: 'brain' },
  { name: 'Anthropic Claude', category: 'ai', icon: 'brain' },
  { name: 'RAG Pipelines', category: 'ai', icon: 'search' },
  { name: 'Vector Search', category: 'ai', icon: 'search' },
  { name: 'Prompt Engineering', category: 'ai', icon: 'brain' },
  { name: 'Agent Memory', category: 'ai', icon: 'brain' },
  { name: 'MCP', category: 'ai', icon: 'brain' },
  { name: 'Hugging Face', category: 'ai', icon: 'brain' },
  { name: 'Embeddings', category: 'ai', icon: 'search' },

  // Backend
  { name: 'Python', category: 'backend', icon: 'terminal' },
  { name: 'FastAPI', category: 'backend', icon: 'server' },
  { name: 'Node.js', category: 'backend', icon: 'server' },
  { name: 'Express.js', category: 'backend', icon: 'server' },
  { name: 'Spring Boot', category: 'backend', icon: 'server' },
  { name: 'Java', category: 'backend', icon: 'code2' },
  { name: 'RESTful APIs', category: 'backend', icon: 'globe' },

  // Databases
  { name: 'Pinecone', category: 'databases', icon: 'database' },
  { name: 'Chroma', category: 'databases', icon: 'database' },
  { name: 'MongoDB', category: 'databases', icon: 'database' },
  { name: 'MySQL', category: 'databases', icon: 'database' },
  { name: 'SQL', category: 'databases', icon: 'database' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', icon: 'cloud' },
  { name: 'Azure', category: 'cloud', icon: 'cloud' },
  { name: 'Docker', category: 'cloud', icon: 'box' },
  { name: 'Azure DevOps', category: 'cloud', icon: 'git-branch' },
  { name: 'GitHub Actions', category: 'cloud', icon: 'git-branch' },
  { name: 'CI/CD', category: 'cloud', icon: 'server' },
];

/* Icon SVG paths map */
const ICONS = {
  code: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  code2: `<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>`,
  terminal: `<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>`,
  database: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>`,
  server: `<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>`,
  cloud: `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>`,
  box: `<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`,
  layout: `<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/>`,
  'git-branch': `<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`,
  package: `<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`,
  zap: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  brain: `<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/><path d="M16 8V5c0-1.1.9-2 2-2"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/>`,
  search: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>`,
};

function makeIcon(name) {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:0.875rem;height:0.875rem;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;">${ICONS[name] || ICONS.code}</svg>`;
}

/* ──────────────────────────────────────────────────────────
   INTRO ANIMATION
   ────────────────────────────────────────────────────────── */
function initIntro() {
  const intro = document.getElementById('intro-screen');
  const wordsContainer = document.getElementById('intro-words');
  const subtitle = document.getElementById('intro-subtitle');
  const mainContent = document.getElementById('main-content');
  const navPill = document.getElementById('nav-pill');

  if (!intro || !wordsContainer) return;

  // Name words
  const words = ['Kunal', 'Keshav'];

  // Create word elements
  words.forEach((word, i) => {
    const div = document.createElement('div');
    div.className = 'intro-word';
    div.innerHTML = `<div class="intro-name-text">${word}</div>`;
    wordsContainer.appendChild(div);

    // Stagger word entrance
    setTimeout(() => {
      div.classList.add('visible');
    }, 150 + i * 200);
  });

  // Show subtitle after words
  setTimeout(() => {
    subtitle.classList.add('visible');
  }, 150 + words.length * 200 + 100);

  // Fade out intro, reveal main content
  setTimeout(() => {
    intro.classList.add('fade-out');
    mainContent.classList.add('visible');

    // Slide in nav pill
    setTimeout(() => {
      navPill.classList.add('visible');
    }, 400);

  }, 1600 + words.length * 100);
}

/* ──────────────────────────────────────────────────────────
   SCROLL REVEAL — Intersection Observer
   ────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  revealEls.forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────────────────────
   SKILLS SECTION
   ────────────────────────────────────────────────────────── */
function initSkills() {
  const cloud = document.getElementById('skills-cloud');
  const countEl = document.getElementById('skills-count');
  const filterBtns = document.querySelectorAll('.skill-filter-btn');

  if (!cloud) return;

  let currentCategory = 'all';

  function renderSkills(category) {
    const filtered = category === 'all' ? SKILLS : SKILLS.filter(s => s.category === category);

    // Clear current badges
    cloud.innerHTML = '';

    filtered.forEach((skill, i) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'skill-badge-wrapper';

      const badge = document.createElement('div');
      badge.className = 'skill-badge';
      badge.innerHTML = `${makeIcon(skill.icon)}${skill.name}`;
      badge.title = skill.name;

      wrapper.appendChild(badge);
      cloud.appendChild(wrapper);

      // Stagger entrance
      setTimeout(() => {
        wrapper.classList.add('visible');
      }, i * 30);
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} ${category === 'all' ? 'total' : category} skills`;
    }
  }

  // Filter button logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentCategory = btn.dataset.category;
      renderSkills(currentCategory);
    });
  });

  // Initial render
  renderSkills('all');

  // Observe skills section for stagger-in
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Re-trigger stagger on first view
        renderSkills(currentCategory);
        obs.unobserve(skillsSection);
      }
    }, { threshold: 0.1 });
    obs.observe(skillsSection);
  }
}

/* ──────────────────────────────────────────────────────────
   SHOW MORE — Work Experience
   ────────────────────────────────────────────────────────── */
function initShowMoreWork() {
  const btn = document.getElementById('show-more-work');
  const hidden = document.getElementById('work-hidden');
  if (!btn || !hidden) return;

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      hidden.style.display = 'none';
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = `Show more experiences <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:0.75rem;height:0.75rem;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;"><path d="m6 9 6 6 6-6"/></svg>`;
    } else {
      hidden.style.display = 'block';
      btn.setAttribute('aria-expanded', 'true');
      btn.innerHTML = `Show less <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:0.75rem;height:0.75rem;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;"><path d="m6 15 6-6 6 6"/></svg>`;

      // Reveal hidden items
      setTimeout(() => {
        hidden.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }, 50);
    }
  });
}

/* ──────────────────────────────────────────────────────────
   SHOW MORE — Publications
   ────────────────────────────────────────────────────────── */
function initShowMorePubs() {
  const btn = document.getElementById('show-more-pubs');
  if (!btn) return;
  // Extend with hidden publications if needed
  btn.addEventListener('click', () => {
    btn.style.display = 'none';
  });
}

/* ──────────────────────────────────────────────────────────
   ACTIVE NAV LINK — highlight current section
   ────────────────────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            link.style.fontWeight = '700';
          } else {
            link.classList.remove('active');
            link.style.fontWeight = '500';
          }
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0,
  });

  sections.forEach(section => sectionObserver.observe(section));
}

/* ──────────────────────────────────────────────────────────
   SMOOTH ANCHOR SCROLL
   ────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ──────────────────────────────────────────────────────────
   ABOUT — "More About Me" expandable
   ────────────────────────────────────────────────────────── */
function initAboutMore() {
  const btn = document.getElementById('about-more-btn');
  if (!btn) return;

  const extraText = `
    <p class="about-text" id="about-extra" style="margin-top:0.75rem;">
      I graduated with a degree in Computer Science and have been building software professionally since.
      My work spans backend services, developer tools, and the occasional dive into systems programming.
      I believe in writing code that's readable, tested, and maintainable — and I try to make every PR I open a little better than the last.
      Outside of work, I'm an avid reader, occasional runner, and habitual tinkerer of home automation setups.
    </p>
  `;

  let expanded = false;
  btn.addEventListener('click', () => {
    expanded = !expanded;
    btn.setAttribute('aria-expanded', String(expanded));

    if (expanded) {
      const div = document.createElement('div');
      div.innerHTML = extraText;
      btn.parentNode.insertBefore(div.firstElementChild, btn);
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:1rem;height:1rem;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
        </svg>
        Show Less
      `;
    } else {
      const extra = document.getElementById('about-extra');
      if (extra) extra.remove();
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:1rem;height:1rem;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
        </svg>
        More About Me
      `;
    }
  });
}

/* ──────────────────────────────────────────────────────────
   KEYBOARD ACCESSIBILITY — Escape closes overlays, etc.
   ────────────────────────────────────────────────────────── */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any expanded sections if needed
    }
  });
}

/* ──────────────────────────────────────────────────────────
   INIT — Entry Point
   ────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initScrollReveal();
  initSkills();
  initShowMoreWork();
  initShowMorePubs();
  initActiveNav();
  initSmoothScroll();
  initAboutMore();
  initKeyboard();
});

/* ──────────────────────────────────────────────────────────
   DARK MODE TOGGLE
   ────────────────────────────────────────────────────────── */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Check for saved user preference, if any, on load of the website
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark');
  }

  themeToggleBtn.addEventListener('click', function() {
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
  });
}

// Ensure it runs on DOM load
document.addEventListener('DOMContentLoaded', initThemeToggle);

/* ──────────────────────────────────────────────────────────
   NEURAL CANVAS BACKGROUND
   ────────────────────────────────────────────────────────── */
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  const particles = [];
  const numParticles = window.innerWidth < 768 ? 40 : 80;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseout', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? '255, 255, 255' : '17, 24, 39';

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, 0.5)`;
      ctx.fill();

      // Connect to mouse
      let dxMouse = mouse.x - p.x;
      let dyMouse = mouse.y - p.y;
      let distSqMouse = dxMouse * dxMouse + dyMouse * dyMouse;
      if (distSqMouse < 22500) { // 150 * 150
        let distMouse = Math.sqrt(distSqMouse);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(${color}, ${0.2 - distMouse/150*0.2})`;
        ctx.stroke();
        
        // Slight pull towards mouse
        p.x += dxMouse * 0.01;
        p.y += dyMouse * 0.01;
      }

      // Connect to other particles
      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let distSq = dx*dx + dy*dy;
        
        if (distSq < 10000) { // 100 * 100
          let dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${color}, ${0.15 - dist/100*0.15})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}
document.addEventListener('DOMContentLoaded', initNeuralCanvas);


/* ──────────────────────────────────────────────────────────
   AI TERMINAL CHATBOT
   ────────────────────────────────────────────────────────── */
function initAITerminal() {
  const toggleBtn = document.getElementById('ai-toggle-btn');
  const closeBtn = document.getElementById('ai-close-btn');
  const modal = document.getElementById('ai-modal');
  const backdrop = document.getElementById('ai-modal-backdrop');
  const input = document.getElementById('ai-input');
  const chatWindow = document.getElementById('ai-chat-window');
  const chips = document.querySelectorAll('.ai-chip');

  if (!toggleBtn || !modal) return;

  function openModal() {
    modal.classList.add('active');
    setTimeout(() => input.focus(), 100);
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  toggleBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Cmd+K to open
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) closeModal();
      else openModal();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Simulated AI Knowledge Base
  const knowledge = [
    // Agentic UI Controls & Easter Eggs
    { id: "theme", keys: ["dark", "light", "theme", "mode", "lights", "toggle"], text: "Executing Agent Tool: <strong>toggleTheme()</strong>... Switching website theme!", action: () => document.getElementById('theme-toggle').click() },
    { id: "scroll_down", keys: ["scroll", "down", "bottom", "end", "footer"], text: "Executing Agent Tool: <strong>scrollToBottom()</strong>...", action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) },
    { id: "scroll_up", keys: ["top", "up", "home"], text: "Executing Agent Tool: <strong>scrollToTop()</strong>...", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: "print", keys: ["print"], text: "Executing Agent Tool: <strong>window.print()</strong>... Opening print dialog!", action: () => window.print() },
    { id: "hack", keys: ["hack", "matrix", "destroy"], text: "Executing Agent Tool: <strong>hackMainframe()</strong>... ACCESS GRANTED.", action: () => { 
        document.body.style.transition = 'all 0.5s';
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#0f0';
        document.body.style.fontFamily = 'monospace';
        document.querySelectorAll('h1, h2, h3, p, span, div, a').forEach(el => { el.style.color = '#0f0'; el.style.fontFamily = 'monospace'; });
        setTimeout(() => alert("Just kidding! Refresh the page to exit the Matrix."), 500);
      } 
    },
    
    // Core Topics
    { id: "work", keys: ["accenture", "work", "experience", "job", "jobs", "role", "company", "career", "currently", "working", "employed", "professional", "living"], text: "At Accenture, I work as an Applied AI Engineer. I engineered Python-based LLM workflow automation tools that increased throughput by 40%. I also built RAG pipelines reducing retrieval latency by 45% using LangChain and Pinecone, and architected multi-agent orchestration systems using LangGraph." },
    { id: "rag", keys: ["rag", "pipeline", "search", "vector", "chromadb", "pinecone", "retrieval", "embeddings"], text: "I have deep expertise in RAG (Retrieval-Augmented Generation). For example, I built a Secure Enterprise RAG pipeline that achieves a RAGAS faithfulness of 0.88, sub-2s P95 latency, and implements strict Role-Based Access Control (RBAC)." },
    { id: "skills", keys: ["skill", "skills", "tech", "stack", "technology", "technologies", "tool", "tools", "language", "languages", "know", "frameworks", "libraries", "python", "javascript", "react", "ml", "ai", "machine", "learning"], text: "My main skills include <strong>AI/ML & Agents</strong> (OpenAI, Claude, LangChain, LangGraph, RAG, Pinecone, Agent Memory, MCP), <strong>Backend</strong> (Python, FastAPI, Node.js, Spring Boot), and <strong>DevOps/Cloud</strong> (Docker, AWS, MongoDB)." },
    { id: "projects", keys: ["project", "projects", "github", "code", "portfolio", "build", "building", "built", "make", "making", "made", "create", "creating", "created", "source", "open"], text: "Check out my featured open source work! <br>- <strong>multi-tool-autonomous-ai-agent</strong>: A LangGraph agent with dynamic tool routing.<br>- <strong>secure-enterprise-rag</strong>: RAG pipeline with strict RBAC and ChromaDB." },
    { id: "education", keys: ["education", "degree", "college", "university", "study", "studies", "studying", "mtech", "btech", "graduated", "pes", "haldia", "school", "bachelors", "masters"], text: "I have a B.Tech in Computer Science from Haldia Institute of Technology, and I am currently pursuing an M.Tech in Data Science and Artificial Intelligence from PES University (2026-2028)." },
    
    // HR & Logistics
    { id: "location", keys: ["location", "live", "city", "stay", "staying", "bangalore", "bengaluru", "based"], text: "I am currently based in Bengaluru, India." },
    { id: "resume", keys: ["resume", "cv", "download", "document"], text: "You can download my full resume by clicking the 'Resume' button in the top navigation bar, or just let me know if you want me to summarize my experience!" },
    { id: "hire", keys: ["hire", "hiring", "freelance", "opportunity", "opportunities", "open", "available", "availability"], text: "I am always open to discussing new opportunities, especially roles involving Agentic AI, LLMs, and Backend Engineering. Feel free to email me!" },
    { id: "remote", keys: ["remote", "relocate", "relocation", "visa", "sponsorship"], text: "I am open to remote work and willing to discuss relocation depending on the opportunity and role!" },
    { id: "salary", keys: ["salary", "compensation", "rate", "pay", "rates", "expected", "expectation"], text: "My salary expectations are negotiable and depend on the scope of the role, benefits, and the exciting problems I'd get to solve. Let's discuss!" },
    { id: "notice", keys: ["notice", "start", "when", "join", "period"], text: "My notice period is standard, but I am flexible and can discuss a start date that works best for the team." },
    { id: "interview", keys: ["interview", "meet", "schedule", "call"], text: "I am available for an interview this week! You can reach out via email to schedule a time that works best for you." },

    // Technical / Behavioral
    { id: "llm", keys: ["llm", "llms", "openai", "claude", "gpt", "model", "models", "prompt", "prompting"], text: "I heavily use OpenAI (GPT-4) and Anthropic (Claude) APIs. I specialize in prompt engineering, function calling (tool use), and chaining these models into autonomous agents using LangGraph." },
    { id: "strength", keys: ["strength", "strengths", "best", "quality", "proud", "achievement", "achievements"], text: "My biggest strength, and what I'm most proud of, is bridging the gap between research-level AI and production-grade backend engineering. I don't just build Jupyter notebooks; I deploy scalable, secure Agentic architectures." },
    { id: "weakness", keys: ["weakness", "weaknesses", "bad", "worst", "fail", "failure"], text: "Sometimes I get too deeply invested in optimizing performance (like writing custom physics for a background canvas) when a simpler solution would suffice, but I'm learning to balance perfection with speed!" },
    { id: "built", keys: ["how", "framework", "vanilla", "architecture"], text: "Fun fact: This entire website (including me, the AI) is built with 100% Vanilla HTML, CSS, and JavaScript. No external libraries, no backend APIs, no React. Just raw DOM manipulation and optimized NLP parsing!" },
    { id: "whyai", keys: ["choose", "passion", "fascinated", "interest", "why"], text: "I chose AI because I am fascinated by autonomous systems. Building programs that can reason, use tools, and solve open-ended problems is the most exciting frontier in software engineering right now." },
    { id: "hardest_bug", keys: ["bug", "hardest", "difficult", "challenge", "challenging"], text: "One of my toughest challenges was optimizing a RAG retrieval pipeline that was hitting token limits and latency spikes. I fixed it by implementing chunking strategies, semantic caching, and strict async parallelization." },
    { id: "fav_language", keys: ["favorite", "favourite", "preference", "prefer"], text: "My absolute favorite language is Python for AI/ML and Backend logic, but I deeply respect Vanilla JavaScript for building extremely fast, lightweight frontend interfaces." },
    { id: "leadership", keys: ["leadership", "manage", "management", "lead", "leading"], text: "I excel at taking ownership of complex architectural problems. While I love being a hands-on contributor, I am highly capable of leading technical decisions and mentoring peers in AI patterns." },
    { id: "ide", keys: ["ide", "editor", "vscode", "cursor"], text: "I am an absolute power user of AI-assisted IDEs like Cursor and VS Code. I heavily leverage GitHub Copilot and Agentic tooling to 10x my development speed." },
    { id: "testing", keys: ["test", "testing", "tdd", "jest", "pytest", "unit"], text: "I believe in robust software. I write comprehensive unit tests using PyTest for my backend systems, and I rely on strict typing (Pydantic/TypeScript) to catch errors before they hit production." },
    { id: "database", keys: ["sql", "nosql", "postgres", "mongodb", "database", "databases"], text: "I have strong experience with relational databases like PostgreSQL and MySQL for structured data, as well as NoSQL DBs like MongoDB for flexible schemas, and Vector DBs like Chroma and Pinecone for AI." },
    { id: "agile", keys: ["agile", "scrum", "sprint", "jira"], text: "I am highly accustomed to Agile workflows. I thrive in fast-paced sprint cycles, daily standups, and rapid iterative delivery environments." },
    { id: "stress", keys: ["stress", "pressure", "deadline"], text: "I handle pressure by breaking complex problems down into small, deterministic tasks. When production is on fire, panicking doesn't help—reading the logs and tracing the stack does." },

    // Advanced Technical & Engineering
    { id: "sys_design", keys: ["scalable", "traffic", "design", "microservices", "system", "architecture"], text: "When designing for scale, I favor event-driven microservices architecture. I use message brokers like Kafka/RabbitMQ to decouple components, implement aggressive caching with Redis, and use load balancing to ensure horizontal scalability." },
    { id: "ai_hallucination", keys: ["hallucination", "accuracy", "factual", "hallucinations"], text: "To mitigate LLM hallucinations, I employ advanced RAG techniques: strictly grounding the model in retrieved context, using lower temperatures, and implementing self-reflection loops (like LangGraph) where a critic agent verifies the output." },
    { id: "ai_finetune_rag", keys: ["fine-tune", "tuning", "finetuning"], text: "I prefer RAG for injecting domain-specific, constantly updating knowledge because it's cheaper and prevents staleness. I reserve fine-tuning for altering the model's behavior, tone, or teaching it a specific structural format." },
    { id: "vector_search", keys: ["vector", "search", "cosine", "similarity", "hnsw"], text: "For vector retrieval, I typically use Chroma or Pinecone. I optimize search by using HNSW indexing for speed, and I apply hybrid search (Dense + Sparse/BM25) to capture both semantic meaning and exact keyword matches." },
    { id: "agent_orchestration", keys: ["agent", "orchestration", "multi-agent", "agentic", "agents"], text: "I use LangGraph to orchestrate multi-agent systems. It allows me to define cyclic graphs for state machines, enabling agents to use tools, reflect on errors, and retry autonomously without getting stuck in infinite loops." },
    { id: "devops_cicd", keys: ["ci", "cd", "deployment", "github", "actions", "pipeline", "docker", "kubernetes"], text: "I strongly believe in automated pipelines. I use GitHub Actions to run PyTest/Jest on every PR, build Docker images, and deploy to AWS/GCP. Infrastructure as Code (Terraform) ensures environment parity." },
    { id: "security_api", keys: ["api", "security", "owasp", "auth", "authentication"], text: "API security is paramount. I enforce HTTPS, implement OAuth2/JWT for authentication, use rate limiting to prevent DDoS, and rigorously validate all inputs using Pydantic/Zod to prevent injection attacks." },
    { id: "tech_debt", keys: ["technical", "debt", "refactoring", "refactor"], text: "Technical debt is inevitable, but must be managed. I advocate for the 'Boy Scout Rule'—leaving code cleaner than you found it—and I allocate a small percentage of sprint capacity to refactoring critical bottlenecks." },
    { id: "dry_solid", keys: ["solid", "principles", "dry", "design", "patterns"], text: "I adhere to SOLID principles and DRY to keep codebases maintainable. However, I am pragmatic: I prefer readability over dogmatic abstraction. Sometimes a little duplication is better than the wrong abstraction." },
    { id: "perf_opt", keys: ["performance", "optimization", "bottleneck", "slow"], text: "My approach to performance is strictly data-driven. I profile the code first to find the actual bottleneck. Often, the biggest gains come from optimizing database queries (adding indexes), introducing caching, or resolving N+1 query problems." },
    
    // Advanced Behavioral & Soft Skills
    { id: "conflict_res", keys: ["conflict", "disagreement", "disagree", "argue"], text: "When technical disagreements arise, I focus on the data and the user requirements. I encourage A/B testing or prototyping both approaches. Ultimately, I 'disagree and commit' once a team decision is made." },
    { id: "mentorship", keys: ["mentorship", "mentor", "junior", "juniors", "teach"], text: "I love mentoring junior developers. I focus on teaching them 'how to fish'—guiding them through debugging processes and architectural thinking rather than just giving them the code." },
    { id: "innovation", keys: ["innovation", "updated", "keep", "learning", "learn"], text: "To stay updated in the rapidly moving AI space, I read research papers on arXiv, follow core maintainers of LangChain/LlamaIndex on Twitter, and continuously build weekend prototype projects to test new models." },
    { id: "feedback", keys: ["feedback", "criticism", "review"], text: "I view constructive criticism as the fastest way to grow. I actively seek code reviews from senior peers and treat every piece of feedback as a learning opportunity, not a personal attack." },
    { id: "time_management", keys: ["time", "management", "prioritize", "priority", "tasks"], text: "I prioritize tasks using the Eisenhower Matrix (Urgent vs Important). I tackle complex architectural work during my high-energy hours and save meetings or routine tasks for the afternoon." },

    // Casual / Fun
    { id: "chatgpt", keys: ["chatgpt", "skynet", "real", "human", "bot", "sentient", "alive"], text: "I am not ChatGPT or Skynet! I am a highly optimized, client-side NLP simulation written entirely in JavaScript by Kunal to demonstrate his engineering skills." },
    { id: "joke", keys: ["joke", "funny", "laugh", "humor"], text: [
      "Why do AI Engineers prefer dark mode? Because light attracts bugs!",
      "There are 10 types of people in the world: those who understand binary, and those who don't.",
      "Why did the programmer quit his job? Because he didn't get arrays.",
      "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?'",
      "How many programmers does it take to change a light bulb? None, that's a hardware problem."
    ] },
    { id: "fun", keys: ["fun", "hobbies", "outside", "free", "time", "weekend"], text: "When I'm not building autonomous agents or architecting backends, I enjoy staying updated with the latest AI papers, exploring open-source projects, and continuously learning new paradigms." },
    { id: "age", keys: ["age", "old", "born", "birthday"], text: "I am a timeless AI agent, but Kunal was born in 2002." },
    { id: "write", keys: ["write", "program", "code"], text: "I am a frontend simulation so I can't write code right now, but Kunal writes production-ready Python, JavaScript, and Java every single day. You should hire him!" },
    { id: "meaning_of_life", keys: ["meaning", "life", "42"], text: "The meaning of life is 42. But if you ask a programmer, it's writing clean code that compiles on the first try." },

    // Fallbacks & Safety
    { id: "abuse", keys: ["fuck", "shit", "bitch", "crap", "idiot", "stupid", "sick", "suck", "hell", "damn", "ass", "asshole"], text: "I'm just a friendly AI Agent! Let's keep it professional. Would you like to know about Kunal's work experience or technical skills?" },
    { id: "pushy", keys: ["answer", "tell", "now", "quick", "hurry", "respond"], text: "I'm ready when you are! What specific information are you looking for?" },

    // Contact & Greetings
    { id: "contact", keys: ["contact", "email", "reach", "message", "call", "connect", "linkedin", "twitter"], text: "You can reach me via email at kunalkeshav2002@gmail.com, or connect with me on LinkedIn!" },
    { id: "hello", keys: ["hi", "hello", "hey", "greetings", "morning", "afternoon", "evening", "sup", "name"], text: "Hello! I am Kunal's simulated AI Agent. I can answer questions about his skills, experience, projects, or education. What would you like to know?" }
  ];

  function getBotResponse(query) {
    const rawQuery = query.toLowerCase();
    query = rawQuery.replace(/[^\w\s]/g, '').trim().replace(/\s+/g, ' ');
    
    // Substring Phrase Overrides - Huge array of Edge Cases!
    const phraseMap = [
      // Core & Logistics
      { phrase: "for a living", targetId: "work" },
      { phrase: "what do you do", targetId: "work" },
      { phrase: "what you do", targetId: "work" },
      { phrase: "what are you doing", targetId: "work" },
      { phrase: "current job", targetId: "work" },
      { phrase: "what you are building", targetId: "projects" },
      { phrase: "what are you building", targetId: "projects" },
      { phrase: "what have you built", targetId: "projects" },
      { phrase: "where do you live", targetId: "location" },
      { phrase: "where are you from", targetId: "location" },
      { phrase: "where are you based", targetId: "location" },
      { phrase: "notice period", targetId: "notice" },
      { phrase: "when can you start", targetId: "notice" },
      { phrase: "expected salary", targetId: "salary" },
      { phrase: "how much do you charge", targetId: "salary" },
      { phrase: "open to remote", targetId: "remote" },
      { phrase: "willing to relocate", targetId: "remote" },
      { phrase: "visa sponsorship", targetId: "remote" },
      { phrase: "schedule an interview", targetId: "interview" },
      { phrase: "hop on a call", targetId: "interview" },
      
      // Technical & System Design
      { phrase: "system design", targetId: "sys_design" },
      { phrase: "scalable", targetId: "sys_design" },
      { phrase: "high traffic", targetId: "sys_design" },
      { phrase: "microservices", targetId: "sys_design" },
      { phrase: "database experience", targetId: "database" },
      { phrase: "sql or nosql", targetId: "database" },
      { phrase: "performance optimization", targetId: "perf_opt" },
      { phrase: "bottleneck", targetId: "perf_opt" },
      { phrase: "slow code", targetId: "perf_opt" },
      
      // AI / Machine Learning
      { phrase: "machine learning", targetId: "skills" },
      { phrase: "do you know", targetId: "skills" },
      { phrase: "tech stack", targetId: "skills" },
      { phrase: "why ai", targetId: "whyai" },
      { phrase: "choose ai", targetId: "whyai" },
      { phrase: "hallucination", targetId: "ai_hallucination" },
      { phrase: "mitigate hallucinations", targetId: "ai_hallucination" },
      { phrase: "factual accuracy", targetId: "ai_hallucination" },
      { phrase: "fine tuning", targetId: "ai_finetune_rag" },
      { phrase: "rag vs fine-tuning", targetId: "ai_finetune_rag" },
      { phrase: "vector search", targetId: "vector_search" },
      { phrase: "cosine similarity", targetId: "vector_search" },
      { phrase: "multi-agent", targetId: "agent_orchestration" },
      { phrase: "orchestration", targetId: "agent_orchestration" },
      { phrase: "agentic", targetId: "agent_orchestration" },

      // Software Engineering Practices
      { phrase: "can you write", targetId: "write" },
      { phrase: "favorite language", targetId: "fav_language" },
      { phrase: "programming language", targetId: "fav_language" },
      { phrase: "favorite ide", targetId: "ide" },
      { phrase: "what editor", targetId: "ide" },
      { phrase: "ci/cd", targetId: "devops_cicd" },
      { phrase: "deployment pipeline", targetId: "devops_cicd" },
      { phrase: "github actions", targetId: "devops_cicd" },
      { phrase: "api security", targetId: "security_api" },
      { phrase: "authentication", targetId: "security_api" },
      { phrase: "owasp", targetId: "security_api" },
      { phrase: "technical debt", targetId: "tech_debt" },
      { phrase: "refactoring", targetId: "tech_debt" },
      { phrase: "solid principles", targetId: "dry_solid" },
      { phrase: "dry principle", targetId: "dry_solid" },
      { phrase: "design patterns", targetId: "dry_solid" },
      { phrase: "unit testing", targetId: "testing" },
      { phrase: "how do you test", targetId: "testing" },
      
      // Behavioral & Soft Skills
      { phrase: "proud of", targetId: "strength" },
      { phrase: "greatest achievement", targetId: "strength" },
      { phrase: "biggest strength", targetId: "strength" },
      { phrase: "why should we hire you", targetId: "strength" },
      { phrase: "hardest bug", targetId: "hardest_bug" },
      { phrase: "biggest challenge", targetId: "hardest_bug" },
      { phrase: "leadership experience", targetId: "leadership" },
      { phrase: "can you lead", targetId: "leadership" },
      { phrase: "handle stress", targetId: "stress" },
      { phrase: "under pressure", targetId: "stress" },
      { phrase: "agile environment", targetId: "agile" },
      { phrase: "scrum experience", targetId: "agile" },
      { phrase: "conflict", targetId: "conflict_res" },
      { phrase: "disagreement", targetId: "conflict_res" },
      { phrase: "mentorship", targetId: "mentorship" },
      { phrase: "mentor junior", targetId: "mentorship" },
      { phrase: "stay updated", targetId: "innovation" },
      { phrase: "keep up with ai", targetId: "innovation" },
      { phrase: "receive feedback", targetId: "feedback" },
      { phrase: "criticism", targetId: "feedback" },
      { phrase: "time management", targetId: "time_management" },
      { phrase: "prioritize tasks", targetId: "time_management" },
      
      // Fun & Casual
      { phrase: "tell me a joke", targetId: "joke" },
      { phrase: "how did you build", targetId: "built" },
      { phrase: "what is your name", targetId: "hello" },
      { phrase: "who are you", targetId: "hello" },
      { phrase: "what are you", targetId: "hello" },
      { phrase: "meaning of life", targetId: "meaning_of_life" },
      { phrase: "are you alive", targetId: "chatgpt" },
      { phrase: "are you sentient", targetId: "chatgpt" }
    ];

    for (let p of phraseMap) {
      if (query.includes(p.phrase) || rawQuery.includes(p.phrase)) {
        const match = knowledge.find(k => k.id === p.targetId);
        if (match) {
          let responseText = Array.isArray(match.text) ? match.text[Math.floor(Math.random() * match.text.length)] : match.text;
          return { text: responseText, action: match.action };
        }
      }
    }
    
    let bestMatch = null;
    let highestScore = 0;

    // Keyword scoring algorithm
    for (let item of knowledge) {
      let score = 0;
      for (let key of item.keys) {
        if (new RegExp('\\b' + key + '\\b').test(query)) {
          score += 10; // All explicitly defined keys are now strong intent indicators
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      let responseText = Array.isArray(bestMatch.text) ? bestMatch.text[Math.floor(Math.random() * bestMatch.text.length)] : bestMatch.text;
      return { text: responseText, action: bestMatch.action };
    }

    return { text: "I'm a simulated agent trained on Kunal's resume, so I don't know the answer to that specific question. Try asking about his <strong>skills</strong>, <strong>Accenture experience</strong>, or <strong>projects</strong>!" };
  }

  function appendMessage(text, sender, callback) {
    const msg = document.createElement('div');
    msg.className = `ai-message ${sender}`;
    chatWindow.appendChild(msg);
    
    if (sender === 'user') {
      msg.textContent = text;
      chatWindow.scrollTop = chatWindow.scrollHeight;
      if (callback) callback();
    } else {
      // Optimized Typewriter effect
      let i = 0;
      let currentHTML = '';
      msg.innerHTML = '';
      
      const interval = setInterval(() => {
        if (text[i] === '<') {
          let tag = '';
          while (text[i] !== '>' && i < text.length) { tag += text[i]; i++; }
          tag += '>';
          currentHTML += tag;
        } else {
          currentHTML += text[i];
        }
        msg.innerHTML = currentHTML;
        i++;
        
        // Only trigger layout reflow every few frames to prevent lag
        if (i % 5 === 0) chatWindow.scrollTop = chatWindow.scrollHeight;
        
        if (i >= text.length) {
          clearInterval(interval);
          chatWindow.scrollTop = chatWindow.scrollHeight;
          if (callback) setTimeout(callback, 300);
        }
      }, 5); // Faster typing, less lag
    }
  }

  function handleInput(text) {
    if (!text.trim()) return;
    appendMessage(text, 'user');
    input.value = '';
    
    // Simulate network delay
    setTimeout(() => {
      const response = getBotResponse(text);
      appendMessage(response.text, 'bot', response.action);
    }, 400);
  }

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleInput(input.value);
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      handleInput(chip.dataset.q);
    });
  });
}
document.addEventListener('DOMContentLoaded', initAITerminal);
