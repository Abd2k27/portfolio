/* =========================================================
   I18N
   Le français est écrit directement dans index.html.
   Au chargement, on mémorise ce texte comme version "fr" ;
   seules les traductions anglaises sont définies ici.
   ========================================================= */
const en = {
  "nav.projects": "Projects", "nav.exp": "Experience", "nav.edu": "Education",
  "nav.skills": "Skills", "nav.contact": "Contact", "nav.resume": "Resume",

  "hero.location": "Paris, France · open to relocation across France",
  "hero.desc": "I turn raw data into decisions and concrete tools: reliable pipelines, predictive models, applied AI. Experience in regulated Fintech (Nickel / BNP Paribas) and in AI applied to healthcare.",
  "hero.cta1": "View projects", "hero.cta2": "Download resume",

  "kpi.1": "Nickel customers covered by my analyses",
  "kpi.2": "dbt models deployed to production",
  "kpi.3": "anti-fraud ML models trained",
  "kpi.4": "accuracy on medical computer vision",

  "about.label": "About", "about.h2": "From the field to decisions",
  "about.p1": "My background spans two worlds: regulated Fintech, where I built production data pipelines, fraud detection models and dashboards used daily by business teams, and AI applied to high-stakes use cases (healthcare, social impact).",
  "about.p2": "Technology only has value if it meets a real need. I like to understand a problem before choosing the tool, whether it's an ML model, a dashboard or a prototype, and to explain my choices to experts and non-technical teams alike.",

  "proj.label": "Projects", "proj.h2": "Selected projects",
  "proj.sub": "Click a project to see the context, approach and results.",
  "proj.group.da": "Data Analyst · BI & Dataviz",
  "proj.group.ds": "Data Science & AI",
  "proj.group.other": "Other projects",
  "proj.live": "Live demo ↗", "proj.website": "Website ↗",
  "proj.for": "For:",
  "proj.finder.for": "Emergency dispatchers who need to locate a victim within minutes.",
  "proj.verbatim.for": "A CX team that needs to know which customer pain points to tackle first.",
  "proj.fetal.for": "Sonographers, as a quality-control aid for exams.",
  "proj.lexi.for": "Lawyers and businesses looking for the right legal provision fast.",
  "proj.asthme.for": "Public health decision-makers anticipating peaks in emergency visits.",
  "proj.immo.for": "Buyers and investors comparing prices across areas.",
  "proj.melio.for": "School staff who want to spot struggling students early.",
  "proj.asthme.tag": "Public health",
  "proj.asthme.title": "Asthmawatch: asthma, pollen & pollution",
  "proj.asthme.desc": "Dashboard of asthma emergency visits in France, cross-referenced with pollen and pollutant data. Data collected by web scraping, deployed on AWS with Docker.",
  "proj.immo.tag": "Real estate · geospatial",
  "proj.immo.title": "ImmoViz: French real estate market",
  "proj.immo.desc": "Interactive geospatial dashboard: price per m² by region, department and city, to explore the French property market.",
  "proj.finder.tag": "Master's thesis · Lille University Hospital",
  "proj.finder.title": "Finder Bot: AI-powered emergency geolocation",
  "proj.finder.desc": "Locating victims in real time from the text descriptions given to emergency dispatchers (SAMU). A local LLM coupled with a Bayesian engine over 12M+ points of interest, with no data sent to the cloud.",
  "proj.verbatim.tag": "NLP · LLM",
  "proj.verbatim.title": "Customer feedback analyzer",
  "proj.verbatim.desc": "Asynchronous LLM pipeline (Gemma 4) that classifies customer reviews by theme, summarises strengths and pain points, and computes satisfaction KPIs in a Streamlit dashboard.",
  "proj.fetal.tag": "Computer vision · healthcare",
  "proj.fetal.title": "Fetal ultrasound classification",
  "proj.fetal.desc": "EfficientNet-B0 trained on 5,271 images to identify fetal anatomical planes. 92% accuracy, macro F1 0.91, Grad-CAM explainability.",
  "proj.lexi.tag": "NLP · RAG",
  "proj.lexi.title": "LexiBot: legal chatbot",
  "proj.lexi.desc": "Hybrid RAG chatbot (semantic + BM25) over 200+ pages of Benin's Digital Code, with question decomposition into sub-queries.",
  "proj.melio.tag": "EdTech · product",
  "proj.melio.title": "Mélio: detecting student distress",
  "proj.melio.desc": "School well-being platform: business rules to detect distress signals and semantic search (RAG) to point to the right support resources.",

  "exp.label": "Experience", "exp.h2": "Career",
  "exp.melio.date": "Feb 2026 – present", "exp.melio.role": "AI Developer",
  "exp.melio.desc": "AI features for student support and school climate.",
  "exp.nickel.date": "Sep 2025 – Sep 2026", "exp.nickel.role": "Data Analyst, CX & Fraud (work-study)",
  "exp.nickel.desc": "30+ dbt models feeding 20+ dashboards, 3 anti-fraud ML models on 50M+ records, churn analysis and voice of the customer.",
  "exp.singa.date": "Apr 2025 – Aug 2025", "exp.singa.role": "Data Analyst, Monitoring & Evaluation",
  "exp.singa.desc": "Harmonised impact measurement protocols across 5+ countries, automated reporting and data migration to Salesforce.",
  "exp.hub.date": "Sep 2022 – Jul 2024", "exp.hub.role": "Hub Manager",
  "exp.hub.desc": "Ran the innovation hub: 200+ students coached, 10+ projects, a tax hackathon with Benin's tax authority.",
  "exp.aff.date": "May 2022 – Sep 2022", "exp.aff.role": "IT Project Manager",
  "exp.aff.desc": "Platform architecture, IT team setup and technical KPI tracking.",
  "exp.agrosfer.date": "Jul 2020 – Nov 2020", "exp.agrosfer.role": "Assistant Project Manager",
  "exp.agrosfer.desc": "Sprint planning, testing and data processing for an AgriTech startup.",

  "edu.label": "Education", "edu.h2": "Degrees",
  "edu.m2.title": "Master's in Health Data Science",
  "edu.m1.title": "Master's in Digital Transformation",
  "edu.bsc.title": "Bachelor's in IT Expertise",

  "skills.label": "Skills", "skills.h2": "Toolbox",
  "skills.data": "Data & Analytics Engineering",
  "skills.ml": "Machine Learning & Generative AI",
  "skills.bi": "BI & Dataviz",
  "skills.method": "Methods & compliance",
  "skills.m1": "GDPR / health data", "skills.m2": "Requirements scoping", "skills.m3": "Change management",
  "skills.langs": "Languages: French (native), English (B2 professional)",

  "contact.label": "Contact", "contact.h2": "Let's work together",
  "contact.desc": "Open to Data & AI Consultant roles and missions, especially in Fintech, healthcare and impact-driven projects.",
  "contact.cv": "Resume (PDF) ↗"
};

const i18n = { fr: {}, en };
document.querySelectorAll("[data-i18n]").forEach(el => {
  i18n.fr[el.dataset.i18n] = el.textContent;
});

let currentLang = "fr";
try { currentLang = localStorage.getItem("lang") === "en" ? "en" : "fr"; } catch (e) {}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = i18n[lang][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.documentElement.lang = lang;
  const btn = document.getElementById("lang-btn");
  if (btn) btn.textContent = lang === "en" ? "FR" : "EN";
}
function toggleLang() { setLang(currentLang === "en" ? "fr" : "en"); }

/* ===== THEME ===== */
function toggleTheme() {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
}

/* ===== MOBILE MENU ===== */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});
navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  hamburger.classList.remove("open");
  navMenu.classList.remove("open");
}));

/* ===== ACTIVE NAV LINK ===== */
const navLinks = document.querySelectorAll(".nav-link");
const spyObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spyObs.observe(s));

/* ===== FOOTER YEAR ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   MODALS
   Chaque champ est soit une chaîne, soit { fr, en }.
   ========================================================= */
const modalData = {
  /* ---------- Projets : Data Analyst ---------- */
  "proj-asthme": {
    tag: { fr: "Data Analyst · Santé publique", en: "Data Analyst · Public health" },
    title: { fr: "Asthmawatch : asthme, pollens & pollution", en: "Asthmawatch: asthma, pollen & pollution" },
    date: "Dash · Plotly · Docker · AWS",
    body: {
      fr: `<img src="assets/project/asthme.jpg" alt="Capture du dashboard Asthmawatch"/>
      <p><strong>Contexte :</strong> donner aux décideurs et professionnels de santé une vue claire des passages aux urgences pour asthme en France, mis en regard des pollens et des polluants.</p>
      <ul><li><strong>Collecte :</strong> web scraping (Selenium, BeautifulSoup) de sources publiques</li>
      <li><strong>Visualisation :</strong> cartes et séries temporelles Dash / Plotly avec filtres par année, mois et semaine</li>
      <li><strong>Déploiement :</strong> application conteneurisée avec Docker et hébergée sur AWS</li></ul>
      <p><a href="https://sijkhavkmx.eu-west-3.awsapprunner.com/" target="_blank" rel="noopener">Voir la démo ↗</a></p>`,
      en: `<img src="assets/project/asthme.jpg" alt="Asthmawatch dashboard screenshot"/>
      <p><strong>Context:</strong> give decision-makers and health professionals a clear view of asthma emergency visits in France, alongside pollen and pollutant levels.</p>
      <ul><li><strong>Collection:</strong> web scraping (Selenium, BeautifulSoup) of public sources</li>
      <li><strong>Visualisation:</strong> Dash / Plotly maps and time series with year, month and week filters</li>
      <li><strong>Deployment:</strong> containerised with Docker and hosted on AWS</li></ul>
      <p><a href="https://sijkhavkmx.eu-west-3.awsapprunner.com/" target="_blank" rel="noopener">View live demo ↗</a></p>`
    },
    skills: ["Python", "Dash", "Plotly", "Selenium", "BeautifulSoup", "Docker", "AWS"]
  },
  "proj-immo": {
    tag: { fr: "Data Analyst · Géospatial", en: "Data Analyst · Geospatial" },
    title: { fr: "ImmoViz : marché immobilier français", en: "ImmoViz: French real estate market" },
    date: "Streamlit · Pandas · Leaflet",
    body: {
      fr: `<img src="assets/project/immoviz.jpg" alt="Capture de ImmoViz"/>
      <p>Dashboard interactif pour explorer les prix de l'immobilier en France, du niveau régional jusqu'à la ville.</p>
      <ul><li>Carte choroplèthe des prix moyens au m² (appartements et maisons)</li>
      <li>Navigation région → département → ville</li>
      <li>Préparation et agrégation des données avec Pandas</li></ul>
      <p><a href="https://immoviz-cgxwo4whbtf8yrhfs7s3ql.streamlit.app/" target="_blank" rel="noopener">Voir la démo ↗</a></p>`,
      en: `<img src="assets/project/immoviz.jpg" alt="ImmoViz screenshot"/>
      <p>Interactive dashboard to explore French property prices, from region down to city level.</p>
      <ul><li>Choropleth map of average price per m² (flats and houses)</li>
      <li>Region → department → city navigation</li>
      <li>Data preparation and aggregation with Pandas</li></ul>
      <p><a href="https://immoviz-cgxwo4whbtf8yrhfs7s3ql.streamlit.app/" target="_blank" rel="noopener">View live demo ↗</a></p>`
    },
    skills: ["Python", "Streamlit", "Pandas", "Leaflet", "Geospatial"]
  },

  /* ---------- Projets : Data Science & IA ---------- */
  "proj-finder": {
    tag: { fr: "Data Science & IA · Mémoire de Master", en: "Data Science & AI · Master's thesis" },
    title: { fr: "Finder Bot : géolocalisation d'urgence par IA", en: "Finder Bot: AI-powered emergency geolocation" },
    date: { fr: "Mémoire de Master · CHU de Lille", en: "Master's thesis · Lille University Hospital" },
    body: {
      fr: `<p><strong>Problématique :</strong> localiser en temps réel des personnes accidentées à partir des descriptions textuelles transmises par l'agent du SAMU, sans faire sortir de données de santé.</p>
      <p><strong>Solution :</strong></p>
      <ul><li>LLM local (Ollama) qui extrait les indices de lieu du texte libre</li>
      <li>Moteur de raisonnement bayésien sur 12M+ points d'intérêt</li>
      <li>Raisonnement spatial par graphe et pipeline RAG pour le contexte</li></ul>
      <p><strong>Impact :</strong></p>
      <ul><li>Architecture souveraine conforme au RGPD : aucune donnée de santé dans le cloud</li>
      <li>Approche réutilisable pour extraire et structurer de l'information à partir de texte libre</li></ul>
      <p><a href="https://abd2k27.github.io/Finder_bot/" target="_blank" rel="noopener">Voir la démo ↗</a></p>`,
      en: `<p><strong>Problem:</strong> locate accident victims in real time from the text descriptions relayed by emergency dispatchers (SAMU), without health data leaving the premises.</p>
      <p><strong>Solution:</strong></p>
      <ul><li>Local LLM (Ollama) extracting location clues from free text</li>
      <li>Bayesian reasoning engine over 12M+ points of interest</li>
      <li>Graph-based spatial reasoning and a RAG pipeline for context</li></ul>
      <p><strong>Impact:</strong></p>
      <ul><li>Sovereign, GDPR-compliant architecture: no health data in the cloud</li>
      <li>Reusable approach for extracting and structuring information from free text</li></ul>
      <p><a href="https://abd2k27.github.io/Finder_bot/" target="_blank" rel="noopener">View live demo ↗</a></p>`
    },
    skills: ["Python", "LLM", "Ollama", "RAG", "Bayesian modelling", "Graphs", "GDPR"]
  },
  "proj-verbatim": {
    tag: { fr: "Data Science & IA · NLP / LLM", en: "Data Science & AI · NLP / LLM" },
    title: { fr: "Analyseur & quantificateur de verbatims clients", en: "Customer feedback analyzer & quantifier" },
    date: "Python · Gemma 4 (Ollama Cloud) · Streamlit",
    body: {
      fr: `<img src="assets/project/verbatim.jpg" alt="Dashboard de l'analyseur de verbatims"/>
      <p>Pipeline asynchrone et modulaire qui transforme des avis clients bruts (Trustpilot, App Store, enquêtes) en indicateurs et synthèses exploitables.</p>
      <ul><li><strong>Ingestion :</strong> CSV / JSONL avec détection automatique des colonnes texte, langue et source</li>
      <li><strong>Appels LLM asynchrones :</strong> extraction JSON robuste et retry avec backoff exponentiel</li>
      <li><strong>Validation Pydantic :</strong> contrôle des sorties du modèle avant stockage</li>
      <li><strong>Checkpoints :</strong> traitement par lots, reprise exacte en cas d'interruption</li>
      <li><strong>Harmonisation sémantique :</strong> regroupement de centaines de thèmes libres en macro-catégories</li>
      <li><strong>Dashboard :</strong> NPS, sentiment par source, forces et irritants par catégorie</li></ul>
      <p><a href="https://customerverbatimsanalyzerquantifier-a9rrjkplmzgmxvj4bojxxk.streamlit.app/" target="_blank" rel="noopener">Voir la démo ↗</a></p>`,
      en: `<img src="assets/project/verbatim.jpg" alt="Customer feedback analyzer dashboard"/>
      <p>Asynchronous, modular pipeline that turns raw customer reviews (Trustpilot, App Store, surveys) into usable metrics and summaries.</p>
      <ul><li><strong>Ingestion:</strong> CSV / JSONL with automatic detection of text, language and source columns</li>
      <li><strong>Async LLM calls:</strong> robust JSON extraction and exponential-backoff retries</li>
      <li><strong>Pydantic validation:</strong> model outputs checked before storage</li>
      <li><strong>Checkpoints:</strong> batch processing that resumes exactly where it stopped</li>
      <li><strong>Semantic harmonisation:</strong> hundreds of free-form themes grouped into macro-categories</li>
      <li><strong>Dashboard:</strong> NPS, sentiment by source, strengths and pain points by category</li></ul>
      <p><a href="https://customerverbatimsanalyzerquantifier-a9rrjkplmzgmxvj4bojxxk.streamlit.app/" target="_blank" rel="noopener">View live demo ↗</a></p>`
    },
    skills: ["Python", "LLM", "Gemma 4", "Ollama", "Pydantic", "asyncio", "Streamlit", "Plotly"]
  },
  "proj-fetal": {
    tag: { fr: "Data Science & IA · Vision médicale", en: "Data Science & AI · Medical vision" },
    title: { fr: "Classification d'échographies fœtales", en: "Fetal ultrasound classification" },
    date: "PyTorch · EfficientNet-B0 · Grad-CAM",
    body: {
      fr: `<p>Identification automatique des plans anatomiques fœtaux à partir d'échographies, évaluée sur <strong>5 271 images</strong>.</p>
      <ul><li>Transfer learning avec EfficientNet-B0</li>
      <li>Augmentations cohérentes avec l'anatomie</li>
      <li><strong>92 % de précision, F1 macro 0,91</strong></li>
      <li>Cartes Grad-CAM pour rendre les prédictions lisibles par un clinicien</li>
      <li>Code modulaire : dataset, modèle, entraînement, évaluation</li></ul>`,
      en: `<p>Automatic identification of fetal anatomical planes from ultrasound images, evaluated on <strong>5,271 images</strong>.</p>
      <ul><li>Transfer learning with EfficientNet-B0</li>
      <li>Anatomically consistent augmentations</li>
      <li><strong>92% accuracy, macro F1 0.91</strong></li>
      <li>Grad-CAM maps so clinicians can read the predictions</li>
      <li>Modular code: dataset, model, training, evaluation</li></ul>`
    },
    skills: ["Python", "PyTorch", "EfficientNet", "Grad-CAM", "Scikit-learn", "Computer Vision"]
  },
  "proj-lexi": {
    tag: { fr: "Data Science & IA · RAG", en: "Data Science & AI · RAG" },
    title: { fr: "LexiBot : chatbot RAG juridique", en: "LexiBot: legal RAG chatbot" },
    date: "Python · ChromaDB · Streamlit",
    body: {
      fr: `<p>Chatbot qui répond aux questions sur le Code du numérique du Bénin (200+ pages).</p>
      <ul><li><strong>Recherche hybride :</strong> embeddings sémantiques + BM25</li>
      <li><strong>Multi-requêtes :</strong> le LLM décompose la question pour mieux couvrir le corpus</li>
      <li>Base vectorielle ChromaDB et interface Streamlit</li></ul>`,
      en: `<p>Chatbot answering questions about Benin's Digital Code (200+ pages).</p>
      <ul><li><strong>Hybrid search:</strong> semantic embeddings + BM25</li>
      <li><strong>Multi-query:</strong> the LLM breaks the question down to cover the corpus better</li>
      <li>ChromaDB vector store and Streamlit UI</li></ul>`
    },
    skills: ["Python", "RAG", "ChromaDB", "BM25", "Sentence Transformers", "Streamlit"]
  },

  /* ---------- Projets : Autres ---------- */
  "proj-melio": {
    tag: { fr: "Autre · EdTech", en: "Other · EdTech" },
    title: { fr: "Mélio : détection de la détresse scolaire", en: "Mélio: detecting student distress" },
    date: { fr: "Projet collaboratif", en: "Collaborative project" },
    body: {
      fr: `<p>Plateforme qui aide les équipes éducatives à repérer et accompagner les élèves en difficulté.</p>
      <ul><li>Moteur de règles métier pour la détection précoce de signaux de détresse</li>
      <li>Recherche sémantique (RAG) vers des ressources d'accompagnement adaptées</li>
      <li>Indicateurs pour suivre le climat scolaire</li></ul>
      <p><a href="https://www.melio-soutien.fr/" target="_blank" rel="noopener">Voir le site ↗</a></p>`,
      en: `<p>Platform that helps school staff spot and support students in difficulty.</p>
      <ul><li>Business rules engine for early detection of distress signals</li>
      <li>Semantic search (RAG) to relevant support resources</li>
      <li>Indicators to monitor school climate</li></ul>
      <p><a href="https://www.melio-soutien.fr/" target="_blank" rel="noopener">Visit website ↗</a></p>`
    },
    skills: ["NLP", "RAG", "Business rules", "EdTech", "SaaS"]
  },

  /* ---------- Expériences ---------- */
  "exp-melio": {
    tag: { fr: "Expérience", en: "Experience" },
    title: { fr: "Développeur IA · Mélio", en: "AI Developer · Mélio" },
    date: { fr: "Février 2026 – aujourd'hui", en: "February 2026 – present" },
    body: {
      fr: `<p>Fonctionnalités IA pour <strong>Mélio</strong>, plateforme dédiée au bien-être des élèves et au climat scolaire.</p>
      <ul><li>Développement de modèles d'analyse des signaux de détresse</li>
      <li>Fonctionnalités favorisant un environnement scolaire serein</li>
      <li>Restitution d'indicateurs aux équipes éducatives</li></ul>`,
      en: `<p>AI features for <strong>Mélio</strong>, a platform focused on student well-being and school climate.</p>
      <ul><li>Models analysing distress signals</li>
      <li>Features supporting a safe school environment</li>
      <li>Indicators delivered to school staff</li></ul>`
    },
    skills: ["Python", "NLP", "RAG", "EdTech"]
  },
  "exp-nickel": {
    tag: { fr: "Expérience · Alternance", en: "Experience · Work-study" },
    title: { fr: "Data Analyst CX & Fraude · Nickel (BNP Paribas)", en: "Data Analyst, CX & Fraud · Nickel (BNP Paribas)" },
    date: { fr: "Septembre 2025 – septembre 2026 · Nantes", en: "September 2025 – September 2026 · Nantes, France" },
    body: {
      fr: `<p>Néobanque du groupe BNP Paribas, 3M+ clients.</p>
      <p><strong>Aide à la décision (CX)</strong></p>
      <ul><li>Conception et déploiement de 30+ modèles dbt en production sur BigQuery</li>
      <li>20+ dashboards utilisés chaque jour par 30+ collaborateurs : KPI fiabilisés et équipes autonomes sur la donnée</li></ul>
      <p><strong>Lutte anti-fraude</strong></p>
      <ul><li>3 modèles prédictifs (régression logistique, Random Forest, XGBoost) sur 50M+ de données clients agrégées</li>
      <li>Règles d'alerte exploitées par les équipes fraude pour prioriser les investigations</li></ul>
      <p><strong>Rétention</strong></p>
      <ul><li>Modélisation du churn sur le marché portugais et identification des profils à risque</li>
      <li>Recommandations d'engagement reprises par les équipes opérationnelles</li></ul>
      <p><strong>Voix du client</strong></p>
      <ul><li>Pilotage de bout en bout de 10+ enquêtes de satisfaction multilingues, insights intégrés à la roadmap produit</li></ul>`,
      en: `<p>Neobank of the BNP Paribas group, 3M+ customers.</p>
      <p><strong>Decision support (CX)</strong></p>
      <ul><li>Designed and deployed 30+ production dbt models on BigQuery</li>
      <li>20+ dashboards used daily by 30+ colleagues: reliable KPIs and self-service data for business teams</li></ul>
      <p><strong>Fraud prevention</strong></p>
      <ul><li>3 predictive models (logistic regression, Random Forest, XGBoost) on 50M+ aggregated customer records</li>
      <li>Alert rules used by fraud teams to prioritise investigations</li></ul>
      <p><strong>Retention</strong></p>
      <ul><li>Churn modelling for the Portuguese market and at-risk profile identification</li>
      <li>Engagement recommendations adopted by operations teams</li></ul>
      <p><strong>Voice of the customer</strong></p>
      <ul><li>Ran 10+ multilingual satisfaction surveys end to end; insights fed into the product roadmap</li></ul>`
    },
    skills: ["SQL", "dbt", "BigQuery", "Python", "XGBoost", "Scikit-learn", "Fraud detection", "Churn"]
  },
  "exp-singa": {
    tag: { fr: "Expérience", en: "Experience" },
    title: { fr: "Data Analyst Suivi & Évaluation · SINGA Global", en: "Data Analyst, Monitoring & Evaluation · SINGA Global" },
    date: { fr: "Avril 2025 – août 2025 · Paris", en: "April 2025 – August 2025 · Paris, France" },
    body: {
      fr: `<p>Organisation internationale qui accompagne l'entrepreneuriat des personnes nouvellement arrivées.</p>
      <ul><li><strong>Cadrage :</strong> protocoles de collecte de données d'impact harmonisés sur 5+ pays et KPI communs</li>
      <li><strong>Reporting :</strong> dashboards automatisés pour les partenaires internationaux, fin du reporting manuel</li>
      <li><strong>CRM :</strong> pilotage de la migration des données vers Salesforce</li></ul>`,
      en: `<p>International organisation supporting entrepreneurship among newcomers.</p>
      <ul><li><strong>Framework:</strong> harmonised impact data collection protocols across 5+ countries with shared KPIs</li>
      <li><strong>Reporting:</strong> automated dashboards for international partners, replacing manual reporting</li>
      <li><strong>CRM:</strong> led the data migration to Salesforce</li></ul>`
    },
    skills: ["Data Analysis", "Impact Measurement", "Salesforce", "Reporting", "Dataviz"]
  },
  "exp-hub": {
    tag: { fr: "Expérience", en: "Experience" },
    title: { fr: "Hub Manager · Epitech Bénin", en: "Hub Manager · Epitech Benin" },
    date: { fr: "Septembre 2022 – juillet 2024 · Cotonou", en: "September 2022 – July 2024 · Cotonou, Benin" },
    body: {
      fr: `<ul><li>Gestion de 10+ projets et activités du hub d'innovation</li>
      <li>Près de 200 étudiants suivis et coachés</li>
      <li>5+ projets d'open innovation menés avec des partenaires</li>
      <li><strong>Fiscathon :</strong> hackathon fiscal avec la Direction Générale des Impôts du Bénin (recrutement, planning, coaching technique)</li></ul>`,
      en: `<ul><li>Managed 10+ innovation hub projects and activities</li>
      <li>Coached nearly 200 students</li>
      <li>Delivered 5+ open innovation projects with partners</li>
      <li><strong>Fiscathon:</strong> tax hackathon with Benin's General Directorate of Taxes (recruitment, planning, technical coaching)</li></ul>`
    },
    skills: ["Project Management", "Coaching", "Innovation", "Hackathon"]
  },
  "exp-aff": {
    tag: { fr: "Expérience", en: "Experience" },
    title: { fr: "Chef de projet IT · Africa Fintech Forum", en: "IT Project Manager · Africa Fintech Forum" },
    date: { fr: "Mai 2022 – septembre 2022 · Abidjan", en: "May 2022 – September 2022 · Abidjan, Côte d'Ivoire" },
    body: {
      fr: `<ul><li>Constitution de l'équipe IT chargée des plateformes digitales</li>
      <li>Refonte de l'architecture de la plateforme selon les besoins métier</li>
      <li>Cas d'usage, spécifications techniques et amélioration de l'UX</li>
      <li>Audit des risques technologiques et suivi des KPI techniques (50+ parties prenantes)</li></ul>`,
      en: `<ul><li>Built the IT team in charge of the digital platforms</li>
      <li>Redesigned the platform architecture around business needs</li>
      <li>Use cases, technical specifications and UX improvements</li>
      <li>Technology risk audit and technical KPI tracking (50+ stakeholders)</li></ul>`
    },
    skills: ["Platform Architecture", "Specifications", "UX", "KPI"]
  },
  "exp-acumen": {
    tag: { fr: "Expérience", en: "Experience" },
    title: { fr: "Assistant chef de projet · Agrosfer", en: "Assistant Project Manager · Agrosfer" },
    date: { fr: "Juillet 2020 – novembre 2020 · Cotonou", en: "July 2020 – November 2020 · Cotonou, Benin" },
    body: {
      fr: `<ul><li>Planification des sprints de développement et suivi des tâches</li>
      <li>Tests des modules livrés</li><li>Traitement de données sous Excel</li></ul>`,
      en: `<ul><li>Development sprint planning and task tracking</li>
      <li>Testing of delivered modules</li><li>Data processing in Excel</li></ul>`
    },
    skills: ["Agile", "Testing", "Excel"]
  },

  /* ---------- Formation ---------- */
  "edu-m2": {
    tag: { fr: "Formation", en: "Education" },
    title: { fr: "Master Data Science en Santé", en: "Master's in Health Data Science" },
    date: { fr: "2024 – 2026 · ILIS, Université de Lille", en: "2024 – 2026 · ILIS, University of Lille" },
    body: {
      fr: `<ul><li>Machine Learning et Deep Learning sur données médicales</li>
      <li>Vision par ordinateur appliquée à l'imagerie médicale</li>
      <li>Traitement automatique du langage sur textes cliniques</li>
      <li>Biostatistiques et analyse de survie (R)</li>
      <li>Gouvernance des données de santé et RGPD</li></ul>`,
      en: `<ul><li>Machine Learning and Deep Learning on medical data</li>
      <li>Computer vision for medical imaging</li>
      <li>NLP on clinical texts</li>
      <li>Biostatistics and survival analysis (R)</li>
      <li>Health data governance and GDPR</li></ul>`
    },
    skills: ["Python", "R", "PyTorch", "Scikit-learn", "Biostatistics", "GDPR"]
  },
  "edu-epitech": {
    tag: { fr: "Formation", en: "Education" },
    title: { fr: "Master Transformation Digitale", en: "Master's in Digital Transformation" },
    date: "2022 – 2024 · Epitech",
    body: {
      fr: `<ul><li>Gestion de projets IT (Agile, Scrum)</li><li>Architecture cloud et DevOps (AWS, Docker, CI/CD)</li>
      <li>Génie logiciel avancé</li><li>Entrepreneuriat et stratégie d'innovation</li></ul>`,
      en: `<ul><li>IT project management (Agile, Scrum)</li><li>Cloud architecture and DevOps (AWS, Docker, CI/CD)</li>
      <li>Advanced software engineering</li><li>Entrepreneurship and innovation strategy</li></ul>`
    },
    skills: ["Agile", "AWS", "Docker", "CI/CD", "Project Management"]
  },
  "edu-bsc": {
    tag: { fr: "Formation", en: "Education" },
    title: { fr: "Bachelor Expertise Informatique", en: "Bachelor's in IT Expertise" },
    date: "2019 – 2022 · Epitech",
    body: {
      fr: `<ul><li>Pédagogie par projets, en équipe et avec des clients réels</li>
      <li>Algorithmique, structures de données, programmation C / C++</li>
      <li>Développement web et conception de bases de données</li></ul>`,
      en: `<ul><li>Project-based learning, in teams and with real clients</li>
      <li>Algorithms, data structures, C / C++ programming</li>
      <li>Web development and database design</li></ul>`
    },
    skills: ["C", "C++", "Python", "SQL", "Git"]
  }
};

const overlay = document.getElementById("modal-overlay");
const modalEls = {
  tag: document.getElementById("modal-tag"),
  title: document.getElementById("modal-title"),
  date: document.getElementById("modal-date"),
  body: document.getElementById("modal-body"),
  skills: document.getElementById("modal-skills")
};
let lastFocus = null;

function openModal(id) {
  const data = modalData[id];
  if (!data) return;
  const get = v => (v && typeof v === "object") ? (v[currentLang] || v.fr) : v;
  modalEls.tag.textContent = get(data.tag);
  modalEls.title.textContent = get(data.title);
  modalEls.date.textContent = get(data.date);
  modalEls.body.innerHTML = get(data.body);
  modalEls.skills.innerHTML = data.skills.map(s => `<span>${s}</span>`).join("");
  lastFocus = document.activeElement;
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  overlay.querySelector(".modal").scrollTop = 0;
  document.getElementById("modal-close").focus();
}
function closeModal() {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

document.querySelectorAll("[data-modal]").forEach(el => {
  el.addEventListener("click", e => {
    if (e.target.closest("a")) return; // les liens GitHub / démo s'ouvrent normalement
    openModal(el.dataset.modal);
  });
  el.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target === el) { e.preventDefault(); openModal(el.dataset.modal); }
  });
});
document.getElementById("modal-close").addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && overlay.classList.contains("active")) closeModal(); });

/* ===== INIT ===== */
setLang(currentLang);
