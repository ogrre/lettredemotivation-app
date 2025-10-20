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
        <h1>{{ locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy' }}</h1>

        <div v-if="locale === 'fr'" class="content">
          <p class="last-update">Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}</p>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le site lettredemotivation.app est édité par Black Betta, particulier domicilié en France, à Lille.<br>
            Contact : <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>

          <h2>2. Données collectées</h2>
          <p>
            Nous ne collectons aucune donnée personnelle. L'extension Lettre de Motivation fonctionne entièrement localement dans votre navigateur.
          </p>
          <ul>
            <li><strong>Aucun compte utilisateur</strong> : Aucune inscription n'est requise</li>
            <li><strong>Aucun tracking</strong> : Nous n'utilisons aucun outil d'analyse ou de suivi</li>
            <li><strong>Aucun cookie</strong> : Ce site n'utilise aucun cookie</li>
            <li><strong>Stockage local uniquement</strong> : Vos données (clé API, CV, paramètres) sont stockées localement dans votre navigateur via l'API de stockage local du navigateur</li>
          </ul>

          <h2>3. Utilisation de l'API OpenAI</h2>
          <p>
            L'extension utilise l'API OpenAI pour générer des lettres de motivation. Lorsque vous utilisez l'extension :
          </p>
          <ul>
            <li>Votre clé API OpenAI est stockée localement dans votre navigateur</li>
            <li>Les descriptions de poste et votre CV sont envoyés directement à OpenAI depuis votre navigateur</li>
            <li>Nous n'avons aucun accès à ces données</li>
            <li>Les conditions d'utilisation et la politique de confidentialité d'OpenAI s'appliquent</li>
          </ul>

          <h2>4. Sécurité</h2>
          <p>
            Toutes vos données restent sur votre appareil. Nous vous recommandons de :
          </p>
          <ul>
            <li>Définir des limites de dépenses sur votre compte OpenAI</li>
            <li>Ne jamais partager votre clé API</li>
            <li>Supprimer l'extension si vous n'utilisez plus le service</li>
          </ul>

          <h2>5. Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>

          <h2>6. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p>
            Cependant, comme nous ne collectons aucune donnée personnelle, ces droits ne s'appliquent pas dans notre cas. Toutes vos données sont stockées localement sur votre appareil et vous en avez le contrôle total.
          </p>

          <h2>7. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à :<br>
            <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>

          <h2>8. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
          </p>
        </div>

        <div v-else class="content">
          <p class="last-update">Last updated: {{ new Date().toLocaleDateString('en-US') }}</p>

          <h2>1. Data Controller</h2>
          <p>
            The lettredemotivation.app website is published by Black Betta, an individual domiciled in France, in Lille.<br>
            Contact: <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>

          <h2>2. Data Collection</h2>
          <p>
            We do not collect any personal data. The Lettre de Motivation extension works entirely locally in your browser.
          </p>
          <ul>
            <li><strong>No user account</strong>: No registration is required</li>
            <li><strong>No tracking</strong>: We do not use any analytics or tracking tools</li>
            <li><strong>No cookies</strong>: This site does not use any cookies</li>
            <li><strong>Local storage only</strong>: Your data (API key, CV, settings) is stored locally in your browser via the browser's local storage API</li>
          </ul>

          <h2>3. OpenAI API Usage</h2>
          <p>
            The extension uses the OpenAI API to generate cover letters. When you use the extension:
          </p>
          <ul>
            <li>Your OpenAI API key is stored locally in your browser</li>
            <li>Job descriptions and your CV are sent directly to OpenAI from your browser</li>
            <li>We have no access to this data</li>
            <li>OpenAI's terms of use and privacy policy apply</li>
          </ul>

          <h2>4. Security</h2>
          <p>
            All your data remains on your device. We recommend that you:
          </p>
          <ul>
            <li>Set spending limits on your OpenAI account</li>
            <li>Never share your API key</li>
            <li>Uninstall the extension if you no longer use the service</li>
          </ul>

          <h2>5. Hosting</h2>
          <p>
            This site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Under GDPR, you have the following rights:
          </p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to data portability</li>
          </ul>
          <p>
            However, since we do not collect any personal data, these rights do not apply in our case. All your data is stored locally on your device and you have full control over it.
          </p>

          <h2>7. Contact</h2>
          <p>
            For any questions regarding this privacy policy, you can contact us at:<br>
            <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>

          <h2>8. Changes</h2>
          <p>
            We reserve the right to modify this privacy policy at any time. Changes will be posted on this page with a new update date.
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
}
</style>
