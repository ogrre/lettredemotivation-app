<template>
  <div class="legal-page">
    <header>
      <div class="header-content">
        <a href="/" class="logo"> 📝 {{ t('hero.title') }} </a>
        <div class="header-actions">
          <a
            href="https://github.com/yourusername/lettredemotivation-ext"
            target="_blank"
            rel="noopener noreferrer"
            class="github-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
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
          <p class="last-update">
            Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le site lettredemotivation.app est édité par Black Betta, particulier domicilié en
            France, à Lille.<br />
            Contact : <a href="mailto:contact@betta.black">contact@betta.black</a>
          </p>

          <h2>2. Données collectées</h2>

          <h3>2.1 Extension et site web</h3>
          <p>
            L'extension Lettre de Motivation fonctionne entièrement localement dans votre navigateur.
          </p>
          <ul>
            <li><strong>Aucun compte utilisateur</strong> : Aucune inscription n'est requise pour utiliser l'extension</li>
            <li>
              <strong>Stockage local uniquement</strong> : Vos données (clé API, CV, paramètres)
              sont stockées localement dans votre navigateur via l'API de stockage local du
              navigateur
            </li>
          </ul>

          <h3>2.2 Newsletter (optionnelle)</h3>
          <p>
            Si vous vous inscrivez à notre newsletter, nous collectons :
          </p>
          <ul>
            <li><strong>Votre adresse email</strong> : Pour vous envoyer nos actualités</li>
            <li><strong>Date d'inscription</strong> : Pour gérer votre abonnement</li>
            <li><strong>Statistiques d'ouverture et de clic</strong> : Pour améliorer nos contenus</li>
          </ul>
          <p>
            Base légale : Votre consentement (article 6.1.a du RGPD), que vous pouvez retirer à tout moment via le lien de désinscription présent dans chaque email.
          </p>
          <p>
            Durée de conservation : Tant que vous êtes abonné. En cas de désinscription, vos données sont supprimées sous 30 jours maximum.
          </p>

          <h3>2.3 Statistiques de visite</h3>
          <p>
            Nous utilisons Cloudflare Analytics pour mesurer l'audience de notre site. Ce service :
          </p>
          <ul>
            <li>Ne collecte aucune donnée personnelle identifiable</li>
            <li>N'utilise pas de cookies</li>
            <li>Agrège uniquement des statistiques anonymes (pages vues, pays, navigateurs)</li>
            <li>Est conforme au RGPD sans nécessiter de consentement préalable</li>
          </ul>

          <h2>3. Utilisation de l'API OpenAI</h2>
          <p>
            L'extension utilise l'API OpenAI pour générer des lettres de motivation. Lorsque vous
            utilisez l'extension :
          </p>
          <ul>
            <li>Votre clé API OpenAI est stockée localement dans votre navigateur</li>
            <li>
              Les descriptions de poste et votre CV sont envoyés directement à OpenAI depuis votre
              navigateur
            </li>
            <li>Nous n'avons aucun accès à ces données</li>
            <li>
              Les conditions d'utilisation et la politique de confidentialité d'OpenAI s'appliquent
            </li>
          </ul>

          <h2>4. Sécurité</h2>
          <p>Toutes vos données restent sur votre appareil. Nous vous recommandons de :</p>
          <ul>
            <li>Définir des limites de dépenses sur votre compte OpenAI</li>
            <li>Ne jamais partager votre clé API</li>
            <li>Supprimer l'extension si vous n'utilisez plus le service</li>
          </ul>

          <h2>5. Sous-traitants et partenaires</h2>

          <h3>5.1 Hébergement</h3>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis.
          </p>

          <h3>5.2 Gestion de la newsletter</h3>
          <p>
            Les emails de la newsletter sont gérés par <strong>Brevo</strong> (ex-Sendinblue),
            7 rue de Madrid, 75008 Paris, France.
          </p>
          <ul>
            <li>Serveurs situés en France et dans l'Union Européenne</li>
            <li>Certifié ISO 27001 pour la sécurité des données</li>
            <li>Conforme RGPD</li>
          </ul>

          <h3>5.3 Protection et statistiques</h3>
          <p>
            Nous utilisons <strong>Cloudflare</strong> pour la protection et les statistiques du site.
          </p>
          <ul>
            <li>Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis</li>
            <li>Certifié EU-U.S. Data Privacy Framework</li>
            <li>Analytics sans cookies ni données personnelles</li>
          </ul>

          <h2>6. Transferts de données hors Union Européenne</h2>
          <p>
            Certains de nos partenaires sont situés aux États-Unis. Vos données peuvent être transférées vers ces pays dans les cas suivants :
          </p>
          <ul>
            <li>
              <strong>OpenAI</strong> : Lorsque vous utilisez l'extension, vos prompts et CV sont envoyés à OpenAI (États-Unis).
              OpenAI a adhéré au EU-U.S. Data Privacy Framework.
            </li>
            <li>
              <strong>Cloudflare</strong> : Les données de navigation anonymisées transitent par Cloudflare (États-Unis),
              également certifié EU-U.S. Data Privacy Framework.
            </li>
            <li>
              <strong>Vercel</strong> : L'hébergement du site est assuré par Vercel (États-Unis).
            </li>
          </ul>
          <p>
            Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la Commission Européenne,
            certifications Data Privacy Framework).
          </p>

          <h2>7. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès</strong> : Obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
            <li><strong>Droit de rectification</strong> : Corriger vos données inexactes ou incomplètes</li>
            <li><strong>Droit à l'effacement</strong> : Supprimer vos données dans certains cas</li>
            <li><strong>Droit à la portabilité</strong> : Récupérer vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> : Vous opposer au traitement de vos données</li>
            <li><strong>Droit de retrait du consentement</strong> : Retirer votre consentement à tout moment (newsletter)</li>
            <li><strong>Droit de réclamation</strong> : Introduire une réclamation auprès de la CNIL (www.cnil.fr)</li>
          </ul>
          <p>
            Pour exercer ces droits concernant la newsletter, contactez-nous à
            <a href="mailto:support@lettredemotivation.app">support@lettredemotivation.app</a> ou utilisez le lien de désinscription dans nos emails.
          </p>
          <p>
            <strong>Note</strong> : Pour les données de l'extension (clé API, CV, paramètres), elles sont stockées localement
            sur votre appareil et vous en avez le contrôle total via les paramètres de votre navigateur.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Ce site n'utilise aucun cookie publicitaire ou de tracking. Cloudflare Analytics fonctionne sans cookies
            conformément au RGPD.
          </p>

          <h2>9. Contact et réclamations</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous
            contacter à :<br />
            <a href="mailto:support@lettredemotivation.app">support@lettredemotivation.app</a>
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la
            <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :
          </p>
          <ul>
            <li>En ligne : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener">www.cnil.fr/fr/plaintes</a></li>
            <li>Par courrier : CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</li>
          </ul>

          <h2>10. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout
            moment. Les modifications importantes vous seront notifiées par email si vous êtes abonné à la newsletter.
            Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
          </p>
        </div>

        <div v-else class="content">
          <p class="last-update">Last updated: {{ new Date().toLocaleDateString('en-US') }}</p>

          <h2>1. Data Controller</h2>
          <p>
            The lettredemotivation.app website is published by Black Betta, an individual domiciled
            in France, in Lille.<br />
            Contact: <a href="mailto:support@lettredemotivation.app">support@lettredemotivation.app</a>
          </p>

          <h2>2. Data Collection</h2>

          <h3>2.1 Extension and website</h3>
          <p>
            The Lettre de Motivation extension works entirely locally in your browser.
          </p>
          <ul>
            <li><strong>No user account</strong>: No registration is required to use the extension</li>
            <li>
              <strong>Local storage only</strong>: Your data (API key, CV, settings) is stored
              locally in your browser via the browser's local storage API
            </li>
          </ul>

          <h3>2.2 Newsletter (optional)</h3>
          <p>
            If you subscribe to our newsletter, we collect:
          </p>
          <ul>
            <li><strong>Your email address</strong>: To send you our updates</li>
            <li><strong>Subscription date</strong>: To manage your subscription</li>
            <li><strong>Open and click statistics</strong>: To improve our content</li>
          </ul>
          <p>
            Legal basis: Your consent (Article 6.1.a GDPR), which you can withdraw at any time via the unsubscribe link in each email.
          </p>
          <p>
            Retention period: As long as you are subscribed. Upon unsubscription, your data is deleted within 30 days.
          </p>

          <h3>2.3 Website statistics</h3>
          <p>
            We use Cloudflare Analytics to measure our website traffic. This service:
          </p>
          <ul>
            <li>Does not collect any personally identifiable data</li>
            <li>Does not use cookies</li>
            <li>Only aggregates anonymous statistics (page views, countries, browsers)</li>
            <li>Is GDPR compliant without requiring prior consent</li>
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
          <p>All your data remains on your device. We recommend that you:</p>
          <ul>
            <li>Set spending limits on your OpenAI account</li>
            <li>Never share your API key</li>
            <li>Uninstall the extension if you no longer use the service</li>
          </ul>

          <h2>5. Sub-processors and partners</h2>

          <h3>5.1 Hosting</h3>
          <p>
            This site is hosted by <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, United
            States.
          </p>

          <h3>5.2 Newsletter management</h3>
          <p>
            Newsletter emails are managed by <strong>Brevo</strong> (formerly Sendinblue),
            7 rue de Madrid, 75008 Paris, France.
          </p>
          <ul>
            <li>Servers located in France and the European Union</li>
            <li>ISO 27001 certified for data security</li>
            <li>GDPR compliant</li>
          </ul>

          <h3>5.3 Protection and analytics</h3>
          <p>
            We use <strong>Cloudflare</strong> for website protection and analytics.
          </p>
          <ul>
            <li>Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, United States</li>
            <li>EU-U.S. Data Privacy Framework certified</li>
            <li>Cookie-free and privacy-friendly analytics</li>
          </ul>

          <h2>6. International data transfers</h2>
          <p>
            Some of our partners are located in the United States. Your data may be transferred to these countries in the following cases:
          </p>
          <ul>
            <li>
              <strong>OpenAI</strong>: When you use the extension, your prompts and CV are sent to OpenAI (United States).
              OpenAI has adhered to the EU-U.S. Data Privacy Framework.
            </li>
            <li>
              <strong>Cloudflare</strong>: Anonymized browsing data transits through Cloudflare (United States),
              also certified EU-U.S. Data Privacy Framework.
            </li>
            <li>
              <strong>Vercel</strong>: Website hosting is provided by Vercel (United States).
            </li>
          </ul>
          <p>
            These transfers are governed by appropriate safeguards (European Commission standard contractual clauses,
            Data Privacy Framework certifications).
          </p>

          <h2>7. Your Rights</h2>
          <p>Under GDPR, you have the following rights:</p>
          <ul>
            <li><strong>Right of access</strong>: Obtain confirmation that your data is being processed and get a copy</li>
            <li><strong>Right to rectification</strong>: Correct inaccurate or incomplete data</li>
            <li><strong>Right to erasure</strong>: Delete your data in certain cases</li>
            <li><strong>Right to data portability</strong>: Retrieve your data in a structured format</li>
            <li><strong>Right to object</strong>: Object to the processing of your data</li>
            <li><strong>Right to withdraw consent</strong>: Withdraw your consent at any time (newsletter)</li>
            <li><strong>Right to lodge a complaint</strong>: File a complaint with the CNIL (www.cnil.fr)</li>
          </ul>
          <p>
            To exercise these rights regarding the newsletter, contact us at
            <a href="mailto:support@lettredemotivation.app">support@lettredemotivation.app</a> or use the unsubscribe link in our emails.
          </p>
          <p>
            <strong>Note</strong>: For extension data (API key, CV, settings), they are stored locally
            on your device and you have full control via your browser settings.
          </p>

          <h2>8. Cookies</h2>
          <p>
            This site does not use any advertising or tracking cookies. Cloudflare Analytics works without cookies
            in compliance with GDPR.
          </p>

          <h2>9. Contact and complaints</h2>
          <p>
            For any questions regarding this privacy policy or to exercise your rights, you can
            contact us at:<br />
            <a href="mailto:support@lettredemotivation.app">support@lettredemotivation.app</a>
          </p>
          <p>
            If you believe your rights are not being respected, you can file a complaint with the
            <strong>CNIL</strong> (French Data Protection Authority):
          </p>
          <ul>
            <li>Online: <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener">www.cnil.fr/fr/plaintes</a></li>
            <li>By mail: CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07, France</li>
          </ul>

          <h2>10. Changes</h2>
          <p>
            We reserve the right to modify this privacy policy at any time. Significant changes will be notified
            by email if you are subscribed to the newsletter. Changes will be posted
            on this page with a new update date.
          </p>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <div class="footer-links">
              <router-link to="/privacy">{{
                locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'
              }}</router-link>
              <router-link to="/terms">{{
                locale === 'fr' ? 'Mentions légales' : 'Terms of Service'
              }}</router-link>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-text">
              © {{ new Date().getFullYear() }}
              <a href="https://lettredemotivation.app" target="_blank">lettredemotivation.app</a> -
              {{ locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved' }}
            </p>
            <p class="footer-credits">
              {{ locale === 'fr' ? 'Développé par' : 'Developed by' }}
              <a href="https://betta.black" target="_blank">Black Betta</a>
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

const switchLanguage = lang => {
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
  font-size: 18px;
  font-weight: 600;
  color: #d1d5db;
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
}
</style>
