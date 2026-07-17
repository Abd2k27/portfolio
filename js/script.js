/* ===== I18N TRANSLATIONS ===== */
const i18n = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.exp":"Experience",
    "nav.stack":"Stack","nav.edu":"Education","nav.contact":"Contact","nav.resume":"Resume ↓",
    "hero.label":"// Data & AI",
    "hero.desc":"I transform raw data into decisions and concrete tools: reliable pipelines, predictive models, applied AI. I enjoy diving into analysis as much as presenting results to business teams — and building solutions that take real-world constraints into account (GDPR, sensitive data, field usage).",
    "hero.cta1":"View Projects →","hero.cta2":"Get In Touch",
    "about.label":"// About","about.h2a":"Data,","about.h2b":"from the field to decisions",
    "about.text":"My background intersects two worlds: regulated Fintech (Nickel / BNP Paribas), where I worked on production data pipelines, scoring and fraud detection models, and dashboards used daily by business teams — and AI applied to high-stakes use cases (healthcare, social impact), where I explore deep learning, NLP, and LLM/agent architectures.\n\nWhat I take away from these experiences: technology only has value if it meets a real need. I like to understand a problem before choosing the tool, whether it is an ML model, a dashboard, or a no-code prototype — and know how to explain my choices to both experts and non-technical teams.",
    "about.stat1":"Projects","about.stat2":"Masters","about.stat3":"Experiences",
    "proj.label":"// Projects","proj.h2":"Featured Work",
    "proj.finder.title":"Finder Bot — Geolocation AI","proj.finder.tag":"🏆 Master's Thesis",
    "proj.finder.desc":"Hybrid LLM-RAG geolocation assistant. Graph-based spatial reasoning + SAR probability modeling. MIT Licensed.",
    "proj.fetal.title":"Fetal Ultrasound Classification","proj.fetal.tag":"🏥 Medical AI",
    "proj.fetal.desc":"EfficientNet-B0 for automated fetal plane identification with Grad-CAM. 92% accuracy, F1 macro 0.91.",
    "proj.asthme.title":"Asthma Dashboard","proj.asthme.tag":"📊 Public Health",
    "proj.asthme.desc":"Interactive dashboard on asthma ER visits, pollen & air pollution in France. Deployed on AWS via Docker.",
    "proj.lexi.title":"LexiBot — Legal Chatbot","proj.lexi.tag":"NLP / RAG",
    "proj.lexi.desc":"Hybrid semantic + BM25 RAG over 200+ pages of legal PDF. Multi-query decomposition.",
    "proj.immo.title":"ImmoViz — Real Estate","proj.immo.tag":"Data Viz",
    "proj.immo.desc":"Interactive geospatial dashboard for French real estate exploration.",
    "proj.melio.title":"Mélio — AI Support","proj.melio.tag":"AI / EdTech",
    "proj.melio.desc":"Detection of school distress via business rules and semantic search (RAG). AI for school climate.",
    "proj.verbatim.title":"Customer Verbatims Analyzer","proj.verbatim.tag":"🤖 NLP / LLM Pipeline",
    "proj.verbatim.desc":"Asynchronous LLM pipeline (Gemma 4 via Ollama Cloud) for ingesting customer reviews, semantic theme harmonization, and qualitative synthesis. Features a real-time Streamlit dashboard.",
    "exp.label":"// 💼 Experience",
    "exp.melio.desc":"AI-driven student support & school climate","exp.melio.metric":"AI features · school well-being platform",
    "exp.nickel.desc":"Data Analyst CX & Fraud Apprentice","exp.nickel.metric":"30+ dbt models · 3 fraud ML models · 3M+ customers",
    "exp.singa.desc":"Data Analyst — Monitoring & Evaluation","exp.singa.metric":"Social impact metrics across 5+ countries · Salesforce CRM",
    "exp.hub.desc":"Innovation hub management","exp.hub.metric":"200+ students · 3 innovation programs",
    "exp.aff.desc":"Platform architecture & team coordination","exp.aff.metric":"Platform for 50+ stakeholders",
    "exp.agrosfer.desc":"AgriTech sprint planning & data processing","exp.agrosfer.metric":"AgriTech · MVP delivery",
    "stack.label":"// Tech Stack","stack.h2":"Tools I Use",
    "edu.label":"// 🎓 Education","edu.inprogress":"In Progress",
    "contact.label":"// Contact","contact.h2a":"Let's Work","contact.h2b":"Together",
    "contact.desc":"Open to Data Scientist roles, ML engineering positions, and data consulting missions in Fintech or health tech.",
    "contact.name":"Your Name","contact.email":"Your Email","contact.message":"Your Message","contact.btn":"Send Message →"
  },
  fr: {
    "nav.home":"Accueil","nav.about":"À propos","nav.projects":"Projets","nav.exp":"Expériences",
    "nav.stack":"Outils","nav.edu":"Formation","nav.contact":"Contact","nav.resume":"CV ↓",
    "hero.label":"// Data & IA",
    "hero.desc":"Je transforme des données brutes en décisions et en outils concrets : pipelines fiables, modèles prédictifs, IA appliquée. J'aime autant plonger dans l'analyse que présenter des résultats à des équipes métier — et construire des solutions qui tiennent compte des vraies contraintes (RGPD, données sensibles, usages terrain).",
    "hero.cta1":"Voir les projets →","hero.cta2":"Me contacter",
    "about.label":"// À propos","about.h2a":"Data,","about.h2b":"du terrain à la décision",
    "about.text":"Mon parcours croise deux mondes : la Fintech régulée (Nickel / BNP Paribas), où j'ai travaillé sur des pipelines de données en production, des modèles de scoring et de détection de fraude, et des dashboards utilisés au quotidien par les équipes métier — et l'IA appliquée à des cas d'usage à fort enjeu (santé, impact social), où j'explore le deep learning, le NLP et les architectures LLM/agents.\n\nCe que je retiens de ces expériences : la technique n'a de valeur que si elle répond à un vrai besoin. J'aime comprendre un problème avant de choisir l'outil, qu'il s'agisse d'un modèle de ML, d'un dashboard, ou d'un prototype no-code — et savoir expliquer mes choix aussi bien à des experts qu'à des équipes non techniques.",
    "about.stat1":"Projets","about.stat2":"Masters","about.stat3":"Expériences",
    "proj.label":"// Projets","proj.h2":"Travaux Sélectionnés",
    "proj.finder.title":"Finder Bot — IA de Géolocalisation","proj.finder.tag":"🏆 Mémoire de Master",
    "proj.finder.desc":"Assistant de géolocalisation hybride LLM-RAG. Raisonnement spatial par graphe + modélisation probabiliste SAR.",
    "proj.fetal.title":"Classification d'Échographies Fœtales","proj.fetal.tag":"🏥 IA Médicale",
    "proj.fetal.desc":"EfficientNet-B0 pour l'identification automatique des plans fœtaux par échographie. 92% de précision, F1 macro 0,91.",
    "proj.asthme.title":"Dashboard Asthme","proj.asthme.tag":"📊 Santé Publique",
    "proj.asthme.desc":"Dashboard interactif sur les passages aux urgences pour asthme, pollens et pollution en France. Déployé sur AWS via Docker.",
    "proj.lexi.title":"LexiBot — Chatbot Juridique","proj.lexi.tag":"TALN / RAG",
    "proj.lexi.desc":"Chatbot RAG hybride (sémantique + BM25) sur 200+ pages de documents juridiques. Décomposition multi-requêtes.",
    "proj.immo.title":"ImmoViz — Immobilier","proj.immo.tag":"Data Viz",
    "proj.immo.desc":"Dashboard géospatial interactif pour l'exploration du marché immobilier français.",
    "proj.melio.title":"Mélio — Soutien par l'IA","proj.melio.tag":"IA / EdTech",
    "proj.melio.desc":"Détection de la détresse scolaire par règles métier et recherche sémantique (RAG). IA pour le climat scolaire.",
    "proj.verbatim.title":"Analyseur de Verbatims","proj.verbatim.tag":"🤖 Pipeline TALN / LLM",
    "proj.verbatim.desc":"Pipeline LLM asynchrone (Gemma 4 via Ollama Cloud) pour l'ingestion de commentaires, l'harmonisation sémantique et la synthèse qualitative. Dashboard Streamlit interactif.",
    "exp.label":"// 💼 Expériences",
    "exp.melio.desc":"Soutien étudiant & climat scolaire pilotés par l'IA","exp.melio.metric":"Fonctionnalités IA · plateforme bien-être scolaire",
    "exp.nickel.desc":"Alternance Data Analyst, CX & Fraude","exp.nickel.metric":"30+ modèles dbt · 3 modèles ML fraude · 3M+ clients",
    "exp.singa.desc":"Data Analyst — Suivi & Évaluation","exp.singa.metric":"Mesure d'impact sur 5+ pays · CRM Salesforce",
    "exp.hub.desc":"Gestion du hub d'innovation","exp.hub.metric":"200+ étudiants · 3 programmes d'innovation",
    "exp.aff.desc":"Architecture plateforme & coordination équipe","exp.aff.metric":"Plateforme pour 50+ parties prenantes",
    "exp.agrosfer.desc":"Planification sprint AgriTech & traitement de données","exp.agrosfer.metric":"AgriTech · livraison MVP",
    "stack.label":"// Outils","stack.h2":"Ma Stack Technique",
    "edu.label":"// 🎓 Formation","edu.inprogress":"En cours",
    "contact.label":"// Contact","contact.h2a":"Travaillons","contact.h2b":"Ensemble",
    "contact.desc":"Ouvert aux postes de Data Scientist, missions en ML engineering et consulting data en Fintech ou santé.",
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
const phrases = ["Data Scientist", "ML Engineer"];
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
    title: { en: "Data Analyst — CX & Fraud", fr: "Data Analyst — CX & Fraude" },
    date: { en: "September 2025 — Present · Nantes, France", fr: "Septembre 2025 — Présent · Nantes, France" },
    body: {
      en: `<p>Data Analyst in Customer Experience & Fraud at <strong>Nickel</strong> (BNP Paribas), a neobank serving 3M+ customers across Europe.</p>
      <p><strong>Decision Support & Data Engineering:</strong></p>
      <ul><li>Built and maintained 30+ dbt models on BigQuery for CX reporting</li>
      <li>Automated recurring analyses with SQL and Python</li></ul>
      <p><strong>Anti-Fraud & Machine Learning:</strong></p>
      <ul><li>Developed 3 ML models (scoring, anomaly detection) for fraud prevention</li>
      <li>Feature engineering on transactional data under GDPR constraints</li></ul>
      <p><strong>Retention & Churn Analysis:</strong></p>
      <ul><li>Built churn prediction models to identify at-risk customers</li>
      <li>Designed targeted retention action plans based on model outputs</li></ul>
      <p><strong>Voice of Customer & Satisfaction:</strong></p>
      <ul><li>Analyzed NPS and satisfaction surveys to identify friction points</li>
      <li>Delivered actionable insights to product and CX teams</li></ul>`,
      fr: `<p>Data Analyst en Expérience Client & Fraude chez <strong>Nickel</strong> (BNP Paribas), néobanque servant 3M+ clients en Europe.</p>
      <p><strong>Aide à la décision & Data Engineering :</strong></p>
      <ul><li>Construction et maintenance de 30+ modèles dbt sur BigQuery pour le reporting CX</li>
      <li>Automatisation d'analyses récurrentes en SQL et Python</li></ul>
      <p><strong>Lutte anti-fraude & Machine Learning :</strong></p>
      <ul><li>Développement de 3 modèles ML (scoring, détection d'anomalies) pour la prévention de la fraude</li>
      <li>Feature engineering sur données transactionnelles sous contraintes RGPD</li></ul>
      <p><strong>Rétention & Analyse du churn :</strong></p>
      <ul><li>Modèles prédictifs de churn pour identifier les clients à risque</li>
      <li>Plans d'actions de rétention ciblés basés sur les sorties des modèles</li></ul>
      <p><strong>Voix du client & Satisfaction :</strong></p>
      <ul><li>Analyse des enquêtes NPS et de satisfaction pour identifier les points de friction</li>
      <li>Restitution d'insights actionnables aux équipes produit et CX</li></ul>`
    },
    skills: ["Python", "SQL", "dbt", "BigQuery", "Machine Learning", "Fraud Detection", "Fintech", "GDPR"]
  },
  "exp-singa": {
    tag: { en: "💼 Experience", fr: "💼 Expérience" },
    title: { en: "Data Analyst — Monitoring & Evaluation", fr: "Data Analyst — Suivi & Évaluation" },
    date: { en: "April 2025 — August 2025 · Paris, France", fr: "Avril 2025 — Août 2025 · Paris, France" },
    body: {
      en: `<p>Data Analyst for Monitoring & Evaluation at <strong>SINGA</strong>, an international organisation supporting newcomers' integration through entrepreneurship.</p>
      <p><strong>Framework & Harmonization:</strong></p>
      <ul><li>Designed and harmonized M&E frameworks across 5+ countries</li>
      <li>Standardized data collection methodologies for social impact measurement</li></ul>
      <p><strong>Reporting & CRM:</strong></p>
      <ul><li>Built automated reporting pipelines with Salesforce CRM</li>
      <li>Data analysis for impact measurement on 200+ beneficiaries</li>
      <li>Delivered data-driven insights for donor reporting and strategy</li></ul>`,
      fr: `<p>Data Analyst en Suivi & Évaluation à <strong>SINGA</strong>, organisation internationale soutenant l'intégration des réfugiés par l'entrepreneuriat.</p>
      <p><strong>Cadrage & Harmonisation :</strong></p>
      <ul><li>Conception et harmonisation des cadres de suivi-évaluation sur 5+ pays</li>
      <li>Standardisation des méthodologies de collecte de données pour la mesure d'impact social</li></ul>
      <p><strong>Reporting & CRM :</strong></p>
      <ul><li>Pipelines de reporting automatisés avec Salesforce CRM</li>
      <li>Analyse de données pour la mesure d'impact sur 200+ bénéficiaires</li>
      <li>Restitution d'insights data-driven pour le reporting bailleurs et la stratégie</li></ul>`
    },
    skills: ["Data Analysis", "Salesforce", "Impact Measurement", "M&E", "Reporting", "Data Visualization"]
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
      en: `<p>Hybrid <strong>LLM-RAG</strong> geolocation assistant — Master's thesis project. Real-time location of missing persons using sovereign AI.</p>
      <p><strong>Problem:</strong></p><ul><li>Locate missing persons in real time without externalizing sensitive data</li></ul>
      <p><strong>Solution:</strong></p>
      <ul><li>Local LLM (Ollama) + Bayesian engine on 12M+ points of interest</li>
      <li>Graph-based spatial reasoning + SAR-inspired probability modeling</li>
      <li>RAG pipeline for contextual document retrieval</li></ul>
      <p><strong>Impact:</strong></p>
      <ul><li>Full GDPR sovereignty — zero externalized data</li>
      <li>Modular API architecture with agentic testing framework</li></ul>
      <p><a href="https://abd2k27.github.io/Finder_bot/" target="_blank" class="accent" style="font-weight:700;text-decoration:underline;">View Live Demo ↗</a></p>`,
      fr: `<p>Assistant de géolocalisation hybride <strong>LLM-RAG</strong> — projet de mémoire de Master. Localisation en temps réel de personnes disparues via une IA souveraine.</p>
      <p><strong>Problématique :</strong></p><ul><li>Localiser des personnes disparues en temps réel sans externaliser les données sensibles</li></ul>
      <p><strong>Solution :</strong></p>
      <ul><li>LLM local (Ollama) + moteur bayésien sur 12M+ points d'intérêt</li>
      <li>Raisonnement spatial par graphe + modélisation probabiliste SAR</li>
      <li>Pipeline RAG pour la récupération contextuelle de documents</li></ul>
      <p><strong>Impact :</strong></p>
      <ul><li>Souveraineté RGPD totale — zéro données externalisées</li>
      <li>Architecture API modulaire avec framework de tests agentiques</li></ul>
      <p><a href="https://abd2k27.github.io/Finder_bot/" target="_blank" class="accent" style="font-weight:700;text-decoration:underline;">Voir la démo ↗</a></p>`
    },
    skills: ["Python", "JavaScript", "LLM", "RAG", "Ollama", "Bayesian", "GDPR", "Graph DB"]
  },
  "proj-fetal": {
    tag: { en: "Medical Computer Vision", fr: "Vision par Ordinateur Médicale" },
    title: { en: "Fetal Ultrasound Classification", fr: "Classification d'Échographies Fœtales" },
    date: "Python 75.3% · Jupyter Notebook 21.0% · Makefile 3.7%",
    body: {
      en: `<p>Automated identification of fetal anatomical planes from ultrasound images using <strong>EfficientNet-B0</strong>. Tested on <strong>5,271 images</strong>.</p>
      <ul><li>Modular code: dataset, model, train, evaluation</li><li>Anatomically correct augmentations</li>
      <li><strong>92% accuracy, F1 macro 0.91</strong></li><li>Grad-CAM explainability heatmaps for clinical trust</li></ul>`,
      fr: `<p>Identification automatique des plans anatomiques fœtaux à partir d'échographies via <strong>EfficientNet-B0</strong>. Testé sur <strong>5 271 images</strong>.</p>
      <ul><li>Code modulaire : dataset, modèle, entraînement, évaluation</li><li>Augmentations anatomiquement cohérentes</li>
      <li><strong>92% de précision, F1 macro 0,91</strong></li><li>Visualisation Grad-CAM pour la confiance clinique</li></ul>`
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
    title: { en: "Mélio — AI School Distress Detection", fr: "Mélio — Détection de Détresse Scolaire par IA" },
    date: { en: "Collaborative Project", fr: "Projet Collaboratif" },
    body: {
      en: `<p>An innovative platform detecting school distress and supporting educational teams via AI.</p>
      <ul><li>Business rule engine for early distress signal detection</li>
      <li>Semantic search (RAG) for contextual student support resources</li>
      <li>Data-informed strategies for peaceful school environments</li></ul>`,
      fr: `<p>Plateforme innovante de détection de la détresse scolaire et d'accompagnement des équipes éducatives via l'IA.</p>
      <ul><li>Moteur de règles métier pour la détection précoce de signaux de détresse</li>
      <li>Recherche sémantique (RAG) pour des ressources d'accompagnement contextualisées</li>
      <li>Stratégies basées sur les données pour un climat scolaire serein</li></ul>`
    },
    skills: ["AI", "RAG", "Sentiment Analysis", "EdTech", "Business Rules", "NLP"]
  },
  "proj-verbatim": {
    tag: { en: "🤖 NLP / LLM Pipeline", fr: "🤖 Pipeline TALN / LLM" },
    title: { en: "Customer Verbatims Analyzer & Quantifier", fr: "Analyseur & Quantificateur de Verbatims Clients" },
    date: "Python 91.0% · Streamlit · Ollama Cloud",
    body: {
      en: `<p>A complete, asynchronous, and modular pipeline using a remote <strong>Gemma 4</strong> model hosted on <strong>Ollama Cloud</strong> to analyze customer feedback (verbatims) and present key statistics.</p>
      <div class="modal-gallery" style="display:flex; flex-direction:column; gap:0.8rem; margin:1.2rem 0;">
        <img src="assets/project/verbatim-dash.png" alt="Dashboard View" style="border-radius:var(--radius); border:var(--border-light); width:100%; box-shadow:2px 2px 0 rgba(0,0,0,0.1);" />
        <img src="assets/project/verbatim-synthesis.png" alt="Synthesis View" style="border-radius:var(--radius); border:var(--border-light); width:100%; box-shadow:2px 2px 0 rgba(0,0,0,0.1);" />
      </div>
      <p><strong>Core Features:</strong></p>
      <ul>
        <li><strong>Ingestion & In-Memory Normalization:</strong> Dynamically loads CSV or JSONL reviews, with smart auto-detection for text, language, and source columns.</li>
        <li><strong>Ollama Cloud Client:</strong> Connects asynchronously to a distant LLM with robust regex-based JSON extraction and exponential backoff retry policies.</li>
        <li><strong>Business Validation Layer:</strong> Leverages Pydantic schemas to validate LLM outputs (length limit, text validation, correct ID checking) before storing results.</li>
        <li><strong>Orchestrator with Checkpoints:</strong> Batches operations, records progress locally, and enables idempotent execution (resumes exactly where it left off on errors).</li>
        <li><strong>Semantic Theme Harmonization:</strong> Dynamically groups hundreds of free-form, model-generated themes into structured macro-categories.</li>
        <li><strong>Qualitative Synthesis:</strong> Condenses reviews into targeted strengths and irritants per category for quick decision support.</li>
        <li><strong>Interactive Web UI:</strong> Streamlit dashboard featuring global NPS metrics, Plotly donut charts, stacked sentiment bar charts, and a multi-criteria filterable search table.</li>
      </ul>
      <p><a href="https://customerverbatimsanalyzerquantifier-a9rrjkplmzgmxvj4bojxxk.streamlit.app/" target="_blank" class="accent" style="font-weight:700;text-decoration:underline;">View Live App ↗</a></p>`,
      fr: `<p>Un pipeline asynchrone performant et modulaire s'appuyant sur un modèle <strong>Gemma 4</strong> distant sur <strong>Ollama Cloud</strong> pour analyser des retours clients et en extraire des insights quantifiables.</p>
      <div class="modal-gallery" style="display:flex; flex-direction:column; gap:0.8rem; margin:1.2rem 0;">
        <img src="assets/project/verbatim-dash.png" alt="Vue du Dashboard" style="border-radius:var(--radius); border:var(--border-light); width:100%; box-shadow:2px 2px 0 rgba(0,0,0,0.1);" />
        <img src="assets/project/verbatim-synthesis.png" alt="Vue des Synthèses" style="border-radius:var(--radius); border:var(--border-light); width:100%; box-shadow:2px 2px 0 rgba(0,0,0,0.1);" />
      </div>
      <p><strong>Fonctionnalités Clés :</strong></p>
      <ul>
        <li><strong>Ingestion & Normalisation :</strong> Chargement de fichiers CSV/JSONL avec auto-détection intelligente des colonnes de texte, langue et source.</li>
        <li><strong>Client Ollama Cloud Asynchrone :</strong> Appels HTTP asynchrones au modèle Gemma 4 avec extraction robuste de JSON et retry automatique par backoff exponentiel.</li>
        <li><strong>Validation Métier (Pydantic) :</strong> Couche de vérification de l'intégrité de la donnée avant la persistance (longueur des thèmes, intégrité des IDs).</li>
        <li><strong>Orchestrateur & Reprise sur erreur :</strong> Découpage en lots avec gestion de checkpoints (reprise idempotente en cas d'interruption du pipeline).</li>
        <li><strong>Harmonisation Sémantique :</strong> Regroupement automatique par le LLM de centaines de thèmes libres uniques en macro-thématiques structurées.</li>
        <li><strong>Synthèse Qualitative automatique :</strong> Résumé automatisé des forces et irritants par macro-catégorie pour faciliter la prise de décision.</li>
        <li><strong>Interface Web Streamlit :</strong> Dashboard complet affichant les indicateurs clés (volume, NPS), diagrammes Plotly (donut, barres empilées) filtrables en temps réel par source, et explorateur de commentaires multi-critères.</li>
      </ul>
      <p><a href="https://customerverbatimsanalyzerquantifier-a9rrjkplmzgmxvj4bojxxk.streamlit.app/" target="_blank" class="accent" style="font-weight:700;text-decoration:underline;">Voir le Live ↗</a></p>`
    },
    skills: ["Python", "Streamlit", "Ollama", "Gemma 4", "Pydantic", "Plotly", "Asynchronous HTTP", "NLP"]
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

