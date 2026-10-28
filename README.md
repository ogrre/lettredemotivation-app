# Lettre de Motivation — Website

The public website for [Lettre de Motivation](https://lettredemotivation.app), an open-source browser extension that helps people write tailored cover letters with AI.

## What this project does

This repository contains the presentation website, not the letter-generation engine. Its purpose is to:

- explain what the extension does and how it works;
- provide installation links for Chrome and Firefox;
- document the project's privacy approach;
- provide the legal pages and links to the source code.

The extension itself lives in the companion repository:
[github.com/ogrre/lettredemotivation-ext](https://github.com/ogrre/lettredemotivation-ext).

## Features

- French and English interface;
- responsive landing page with an extension preview;
- interactive FAQ;
- privacy and terms pages;
- direct links to the Chrome Web Store, Firefox Add-ons and GitHub;
- no account or backend required by the website.

## Tech stack

- [Vue 3](https://vuejs.org/) with the Composition API;
- [Vue Router](https://router.vuejs.org/);
- [Vue I18n](https://vue-i18n.intlify.dev/);
- [Vite](https://vite.dev/);
- plain CSS with no UI framework;
- [Vitest](https://vitest.dev/) for tests.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
git clone https://github.com/ogrre/lettredemotivation-app.git
cd lettredemotivation-app
npm install
npm run dev
```

Useful commands:

```bash
npm run build       # Build the production bundle
npm run preview     # Preview the production bundle locally
npm run test:run    # Run the test suite once
npm run lint        # Run ESLint
```

## Routes

- `/` — project homepage;
- `/privacy` — privacy policy;
- `/terms` — terms of service.

## Project structure

```text
lettredemotivation-app/
├── index.html
├── icon.svg                 # Shared mint sparkle favicon
├── src/
│   ├── assets/main.css      # Global design tokens
│   ├── router/index.js
│   ├── views/Home.vue
│   ├── views/Privacy.vue
│   ├── views/Terms.vue
│   ├── App.vue
│   └── main.js
├── package.json
└── vite.config.js
```

## Open-source contribution

Issues and pull requests are welcome. Before opening a pull request:

1. create a focused branch from `main`;
2. keep commits small and describe them in English;
3. run `npm run build`, `npm run test:run` and `npm run lint`;
4. explain the user-facing impact in the pull request.

## License

This project is released under the [MIT License](LICENSE).

Maintained by [Black Betta](https://betta.black).
