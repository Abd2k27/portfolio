# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio of Abdou Wahab Dossou (Consultant Data & IA). Static single-page site: plain HTML/CSS/vanilla JS, no build step, no package manager, no tests or linter. Hosted on GitHub Pages at https://abd2k27.github.io/portfolio/ (`origin` = `github.com/Abd2k27/portfolio`). Pushing to `main` deploys. `_config.yml` (Jekyll Cayman theme) only matters for Pages; `index.html` is fully self-styled.

The branch `paperline-3d` holds an abandoned redesign ("Paperline" style + Three.js background). It is not the live site.

## Running locally

```sh
python3 -m http.server 8000
```

## Architecture

- `index.html`: the whole page. Sections in order: hero, KPI strip, `#about`, `#projects`, `#experience`, `#education`, `#skills`, `#contact`, footer, plus one shared modal (`#modal-overlay`). An inline script in `<head>` applies the saved theme before first paint.
- `css/style.css`: all styles. Design tokens on `:root`, overridden under `[data-theme="dark"]`. Sober style: 1px borders, soft shadows, Space Grotesk (headings) + DM Sans (body). `css/utilities.css` is empty and not loaded.
- `js/script.js`:
  1. **i18n**: French is written directly in `index.html`. On load, the script reads every `[data-i18n]` element's text into `i18n.fr`, so only the English dictionary (`en`) lives in JS. `setLang()` swaps `textContent`; the choice persists in `localStorage.lang` (default `fr`).
  2. **Theme**: `toggleTheme()` flips `data-theme` on `<html>`, persisted in `localStorage.theme`.
  3. **Modals**: `modalData` maps ids to `{ tag, title, date, body, skills }`. Each text field is a string or `{ fr, en }`; `body` is HTML. Any element with `data-modal="<id>"` opens it on click or Enter. Clicks on links inside a card don't open the modal.
- Projects are grouped in three blocks, in this order: **Data Science & IA**, **Data Analyst · BI & Dataviz**, **Autres projets**. Each card has a "Pour qui :" line (`.proj-for`) stating who the tool serves and which decision it helps. Only the Data Analyst cards show a thumbnail (`assets/project/*.jpg`). Keep thumbnails consistent within a group.
- CV: the page links `assets/Abdou_DOSSOU_CV.pdf`. `assets/Abdou_cv_fr.pdf` is a copy kept for old links. The source PDFs at the repo root aren't referenced.

## Editing conventions

- New visible text: write the French in the HTML with a `data-i18n` key, and add the same key to `en` in `script.js`. Keep elements with `data-i18n` free of child markup, because `textContent` is replaced.
- New project or experience: add the card (`data-modal="proj-…"` / `exp-…"` / `edu-…"`, `tabindex="0"`) and a matching `modalData` entry with both languages.
- Colors: use CSS variables, and define any new token in both `:root` and `[data-theme="dark"]`.
- Copy style: no em-dashes; positioning is "Consultant Data & IA" everywhere. Facts (dates, figures) should match the current CV.
- Contact is a `mailto:` link (no form).
