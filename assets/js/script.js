'use strict';

// Dictionnaires pour les traductions FR / EN
const dictionaryEN = {
  "me-title": "Data Scientist & IT Project Manager",
  "contact-email": "Email",
  "contact-phone": "Phone",
  "contact-birthday": "Birthday",
  "contact-birthday-date": "March 27",
  "navbar-about": "About",
  "navbar-portfolio": "Portfolio",
  "navbar-contact": "Contact",
  "navbar-about-active": "About me",
  "navbar-about-text": "I'm Abdou Wahab DOSSOU, a Data Scientist and IT Project Manager, based in Lille (🇫🇷) and Cotonou (🇧🇯). Passionate about innovation, digital transformation, and data science.",
  "navbar-about-textt": "With a solid foundation in computer science from EPITECH and ongoing studies in data science at the University of Lille, I thrive on tackling complex problems and leveraging data for impactful solutions. I’m driven by challenges and continuously seek opportunities to grow and learn.",
  "navbar-service-whatimdoing": "What I'm doing",
  "navbar-service-title": "Data Science",
  "navbar-service-description": "I develop data-driven web applications and perform complex data analyses to deliver actionable insights, focusing on healthcare.",
  "navbar-servicee-title": "IT Project Management",
  "navbar-servicee-description": "I manage IT projects from inception to deployment, ensuring efficient planning, task tracking, and team collaboration.",
  "navbar-companies": "Tech Stack",
  "navbar-resume-portfolio": "Projects",
  "navbar-resume-select-category": "Select category",
  "navbar-resume-select-1": "All",
  "navbar-resume-select-2": "Innovative projects",
  "navbar-resume-select-3": "Data Projects",
  "navbar-resume-portfolio-all": "All",
  "navbar-portfolio-1": "Innovative projects",
  "navbar-portfolio-2": "Data Projects",
  "navbar-resume-project-title1": "ImmoViz",
  "navbar-resume-project-category1": "Visualisation of real estate data",
  "navbar-resume-project-title2": "Robotic arm",
  "navbar-resume-project-category2": "Innovatives Projects",
  "navbar-resume-send-message": "Send Message",
  "navbar-resume-contact-form": "Contact Form",
  "navbar-resume-contact-title": "Contact"
};

const dictionaryFR = {
  "me-title": "Data Scientist & Chef de Projet IT",
  "contact-email": "Email",
  "contact-phone": "Téléphone",
  "contact-birthday": "Date de naissance",
  "contact-birthday-date": "27 Mars",
  "navbar-about": "À propos",
  "navbar-portfolio": "Portfolio",
  "navbar-contact": "Contact",
  "navbar-about-active": "À propos de moi",
  "navbar-about-text": "Je suis Abdou Wahab DOSSOU, Data Scientist et Chef de Projet IT, basé à Lille (France) et Cotonou (Bénin). Passionné par l'innovation, la transformation digitale et la science des données.",
  "navbar-about-textt": "Fort d'une solide formation en informatique à EPITECH et d'études en cours en science des données à l'Université de Lille, je m'épanouis en résolvant des problèmes complexes et en exploitant les données pour des solutions impactantes. Je suis motivé par les défis et je cherche continuellement à apprendre et à grandir.",
  "navbar-service-whatimdoing": "Ce que je fais",
  "navbar-service-title": "Science des données",
  "navbar-service-description": "Je développe des applications web basées sur les données et réalise des analyses complexes pour fournir des insights exploitables, en mettant l'accent sur la santé.",
  "navbar-servicee-title": "Gestion de projet IT",
  "navbar-servicee-description": "Je gère des projets IT de la conception à la mise en production, en assurant une planification efficace, le suivi des tâches et la collaboration en équipe.",
  "navbar-companies": "Technologies Utilisées",
  "navbar-resume-portfolio": "Projets",
  "navbar-resume-select-category": "Sélectionner une catégorie",
  "navbar-resume-select-1": "Tout",
  "navbar-resume-select-2": "Projets Innovants",
  "navbar-resume-select-3": "Projets Data",
  "navbar-resume-portfolio-all": "Tout",
  "navbar-portfolio-1": "Projets innovants",
  "navbar-portfolio-2": "Projets de données",
  "navbar-resume-project-title1": "ImmoViz",
  "navbar-resume-project-category1": "Visualisation des données immobilières",
  "navbar-resume-project-title2": "Bras robotique",
  "navbar-resume-project-category2": "Bras robotique industriel",
  "navbar-resume-send-message": "Envoyer un message",
  "navbar-resume-contact-form": "Formulaire de contact",
  "navbar-resume-contact-title": "Contact"
};

var currentLanguage = 'en';

function updateTexts() {
  const dictionary = currentLanguage === 'fr' ? dictionaryFR : dictionaryEN;

  document.getElementById('me-title').textContent = dictionary['me-title'];
  document.getElementById('contact-email').textContent = dictionary['contact-email'];
  document.getElementById('contact-phone').textContent = dictionary['contact-phone'];
  document.getElementById('contact-birthday').textContent = dictionary['contact-birthday'];
  document.getElementById('contact-birthday-date').textContent = dictionary['contact-birthday-date'];
  document.getElementById('navbar-about').textContent = dictionary['navbar-about'];
  document.getElementById('navbar-portfolio').textContent = dictionary['navbar-portfolio'];
  document.getElementById('navbar-contact').textContent = dictionary['navbar-contact'];
  document.getElementById('navbar-about-active').textContent = dictionary['navbar-about-active'];
  document.getElementById('navbar-about-text').textContent = dictionary['navbar-about-text'];
  document.getElementById('navbar-about-textt').textContent = dictionary['navbar-about-textt'];
  document.getElementById('navbar-service-whatimdoing').textContent = dictionary['navbar-service-whatimdoing'];
  document.getElementById('navbar-service-title').textContent = dictionary['navbar-service-title'];
  document.getElementById('navbar-service-description').textContent = dictionary['navbar-service-description'];
  document.getElementById('navbar-servicee-title').textContent = dictionary['navbar-servicee-title'];
  document.getElementById('navbar-servicee-description').textContent = dictionary['navbar-servicee-description'];
  document.getElementById('navbar-companies').textContent = dictionary['navbar-companies'];
  document.getElementById('navbar-resume-portfolio').textContent = dictionary['navbar-resume-portfolio'];
  document.getElementById('navbar-resume-select-category').textContent = dictionary['navbar-resume-select-category'];
  document.getElementById('navbar-resume-select-1').textContent = dictionary['navbar-resume-select-1'];
  document.getElementById('navbar-resume-select-2').textContent = dictionary['navbar-resume-select-2'];
  document.getElementById('navbar-resume-select-3').textContent = dictionary['navbar-resume-select-3'];
  document.getElementById('navbar-resume-portfolio-all').textContent = dictionary['navbar-resume-portfolio-all'];
  document.getElementById('navbar-resume-project-title1').textContent = dictionary['navbar-resume-project-title1'];
  document.getElementById('navbar-resume-project-category1').textContent = dictionary['navbar-resume-project-category1'];
  document.getElementById('navbar-resume-project-title2').textContent = dictionary['navbar-resume-project-title2'];
  document.getElementById('navbar-resume-project-category2').textContent = dictionary['navbar-resume-project-category2'];
  document.getElementById('navbar-resume-send-message').textContent = dictionary['navbar-resume-send-message'];
  document.getElementById('navbar-resume-contact-form').textContent = dictionary['navbar-resume-contact-form'];
  document.getElementById('navbar-resume-contact-title').textContent = dictionary['navbar-resume-contact-title'];
}

updateTexts();

// Fonction de changement de langue
const button = document.getElementById('color-toggle');
button.addEventListener('click', function () {
  currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr';
  updateTexts();
});

// Fonction de bascule des éléments (sidebar, etc.)
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// Sélectionner les boutons de la navbar et les sections
const navButtons = document.querySelectorAll('[data-nav-link]');
const sections = document.querySelectorAll('article');

// Fonction pour basculer entre les sections
const switchSection = (event) => {
  const targetSection = event.target.getAttribute('data-nav-link');

  // Masquer toutes les sections
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Activer la section correspondante
  const activeSection = document.querySelector(`article[data-page="${targetSection}"]`);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // Gérer la mise à jour des boutons actifs
  navButtons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
};

// Ajouter un événement de clic sur chaque bouton de la navbar
navButtons.forEach(button => {
  button.addEventListener('click', switchSection);
});

// Sélectionner tous les boutons de filtre et les projets
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const projectItems = document.querySelectorAll('[data-filter-item]');

// Fonction pour filtrer les projets en fonction de la catégorie
const filterProjects = (category) => {
  projectItems.forEach(item => {
    const itemCategory = item.getAttribute('data-category');

    // Montrer l'élément s'il appartient à la catégorie sélectionnée, sinon le masquer
    if (category === 'all' || category === itemCategory) {
      item.classList.add('active');  // Afficher l'élément
    } else {
      item.classList.remove('active');  // Masquer l'élément
    }
  });
};

// Ajouter un événement de clic à chaque bouton de filtre
filterBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const selectedCategory = event.target.textContent.toLowerCase();

    // Supprimer la classe "active" de tous les boutons, puis ajouter à celui qui est cliqué
    filterBtns.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    // Filtrer les projets en fonction de la catégorie sélectionnée
    filterProjects(selectedCategory);
  });
});
