/* ===== I18N TRANSLATIONS ===== */
const i18n = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.exp":"Experience",
    "nav.stack":"Stack","nav.edu":"Education","nav.contact":"Contact","nav.resume":"Resume ↓",
    "hero.label":"// M2 in Health Data Science — In Progress",
    "hero.desc":"From building AI models for fetal diagnostics to driving customer analytics at Nickel — I bridge health technology and financial data science.",
    "hero.cta1":"View Projects →","hero.cta2":"Get In Touch",
    "about.label":"// About","about.h2a":"Where Health","about.h2b":"Meets Finance",
    "about.text":"Health data taught me that bad predictions cost lives. Fintech taught me they cost trust. Both demand the same rigour — clean data, honest models, real impact. I carry that dual perspective into every project, currently deepening it through my M2 in Health Data Science at Université de Lille.",
    "about.stat1":"Projects","about.stat2":"Masters","about.stat3":"Experiences",
    "proj.label":"// Projects","proj.h2":"Featured Work",
    "proj.finder.title":"Finder Bot — Geolocation AI","proj.finder.tag":"🏆 Master's Thesis",
    "proj.finder.desc":"Hybrid LLM-RAG geolocation assistant. Graph-based spatial reasoning + SAR probability modeling. MIT Licensed.",
    "proj.fetal.title":"Fetal Ultrasound Classification","proj.fetal.tag":"🏥 Medical AI",
    "proj.fetal.desc":"EfficientNet-B0 for automated fetal plane identification with Grad-CAM. 99.46% recall on fetal brain.",
    "proj.asthme.title":"Asthma Dashboard","proj.asthme.tag":"📊 Public Health",
    "proj.asthme.desc":"Interactive dashboard on asthma ER visits, pollen & air pollution in France. Deployed on AWS via Docker.",
    "proj.lexi.title":"LexiBot — Legal Chatbot","proj.lexi.tag":"NLP / RAG",
    "proj.lexi.desc":"Hybrid semantic + BM25 RAG over 200+ pages of legal PDF. Multi-query decomposition.",
    "proj.immo.title":"ImmoViz — Real Estate","proj.immo.tag":"Data Viz",
    "proj.immo.desc":"Interactive geospatial dashboard for French real estate exploration.",
    "proj.melio.title":"Mélio — AI Support","proj.melio.tag":"AI / EdTech",
    "proj.melio.desc":"AI features for student emotional support and school climate optimization.",
    "exp.label":"// 💼 Experience",
    "exp.melio.desc":"AI-driven student support & school climate","exp.melio.metric":"AI features · school well-being platform",
    "exp.nickel.desc":"Customer Experience analytics","exp.nickel.metric":"3M+ customers · CX dashboards",
    "exp.singa.desc":"Monitoring & Evaluation","exp.singa.metric":"Impact measurement · refugee entrepreneurship",
    "exp.hub.desc":"Innovation hub management","exp.hub.metric":"200+ students · 3 innovation programs",
    "exp.aff.desc":"Platform architecture & team coordination","exp.aff.metric":"Platform for 50+ stakeholders",
    "exp.agrosfer.desc":"AgriTech sprint planning & data processing","exp.agrosfer.metric":"AgriTech · MVP delivery",
    "stack.label":"// Tech Stack","stack.h2":"Tools I Use",
    "edu.label":"// 🎓 Education","edu.inprogress":"In Progress",
    "contact.label":"// Contact","contact.h2a":"Let's Work","contact.h2b":"Together",
    "contact.desc":"Open to data science roles, research collaborations, and consulting missions in health tech or fintech.",
    "contact.name":"Your Name","contact.email":"Your Email","contact.message":"Your Message","contact.btn":"Send Message →"
  },
  fr: {
    "nav.home":"Accueil","nav.about":"À propos","nav.projects":"Projets","nav.exp":"Expériences",
    "nav.stack":"Outils","nav.edu":"Formation","nav.contact":"Contact","nav.resume":"CV ↓",
    "hero.label":"// M2 Data Science en Santé — En cours",
    "hero.desc":"De la construction de modèles IA pour le diagnostic fœtal à l'analyse CX chez Nickel — j'œuvre au carrefour de la santé numérique et de la data science financière.",
    "hero.cta1":"Voir les projets →","hero.cta2":"Me contacter",
    "about.label":"// À propos","about.h2a":"Là où la santé","about.h2b":"rencontre la finance",
    "about.text":"La data santé m'a appris qu'une mauvaise prédiction coûte des vies. La fintech m'a appris qu'elle coûte la confiance. Les deux exigent la même rigueur — données propres, modèles honnêtes, impact réel. Je porte cette double perspective dans chaque projet, en l'approfondissant dans mon M2 Data Science en Santé à Lille.",
    "about.stat1":"Projets","about.stat2":"Masters","about.stat3":"Expériences",
    "proj.label":"// Projets","proj.h2":"Travaux Sélectionnés",
    "proj.finder.title":"Finder Bot — IA de Géolocalisation","proj.finder.tag":"🏆 Mémoire de Master",
    "proj.finder.desc":"Assistant de géolocalisation hybride LLM-RAG. Raisonnement spatial par graphe + modélisation probabiliste SAR.",
    "proj.fetal.title":"Classification d'Échographies Fœtales","proj.fetal.tag":"🏥 IA Médicale",
    "proj.fetal.desc":"EfficientNet-B0 pour l'identification automatique des plans fœtaux par échographie. Rappel de 99,46% sur le cerveau fœtal.",
    "proj.asthme.title":"Dashboard Asthme","proj.asthme.tag":"📊 Santé Publique",
    "proj.asthme.desc":"Dashboard interactif sur les passages aux urgences pour asthme, pollens et pollution en France. Déployé sur AWS via Docker.",
    "proj.lexi.title":"LexiBot — Chatbot Juridique","proj.lexi.tag":"TALN / RAG",
    "proj.lexi.desc":"Chatbot RAG hybride (sémantique + BM25) sur 200+ pages de documents juridiques. Décomposition multi-requêtes.",
    "proj.immo.title":"ImmoViz — Immobilier","proj.immo.tag":"Data Viz",
    "proj.immo.desc":"Dashboard géospatial interactif pour l'exploration du marché immobilier français.",
    "proj.melio.title":"Mélio — Soutien par l'IA","proj.melio.tag":"IA / EdTech",
    "proj.melio.desc":"Fonctionnalités IA pour le soutien émotionnel des élèves et l'amélioration du climat scolaire.",
    "exp.label":"// 💼 Expériences",
    "exp.melio.desc":"Soutien étudiant & climat scolaire pilotés par l'IA","exp.melio.metric":"Fonctionnalités IA · plateforme bien-être scolaire",
    "exp.nickel.desc":"Analyse de l'Expérience Client","exp.nickel.metric":"3M+ clients · dashboards CX",
    "exp.singa.desc":"Suivi & Évaluation","exp.singa.metric":"Mesure d'impact · entrepreneuriat réfugiés",
    "exp.hub.desc":"Gestion du hub d'innovation","exp.hub.metric":"200+ étudiants · 3 programmes d'innovation",
    "exp.aff.desc":"Architecture plateforme & coordination équipe","exp.aff.metric":"Plateforme pour 50+ parties prenantes",
    "exp.agrosfer.desc":"Planification sprint AgriTech & traitement de données","exp.agrosfer.metric":"AgriTech · livraison MVP",
    "stack.label":"// Outils","stack.h2":"Ma Stack Technique",
    "edu.label":"// 🎓 Formation","edu.inprogress":"En cours",
    "contact.label":"// Contact","contact.h2a":"Travaillons","contact.h2b":"Ensemble",
    "contact.desc":"Ouvert aux postes en data science, collaborations de recherche et missions de conseil en santé numérique ou fintech.",
    "contact.name":"Votre prénom","contact.email":"Votre email","contact.message":"Votre message","contact.btn":"Envoyer →"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang][key] !== undefined) el.placeholder = i18n[lang][key];
  });
  const btn = document.getElementById("lang-btn");
  if (btn) btn.textContent = lang === "en" ? "FR" : "EN";
  document.documentElement.lang = lang;
}

function toggleLang() {
  setLang(currentLang === "en" ? "fr" : "en");
}

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
const phrases = ["Data Scientist", "Health Data Specialist"];
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
    tag: { en: "🎓 Education", fr: "🎓 Formation" },
    title: { en: "Master in Health Data Science", fr: "Master Ingénierie de la Santé — Data Science en Santé" },
    date: { en: "August 2024 — July 2026", fr: "Août 2024 — Juillet 2026" },
    body: {
      en: `<p>Master's degree at Université de Lille (ILIS), specialising in Data Science applied to the health sector.</p>
      <ul><li>Machine Learning & Deep Learning for medical data</li><li>Medical image analysis and Computer Vision</li>
      <li>Natural Language Processing for clinical texts</li><li>Biostatistics and survival analysis</li>
      <li>Health data management and GDPR compliance</li></ul>`,
      fr: `<p>Master à l'Université de Lille (ILIS), spécialité Data Science appliquée au secteur de la santé.</p>
      <ul><li>Machine Learning & Deep Learning pour les données médicales</li><li>Analyse d'images médicales et Vision par Ordinateur</li>
      <li>Traitement Automatique du Langage pour les textes cliniques</li><li>Biostatistiques et analyse de survie</li>
      <li>Gestion des données de santé et conformité RGPD</li></ul>`
    },
    skills: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Biostatistics"]
  },
  "edu-epitech": {
    tag: { en: "🎓 Education", fr: "🎓 Formation" },
    title: "Master in Digital Transformation",
    date: { en: "September 2022 — July 2024", fr: "Septembre 2022 — Juillet 2024" },
    body: {
      en: `<p>Master's degree at Epitech, focused on IT management, innovation, and digital transformation.</p>
      <ul><li>IT project management (Agile, Scrum)</li><li>Cloud architecture and DevOps (AWS, Docker, CI/CD)</li>
      <li>Advanced software engineering</li><li>Entrepreneurship and innovation strategy</li></ul>`,
      fr: `<p>Master à Epitech, axé sur la gestion IT, l'innovation et la transformation numérique.</p>
      <ul><li>Gestion de projets IT (Agile, Scrum)</li><li>Architecture Cloud et DevOps (AWS, Docker, CI/CD)</li>
      <li>Génie logiciel avancé</li><li>Entrepreneuriat et stratégie d'innovation</li></ul>`
    },
    skills: ["Agile", "Scrum", "AWS", "Docker", "DevOps", "CI/CD", "Project Management"]
  },
  "edu-bsc": {
    tag: { en: "🎓 Education", fr: "🎓 Formation" },
    title: { en: "Bachelor in IT Expertise — Software Engineering", fr: "Bachelor en Expertise Informatique — Génie Logiciel" },
    date: "2019 — 2022",
    body: {
      en: `<p>Bachelor's degree at Epitech (European Institute of Technology), a project-based learning institution renowned for hands-on software engineering.</p>
      <ul><li>Full-stack web development (HTML, CSS, JS, React)</li><li>Systems programming in C and C++</li>
      <li>Algorithms and data structures</li><li>Database design and administration</li>
      <li>Collaborative projects with real-world clients</li></ul>`,
      fr: `<p>Bachelor à Epitech, école réputée pour sa pédagogie par projets et son ingénierie logicielle pratique.</p>
      <ul><li>Développement web full-stack (HTML, CSS, JS, React)</li><li>Programmation système en C et C++</li>
      <li>Algorithmique et structures de données</li><li>Conception et administration de bases de données</li>
      <li>Projets collaboratifs avec des clients réels</li></ul>`
    },
    skills: ["C", "C++", "JavaScript", "Python", "React", "SQL", "Git"]
  },
  "exp-melio": {
    tag: { en: "💼 Current Intervention", fr: "💼 Intervention actuelle" },
    title: "AI Developer — Mélio",
    date: { en: "February 2026 — Present", fr: "Février 2026 — Présent" },
    body: {
      en: `<p>Contributing to AI features at <strong>Mélio</strong>, a platform dedicated to student emotional support and improved school climate.</p>
      <ul><li>Developing and optimising AI models for emotional analysis and support</li>
      <li>Building features to foster a positive and safe educational environment</li>
      <li>Integrating AI-driven insights for educational teams and youth</li></ul>`,
      fr: `<p>Contribution aux fonctionnalités IA de <strong>Mélio</strong>, plateforme dédiée au bien-être émotionnel des élèves et à l'amélioration du climat scolaire.</p>
      <ul><li>Développement et optimisation de modèles IA pour l'analyse émotionnelle</li>
      <li>Construction de fonctionnalités favorisant un environnement scolaire positif</li>
      <li>Intégration d'insights IA pour les équipes éducatives et les jeunes</li></ul>`
    },
    skills: ["AI", "NLP", "EdTech", "Python", "SaaS", "School Climate"]
  },
  "exp-nickel": {
    tag: { en: "💼 Current Position", fr: "💼 Poste actuel" },
    title: { en: "Data Analyst — Customer Experience", fr: "Data Analyst — Expérience Client" },
    date: { en: "September 2025 — Present · Nantes, France", fr: "Septembre 2025 — Présent · Nantes, France" },
    body: {
      en: `<p>Data Analyst in Customer Experience at <strong>Nickel</strong>, a leading neobank serving 3M+ customers across Europe.</p>
      <ul><li>Leveraging data analysis to shape impactful customer experience solutions</li>
      <li>Building dashboards and reporting tools for CX performance tracking</li>
      <li>Data-driven decision-making for product and service improvements</li></ul>`,
      fr: `<p>Data Analyst en Expérience Client chez <strong>Nickel</strong>, néobanque leader en France avec plus de 3 millions de clients.</p>
      <ul><li>Analyse de données pour améliorer l'expérience client</li>
      <li>Construction de dashboards et outils de reporting CX</li>
      <li>Aide à la décision data-driven pour les améliorations produit</li></ul>`
    },
    skills: ["Python", "SQL", "Data Analysis", "Dashboards", "Customer Experience", "Fintech"]
  },
  "exp-singa": {
    tag: { en: "💼 Experience", fr: "💼 Expérience" },
    title: { en: "Monitoring & Evaluation Assistant — SINGA", fr: "Assistant Suivi & Évaluation — SINGA" },
    date: { en: "April 2025 — August 2025 · Paris, France", fr: "Avril 2025 — Août 2025 · Paris, France" },
    body: {
      en: `<p>M&E Project Assistant at <strong>SINGA</strong>, an international organisation supporting newcomers' integration through entrepreneurship.</p>
      <ul><li>Data collection within the monitoring and evaluation framework</li>
      <li>Data analysis to measure the impact of SINGA Global's activities</li>
      <li>Support for data-driven reporting and monitoring (200+ beneficiaries)</li></ul>`,
      fr: `<p>Assistant Suivi & Évaluation à <strong>SINGA</strong>, organisation internationale soutenant l'intégration des réfugiés par l'entrepreneuriat.</p>
      <ul><li>Collecte de données dans le cadre du suivi-évaluation</li>
      <li>Analyse de données pour mesurer l'impact des activités de SINGA Global</li>
      <li>Aide au reporting data-driven (200+ bénéficiaires)</li></ul>`
    },
    skills: ["Data Collection", "Impact Analysis", "Reporting", "M&E", "Excel", "Data Visualization"]
  },
  "exp-hub": {
    tag: { en: "💼 Experience", fr: "💼 Expérience" },
    title: { en: "Hub Manager — Epitech Benin", fr: "Hub Manager — Epitech Bénin" },
    date: { en: "September 2022 — July 2024 · Cotonou, Benin", fr: "Septembre 2022 — Juillet 2024 · Cotonou, Bénin" },
    body: {
      en: `<p>Managed the Innovation Hub at <strong>Epitech Benin</strong> for nearly 2 years, overseeing 200+ students and multiple innovation projects.</p>
      <ul><li>Development and management of 10+ hub projects and activities</li>
      <li>Nearly 200 students monitored and coached</li><li>Over 5 Open Innovation projects completed</li>
      <li><strong>Fiscathon</strong>: Tax Hackathon with the General Directorate of Taxes of Benin — facilitated recruitment, planning, and IT coaching</li>
      <li><strong>Robotic Arm</strong>: Defined requirements, schedule, and specifications with students</li></ul>`,
      fr: `<p>Gestion du Hub d'Innovation à <strong>Epitech Bénin</strong> pendant près de 2 ans, encadrant 200+ étudiants et plusieurs projets innovants.</p>
      <ul><li>Développement et gestion de 10+ projets et activités du hub</li>
      <li>Près de 200 étudiants suivis et coachés</li><li>Plus de 5 projets d'Open Innovation réalisés</li>
      <li><strong>Fiscathon</strong> : Hackathon fiscal avec la Direction Générale des Impôts du Bénin</li>
      <li><strong>Bras Robotique</strong> : Définition des besoins, planning et cahier des charges avec les étudiants</li></ul>`
    },
    skills: ["Project Management", "Innovation", "Coaching", "Leadership", "Hackathon", "Robotics"]
  },
  "exp-aff": {
    tag: { en: "💼 Experience", fr: "💼 Expérience" },
    title: { en: "IT Project Manager — Africa Fintech Forum", fr: "Chef de Projet IT — Africa Fintech Forum" },
    date: { en: "May 2022 — September 2022 · Abidjan, Côte d'Ivoire", fr: "Mai 2022 — Septembre 2022 · Abidjan, Côte d'Ivoire" },
    body: {
      en: `<p>IT Project Manager at <strong>Africa Fintech Forum</strong>, a pan-African fintech event and platform.</p>
      <ul><li>Built an IT team to develop the company's digital platforms</li>
      <li>Redefined platform architecture aligned with business needs</li>
      <li>Defined use cases, technical specifications & improved UX</li>
      <li>Audited technological risks and opportunities</li>
      <li>Monitored technical KPIs across developed products (50+ stakeholders)</li></ul>`,
      fr: `<p>Chef de Projet IT à <strong>Africa Fintech Forum</strong>, plateforme et événement fintech panafricain.</p>
      <ul><li>Constitution d'une équipe IT pour le développement des plateformes</li>
      <li>Redéfinition de l'architecture plateforme selon les besoins métier</li>
      <li>Définition des cas d'usage, spécifications techniques & amélioration UX</li>
      <li>Audit des risques et opportunités technologiques</li>
      <li>Suivi des KPIs techniques (50+ parties prenantes)</li></ul>`
    },
    skills: ["Platform Architecture", "UX", "KPI Monitoring", "Fintech", "Team Coordination", "Audit"]
  },
  "exp-acumen": {
    tag: { en: "💼 Experience", fr: "💼 Expérience" },
    title: { en: "Assistant Project Manager — Agrosfer", fr: "Assistant Chef de Projet — Agrosfer" },
    date: { en: "July 2020 — November 2020 · Cotonou, Benin", fr: "Juillet 2020 — Novembre 2020 · Cotonou, Bénin" },
    body: {
      en: `<p>Assistant PM at <strong>Agrosfer</strong> (formerly Acumen Network), supporting AgriTech development projects in West Africa.</p>
      <ul><li>Development sprint planning and task tracking</li>
      <li>Testing of developed modules</li><li>Data processing with Microsoft Excel</li></ul>`,
      fr: `<p>Assistant Chef de Projet à <strong>Agrosfer</strong> (anciennement Acumen Network), soutien aux projets AgriTech en Afrique de l'Ouest.</p>
      <ul><li>Planification des sprints de développement et suivi des tâches</li>
      <li>Tests des modules développés</li><li>Traitement de données avec Microsoft Excel</li></ul>`
    },
    skills: ["Sprint Planning", "Testing", "Excel", "Task Tracking", "Data Processing"]
  },
  "proj-finder": {
    tag: { en: "🏆 Master's Thesis", fr: "🏆 Mémoire de Master" },
    title: "Finder Bot — Geolocation AI Assistant",
    date: "Python 80.4% · JavaScript 13.1% · CSS 3.6% · HTML 2.3%",
    body: {
      en: `<p>Hybrid <strong>LLM-RAG</strong> geolocation assistant — Master's thesis project. Combines graph-based spatial reasoning with SAR-inspired probability modeling.</p>
      <p><strong>Architecture:</strong></p><ul><li>Modular API with services layer</li><li>Configuration-driven with environment variables</li>
      <li>Agentic testing framework</li><li>Static frontend with JavaScript interaction</li></ul>
      <p><strong>Key Features:</strong></p><ul><li>Graph-based spatial reasoning for location analysis</li>
      <li>SAR-inspired probability modeling</li><li>LLM-powered natural language geolocation queries</li>
      <li>RAG pipeline for contextual document retrieval</li></ul>
      <p><a href="https://abd2k27.github.io/Finder_bot/" target="_blank" class="accent" style="font-weight:700;text-decoration:underline;">View Live Demo ↗</a></p>`,
      fr: `<p>Assistant de géolocalisation hybride <strong>LLM-RAG</strong> — projet de mémoire de Master. Combine le raisonnement spatial par graphe avec la modélisation probabiliste d'inspiration SAR.</p>
      <p><strong>Architecture :</strong></p><ul><li>API modulaire avec couche de services</li><li>Configuration pilotée par variables d'environnement</li>
      <li>Framework de tests agentiques</li><li>Frontend statique avec interaction JavaScript</li></ul>
      <p><strong>Fonctionnalités clés :</strong></p><ul><li>Raisonnement spatial par graphe</li>
      <li>Modélisation probabiliste SAR</li><li>Requêtes géospatiales en langage naturel via LLM</li>
      <li>Pipeline RAG pour la récupération contextuelle de documents</li></ul>
      <p><a href="https://abd2k27.github.io/Finder_bot/" target="_blank" class="accent" style="font-weight:700;text-decoration:underline;">Voir la démo ↗</a></p>`
    },
    skills: ["Python", "JavaScript", "LLM", "RAG", "Graph DB", "SAR", "MIT License"]
  },
  "proj-fetal": {
    tag: { en: "Medical Computer Vision", fr: "Vision par Ordinateur Médicale" },
    title: { en: "Fetal Ultrasound Classification", fr: "Classification d'Échographies Fœtales" },
    date: "Python 75.3% · Jupyter Notebook 21.0% · Makefile 3.7%",
    body: {
      en: `<p>Automated identification of fetal anatomical planes from ultrasound images using <strong>EfficientNet-B0</strong>. Tested on <strong>5,271 images</strong>.</p>
      <ul><li>Modular code: dataset, model, train, evaluation</li><li>Anatomically correct augmentations</li>
      <li>99.46% recall on fetal brain</li><li>Grad-CAM explainability heatmaps</li></ul>`,
      fr: `<p>Identification automatique des plans anatomiques fœtaux à partir d'échographies via <strong>EfficientNet-B0</strong>. Testé sur <strong>5 271 images</strong>.</p>
      <ul><li>Code modulaire : dataset, modèle, entraînement, évaluation</li><li>Augmentations anatomiquement cohérentes</li>
      <li>Rappel de 99,46% sur le cerveau fœtal</li><li>Visualisation Grad-CAM pour l'explicabilité</li></ul>`
    },
    skills: ["PyTorch", "EfficientNet-B0", "Grad-CAM", "Scikit-learn", "Computer Vision"]
  },
  "proj-lexi": {
    tag: { en: "NLP / RAG", fr: "TALN / RAG" },
    title: { en: "LexiBot — Legal RAG Chatbot", fr: "LexiBot — Chatbot RAG Juridique" },
    date: "Python 100%",
    body: {
      en: `<p>RAG chatbot answering questions about legal documents (200+ pages of Benin's Digital Code).</p>
      <ul><li><strong>Hybrid search:</strong> Semantic (embeddings) + BM25 keyword search</li>
      <li><strong>Multi-query:</strong> LLM decomposes questions for better coverage</li>
      <li>Streamlit web UI & ChromaDB vector store</li></ul>`,
      fr: `<p>Chatbot RAG répondant aux questions sur des documents juridiques (200+ pages du Code du Numérique du Bénin).</p>
      <ul><li><strong>Recherche hybride :</strong> Sémantique (embeddings) + BM25</li>
      <li><strong>Multi-requête :</strong> Décomposition des questions par LLM pour une couverture maximale</li>
      <li>Interface Streamlit & base vectorielle ChromaDB</li></ul>`
    },
    skills: ["Streamlit", "ChromaDB", "BM25", "Sentence Transformers", "Ollama"]
  },
  "proj-immo": {
    tag: { en: "Data Visualization", fr: "Visualisation de Données" },
    title: { en: "ImmoViz — French Real Estate Dashboard", fr: "ImmoViz — Dashboard Immobilier Français" },
    date: { en: "Streamlit App", fr: "Application Streamlit" },
    body: {
      en: `<p>Interactive geospatial dashboard for exploring the French real estate market.</p>
      <ul><li>Map-based visualization with Leaflet</li><li>Data processing with Pandas</li>
      <li>Real-time property exploration by region</li></ul>`,
      fr: `<p>Tableau de bord géospatial interactif pour explorer le marché immobilier français.</p>
      <ul><li>Visualisation cartographique avec Leaflet</li><li>Traitement de données avec Pandas</li>
      <li>Exploration en temps réel par région</li></ul>`
    },
    skills: ["Streamlit", "Leaflet", "Pandas", "Python", "Geospatial"]
  },
  "proj-asthme": {
    tag: { en: "Health Data Dashboard", fr: "Dashboard Santé Publique" },
    title: { en: "Asthma Dashboard — Public Health Viz", fr: "Dashboard Asthme — Santé Publique" },
    date: "Python 94.2% · CSS 5.2% · Docker 0.6%",
    body: {
      en: `<p>Interactive dashboard visualizing asthma emergency visits, pollen, and pollutants in France.</p>
      <ul><li><strong>Extraction:</strong> Web scraping (Selenium, BeautifulSoup)</li>
      <li><strong>Visualization:</strong> Dash (Plotly) with dynamic filters</li>
      <li><strong>Deployment:</strong> Containerized with Docker, deployed to AWS</li></ul>`,
      fr: `<p>Dashboard interactif visualisant les passages aux urgences pour asthme, les pollens et polluants en France.</p>
      <ul><li><strong>Extraction :</strong> Web scraping (Selenium, BeautifulSoup)</li>
      <li><strong>Visualisation :</strong> Dash (Plotly) avec filtres dynamiques</li>
      <li><strong>Déploiement :</strong> Conteneurisé avec Docker, déployé sur AWS</li></ul>`
    },
    skills: ["Dash", "Plotly", "Selenium", "Docker", "AWS", "Pandas"]
  },
  "exp-melio": {
    tag: { en: "💼 Current Intervention", fr: "💼 Intervention actuelle" },
    title: { en: "AI Developer — Mélio", fr: "Développeur IA — Mélio" },
    date: { en: "October 2025 — Present", fr: "Octobre 2025 — Présent" },
    body: {
      en: `<p>Working on AI features for <strong>Mélio</strong>, focusing on student emotional support and school climate.</p>
      <ul><li>Developing AI models for emotional analysis</li><li>Fostering safe educational environments via data insights</li></ul>`,
      fr: `<p>Travail sur les fonctionnalités IA de <strong>Mélio</strong>, axé sur le soutien émotionnel des élèves et le climat scolaire.</p>
      <ul><li>Développement de modèles IA pour l'analyse émotionnelle</li><li>Amélioration de l'environnement éducatif via des insights data</li></ul>`
    },
    skills: ["AI", "NLP", "EdTech", "Python", "Social Impact"]
  },
  "proj-melio": {
    tag: { en: "AI / EdTech", fr: "IA / EdTech" },
    title: { en: "Mélio — AI Emotional Support", fr: "Mélio — Soutien Émotionnel par l'IA" },
    date: { en: "Collaborative Project", fr: "Projet Collaboratif" },
    body: {
      en: `<p>An innovative tool supporting young people and educational teams via AI.</p>
      <ul><li>AI-driven tools for emotional navigation</li><li>Data-informed strategies for peaceful school environments</li></ul>`,
      fr: `<p>Outil innovant accompagnant les jeunes et les équipes éducatives via l'IA.</p>
      <ul><li>Outils pilotés par l'IA pour la gestion émotionnelle</li><li>Stratégies basées sur les données pour un climat scolaire serein</li></ul>`
    },
    skills: ["AI", "Sentiment Analysis", "EdTech", "UX Design"]
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
  const L = currentLang;
  const get = (v) => (v && typeof v === "object") ? (v[L] || v.en) : v;
  modalTag.textContent = get(data.tag);
  modalTitle.textContent = get(data.title);
  modalDate.textContent = get(data.date);
  modalBody.innerHTML = get(data.body);
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

/* ===== INIT LANG ===== */
setLang(currentLang);

