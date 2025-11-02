# Web Developer Checklist 🚀

Chrome Extension to check websites for best practices - SEO, Performance, Accessibility, Security and more.

**English** | **[Tiếng Việt](README.vi.md)**

> Inspired by [Toptal Web Developer Checklist](https://www.toptal.com/developers/webdevchecklist)

## ✨ Features

- 🔍 **36 checks** across 10 categories (SEO, Mobile, Accessibility, Performance, Security, Analytics, Privacy...)
- 🖥️ **Full-page UI** - Opens in new tab, easy to view
- 🌍 **Multi-language** - Vietnamese, English, auto-detect
- 🔍 **Filter & Export** - Show only failures, copy to clipboard
- 🎨 **Themes** - Light, Dark, Auto
- 📊 **Progress tracking** - Real-time analysis progress
- 🔔 **Notifications** - Visual feedback for actions

## 📦 Installation

### From Source

1. Download or clone this repo
2. Run build:
   ```bash
   npm install
   npm run build
   ```
3. Open Chrome → `chrome://extensions/`
4. Enable **Developer mode**
5. Click **Load unpacked** → Select `dist/` folder

### From Chrome Web Store

_Coming soon..._

## 🚀 Usage

1. Click extension icon in Chrome toolbar
2. New tab opens with analysis interface
3. Wait for analysis to complete (progress bar 0% → 100%)
4. Review results by category
5. Click on any check to see details and recommendations

### Features

- **Change language**: Click VI/EN/🌐 buttons
- **Filter**: Click Filter button to show only failed checks
- **Export**: Click Export → Copy list to clipboard
- **Theme**: Click 🌙 to switch light/dark

## 📋 Check Categories

- **SEO** (9 checks) - Meta tags, structured data, sitemap...
- **Mobile** (4 checks) - Viewport, responsive, touch targets...
- **Accessibility** (5 checks) - ARIA, contrast, landmarks...
- **Performance** (4 checks) - Images, fonts, DOM size...
- **Security** (3 checks) - HTTPS, CSP, mixed content...
- **Analytics** (3 checks) - GA, GTM, Facebook Pixel...
- **Code Quality** (2 checks) - Console errors, broken links...
- **Privacy** (2 checks) - Cookie consent, privacy policy...
- **Usability** (2 checks) - Favicon, friendly URLs...
- **Social** (2 checks) - OpenGraph, iOS integration...

## 🛠️ Tech Stack

- TypeScript + React 18
- Vite 5
- Chrome Extension Manifest V3

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

## 📄 License

MIT License - see [LICENSE](LICENSE) file

## 💝 Credits

**Vibe code with love** by [J2TeamNNL](https://github.com/j2teamnnl)

**Inspired by:** [Toptal Web Developer Checklist](https://www.toptal.com/developers/webdevchecklist)
