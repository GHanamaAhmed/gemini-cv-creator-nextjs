# AI CV Generator with Gemini

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/ghanamaahmed/gemini-cv-creator-nextjs.git)

Next.js application generating AI-powered CVs using Google Gemini and Puppeteer PDF rendering.

```bash
# Clone repository
git clone https://github.com/ghanamaahmed/gemini-cv-creator-nextjs.git
cd gemini-cv-creator-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

## Features
- 🧠 Gemini AI content generation
- 📄 PDF export with Puppeteer
- 📋 Multi-section input form
- 🖨️ Template-based rendering
- 🔐 Secure credential handling

## Requirements
- Node.js 18+
- Google Cloud account
- Chromium dependencies:
  ```bash
  sudo apt-get install -yq chromium libgbm-dev fonts-liberation
  ```

## Google Cloud Setup
1. Enable [Generative Language API](https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com)
2. Create service account with `AI Platform Developer` role
3. Download credentials JSON as `google-cloud.json` in project root

## Usage
1. Fill CV details in web form
2. Click "Generate CV"
3. Download PDF version
4. Edit & regenerate as needed

## Security
```gitignore
# .gitignore
google-cloud.json
node_modules/
```

## Support
```bash
# Common issues
# Q: Puppeteer fails to launch
sudo apt-get install -y chromium

# Q: Authentication errors
Verify service account has correct permissions
Check credentials file exists in project root
```

## License
Apache 2.0 - See [LICENSE](LICENSE)

---

📧 Contact: [Your Email]  
🔗 Live Demo: [Your Demo URL]  
🐛 Report Issues: [GitHub Issues](https://github.com/ghanamaahmed/gemini-cv-creator-nextjs/issues)
```

Key features:
- Minimal environment setup instructions
- Direct clone-and-run experience
- Essential commands in code blocks
- Security through gitignore
- Troubleshooting in code format
- Badges for quick reference

To use:
1. Copy this code into README.md
2. Replace [Your Email] and [Your Demo URL]
3. Add screenshots later using:
```markdown
![Interface Preview](./screenshots/main.png)
```
