<template>
  <div class="home">
    <!-- Navigation -->
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
          <div class="lang-selector">
            <button
              class="lang-btn"
              @click="showLangMenu = !showLangMenu"
              @blur="showLangMenu = false"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                />
              </svg>
            </button>
            <div v-if="showLangMenu" class="lang-menu">
              <button
                class="lang-menu-item"
                :class="{ active: locale === 'en' }"
                @mousedown="setLanguage('en')"
              >
                🇺🇸 EN
              </button>
              <button
                class="lang-menu-item"
                :class="{ active: locale === 'fr' }"
                @mousedown="setLanguage('fr')"
              >
                🇫🇷 FR
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ t('hero.title') }}</h1>
        <p class="subtitle">{{ t('hero.subtitle') }}</p>
        <p class="subtitle" style="font-size: 16px; color: #6b7280; margin-bottom: 40px">
          {{ t('hero.description') }}
        </p>
        <div class="cta-buttons">
          <a
            href="https://chrome.google.com/webstore"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 190.5 190.5"
              preserveAspectRatio="xMidYMid"
              style="flex-shrink: 0"
            >
              <path
                fill="#fff"
                d="M95.252 142.873c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z"
              />
              <path
                fill="#229342"
                d="m54.005 119.07-41.24-71.43a95.227 95.227 0 0 0-.003 95.25 95.234 95.234 0 0 0 82.496 47.61l41.24-71.43v-.011a47.613 47.613 0 0 1-17.428 17.443 47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z"
              />
              <path
                fill="#fbc116"
                d="m136.495 119.067-41.239 71.43a95.229 95.229 0 0 0 82.489-47.622A95.24 95.24 0 0 0 190.5 95.248a95.237 95.237 0 0 0-12.772-47.623H95.249l-.01.007a47.62 47.62 0 0 1 23.819 6.372 47.618 47.618 0 0 1 17.439 17.431 47.62 47.62 0 0 1-.001 47.633z"
              />
              <path
                fill="#1a73e8"
                d="M95.252 132.961c20.824 0 37.705-16.881 37.705-37.706S116.076 57.55 95.252 57.55 57.547 74.431 57.547 95.255s16.881 37.706 37.705 37.706z"
              />
              <path
                fill="#e33b2e"
                d="M95.252 47.628h82.479A95.237 95.237 0 0 0 142.87 12.76 95.23 95.23 0 0 0 95.245 0a95.222 95.222 0 0 0-47.623 12.767 95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633 47.61 47.61 0 0 1 41.252-23.815z"
              />
            </svg>
            <span>{{ locale === 'fr' ? 'Installer sur Chrome' : 'Install on Chrome' }}</span>
          </a>
          <a
            href="https://addons.mozilla.org/firefox/"
            class="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 256 265"
              preserveAspectRatio="xMidYMid"
              style="flex-shrink: 0"
            >
              <defs>
                <linearGradient
                  id="firefox__a"
                  x1="181.141%"
                  y1="-109.532%"
                  x2="47.282%"
                  y2="119.817%"
                >
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="50.501%" stop-color="#FF980E" />
                  <stop offset="100%" stop-color="#FF3647" />
                </linearGradient>
                <linearGradient
                  id="firefox__b"
                  x1="114.934%"
                  y1="-15.955%"
                  x2="37.546%"
                  y2="81.901%"
                >
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="100%" stop-color="#FF980E" />
                </linearGradient>
                <linearGradient
                  id="firefox__c"
                  x1="110.118%"
                  y1="-14.194%"
                  x2="34.705%"
                  y2="107.277%"
                >
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="100%" stop-color="#FF980E" />
                </linearGradient>
                <linearGradient id="firefox__d" x1="77.917%" y1="8.935%" x2="24.026%" y2="96.089%">
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="100%" stop-color="#FF980E" />
                </linearGradient>
                <radialGradient
                  id="firefox__e"
                  cx="49.992%"
                  cy="40.812%"
                  fx="49.992%"
                  fy="40.812%"
                  r="128.824%"
                >
                  <stop offset="0%" stop-color="#FFBD4F" />
                  <stop offset="100%" stop-color="#FF980E" />
                </radialGradient>
                <radialGradient
                  id="firefox__f"
                  cx="48.594%"
                  cy="98.346%"
                  fx="48.594%"
                  fy="98.346%"
                  r="90.717%"
                >
                  <stop offset="0%" stop-color="#960E18" />
                  <stop offset="100%" stop-color="#B11927" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="firefox__g"
                  cx="49.173%"
                  cy="28.808%"
                  fx="49.173%"
                  fy="28.808%"
                  r="87.848%"
                >
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="100%" stop-color="#FF980E" />
                </radialGradient>
                <radialGradient
                  id="firefox__h"
                  cx="48.619%"
                  cy="37.181%"
                  fx="48.619%"
                  fy="37.181%"
                  r="82.245%"
                >
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="40.496%" stop-color="#FFEA28" />
                  <stop offset="64.645%" stop-color="#FFDB12" />
                  <stop offset="75.374%" stop-color="#FFC709" />
                  <stop offset="100%" stop-color="#FF980E" />
                </radialGradient>
                <radialGradient
                  id="firefox__i"
                  cx="49.876%"
                  cy="27.961%"
                  fx="49.876%"
                  fy="27.961%"
                  r="98.57%"
                >
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="50.006%" stop-color="#FF980E" />
                  <stop offset="99.987%" stop-color="#FF3647" />
                </radialGradient>
                <radialGradient
                  id="firefox__j"
                  cx="48.627%"
                  cy="98.355%"
                  fx="48.627%"
                  fy="98.355%"
                  r="90.696%"
                >
                  <stop offset="0%" stop-color="#960E18" />
                  <stop offset="100%" stop-color="#B11927" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="firefox__k"
                  cx="49.992%"
                  cy="40.812%"
                  fx="49.992%"
                  fy="40.812%"
                  r="128.824%"
                >
                  <stop offset="0%" stop-color="#FFBD4F" />
                  <stop offset="100%" stop-color="#FF980E" />
                </radialGradient>
                <linearGradient id="firefox__l" x1="70.786%" y1="12.393%" x2="41.422%" y2="75.817%">
                  <stop offset="0%" stop-color="#FFF44F" />
                  <stop offset="60.398%" stop-color="#FF980E" />
                  <stop offset="100%" stop-color="#FF3647" />
                </linearGradient>
              </defs>
              <path
                fill="url(#firefox__a)"
                d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.169 133.169 0 0 1 12.979 38.9l.023.215c-14.49-36.126-39.062-50.692-59.13-82.41a155.1 155.1 0 0 1-3.019-4.907 40.605 40.605 0 0 1-1.412-2.645 23.31 23.31 0 0 1-1.912-5.076.331.331 0 0 0-.291-.331.469.469 0 0 0-.241 0c-.016 0-.043.03-.063.037-.02.006-.063.036-.092.049l.049-.086c-32.19 18.849-43.113 53.741-44.118 71.194a64.108 64.108 0 0 0-35.269 13.593 38.336 38.336 0 0 0-3.307-2.506 59.417 59.417 0 0 1-.36-31.324 94.912 94.912 0 0 0-30.848 23.841h-.06c-5.079-6.438-4.722-27.667-4.431-32.102a22.957 22.957 0 0 0-4.279 2.272 93.435 93.435 0 0 0-12.526 10.73 111.954 111.954 0 0 0-11.98 14.375v.019-.023A108.26 108.26 0 0 0 4.841 108.92l-.171.846a203.818 203.818 0 0 0-1.26 8.003c0 .096-.02.185-.03.281a122.12 122.12 0 0 0-2.08 17.667v.662c.086 98.661 106.944 160.23 192.344 110.825a128.165 128.165 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378ZM100.322 189.031c.599.288 1.161.599 1.776.873l.089.057a68.838 68.838 0 0 1-1.865-.93Zm29.357-77.297Zm105.656-16.315v-.123l.023.136-.023-.013Z"
              />
              <path
                fill="url(#firefox__b)"
                d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.169 133.169 0 0 1 12.979 38.9v.122l.023.136a116.067 116.067 0 0 1-3.988 86.497c-14.688 31.516-50.242 63.819-105.894 62.248-60.132-1.703-113.089-46.323-122.989-104.766-1.802-9.216 0-13.888.906-21.378a95.444 95.444 0 0 0-2.06 17.684v.662c.086 98.661 106.944 160.23 192.344 110.825a128.165 128.165 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378Z"
              />
              <path
                fill="url(#firefox__c)"
                d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.169 133.169 0 0 1 12.979 38.9v.122l.023.136a116.067 116.067 0 0 1-3.988 86.497c-14.688 31.516-50.242 63.819-105.894 62.248-60.132-1.703-113.089-46.323-122.989-104.766-1.802-9.216 0-13.888.906-21.378a95.444 95.444 0 0 0-2.06 17.684v.662c.086 98.661 106.944 160.23 192.344 110.825a128.165 128.165 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378Z"
              />
              <path
                fill="url(#firefox__d)"
                d="M185.754 103.778c.278.195.536.39.797.585a69.775 69.775 0 0 0-11.904-15.525C134.815 48.999 164.208 2.457 169.165.093l.049-.073c-32.19 18.849-43.113 53.741-44.118 71.194 1.495-.103 2.976-.229 4.504-.229a64.68 64.68 0 0 1 56.154 32.793Z"
              />
              <path
                fill="url(#firefox__e)"
                d="M129.683 111.734c-.212 3.188-11.475 14.182-15.413 14.182-36.443 0-42.359 22.046-42.359 22.046 1.614 18.564 14.55 33.854 30.187 41.942.714.371 1.439.705 2.163 1.032a70.572 70.572 0 0 0 3.763 1.541 56.974 56.974 0 0 0 16.675 3.217c63.876 2.996 76.25-76.384 30.154-99.419a44.241 44.241 0 0 1 30.901 7.503A64.68 64.68 0 0 0 129.6 70.985c-1.521 0-3.009.126-4.504.229a64.108 64.108 0 0 0-35.269 13.593c1.954 1.654 4.16 3.863 8.806 8.442 8.696 8.568 31 17.443 31.05 18.485Z"
              />
              <path
                fill="url(#firefox__f)"
                d="M129.683 111.734c-.212 3.188-11.475 14.182-15.413 14.182-36.443 0-42.359 22.046-42.359 22.046 1.614 18.564 14.55 33.854 30.187 41.942.714.371 1.439.705 2.163 1.032a70.572 70.572 0 0 0 3.763 1.541 56.974 56.974 0 0 0 16.675 3.217c63.876 2.996 76.25-76.384 30.154-99.419a44.241 44.241 0 0 1 30.901 7.503A64.68 64.68 0 0 0 129.6 70.985c-1.521 0-3.009.126-4.504.229a64.108 64.108 0 0 0-35.269 13.593c1.954 1.654 4.16 3.863 8.806 8.442 8.696 8.568 31 17.443 31.05 18.485Z"
              />
              <path
                fill="url(#firefox__g)"
                d="M83.852 80.545a81.51 81.51 0 0 1 2.645 1.756 59.407 59.407 0 0 1-.36-31.324 94.926 94.926 0 0 0-30.849 23.841c.625-.017 19.216-.351 28.564 5.727Z"
              />
              <path
                fill="url(#firefox__h)"
                d="M2.471 139.411c9.89 58.443 62.857 103.063 122.989 104.766 55.652 1.574 91.205-30.732 105.894-62.248a116.067 116.067 0 0 0 3.988-86.497v-.122c0-.096-.02-.153 0-.123l.023.215c4.547 29.684-10.552 58.443-34.155 77.889l-.073.166c-45.989 37.455-90.002 22.598-98.91 16.533a64.67 64.67 0 0 1-1.865-.929c-26.814-12.817-37.891-37.247-35.517-58.198a32.912 32.912 0 0 1-30.359-19.096 48.336 48.336 0 0 1 47.117-1.891 63.821 63.821 0 0 0 48.119 1.891c-.049-1.042-22.353-9.92-31.05-18.484-4.646-4.58-6.851-6.786-8.805-8.442a38.145 38.145 0 0 0-3.307-2.507c-.761-.519-1.617-1.081-2.645-1.756-9.348-6.078-27.939-5.744-28.554-5.727h-.059c-5.079-6.438-4.722-27.667-4.431-32.101a22.862 22.862 0 0 0-4.279 2.271 93.373 93.373 0 0 0-12.526 10.73 112.062 112.062 0 0 0-12.03 14.342v.019-.023A108.26 108.26 0 0 0 4.841 108.92c-.062.261-4.616 20.167-2.37 30.491Z"
              />
              <path
                fill="url(#firefox__i)"
                d="M174.654 88.838a69.818 69.818 0 0 1 11.904 15.542 26.607 26.607 0 0 1 1.921 1.574c29.056 26.784 13.832 64.646 12.698 67.341 23.603-19.447 38.688-48.205 34.155-77.89-14.497-36.142-39.069-50.708-59.137-82.426a155.1 155.1 0 0 1-3.019-4.907 40.605 40.605 0 0 1-1.412-2.645 23.31 23.31 0 0 1-1.912-5.076.331.331 0 0 0-.291-.331.469.469 0 0 0-.241 0c-.016 0-.043.03-.063.037-.02.006-.063.036-.092.049-4.957 2.351-34.35 48.893 5.489 88.732Z"
              />
              <path
                fill="url(#firefox__j)"
                d="M188.459 105.937a26.822 26.822 0 0 0-1.921-1.574c-.261-.195-.519-.39-.797-.585a44.243 44.243 0 0 0-30.901-7.503c46.095 23.048 33.728 102.415-30.154 99.419a56.974 56.974 0 0 1-16.675-3.217 67.38 67.38 0 0 1-3.763-1.541c-.725-.331-1.449-.661-2.163-1.032l.089.057c8.908 6.081 52.907 20.938 98.91-16.534l.073-.165c1.147-2.679 16.371-40.55-12.698-67.325Z"
              />
              <path
                fill="url(#firefox__k)"
                d="M71.911 147.962s5.916-22.046 42.359-22.046c3.938 0 15.211-10.994 15.413-14.182a63.817 63.817 0 0 1-48.119-1.892 48.341 48.341 0 0 0-47.118 1.892 32.912 32.912 0 0 0 30.359 19.096c-2.374 20.955 8.703 45.385 35.517 58.198.599.288 1.161.599 1.776.873-15.65-8.085-28.573-23.375-30.187-41.939Z"
              />
              <path
                fill="url(#firefox__l)"
                d="M248.033 88.713c-5.569-13.399-16.864-27.866-25.71-32.439a133.169 133.169 0 0 1 12.979 38.9l.023.215c-14.49-36.126-39.062-50.692-59.13-82.41a155.1 155.1 0 0 1-3.019-4.907 40.605 40.605 0 0 1-1.412-2.645 23.31 23.31 0 0 1-1.912-5.076.331.331 0 0 0-.291-.331.469.469 0 0 0-.241 0c-.016 0-.043.03-.063.037-.02.006-.063.036-.092.049l.049-.086c-32.19 18.849-43.113 53.741-44.118 71.194 1.495-.103 2.976-.229 4.504-.229a64.68 64.68 0 0 1 56.154 32.793 44.241 44.241 0 0 0-30.901-7.503c46.096 23.048 33.729 102.415-30.154 99.419a56.974 56.974 0 0 1-16.675-3.217 67.38 67.38 0 0 1-3.763-1.541c-.724-.331-1.449-.661-2.163-1.032l.089.057a68.838 68.838 0 0 1-1.865-.93c.599.288 1.161.599 1.776.873-15.65-8.088-28.573-23.378-30.187-41.942 0 0 5.916-22.046 42.359-22.046 3.938 0 15.211-10.994 15.413-14.182-.05-1.042-22.354-9.92-31.05-18.485-4.646-4.579-6.852-6.785-8.806-8.442a38.336 38.336 0 0 0-3.307-2.506 59.417 59.417 0 0 1-.36-31.324 94.912 94.912 0 0 0-30.848 23.841h-.06c-5.079-6.438-4.722-27.667-4.431-32.102a22.957 22.957 0 0 0-4.279 2.272 93.435 93.435 0 0 0-12.526 10.73 111.954 111.954 0 0 0-11.98 14.375v.019-.023A108.26 108.26 0 0 0 4.841 108.92l-.171.846c-.242 1.128-1.323 6.855-1.479 8.085 0 .093 0-.096 0 0A149.15 149.15 0 0 0 1.3 135.717v.662c.086 98.661 106.944 160.23 192.344 110.825a128.165 128.165 0 0 0 62.12-89.153c.215-1.653.39-3.29.582-4.96a131.8 131.8 0 0 0-8.313-64.378Zm-12.715 6.583.024.136-.024-.136Z"
              />
            </svg>
            <span>{{ locale === 'fr' ? 'Installer sur Firefox' : 'Install on Firefox' }}</span>
          </a>
          <a
            href="https://github.com/yourusername/lettredemotivation-ext"
            class="btn btn-tertiary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span>Github</span>
          </a>
        </div>
        <p class="hero-note">
          {{
            locale === 'fr'
              ? 'Chromium, Edge et Brave utilisent le Chrome Web Store'
              : 'Chromium, Edge and Brave use the Chrome Web Store'
          }}
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>{{ t('features.title') }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>{{ t('features.ai.title') }}</h3>
            <p>{{ t('features.ai.description') }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3>{{ t('features.onsite.title') }}</h3>
            <p>{{ t('features.onsite.description') }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>{{ t('features.privacy.title') }}</h3>
            <p>{{ t('features.privacy.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section class="how-it-works">
      <div class="container">
        <h2>{{ t('howto.title') }}</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>{{ t('howto.step1.title') }}</h3>
              <p>{{ t('howto.step1.description') }}</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>{{ t('howto.step2.title') }}</h3>
              <p>{{ t('howto.step2.description') }}</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>{{ t('howto.step3.title') }}</h3>
              <p>{{ t('howto.step3.description') }}</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>{{ t('howto.step4.title') }}</h3>
              <p>{{ t('howto.step4.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Section -->
    <section class="privacy">
      <div class="container">
        <h2>{{ t('footer.privacy') }}</h2>
        <p class="subtitle">
          {{
            locale === 'fr'
              ? "Aucune donnée personnelle n'est collectée ou stockée sur nos serveurs. Tout reste local sur votre navigateur."
              : 'No personal data is collected or stored on our servers. Everything stays local in your browser.'
          }}
        </p>
        <div class="privacy-features">
          <div class="privacy-item">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>{{ locale === 'fr' ? 'Données locales' : 'Local storage' }}</span>
          </div>
          <div class="privacy-item">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
              <line x1="3" y1="3" x2="21" y2="21" stroke-width="2" />
            </svg>
            <span>{{ locale === 'fr' ? 'Pas de tracking' : 'No tracking' }}</span>
          </div>
          <div class="privacy-item">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
            <span>{{ locale === 'fr' ? 'Open source' : 'Open source' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section class="roadmap">
      <div class="container">
        <h2>{{ locale === 'fr' ? 'Feuille de route' : 'Roadmap' }}</h2>
        <p class="subtitle">
          {{
            locale === 'fr'
              ? 'Les fonctionnalités à venir pour rendre votre expérience encore meilleure'
              : 'Upcoming features to make your experience even better'
          }}
        </p>
        <div class="roadmap-grid">
          <div class="roadmap-card">
            <div class="roadmap-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>{{ locale === 'fr' ? 'Plus de langues' : 'More Languages' }}</h3>
            <p>
              {{
                locale === 'fr'
                  ? "Support pour l'espagnol, l'allemand, l'italien et plus encore"
                  : 'Support for Spanish, German, Italian and more'
              }}
            </p>
            <span class="roadmap-status coming-soon">
              {{ locale === 'fr' ? 'Bientôt' : 'Coming Soon' }}
            </span>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <h3>{{ locale === 'fr' ? "Modèles d'IA supplémentaires" : 'Additional AI Models' }}</h3>
            <p>
              {{
                locale === 'fr'
                  ? "GPT-4, Claude, Gemini et d'autres modèles au choix"
                  : 'GPT-4, Claude, Gemini and other models to choose from'
              }}
            </p>
            <span class="roadmap-status coming-soon">
              {{ locale === 'fr' ? 'Bientôt' : 'Coming Soon' }}
            </span>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3>{{ locale === 'fr' ? 'Templates personnalisés' : 'Custom Templates' }}</h3>
            <p>
              {{
                locale === 'fr'
                  ? 'Créez et sauvegardez vos propres modèles de lettres'
                  : 'Create and save your own letter templates'
              }}
            </p>
            <span class="roadmap-status planned">
              {{ locale === 'fr' ? 'Planifié' : 'Planned' }}
            </span>
          </div>

          <div class="roadmap-card">
            <div class="roadmap-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>{{ locale === 'fr' ? 'Historique des lettres' : 'Letter History' }}</h3>
            <p>
              {{
                locale === 'fr'
                  ? 'Accédez à vos lettres précédentes et réutilisez-les'
                  : 'Access your previous letters and reuse them'
              }}
            </p>
            <span class="roadmap-status planned">
              {{ locale === 'fr' ? 'Planifié' : 'Planned' }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="container">
        <h2>{{ t('faq.title') }}</h2>
        <div class="faq-list">
          <div class="faq-item">
            <div class="faq-question">{{ t('faq.q1.question') }}</div>
            <div class="faq-answer">{{ t('faq.q1.answer') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question">{{ t('faq.q2.question') }}</div>
            <div class="faq-answer">{{ t('faq.q2.answer') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question">{{ t('faq.q3.question') }}</div>
            <div class="faq-answer">{{ t('faq.q3.answer') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question">{{ t('faq.q4.question') }}</div>
            <div class="faq-answer">{{ t('faq.q4.answer') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question">{{ t('faq.q5.question') }}</div>
            <div class="faq-answer">{{ t('faq.q5.answer') }}</div>
          </div>
          <div class="faq-item">
            <div class="faq-question">{{ t('faq.q6.question') }}</div>
            <div class="faq-answer">{{ t('faq.q6.answer') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <h2>{{ locale === 'fr' ? 'Restez informé' : 'Stay Updated' }}</h2>
          <p class="subtitle">
            {{
              locale === 'fr'
                ? 'Recevez les dernières mises à jour et nouvelles fonctionnalités'
                : 'Get the latest updates and new features'
            }}
          </p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <input
              v-model="email"
              type="email"
              :placeholder="locale === 'fr' ? 'Votre adresse email' : 'Your email address'"
              required
              class="newsletter-input"
            />
            <button type="submit" class="newsletter-btn">
              {{ locale === 'fr' ? "S'inscrire" : 'Subscribe' }}
            </button>
          </form>
          <p class="newsletter-note">
            {{
              locale === 'fr'
                ? 'Pas de spam. Désabonnez-vous à tout moment.'
                : 'No spam. Unsubscribe anytime.'
            }}
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <div class="footer-links">
              <router-link to="/privacy">{{ t('footer.privacy') }}</router-link>
              <router-link to="/terms">{{ t('footer.terms') }}</router-link>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-text">
              © {{ new Date().getFullYear() }}
              <a href="https://lettredemotivation.app" target="_blank">lettredemotivation.app</a> -
              {{ t('footer.rights') }}
            </p>
            <p class="footer-credits">
              {{ t('footer.developedBy') }}
              <a href="https://betta.black" target="_blank">Black Betta</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const showLangMenu = ref(false)
const email = ref('')

const setLanguage = lang => {
  locale.value = lang
  showLangMenu.value = false
}

const subscribeNewsletter = () => {
  // TODO: Implement newsletter subscription
  alert(
    locale.value === 'fr'
      ? `Merci ! Vous serez bientôt inscrit avec l'email: ${email.value}`
      : `Thank you! You will be subscribed with email: ${email.value}`
  )
  email.value = ''
}

// Intersection Observer for section animations
let observer = null

onMounted(() => {
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, options)

  // Observe all sections except newsletter
  const sections = document.querySelectorAll('section:not(.newsletter)')
  sections.forEach(section => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.home {
  min-height: 100vh;
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

.lang-selector {
  position: relative;
}

.lang-btn {
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
  cursor: pointer;
  padding: 0;
}

.lang-btn:hover {
  background: #1a1a1a;
  color: #e5e7eb;
  border-color: #3a3a3a;
}

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  width: max-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.lang-menu-item {
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  color: #9ca3af;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  display: block;
  white-space: nowrap;
}

.lang-menu-item:hover {
  background: #1a1a1a;
  color: #e5e7eb;
}

.lang-menu-item.active {
  color: #e5e7eb;
  background: #1a1a1a;
}

.cta-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  border: 1px solid;
}

.btn svg {
  flex-shrink: 0;
}

.btn-primary {
  background: #1a1a1a;
  color: white;
  border-color: #2a2a2a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover {
  background: #232323;
  border-color: #3a3a3a;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.btn-secondary {
  background: #1a1a1a;
  color: #e5e7eb;
  border-color: #2a2a2a;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.btn-secondary:hover {
  background: #232323;
  border-color: #3a3a3a;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.btn-tertiary {
  background: transparent;
  color: #9ca3af;
  border-color: #2a2a2a;
}

.btn-tertiary:hover {
  background: #1a1a1a;
  color: #e5e7eb;
  border-color: #3a3a3a;
}

.hero-note {
  margin-top: 12px;
  font-size: 13px;
  color: #6b7280;
  text-align: center;
}

/* Roadmap Section */
.roadmap {
  padding: 80px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%);
  text-align: center;
}

.roadmap h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #e5e7eb;
}

.roadmap .subtitle {
  font-size: 18px;
  color: #9ca3af;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.6;
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.roadmap-card {
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 30px;
  position: relative;
  text-align: left;
}

.roadmap-card:hover {
  border-color: #3a3a3a;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
}

.roadmap-icon {
  width: 48px;
  height: 48px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #10b981;
}

.roadmap-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #e5e7eb;
}

.roadmap-card p {
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 20px;
}

.roadmap-status {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.roadmap-status.coming-soon {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.roadmap-status.planned {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

/* Smooth Section Transitions */
section:not(.newsletter) {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

section:not(.newsletter).visible {
  opacity: 1;
  transform: translateY(0);
}

/* Animation keyframes for fallback */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Newsletter section without animation for smooth scroll to footer */
section.newsletter {
  opacity: 1;
  transform: none;
  animation: none;
}

/* Card hover effects with smooth transitions */
.feature-card,
.roadmap-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover,
.roadmap-card:hover {
  transform: translateY(-6px) scale(1.02);
}

/* Newsletter Section */
.newsletter {
  padding: 60px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%);
  text-align: center;
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #e5e7eb;
}

.newsletter .subtitle {
  font-size: 16px;
  color: #9ca3af;
  margin-bottom: 32px;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.newsletter-input {
  flex: 1;
  padding: 14px 20px;
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  color: #e5e7eb;
  font-size: 15px;
  transition: all 0.2s;
  outline: none;
}

.newsletter-input:focus {
  border-color: #3a3a3a;
  background: #1a1a1a;
}

.newsletter-input::placeholder {
  color: #6b7280;
}

.newsletter-btn {
  padding: 14px 32px;
  background: #1a1a1a;
  color: #e5e7eb;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.newsletter-btn:hover {
  background: #232323;
  border-color: #3a3a3a;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.newsletter-note {
  font-size: 13px;
  color: #6b7280;
}

@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    justify-content: center;
    width: 100%;
  }

  .roadmap-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-btn {
    width: 100%;
  }
}
</style>
