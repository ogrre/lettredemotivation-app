<template>
  <div class="legal-page">
    <header>
      <div class="header-content">
        <a href="/" class="logo">
          📝 {{ t('hero.title') }}
        </a>
        <div class="header-actions">
          <a href="https://github.com/yourusername/lettredemotivation-ext" target="_blank" rel="noopener noreferrer" class="github-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <div class="lang-switcher">
            <button
              class="lang-btn"
              :class="{ active: locale === 'en' }"
              @click="switchLanguage('en')"
            >
              EN
            </button>
            <button
              class="lang-btn"
              :class="{ active: locale === 'fr' }"
              @click="switchLanguage('fr')"
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </header>

    <section class="legal-content">
      <div class="container">
        <h1>{{ locale === 'fr' ? 'Mentions légales' : 'Terms of Service' }}</h1>

        <div v-if="locale === 'fr'" class="content">
          <p class="last-update">Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}</p>

          <h2>1. Éditeur du site</h2>
          <p>
            Le site lettredemotivation.app est édité par :<br>
            <strong>Black Betta</strong><br>
            Particulier<br>
            Domicilié à Lille, France<br>
            Email : <a href="mailto:contact@betta.black">contact@betta.black</a><br>
            Site web : <a href="https://betta.black" target="_blank">https://betta.black</a>
          </p>

          <h2>2. Directeur de publication</h2>
          <p>
            Le directeur de la publication est Black Betta.<br>
            Contact : <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>

          <h2>3. Hébergement</h2>
          <p>
            Le site est hébergé par :<br>
            <strong>Vercel Inc.</strong><br>
            440 N Barranca Ave #4133<br>
            Covina, CA 91723<br>
            États-Unis<br>
            Site web : <a href="https://vercel.com" target="_blank">https://vercel.com</a>
          </p>

          <h2>4. Propriété intellectuelle</h2>
          <p>
            Le code source de l'extension Lettre de Motivation est distribué sous licence MIT et est disponible sur GitHub.
          </p>
          <p>
            Le contenu du site (textes, images, logos) est la propriété de Black Betta, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.
          </p>

          <h2>5. Conditions d'utilisation</h2>
          <h3>5.1. Extension</h3>
          <p>
            L'extension Lettre de Motivation est fournie gratuitement et "en l'état". Aucune garantie n'est fournie quant à son fonctionnement ou sa disponibilité.
          </p>

          <h3>5.2. Clé API OpenAI</h3>
          <p>
            Pour utiliser l'extension, vous devez disposer de votre propre clé API OpenAI. Vous êtes responsable de :
          </p>
          <ul>
            <li>L'obtention et la gestion de votre clé API</li>
            <li>Les coûts associés à l'utilisation de l'API OpenAI</li>
            <li>Le respect des conditions d'utilisation d'OpenAI</li>
            <li>La sécurité de votre clé API</li>
          </ul>

          <h3>5.3. Responsabilité</h3>
          <p>
            L'utilisateur est seul responsable de :
          </p>
          <ul>
            <li>L'utilisation qu'il fait de l'extension</li>
            <li>Le contenu des lettres de motivation générées</li>
            <li>La vérification et la modification des textes générés</li>
            <li>Le respect des lois et réglementations applicables</li>
          </ul>

          <h2>6. Limitation de responsabilité</h2>
          <p>
            Black Betta ne saurait être tenu responsable de :
          </p>
          <ul>
            <li>Tout dommage direct ou indirect résultant de l'utilisation de l'extension</li>
            <li>L'indisponibilité temporaire ou permanente de l'extension ou du site</li>
            <li>Les dysfonctionnements de l'API OpenAI</li>
            <li>La qualité ou la pertinence du contenu généré</li>
            <li>Les conséquences de l'utilisation des lettres générées</li>
          </ul>

          <h2>7. Données personnelles</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
          </p>
          <p>
            Pour plus d'informations, consultez notre <router-link to="/privacy">Politique de confidentialité</router-link>.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Ce site n'utilise aucun cookie. L'extension stocke vos données localement dans votre navigateur.
          </p>

          <h2>9. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du site ou de l'extension sera soumis aux tribunaux français compétents.
          </p>

          <h2>10. Modifications</h2>
          <p>
            Black Betta se réserve le droit de modifier les présentes mentions légales à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
          </p>

          <h2>11. Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br>
            <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>
        </div>

        <div v-else class="content">
          <p class="last-update">Last updated: {{ new Date().toLocaleDateString('en-US') }}</p>

          <h2>1. Site Publisher</h2>
          <p>
            The lettredemotivation.app website is published by:<br>
            <strong>Black Betta</strong><br>
            Individual<br>
            Domiciled in Lille, France<br>
            Email: <a href="mailto:contact@betta.black">contact@betta.black</a><br>
            Website: <a href="https://betta.black" target="_blank">https://betta.black</a>
          </p>

          <h2>2. Publication Director</h2>
          <p>
            The publication director is Black Betta.<br>
            Contact: <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>

          <h2>3. Hosting</h2>
          <p>
            The site is hosted by:<br>
            <strong>Vercel Inc.</strong><br>
            440 N Barranca Ave #4133<br>
            Covina, CA 91723<br>
            United States<br>
            Website: <a href="https://vercel.com" target="_blank">https://vercel.com</a>
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            The source code of the Lettre de Motivation extension is distributed under the MIT license and is available on GitHub.
          </p>
          <p>
            The content of the site (texts, images, logos) is the property of Black Betta, unless otherwise stated. Any reproduction, distribution or use without prior authorization is prohibited.
          </p>

          <h2>5. Terms of Use</h2>
          <h3>5.1. Extension</h3>
          <p>
            The Lettre de Motivation extension is provided free of charge and "as is". No warranty is provided regarding its operation or availability.
          </p>

          <h3>5.2. OpenAI API Key</h3>
          <p>
            To use the extension, you must have your own OpenAI API key. You are responsible for:
          </p>
          <ul>
            <li>Obtaining and managing your API key</li>
            <li>Costs associated with using the OpenAI API</li>
            <li>Compliance with OpenAI's terms of use</li>
            <li>Security of your API key</li>
          </ul>

          <h3>5.3. Liability</h3>
          <p>
            The user is solely responsible for:
          </p>
          <ul>
            <li>Their use of the extension</li>
            <li>The content of the cover letters generated</li>
            <li>Verification and modification of generated texts</li>
            <li>Compliance with applicable laws and regulations</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            Black Betta cannot be held responsible for:
          </p>
          <ul>
            <li>Any direct or indirect damage resulting from the use of the extension</li>
            <li>Temporary or permanent unavailability of the extension or site</li>
            <li>OpenAI API malfunctions</li>
            <li>Quality or relevance of generated content</li>
            <li>Consequences of using generated letters</li>
          </ul>

          <h2>7. Personal Data</h2>
          <p>
            In accordance with GDPR, you have the right to access, rectify and delete your personal data.
          </p>
          <p>
            For more information, see our <router-link to="/privacy">Privacy Policy</router-link>.
          </p>

          <h2>8. Cookies</h2>
          <p>
            This site does not use any cookies. The extension stores your data locally in your browser.
          </p>

          <h2>9. Applicable Law</h2>
          <p>
            These terms of service are governed by French law. Any dispute relating to the use of the site or extension will be submitted to the competent French courts.
          </p>

          <h2>10. Changes</h2>
          <p>
            Black Betta reserves the right to modify these terms of service at any time. Changes will be posted on this page with a new update date.
          </p>

          <h2>11. Contact</h2>
          <p>
            For any questions regarding these terms of service, you can contact us at:<br>
            <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <div class="footer-links">
              <router-link to="/privacy">{{ locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy' }}</router-link>
              <router-link to="/terms">{{ locale === 'fr' ? 'Mentions légales' : 'Terms of Service' }}</router-link>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-text">
              © {{ new Date().getFullYear() }} <a href="https://lettredemotivation.app" target="_blank">lettredemotivation.app</a> - {{ locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved' }}
            </p>
            <p class="footer-credits">
              {{ locale === 'fr' ? 'Développé par' : 'Developed by' }} <a href="https://betta.black" target="_blank">Black Betta</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const switchLanguage = (lang) => {
  locale.value = lang
}
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.legal-content {
  flex: 1;
  padding: 80px 0;
}

.legal-content h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #e5e7eb;
}

.last-update {
  color: #9ca3af;
  font-size: 14px;
  margin-bottom: 40px;
}

.content {
  max-width: 800px;
}

.content h2 {
  font-size: 24px;
  font-weight: 600;
  color: #e5e7eb;
  margin-top: 40px;
  margin-bottom: 16px;
}

.content h3 {
  font-size: 20px;
  font-weight: 600;
  color: #e5e7eb;
  margin-top: 24px;
  margin-bottom: 12px;
}

.content p {
  color: #9ca3af;
  line-height: 1.8;
  margin-bottom: 16px;
}

.content ul {
  list-style: disc;
  margin-left: 24px;
  margin-bottom: 16px;
}

.content li {
  color: #9ca3af;
  line-height: 1.8;
  margin-bottom: 8px;
}

.content a {
  color: #e5e7eb;
  text-decoration: underline;
}

.content a:hover {
  color: #fff;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.github-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  color: #9ca3af;
  transition: all 0.2s;
  text-decoration: none;
}

.github-btn:hover {
  background: #1a1a1a;
  color: #e5e7eb;
  border-color: #3a3a3a;
}

@media (max-width: 768px) {
  .legal-content {
    padding: 60px 20px;
  }

  .legal-content h1 {
    font-size: 32px;
  }

  .content h2 {
    font-size: 20px;
  }

  .content h3 {
    font-size: 18px;
  }
}
</style>
