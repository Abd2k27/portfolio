/* ===== MOBILE MENU ===== */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/* ===== THEME TOGGLE ===== */
const toggleSwitch = document.querySelector('#switch');
const setTheme = (t) => {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
};
toggleSwitch.addEventListener("change", (e) => setTheme(e.target.checked ? "dark" : "light"));
const saved = localStorage.getItem("theme");
if (saved) { document.documentElement.setAttribute("data-theme", saved); if (saved === "dark") toggleSwitch.checked = true; }

/* ===== TYPING EFFECT ===== */
const phrases = ["Data Analyst", "Data Scientist", "IT Project Manager", "Health Data Specialist", "Machine Learning Engineer"];
const typedEl = document.getElementById("typed-text");
let pi = 0, ci = 0, del = false;
function typeLoop() {
  const cur = phrases[pi];
  typedEl.textContent = cur.substring(0, ci);
  if (!del) { ci++; if (ci > cur.length) { del = true; setTimeout(typeLoop, 1800); return; } }
  else { ci--; if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; } }
  setTimeout(typeLoop, del ? 40 : 80);
}
typeLoop();

/* ===== SCROLL REVEAL CARDS ===== */
const cards = document.querySelectorAll(".card");
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add("revealed"), i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
cards.forEach(c => revealObs.observe(c));

/* ===== COUNTER ANIMATION ===== */
const counters = document.querySelectorAll(".stat-num");
const cObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target, target = +el.dataset.target;
      let count = 0;
      const step = Math.max(1, Math.floor(target / 25));
      const timer = setInterval(() => { count += step; if (count >= target) { count = target; clearInterval(timer); } el.textContent = count; }, 50);
      cObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => cObs.observe(c));

/* ===== ACTIVE NAV ===== */
const sections = document.querySelectorAll("[id]");
const navLinks = document.querySelectorAll(".nav-link:not(.btn-resume)");
window.addEventListener("scroll", () => {
  let cur = "";
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
  navLinks.forEach(l => { l.classList.toggle("active", l.getAttribute("href") === `#${cur}`); });
});

/* ===== FOOTER DATE ===== */
const d = document.getElementById("datee");
if (d) d.textContent = new Date().getFullYear();

/* ===== MODAL SYSTEM ===== */
const modalData = {
  "edu-m2": {
    tag: "🎓 Education",
    title: "Master Ingénierie de la Santé — Data Science en Santé",
    date: "August 2024 — July 2026",
    body: `<p>Master's degree at Université de Lille (ILIS), specializing in Data Science applied to the health sector.</p>
    <p>Key areas of study:</p>
    <ul>
      <li>Machine Learning & Deep Learning for medical data</li>
      <li>Medical image analysis and Computer Vision</li>
      <li>Natural Language Processing for clinical texts</li>
      <li>Biostatistics and survival analysis</li>
      <li>Health data management and GDPR compliance</li>
    </ul>`,
    skills: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Biostatistics"]
  },
  "edu-epitech": {
    tag: "🎓 Education",
    title: "Master in Digital Transformation",
    date: "September 2022 — July 2024",
    body: `<p>Master's degree at Epitech, focused on IT management, innovation, and digital transformation.</p>
    <ul>
      <li>IT project management methodologies (Agile, Scrum)</li>
      <li>Cloud architecture and DevOps (AWS, Docker, CI/CD)</li>
      <li>Advanced software engineering</li>
      <li>Entrepreneurship and innovation strategy</li>
    </ul>`,
    skills: ["Agile", "Scrum", "AWS", "Docker", "DevOps", "CI/CD", "Project Management"]
  },
  "edu-bsc": {
    tag: "🎓 Education",
    title: "Bachelor in IT Expertise — Software Engineering",
    date: "2019 — 2022",
    body: `<p>Bachelor's degree at Epitech (European Institute of Technology), a project-based learning institution renowned for hands-on software engineering training.</p>
    <ul>
      <li>Full-stack web development (HTML, CSS, JS, React)</li>
      <li>Systems programming in C and C++</li>
      <li>Algorithms and data structures</li>
      <li>Database design and administration</li>
      <li>Collaborative projects with real-world clients</li>
    </ul>`,
    skills: ["C", "C++", "JavaScript", "Python", "React", "SQL", "Git"]
  },
  "exp-nickel": {
    tag: "💼 Current Position",
    title: "Data Analyst — Customer Experience",
    date: "September 2025 — Present · Nantes, France",
    body: `<p>Data Analyst in Customer Experience at <strong>Nickel</strong>, a leading neobank in France.</p>
    <ul>
      <li>Leveraging data analysis to shape impactful customer experience solutions</li>
      <li>Building dashboards and reporting tools for CX performance</li>
      <li>Data-driven decision-making for product and service improvements</li>
    </ul>`,
    skills: ["Python", "SQL", "Data Analysis", "Dashboards", "Customer Experience", "Fintech"]
  },
  "exp-singa": {
    tag: "💼 Experience",
    title: "Monitoring & Evaluation Project Assistant",
    date: "April 2025 — August 2025 · Paris, France",
    body: `<p>M&E Project Assistant at <strong>SINGA</strong>, an international organization supporting newcomers' integration through entrepreneurship.</p>
    <ul>
      <li>Data collection within the monitoring and evaluation (M&E) framework</li>
      <li>Data analysis to measure the impact of SINGA Global's activities</li>
      <li>Support for data-driven reporting and monitoring</li>
    </ul>`,
    skills: ["Data Collection", "Impact Analysis", "Reporting", "M&E", "Excel", "Data Visualization"]
  },
  "exp-hub": {
    tag: "💼 Experience",
    title: "Hub Manager — Epitech Bénin",
    date: "September 2022 — July 2024 · Cotonou, Bénin",
    body: `<p>Managed the Innovation Hub at <strong>Epitech Bénin</strong> for nearly 2 years.</p>
    <p><strong>Hub Management:</strong></p>
    <ul>
      <li>Development and management of 10+ HUB projects and activities</li>
      <li>Nearly 200 students monitored and coached</li>
      <li>Over 5 Open Innovation projects completed</li>
      <li>Monitoring and reporting on projects and activities</li>
    </ul>
    <p><strong>Project: Fiscathon</strong> (Tax Hackathon with General Directorate of Taxes of Benin):</p>
    <ul>
      <li>Developed recruitment tests for facilitators</li>
      <li>Planned the Hackathon phase and communication strategy</li>
      <li>Coordinated activities and served as IT coach for teams</li>
    </ul>
    <p><strong>Project: Robotic Arm</strong> with students:</p>
    <ul>
      <li>Defined requirements, schedule, and specifications</li>
      <li>Designed technical content and managed contingencies</li>
    </ul>`,
    skills: ["Project Management", "Innovation", "Coaching", "Leadership", "Hackathon", "Robotics"]
  },
  "exp-aff": {
    tag: "💼 Experience",
    title: "IT Project Manager — Africa Fintech Forum",
    date: "May 2022 — September 2022 · Abidjan, Côte d'Ivoire",
    body: `<p>IT Project Manager at <strong>Africa Fintech Forum</strong>, a pan-African fintech event and platform.</p>
    <ul>
      <li>Set up an IT team to develop the company's platforms</li>
      <li>Redefined platform architecture in line with business needs</li>
      <li>Defined use cases, technical specifications & improved UX</li>
      <li>Audited technological risks and opportunities</li>
      <li>Analyzed cost of solutions and identified optimization sources</li>
      <li>Monitored technical KPIs of developed products</li>
    </ul>`,
    skills: ["Platform Architecture", "UX", "KPI Monitoring", "Fintech", "Team Coordination", "Audit"]
  },
  "exp-acumen": {
    tag: "💼 Experience",
    title: "Assistant Project Manager — Acumen Network",
    date: "July 2020 — November 2020 · Cotonou, Bénin",
    body: `<p>Assistant PM at <strong>Acumen Network</strong>, supporting development projects in West Africa.</p>
    <ul>
      <li>Development sprint planning and task tracking</li>
      <li>Performed tests on developed modules</li>
      <li>Data processing with Microsoft Excel</li>
    </ul>`,
    skills: ["Sprint Planning", "Testing", "Excel", "Task Tracking", "Data Processing"]
  },
  "proj-finder": {
    tag: "🏆 Master's Thesis",
    title: "Finder Bot — Geolocation AI Assistant",
    date: "Python 80.4% · JavaScript 13.1% · CSS 3.6% · HTML 2.3%",
    body: `<p>Hybrid <strong>LLM-RAG</strong> geolocation assistant built as Master's thesis project. Combines graph-based spatial reasoning with SAR-inspired probability modeling for intelligent geolocation.</p>
    <p><strong>Architecture:</strong></p>
    <ul>
      <li>API layer with modular services architecture</li>
      <li>Configuration-driven with environment variables</li>
      <li>Comprehensive documentation (memoire + rapport)</li>
      <li>Agentic testing framework</li>
      <li>Static frontend with JavaScript interaction</li>
    </ul>
    <p><strong>Key Features:</strong></p>
    <ul>
      <li>Graph-based spatial reasoning for location analysis</li>
      <li>SAR-inspired probability modeling</li>
      <li>LLM-powered natural language geolocation queries</li>
      <li>RAG pipeline for contextual document retrieval</li>
    </ul>`,
    skills: ["Python", "JavaScript", "LLM", "RAG", "Graph DB", "SAR", "Makefile", "MIT License"]
  },
  "proj-fetal": {
    tag: "Medical Computer Vision",
    title: "Fetal Ultrasound Classification",
    date: "Python 75.3% · Jupyter Notebook 21.0% · Makefile 3.7%",
    body: `<p>Automated identification of fetal anatomical planes from ultrasound images using <strong>EfficientNet-B0</strong> (via timm). Tested on <strong>5,271 images</strong> from the Fetal Planes DB.</p>
    <p><strong>Architecture & Rigor:</strong></p>
    <ul>
      <li>Modular <code>.py</code> code: dataset, model, train, evaluation — not just a notebook</li>
      <li>Anatomically correct augmentations (no horizontal flip)</li>
      <li>WeightedRandomSampler for class imbalance</li>
      <li>Recall-focused metrics for medical accuracy</li>
    </ul>
    <p><strong>Explainability (Grad-CAM):</strong></p>
    <ul>
      <li>Visual heatmaps showing where the model "looks"</li>
      <li>Worst-prediction analysis for clinical validation</li>
      <li>99.46% recall on fetal brain, 99.84% on maternal cervix</li>
    </ul>
    <p><strong>Medical rigor:</strong> Documented data leakage risks, patient-level splitting considerations for FDA/CE Mark compliance.</p>`,
    skills: ["PyTorch", "EfficientNet-B0", "timm", "Grad-CAM", "Scikit-learn", "Colab", "Makefile"]
  },
  "proj-lexi": {
    tag: "NLP / RAG",
    title: "LexiBot — Legal RAG Chatbot",
    date: "Python 100%",
    body: `<p>RAG chatbot that answers questions about legal PDF documents (200+ pages of Benin's Digital Code). Ask in natural language, get structured answers with sources.</p>
    <p><strong>RAG Architecture:</strong></p>
    <ul>
      <li><strong>Indexation:</strong> PDF → text extraction → 757 chunks → ChromaDB + BM25</li>
      <li><strong>Hybrid search:</strong> Semantic (embeddings) × 60% + BM25 × 40%</li>
      <li><strong>Multi-query:</strong> LLM decomposes question into 3 sub-queries for max coverage</li>
      <li><strong>Source diversification:</strong> Prioritizes results from different chapters</li>
      <li><strong>Generation:</strong> 20 extracts + question → LLM → themed structured answer</li>
    </ul>
    <p><strong>Stack:</strong></p>
    <ul>
      <li>Streamlit web UI</li>
      <li>ChromaDB vector store + Sentence Transformers embeddings</li>
      <li>BM25 keyword search (Okapi)</li>
      <li>Ollama LLM server (local/cloud)</li>
      <li>PyMuPDF for PDF extraction</li>
    </ul>`,
    skills: ["Streamlit", "ChromaDB", "BM25", "Sentence Transformers", "Ollama", "PyMuPDF", "Python"]
  },
  "proj-immo": {
    tag: "Data Visualization",
    title: "ImmoViz — French Real Estate Dashboard",
    date: "Streamlit App · Live Demo Available",
    body: `<p>Interactive geospatial dashboard for exploring the French real estate market.</p>
    <ul>
      <li>Map-based visualization with Leaflet</li>
      <li>Data processing and filtering with Pandas</li>
      <li>Streamlit-powered interactive interface</li>
      <li>Real-time property exploration by region</li>
    </ul>`,
    skills: ["Streamlit", "Leaflet", "Pandas", "Python", "Geospatial", "Data Viz"]
  },
  "proj-asthme": {
    tag: "Health Data Dashboard",
    title: "Asthme Dashboard — Public Health Viz",
    date: "Python 94.2% · CSS 5.2% · Docker 0.6%",
    body: `<p>Interactive dashboard built with Dash to visualize asthma emergency visits, pollen concentrations, and air pollutants in France.</p>
    <p><strong>Architecture & Pipeline:</strong></p>
    <ul>
      <li><strong>Extraction:</strong> Web scraping pipeline (Selenium, BeautifulSoup) pulling from Santé Publique France, RNSA, and GeodAir</li>
      <li><strong>Processing:</strong> Data cleaned, structured into CSVs via local Pandas pipeline</li>
      <li><strong>Visualization:</strong> Dash (Plotly) maps and charts with dynamic temporal/geospatial filters</li>
      <li><strong>Deployment:</strong> Containerized with Docker, served via Gunicorn, and deployed to AWS via GitLab CI/CD</li>
    </ul>`,
    skills: ["Dash", "Plotly", "Selenium", "Docker", "AWS", "GitLab CI/CD", "Pandas"]
  }
};

const overlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalBody = document.getElementById("modal-body");
const modalSkills = document.getElementById("modal-skills");

function openModal(id) {
  const data = modalData[id];
  if (!data) return;
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalDate.textContent = data.date;
  modalBody.innerHTML = data.body;
  modalSkills.innerHTML = data.skills.map(s => `<span>${s}</span>`).join("");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-modal]").forEach(el => {
  el.addEventListener("click", () => openModal(el.dataset.modal));
});
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

