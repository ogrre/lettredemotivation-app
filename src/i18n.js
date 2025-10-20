import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      github: 'GitHub',
      language: 'Language'
    },
    hero: {
      title: 'Lettre de Motivation',
      subtitle: 'Generate personalized cover letters with AI',
      description: 'A free and open-source browser extension that helps you create tailored cover letters using OpenAI. Your data stays private - we collect nothing.',
      cta: 'Install Extension',
      availableFor: 'Available for'
    },
    features: {
      title: 'Features',
      ai: {
        title: 'AI-Powered',
        description: 'Uses OpenAI to generate personalized cover letters based on job descriptions and your CV'
      },
      onsite: {
        title: 'On-Site Generation',
        description: 'Generate cover letters directly on job listing websites. Fill the motivation letter field instantly without copy-pasting'
      },
      privacy: {
        title: 'Privacy First',
        description: 'No data collection. Everything happens locally in your browser with your own API key'
      },
      free: {
        title: 'Free',
        description: 'Completely free to use. You only need your own OpenAI API key with no hidden costs'
      }
    },
    howto: {
      title: 'How it works',
      step1: {
        title: 'Install the Extension',
        description: 'Add the extension to Chrome or Firefox'
      },
      step2: {
        title: 'Configure your API Key',
        description: 'Add your OpenAI API key in the settings (your key stays local)'
      },
      step3: {
        title: 'Upload your CV',
        description: 'Upload your CV as a PDF file'
      },
      step4: {
        title: 'Generate',
        description: 'Paste the job description and generate your personalized cover letter'
      }
    },
    faq: {
      title: 'FAQ',
      q1: {
        question: 'Is this extension free?',
        answer: 'Yes, the extension is completely free and open source. You only need your own OpenAI API key.'
      },
      q2: {
        question: 'Where is my data stored?',
        answer: 'All your data (API key, CV, settings) is stored locally in your browser. Nothing is sent to our servers.'
      },
      q3: {
        question: 'How much does OpenAI API cost?',
        answer: 'OpenAI charges per token used. Generating a cover letter typically costs a few cents. You can set spending limits on your OpenAI account.'
      },
      q4: {
        question: 'Which browsers are supported?',
        answer: 'The extension works on Chrome, Firefox, and all Chromium-based browsers (Edge, Brave, etc.).'
      },
      q5: {
        question: 'Can I customize the generated letters?',
        answer: 'Yes, you can specify the maximum character count and choose the language (French or English).'
      },
      q6: {
        question: 'Is my OpenAI API key secure?',
        answer: 'Your API key is stored locally in your browser and never shared with third parties. We recommend using API keys with spending limits.'
      }
    },
    footer: {
      rights: 'All rights reserved',
      developedBy: 'Developed by',
      openSource: 'Open Source',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  fr: {
    nav: {
      github: 'GitHub',
      language: 'Langue'
    },
    hero: {
      title: 'Lettre de Motivation',
      subtitle: 'Générez des lettres de motivation personnalisées avec l\'IA',
      description: 'Une extension navigateur gratuite et open source qui vous aide à créer des lettres de motivation sur mesure avec OpenAI. Vos données restent privées - nous ne collectons rien.',
      cta: 'Installer l\'Extension',
      availableFor: 'Disponible pour'
    },
    features: {
      title: 'Fonctionnalités',
      ai: {
        title: 'Propulsé par l\'IA',
        description: 'Utilise OpenAI pour générer des lettres de motivation personnalisées basées sur les descriptions de poste et votre CV'
      },
      onsite: {
        title: 'Génération sur Site',
        description: 'Générez vos lettres directement sur les sites d\'offres d\'emploi. Remplissez le champ de lettre de motivation instantanément sans copier-coller'
      },
      privacy: {
        title: 'Respect de la Vie Privée',
        description: 'Aucune collecte de données. Tout se passe localement dans votre navigateur avec votre propre clé API'
      },
      free: {
        title: 'Gratuit',
        description: 'Totalement gratuit. Vous avez seulement besoin de votre propre clé API OpenAI sans frais cachés'
      }
    },
    howto: {
      title: 'Comment ça marche',
      step1: {
        title: 'Installer l\'Extension',
        description: 'Ajoutez l\'extension à Chrome ou Firefox'
      },
      step2: {
        title: 'Configurer votre Clé API',
        description: 'Ajoutez votre clé API OpenAI dans les paramètres (votre clé reste locale)'
      },
      step3: {
        title: 'Téléverser votre CV',
        description: 'Téléversez votre CV au format PDF'
      },
      step4: {
        title: 'Générer',
        description: 'Collez la description du poste et générez votre lettre de motivation personnalisée'
      }
    },
    faq: {
      title: 'FAQ',
      q1: {
        question: 'L\'extension est-elle gratuite ?',
        answer: 'Oui, l\'extension est totalement gratuite et open source. Vous avez seulement besoin de votre propre clé API OpenAI.'
      },
      q2: {
        question: 'Où sont stockées mes données ?',
        answer: 'Toutes vos données (clé API, CV, paramètres) sont stockées localement dans votre navigateur. Rien n\'est envoyé à nos serveurs.'
      },
      q3: {
        question: 'Combien coûte l\'API OpenAI ?',
        answer: 'OpenAI facture par token utilisé. Générer une lettre de motivation coûte généralement quelques centimes. Vous pouvez définir des limites de dépenses sur votre compte OpenAI.'
      },
      q4: {
        question: 'Quels navigateurs sont supportés ?',
        answer: 'L\'extension fonctionne sur Chrome, Firefox, et tous les navigateurs basés sur Chromium (Edge, Brave, etc.).'
      },
      q5: {
        question: 'Puis-je personnaliser les lettres générées ?',
        answer: 'Oui, vous pouvez spécifier le nombre maximum de caractères et choisir la langue (français ou anglais).'
      },
      q6: {
        question: 'Ma clé API OpenAI est-elle sécurisée ?',
        answer: 'Votre clé API est stockée localement dans votre navigateur et n\'est jamais partagée avec des tiers. Nous recommandons d\'utiliser des clés API avec des limites de dépenses.'
      }
    },
    footer: {
      rights: 'Tous droits réservés',
      developedBy: 'Développé par',
      openSource: 'Open Source',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: navigator.language.startsWith('fr') ? 'fr' : 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
