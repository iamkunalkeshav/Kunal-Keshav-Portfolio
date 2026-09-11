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
          link.style.fontWeight = link.getAttribute('href') === `#${id}` ? '700' : '500';
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'hsl(220.9 39.3% 11%)'
            : '';
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
