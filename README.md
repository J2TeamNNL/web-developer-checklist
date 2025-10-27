# Web Developer Checklist v3.0 🚀

Modern Chrome Extension to analyze websites for best practices violations - SEO, Mobile, Accessibility, Performance, Security & Analytics.

**English** | **[Tiếng Việt](README.vi.md)**

## ✨ Features

- 🔍 **27 Checks** across 8 categories (SEO, Mobile, Usability, Accessibility, Social, Performance, Security, Analytics)
- 🌨 **Theme Switching** - Light, Dark & Auto modes
- 🌍 **Multi-language** - Vietnamese (default), English & Auto detection
- 🤖 **Auto Features** - Theme and language auto-detection based on system
- ⚡ **Fast & Modern** - Built with TypeScript + React 18 + Vite 5
- 🎯 **Manifest V3** - Latest Chrome Extension standard
- ♿ **Accessible** - WCAG 2.1 compliant UI
- 📊 **Analytics Detection** - NEW category for tracking tools
- 🎯 **Shortcut** - Press `Ctrl+Shift+D` (Windows) / `Cmd+Shift+D` (Mac) to run the extension

## 🏗️ Tech Stack

- **TypeScript 5.x** - Type safety
- **React 18** - UI framework
- **Vite** - Build tool with HMR
- **CSS Variables** - Theme system
- **Chrome Extension API** - Manifest V3

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ or npm/pnpm
- Chrome browser

### Step 1: Install Dependencies

```bash
# Using npm
npm install

# Or using pnpm (recommended)
pnpm install
```

### Step 2: Run Development Server

```bash
npm run dev
# or
pnpm dev
```

This will:
- Start Vite dev server with HMR
- Build extension to `dist/` folder
- Watch for file changes

### Step 3: Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `dist/` folder from this project
5. Extension icon should appear in toolbar!

### Step 4: Test the Extension

1. Navigate to any website (e.g., https://example.com)
2. Click the extension icon or press `Ctrl+Shift+D` (Windows) / `Cmd+Shift+D` (Mac)
3. View the checklist results

## 🛠 Development

### Available Scripts

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format

# Run tests (when implemented)
npm run test
```

### Project Structure

```
src/
├── manifest.json           # Extension manifest (V3) ✅
├── background/            # Service worker ✅
├── content/               # Content scripts ✅
├── popup/                 # Popup UI ✅
│   ├── index.html        ✅
│   ├── index.tsx         # Entry point ✅
│   ├── App.tsx           # Main component ✅
│   ├── components/       # React components ✅ (5 components)
│   ├── hooks/            # Custom hooks ✅ (3 hooks)
│   └── styles/           # CSS with themes ✅
├── shared/
│   ├── types/            # TypeScript types ✅
│   ├── constants/        # Constants & config ✅
│   ├── rules/            # Check rules ✅ (27 rules!)
│   └── utils/            # Utility functions ✅
└── assets/               # Icons ✅
public/
├── _locales/             # i18n translations ✅ (en, vi)
└── icons/                # Extension icons ✅
```

## 🎨 Theme System

The extension supports 3 theme modes using CSS Variables:

- **Light Theme** - Clean and modern
- **Dark Theme** - Easy on the eyes
- **Auto Theme** ✨ - Automatically follows system preference

Theme files located in `src/popup/styles/themes/`

Click the 🌙/☀️/🔄 icon to cycle: Light → Dark → Auto

## 🌍 Internationalization (i18n)

Supported languages:
- 🇻🇳 **Tiếng Việt (vi)** - Default ✅ (Full translation for all 27 checks)
- 🇺🇸 **English (en)** ✅
- 🤖 **Auto** ✨ - Automatic browser language detection

**Auto Language Detection:**
- Automatically selects Vietnamese if browser language is `vi-*`
- Defaults to English for other languages
- Can be manually changed in settings (coming soon)

Translation files: `public/_locales/{language}/messages.json` (~175 keys)

## 📋 Development Status

### ✅ Phase 1: Core Development (COMPLETED)
- [x] Project setup with TypeScript + Vite
- [x] Manifest V3 configuration
- [x] Theme system (Light/Dark)
- [x] i18n support (EN, VI)
- [x] 5 React components
- [x] 3 custom hooks (useTheme, useI18n, useLanguage)
- [x] 12 initial rules
- [x] Content script & background service worker

### ✅ Phase 2: Additional Rules (COMPLETED)
- [x] **SEO** - 4 new rules (Canonical, Robots Meta, Page Title, Headings)
- [x] **Performance** - 3 new rules (Image Optimization, Fonts, Resource Hints)
- [x] **Accessibility** - 3 new rules (ARIA Roles, Form Labels, Color Contrast)
- [x] **Mobile** - 2 new rules (Touch Target Size, Text Readability)
- [x] **Analytics** - NEW CATEGORY with 3 rules (GA, GTM, Facebook Pixel)
- [x] Full i18n for all new rules
- [x] **Total: 27 checks across 8 categories**

### 🎯 Production Build (COMPLETED)
- [x] TypeScript compilation successful
- [x] Production build (146KB)
- [x] Extension icons created
- [x] Ready to load in Chrome

### 📅 Next Phases

**Phase 3: UI/UX Polish** (Optional)
- [ ] Search/filter functionality
- [ ] Export report (HTML/PDF)
- [ ] Copy to clipboard feature
- [ ] Animations & transitions
- [ ] Settings page

**Phase 4: Testing & Quality** (Optional)
- [ ] Unit tests with Vitest
- [ ] Integration tests
- [ ] Manual testing on popular sites
- [ ] Code quality improvements

**Phase 5: Chrome Web Store Publishing** (Ready when you are!)
- [ ] Store listing preparation
- [ ] Screenshots & promotional images
- [ ] Privacy policy
- [ ] Submit for review

## 📊 27 Checks Detail

### 🔍 SEO (6 checks)
1. Structured Data for Google Search
2. Meta Description
3. Canonical URL
4. Robots Meta Tag
5. Page Title
6. Headings Hierarchy (H1-H6)

### 📱 Mobile (4 checks)
1. Viewport Meta Tag
2. CSS Media Queries
3. Touch Target Size (44px minimum)
4. Text Readability (font size)

### 👤 Usability (2 checks)
1. Favicon
2. Friendly URLs

### ♿ Accessibility (5 checks)
1. Image Alt Attributes
2. WAI-ARIA Landmarks
3. ARIA Roles & Labels
4. Form Labels
5. Color Contrast

### 📱 Social Media (2 checks)
1. OpenGraph Protocol
2. Apple iOS Integration

### ⚡ Performance (4 checks)
1. DOM Size
2. Image Optimization (lazy loading)
3. Fonts Loading Strategy
4. Resource Hints (preload/prefetch)

### 🔒 Security (1 check)
1. HTTPS Usage

### 📊 Analytics (3 checks) 🆕
1. Google Analytics Detection
2. Google Tag Manager
3. Facebook Pixel

## 📝 License

MIT License - see `LICENSE` file for details

## 🔗 Links

- [Original Extension](https://www.toptal.com/developers/webdevchecklist)
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/mv3/)
- [Manifest V3 Migration](https://developer.chrome.com/docs/extensions/mv3/intro/)

---

**Total Checks**: 27 across 8 categories  
**Bundle Size**: 146KB  
**Languages**: VI (default), EN  
**Keyboard Shortcut**: Ctrl+Shift+D (Windows) / Command+Shift+D (Mac)
