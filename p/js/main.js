// ========================================================
// AHMED MOHAMED — FULL STACK DEVELOPER PORTFOLIO JAVASCRIPT
// High-Performance Visuals, 3D Parallax, and Micro-interactions
// ========================================================

const $ = q => document.querySelector(q);
const $$ = q => document.querySelectorAll(q);
const finePointer = matchMedia('(pointer:fine)').matches;
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. DYNAMIC SVG WAVE LINES IN HERO
(function initWaveLines() {
  const linesEl = document.getElementById('lines');
  if (!linesEl) return;
  let linesSVG = '';
  for (let i = 0; i < 34; i++) {
    const offset = i * 5;
    linesSVG += `<path stroke-width=".85" opacity="${0.9 - i * 0.02}" d="M-20 ${70 + offset * 0.5} C 200 ${-30 + offset} 330 ${220 - offset * 0.4} 520 ${120 + offset * 0.4} S 820 ${-20 + offset * 0.6} 1020 ${90 + offset * 0.5}"/>`;
  }
  linesEl.innerHTML = linesSVG;
})();

// 2. NAME LETTER-BY-LETTER ANIMATION & READY STATE
(function initNameAnimation() {
  const nmEl = document.getElementById('nm');
  if (nmEl) {
    const nameStr = 'Ahmed Mohamed';
    nmEl.innerHTML = [...nameStr].map((char, i) =>
      char === ' ' ? ' ' : `<span class="ch" style="animation-delay:${0.35 + i * 0.05}s">${char}</span>`
    ).join('');
  }
  setTimeout(() => document.body.classList.add('ready'), 1000);
})();

// 3. TYPED ROLES ROTATOR
(function initTypedRoles() {
  const roles = [
    "Full Stack Web Developer",
    "React & Next.js Specialist",
    "Node.js & API Architect",
    "UI/UX & Creative Frontend Engineer"
  ];
  const tyEl = document.getElementById('ty');
  if (!tyEl) return;
  let roleIdx = 0, charIdx = 0, isDeleting = 0;

  function typeTick() {
    const current = roles[roleIdx];
    charIdx += isDeleting ? -1 : 1;
    tyEl.textContent = current.slice(0, charIdx);
    let speed = isDeleting ? 30 : 65;

    if (!isDeleting && charIdx === current.length) {
      isDeleting = 1;
      speed = 2000;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = 0;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 350;
    }
    setTimeout(typeTick, speed);
  }
  typeTick();
})();

// 4. TECH STACK DATA & RENDERER (OFFICIAL BRAND VISUALS)
const TECH_STACK = [
  { name: "HTML5", icon: "html5.svg", category: "Markup & Semantics" },
  { name: "CSS3", icon: "css3.svg", category: "Layout & Motion" },
  { name: "JavaScript", icon: "javascript.svg", category: "ES2024+ Core" },
  { name: "TypeScript", icon: "typescript.svg", category: "Type Safety" },
  { name: "React", icon: "react.svg", category: "Components & State" },
  { name: "Next.js", icon: "nextjs.svg", category: "SSR & App Router" },
  { name: "Node.js", icon: "nodejs.svg", category: "Server Runtime" },
  { name: "Git", icon: "git.svg", category: "Version Control" },
  { name: "GitHub", icon: "github.svg", category: "CI/CD & DevOps" },
  { name: "Database", icon: "database.svg", category: "PostgreSQL & SQL" },
  { name: "REST & API", icon: "api.svg", category: "Endpoints & GraphQL" }
];

(function renderTechStack() {
  const grid = document.getElementById('techGrid');
  if (!grid) return;
  grid.innerHTML = TECH_STACK.map((tech, i) => `
    <div class="tech-card item" style="--i:${i}; transition-delay:${(i % 5) * 0.08}s">
      <div class="tech-icon-wrap">
        <img src="assets/images/icons/${tech.icon}" alt="${tech.name} logo" width="28" height="28" loading="lazy" decoding="async">
      </div>
      <div class="tech-name">${tech.name}</div>
      <div class="tech-category">${tech.category}</div>
    </div>
  `).join('');
})();

// 5. MARQUEE GENERATOR (WITH OFFICIAL TECH ICONS)
(function initMarquee() {
  const mqEl = document.getElementById('mq');
  if (!mqEl) return;
  const items = TECH_STACK.map(t =>
    `<span><img src="assets/images/icons/${t.icon}" alt="${t.name}" width="20" height="20" loading="lazy"> <b>${t.name}</b></span>`
  ).join('');
  mqEl.innerHTML = items.repeat(6);
})();

// 6. PROJECTS DATA & RENDERER (FEATURING LIVE CLIENT STORES & WEB APPLICATIONS)
const PROJECTS = [
  {
    title: "Frontlet Shop",
    desc: "A modern e-commerce store focused on sportswear, streetwear, and outdoor fashion, featuring a clean product-focused shopping experience.",
    img: "assets/images/project-frontlet.jpg",
    fallback: "assets/images/project-1.svg",
    url: "https://frontlet.de/",
    tags: ["E-Commerce", "Sportswear", "Modern UI", "Cart & Checkout"],
    badge: "Live Store",
    isLive: true
  },
  {
    title: "Notoriouz",
    desc: "A German fitness and sportswear store offering performance-focused clothing designed for gym, bodybuilding, and active lifestyles.",
    img: "assets/images/project-notoriouz.jpg",
    fallback: "assets/images/project-2.svg",
    url: "https://notoriouz.de/",
    tags: ["Fitness Store", "Gym Wear", "Responsive", "E-Commerce"],
    badge: "Live Store",
    isLive: true
  },
  {
    title: "Essence Garden",
    desc: "A premium fragrance store specializing in niche and luxury perfumes, with an elegant product presentation and refined shopping experience.",
    img: "assets/images/project-essence.jpg",
    fallback: "assets/images/project-3.svg",
    url: "https://www.essence-garden.de/",
    tags: ["Luxury Brand", "Fragrance Store", "UI/UX Design", "E-Commerce"],
    badge: "Live Store",
    isLive: true
  },
  {
    title: "Digishop24",
    desc: "A digital commerce platform offering software, digital products, online tools, and technology-focused solutions through a streamlined shopping experience.",
    img: "assets/images/project-digishop.jpg",
    fallback: "assets/images/project-4.svg",
    url: "https://www.digishop24.de/",
    tags: ["Digital Commerce", "Software Delivery", "Instant License", "Web Platform"],
    badge: "Live Store",
    isLive: true
  },
  {
    title: "Business Analytics Dashboard",
    desc: "Modern administrative intelligence dashboard with dynamic KPI cards, interactive chart visualizations, user role tables, and live analytics.",
    img: "assets/images/project-dashboard.jpg",
    fallback: "assets/images/project-5.svg",
    url: "#contact",
    tags: ["TypeScript", "React", "Recharts", "REST API", "Tailwind CSS"],
    badge: "Web App UI",
    isLive: false
  },
  {
    title: "Hotel Management System",
    desc: "Comprehensive hospitality administration system managing room inventory, live guest bookings, check-in schedules, and billing statements.",
    img: "assets/images/project-hotel.jpg",
    fallback: "assets/images/project-6.svg",
    url: "#contact",
    tags: ["Full Stack", "React", "Node.js", "PostgreSQL", "Calendar Engine"],
    badge: "Full Stack UI",
    isLive: false
  }
];

(function renderProjects() {
  const pjGrid = document.getElementById('pj');
  if (!pjGrid) return;
  pjGrid.innerHTML = PROJECTS.map((p, i) => `
    <article class="pj item" style="transition-delay:${(i % 2) * 0.12}s" data-url="${p.url}">
      <a class="th" href="${p.url}" ${p.isLive ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="Visit ${p.title}">
        <img src="${p.img}"
             alt="${p.title} — Modern Web UI"
             width="640" height="360"
             loading="lazy" decoding="async"
             onerror="this.src='${p.fallback}'">
        <span class="tg ${p.isLive ? 'tg-live' : ''}">${p.isLive ? '<span class="live-dot"></span> Live Store ↗' : p.badge}</span>
        <div class="ov">
          <span>${p.isLive ? 'Visit Live Store ↗' : 'Explore System Architecture ➔'}</span>
        </div>
      </a>
      <div class="pj-content">
        <div class="pj-header-row">
          <h3 class="pj-title">
            <a href="${p.url}" ${p.isLive ? 'target="_blank" rel="noopener noreferrer"' : ''} class="pj-title-link">
              ${p.title}
              ${p.isLive ? '<span class="pj-external-icon" aria-hidden="true">↗</span>' : ''}
            </a>
          </h3>
          ${p.isLive ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="pj-visit-btn" title="Open ${p.title}">Visit Site ↗</a>` : ''}
        </div>
        <p>${p.desc}</p>
        <div class="pj-tags">
          ${p.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  pjGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.pj');
    if (!card) return;
    if (e.target.closest('a')) return;
    const url = card.dataset.url;
    if (!url) return;
    if (url.startsWith('#')) {
      const target = document.querySelector(url);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
})();

// 7. WEB DEVELOPMENT GALLERY: BEHIND THE CODE (CREATIVE VISUALS)
const GALLERY_ITEMS = [
  {
    img: "assets/images/gallery-code.jpg",
    category: "Coding & Clean Code",
    title: "Modern Full-Stack Syntax",
    desc: "Writing modular, type-safe React & TypeScript components with clear separation of concerns."
  },
  {
    img: "assets/images/gallery-ui.jpg",
    category: "UI/UX & Design Systems",
    title: "Design Tokens & Wireframes",
    desc: "Crafting polished design tokens, typography scales, and intuitive user navigation hierarchies."
  },
  {
    img: "assets/images/gallery-desk.jpg",
    category: "Developer Workspace",
    title: "Multi-Screen Coding Rig",
    desc: "A developer environment optimized for continuous integration, browser devtools, and terminal workflows."
  },
  {
    img: "assets/images/gallery-responsive.jpg",
    category: "Responsive Websites",
    title: "Cross-Device Viewport Testing",
    desc: "Ensuring seamless experiences across mobile phones, tablets, laptops, and 4K displays."
  },
  {
    img: "assets/images/gallery-architecture.jpg",
    category: "Software Architecture",
    title: "System Design & Data Flow",
    desc: "Planning scalable database schemas, REST & GraphQL endpoints, and serverless edge routes."
  },
  {
    img: "assets/images/gallery-terminal.jpg",
    category: "Cloud & APIs",
    title: "Server Telemetry & DevOps",
    desc: "Deploying production-ready applications with fast build pipelines, security audits, and monitoring."
  }
];

(function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;
  galleryGrid.innerHTML = GALLERY_ITEMS.map((item, i) => `
    <div class="gallery-card item" style="transition-delay:${(i % 3) * 0.1}s">
      <img src="${item.img}"
           alt="${item.title} — ${item.category}"
           width="640" height="480"
           loading="lazy" decoding="async">
      <div class="gallery-overlay">
        <span class="gallery-category">${item.category}</span>
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
})();

// 8. SCROLL EFFECTS: PROGRESS BAR, NAVBAR & FULLSCREEN EXPANSION
(function initScrollEffects() {
  const pgEl = document.getElementById('pg');
  const navEl = document.getElementById('navigation');
  const fsSection = document.getElementById('fs');
  const frEl = document.getElementById('fr');
  const ftEl = document.getElementById('ft');
  const fsBgImg = document.getElementById('fsBgImg');
  const waveSvg = document.querySelector('.hero svg.wave');

  function onScrollTick() {
    const scrollYPos = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Progress Bar
    if (pgEl && maxScroll > 0) {
      pgEl.style.width = (scrollYPos / maxScroll * 100) + '%';
    }

    // Nav Background Blur
    if (navEl) {
      navEl.classList.toggle('sc', scrollYPos > 40);
    }

    // Wave Parallax
    if (waveSvg && !prefersReducedMotion) {
      waveSvg.style.transform = `translateY(${scrollYPos * 0.18}px)`;
    }

    // Fullscreen Image Section Smooth Pin & Scale
    if (fsSection && frEl && ftEl) {
      const rect = fsSection.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      const scrollProgress = scrollRange > 0 ? Math.min(1, Math.max(0, -rect.top / scrollRange)) : 0;
      const isMobile = window.innerWidth <= 768;
      const maxInset = isMobile ? 14 : 26;
      const insetPadding = (1 - scrollProgress) * maxInset;

      frEl.style.clipPath = `inset(${insetPadding}% ${insetPadding * 0.7}% ${insetPadding}% ${insetPadding * 0.7}% round ${(1 - scrollProgress) * (isMobile ? 14 : 24)}px)`;
      ftEl.style.transform = `scale(${0.88 + scrollProgress * 0.18}) translateY(${(1 - scrollProgress) * (isMobile ? 10 : 20)}px)`;

      if (fsBgImg && !prefersReducedMotion) {
        fsBgImg.style.transform = `scale(${1.15 - scrollProgress * 0.1}) translateY(${(scrollProgress - 0.5) * (isMobile ? 20 : 40)}px)`;
      }
    }
  }

  window.addEventListener('scroll', onScrollTick, { passive: true });
  onScrollTick();
})();

// 9. 3D INTERACTIVE HERO WORKSTATION TILT & PARALLAX
(function initHero3DTilt() {
  const container = document.getElementById('heroVisualWrap');
  const windowEl = document.getElementById('heroWindow');
  const satLeft = document.getElementById('heroSatLeft');
  const satRight = document.getElementById('heroSatRight');
  const satBottom = document.getElementById('heroSatBottom');

  if (!container || !windowEl || prefersReducedMotion || !finePointer) return;

  container.addEventListener('pointermove', e => {
    const rect = container.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    // Rotate the 3D Browser Window
    windowEl.style.transform = `perspective(1000px) rotateY(${xPct * 14}deg) rotateX(${-yPct * 12}deg) translateZ(10px)`;

    // Parallax on satellite badges
    if (satLeft) {
      satLeft.style.transform = `translate(${xPct * -20}px, ${yPct * -15}px) translateZ(35px)`;
    }
    if (satRight) {
      satRight.style.transform = `translate(${xPct * 25}px, ${yPct * -18}px) translateZ(40px)`;
    }
    if (satBottom) {
      satBottom.style.transform = `translate(${xPct * 15}px, ${yPct * 20}px) translateZ(30px)`;
    }
  });

  container.addEventListener('pointerleave', () => {
    windowEl.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
    if (satLeft) satLeft.style.transform = '';
    if (satRight) satRight.style.transform = '';
    if (satBottom) satBottom.style.transform = '';
  });
})();

// 10. ABOUT WORKSPACE IMAGE TILT & PARALLAX
(function initAboutParallax() {
  const aboutCard = document.getElementById('aboutVisualCard');
  const aboutImg = document.getElementById('aboutImg');
  if (!aboutCard || !aboutImg || prefersReducedMotion || !finePointer) return;

  aboutCard.addEventListener('pointermove', e => {
    const rect = aboutCard.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    aboutCard.style.transform = `perspective(800px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-4px)`;
    aboutImg.style.transform = `scale(1.08) translate(${px * -10}px, ${py * -10}px)`;
  });

  aboutCard.addEventListener('pointerleave', () => {
    aboutCard.style.transform = '';
    aboutImg.style.transform = '';
  });
})();

// 11. INTERSECTION OBSERVERS (REVEAL & COUNTERS)
(function initObservers() {
  const isMobile = window.innerWidth <= 768;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      obs.unobserve(entry.target);

      // Number counter animation for statistics
      const targetNum = entry.target.dataset.n;
      if (targetNum) {
        let current = 0;
        const targetVal = +targetNum;
        const step = Math.max(1, targetVal / 35);
        const timer = setInterval(() => {
          current += step;
          if (current >= targetVal) {
            current = targetVal;
            clearInterval(timer);
          }
          entry.target.textContent = Math.round(current) + (entry.target.dataset.s || '');
        }, 28);
      }
    });
  }, {
    threshold: isMobile ? 0.05 : 0.12,
    rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -40px 0px'
  });

  $$('.item, main h2, .tl, [data-n]').forEach(el => observer.observe(el));
})();

// 12. MAGNETIC HOVER & TILT MICRO-INTERACTIONS
(function initMicroInteractions() {
  if (!finePointer || prefersReducedMotion) return;

  // Magnetic Button Effect
  $$('.soc a, .send, nav a, .brand-logo').forEach(el => {
    el.addEventListener('pointermove', e => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });

  // Project Card 3D Tilt
  $$('.pj .th').forEach(el => {
    el.addEventListener('pointermove', e => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(700px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg) scale(1.02)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
})();

// 13. CANVAS PARTICLE NETWORK IN HERO
(function initParticleCanvas() {
  const canvas = document.getElementById('cv');
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext('2d');
  let width, height, points = [];
  const mouse = { x: -999, y: -999 };

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    const count = Math.min(65, Math.floor(width / 18));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    }));
  }

  resize();
  window.addEventListener('resize', resize);

  function handleMove(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = clientX - rect.left;
    mouse.y = clientY - rect.top;
  }

  canvas.parentElement.addEventListener('pointermove', e => handleMove(e.clientX, e.clientY));
  canvas.parentElement.addEventListener('touchmove', e => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  canvas.parentElement.addEventListener('pointerleave', () => { mouse.x = -999; mouse.y = -999; });
  canvas.parentElement.addEventListener('touchend', () => { mouse.x = -999; mouse.y = -999; });

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse Proximity repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        p.x += (dx / dist) * 1.2;
        p.y += (dy / dist) * 1.2;
      }

      // Draw point
      ctx.fillStyle = 'rgba(139, 92, 246, 0.65)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < points.length; j++) {
        const p2 = points[j];
        const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (lineDist < 105) {
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.22 - lineDist / 500})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
})();

// 14. THEME SWITCHER (DARK / LIGHT)
(function initThemeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById('th');
  if (!btn) return;

  btn.onclick = () => {
    const isDark = root.dataset.theme === 'dark';
    root.dataset.theme = isDark ? 'light' : 'dark';
    btn.textContent = isDark ? '☾' : '☀';
  };
})();

// 15. MOBILE MENU DRAWER
(function initMobileMenu() {
  const bgBtn = document.getElementById('bg');
  const nav = document.getElementById('navigation');
  if (!bgBtn || !nav) return;

  function toggleMenu(open) {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('lock', open);
    bgBtn.textContent = open ? '✕' : '☰';
    bgBtn.setAttribute('aria-expanded', String(open));
  }

  bgBtn.onclick = () => toggleMenu(!nav.classList.contains('open'));

  $$('#lk a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('open')) {
      toggleMenu(false);
    }
  });
})();

// 16. CONTACT FORM -> WHATSAPP REDIRECT (+201020624860)
(function initContactWhatsApp() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameEl = document.getElementById('cf-name');
    const msgEl = document.getElementById('cf-message');
    const emailEl = document.getElementById('cf-email');
    const subjectEl = document.getElementById('cf-subject');

    const name = (nameEl?.value || '').trim();
    const email = (emailEl?.value || '').trim();
    const subject = (subjectEl?.value || '').trim();
    const message = (msgEl?.value || '').trim();

    if (!name) {
      nameEl?.focus();
      nameEl?.classList.add('input-error');
      setTimeout(() => nameEl?.classList.remove('input-error'), 1800);
      return;
    }

    if (!message) {
      msgEl?.focus();
      msgEl?.classList.add('input-error');
      setTimeout(() => msgEl?.classList.remove('input-error'), 1800);
      return;
    }

    const formattedMessage = [
      `Hello Ahmed,`,
      `👤 Name: ${name}`,
      `📧 Contact / Email: ${email || 'Not specified'}`,
      `📌 Subject: ${subject || 'Full Stack Project Inquiry'}`,
      `💬 Message:`,
      message
    ].join('\n\n');

    const phone = '201020624860';
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(formattedMessage)}`;

    const btn = document.getElementById('cf-btn') || form.querySelector('button[type="submit"]');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '✓ Redirecting to WhatsApp...';
      btn.style.opacity = '0.85';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
        form.reset();
      }, 3000);
    }

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
})();

// 17. HERO IDE LIVE CODE TYPEWRITER ANIMATION
(function initHeroCodeTypewriter() {
  const codeEl = document.getElementById('heroCode');
  if (!codeEl) return;

  const CODE_TOKENS = [
    { t: '// Full Stack Web Development\n', c: 'c-dim' },
    { t: 'import ', c: 'c-k' },
    { t: '{ useState, useEffect } ', c: '' },
    { t: 'from ', c: 'c-k' },
    { t: "'react'", c: 'c-s' },
    { t: ';\n', c: '' },
    { t: 'import ', c: 'c-k' },
    { t: '{ createServerAction } ', c: '' },
    { t: 'from ', c: 'c-k' },
    { t: "'next/server'", c: 'c-s' },
    { t: ';\n\n', c: '' },
    { t: 'export default function ', c: 'c-k' },
    { t: 'FullStackApp', c: 'c-f' },
    { t: '() {\n  ', c: '' },
    { t: 'const ', c: 'c-k' },
    { t: '[metrics, setMetrics] = ', c: '' },
    { t: 'useState', c: 'c-f' },
    { t: '({\n    performance: ', c: '' },
    { t: '100', c: 'c-n' },
    { t: ',\n    uptime: ', c: '' },
    { t: "'99.99%'", c: 'c-s' },
    { t: ',\n    latency: ', c: '' },
    { t: "'24ms'", c: 'c-s' },
    { t: '\n  });\n\n  ', c: '' },
    { t: 'return ', c: 'c-k' },
    { t: '(\n    <', c: '' },
    { t: 'DigitalExperience', c: 'c-t' },
    { t: '\n      developer=', c: '' },
    { t: '"Ahmed Mohamed"', c: 'c-s' },
    { t: '\n      stack={[', c: '' },
    { t: '"React"', c: 'c-s' },
    { t: ', ', c: '' },
    { t: '"Node"', c: 'c-s' },
    { t: ', ', c: '' },
    { t: '"TS"', c: 'c-s' },
    { t: ']}\n      responsive={', c: '' },
    { t: 'true', c: 'c-k' },
    { t: '}\n    />\n  );\n}', c: '' }
  ];

  codeEl.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'code-cursor';
  codeEl.appendChild(cursor);

  let tokenIdx = 0;
  let charIdx = 0;
  let currentSpan = null;

  function typeTick() {
    if (tokenIdx >= CODE_TOKENS.length) {
      return;
    }

    const token = CODE_TOKENS[tokenIdx];
    if (charIdx === 0) {
      if (token.c) {
        currentSpan = document.createElement('span');
        currentSpan.className = token.c;
        codeEl.insertBefore(currentSpan, cursor);
      } else {
        currentSpan = null;
      }
    }

    const ch = token.t[charIdx];
    if (currentSpan) {
      currentSpan.textContent += ch;
    } else {
      const prev = cursor.previousSibling;
      if (prev && prev.nodeType === Node.TEXT_NODE) {
        prev.nodeValue += ch;
      } else {
        const textNode = document.createTextNode(ch);
        codeEl.insertBefore(textNode, cursor);
      }
    }

    charIdx++;
    if (charIdx >= token.t.length) {
      tokenIdx++;
      charIdx = 0;
      currentSpan = null;
    }

    let delay = 14;
    if (ch === '\n') delay = 70;
    else if (ch === ';' || ch === ',') delay = 35;

    setTimeout(typeTick, delay);
  }

  setTimeout(typeTick, 700);
})();

// 18. TECH CARDS SCROLL WOBBLE & VIBRATION ANIMATION
(function initTechCardsWobble() {
  const section = document.getElementById('sk');
  const grid = document.getElementById('techGrid');
  if (!section || !grid) return;

  let isWobbling = false;
  let lastScrollY = window.scrollY;

  function triggerWobble() {
    if (isWobbling) return;
    isWobbling = true;

    const cards = grid.querySelectorAll('.tech-card');
    cards.forEach(card => {
      card.classList.remove('wobble');
      void card.offsetWidth; // Force reflow for re-triggering animation
      card.classList.add('wobble');
    });

    setTimeout(() => {
      isWobbling = false;
    }, 1300);
  }

  // 1. Trigger when scrolled into view on mobile or desktop
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerWobble();
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  observer.observe(section);

  // 2. Trigger on active scroll past the section
  let scrollDebounce = null;
  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
    if (!inView) return;

    const currentScrollY = window.scrollY;
    const diff = Math.abs(currentScrollY - lastScrollY);
    lastScrollY = currentScrollY;

    if (diff > 45 && !isWobbling) {
      if (scrollDebounce) clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(triggerWobble, 60);
    }
  }, { passive: true });

  // 3. Trigger on touch / click on any card
  grid.addEventListener('click', e => {
    const card = e.target.closest('.tech-card');
    if (!card) return;
    card.classList.remove('wobble');
    void card.offsetWidth;
    card.classList.add('wobble');
  });
})();