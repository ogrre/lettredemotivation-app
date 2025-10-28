# 📝 Lettre de Motivation

Landing page and website for the **Lettre de Motivation** browser extension - An AI-powered tool to generate personalized cover letters using OpenAI's API.

🌐 **Live**: [lettredemotivation.app](https://lettredemotivation.app)

## ✨ Features

- 🌍 Multilingual support (French & English)
- 📧 Newsletter subscription (powered by Brevo)
- 📊 Privacy-friendly analytics (Cloudflare Analytics)
- 🎨 Modern, responsive design
- ⚡ Fast and lightweight
- 🔒 GDPR compliant

## 🛠️ Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Routing**: Vue Router
- **Internationalization**: Vue I18n
- **Build Tool**: Vite
- **Hosting**: Vercel
- **Analytics**: Cloudflare Analytics
- **Newsletter**: Brevo (ex-Sendinblue)

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lettredemotivation-app.git
cd lettredemotivation-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
lettredemotivation-app/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, fonts, styles
│   ├── components/   # Vue components
│   ├── locales/      # i18n translations (en.json, fr.json)
│   ├── router/       # Vue Router configuration
│   ├── views/        # Page components
│   │   ├── Home.vue
│   │   ├── Newsletter.vue
│   │   ├── Privacy.vue
│   │   └── Terms.vue
│   ├── App.vue       # Root component
│   └── main.js       # Application entry point
├── vercel.json       # Vercel configuration
└── package.json
```

## 🌐 Available Routes

- `/` - Homepage
- `/lettre` - Cover letter generator information
- `/newsletter` - Newsletter subscription
- `/privacy` - Privacy policy (GDPR compliant)
- `/terms` - Terms of service

## 🔧 Configuration

### Environment Variables

This project doesn't require environment variables for the frontend. All configurations are handled through:

- **Cloudflare**: Analytics and DNS
- **Vercel**: Deployment and hosting
- **Brevo**: Newsletter management

### Vercel Configuration

The `vercel.json` file ensures proper routing for the SPA:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code (if configured)

## 🔒 Privacy & Compliance

This website is fully **GDPR compliant** with:

- ✅ Transparent data collection practices
- ✅ Cookie-free analytics (Cloudflare)
- ✅ Clear privacy policy
- ✅ User consent for newsletter
- ✅ Right to access, rectify, and delete data
- ✅ International data transfer safeguards

For more details, see our [Privacy Policy](https://lettredemotivation.app/privacy).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Black Betta**

- Website: [betta.black](https://betta.black)
- Support: support@lettredemotivation.app

## 🙏 Acknowledgments

- [OpenAI](https://openai.com) - AI-powered cover letter generation
- [Vue.js](https://vuejs.org) - Progressive JavaScript framework
- [Vercel](https://vercel.com) - Hosting and deployment
- [Cloudflare](https://cloudflare.com) - Analytics and CDN
- [Brevo](https://brevo.com) - Email marketing platform

---

Made with ❤️ by [Black Betta](https://betta.black)
