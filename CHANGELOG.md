# Changelog

All notable changes to Web Developer Checklist will be documented in this file.

## [3.2.1] - 2025-11-02

### 🎨 UI/UX Improvements

#### Fixed
- **Theme Toggle** - Fixed dark/light mode switcher not working, now shows all 3 states (Light/Dark/Auto)
- **Language Switcher** - Fixed language toggle not updating UI (now force re-renders on change)
- **Export Function** - Fixed undefined/NA values, now only exports FAIL checks with messages
- **Filter Button** - Now displays as dropdown with clear options (All / Incomplete)

#### Improved
- **Overall UI** - Enhanced interface design with better spacing, colors, and shadows
- **Export Button** - Renamed to "📊 Export Report", styled as green success button
- **Console Logging** - Added detailed step-by-step logs with emojis for easy debugging
- **Report Bug** - Changed to Messenger link (opens j2teamnnl's Messenger) instead of copy template

#### Added
- Detailed console logs showing current step and user actions (🚀 🔍 📨 🌍 🎨 🐛)
- Direct Messenger link for bug reporting: https://www.messenger.com/t/j2teamnnl/
- FilterDropdown component with switch-style UI
- Toolbar with enhanced design (background, shadows, better layout)

---

## [3.2.0] - 2025-11-02

### 🚀 Major UX Overhaul - Full-Page App

#### Added
- **Full-Page App** - Extension now opens in a new tab instead of small popup
- **Language Switcher** - Toggle between Vietnamese, English, and Auto-detect
- **Filter Button** - Show all checks or incomplete only
- **Export to List** - Export incomplete checks as simple bullet list with copy to clipboard
- **Toast Notifications** - Visual feedback for all user actions
- **Toolbar** - Unified control panel with all new features

#### Changed
- Renamed `src/popup/` to `src/app/` for better semantics
- Updated layout from 400x600px popup to full-page centered (max 1200px)
- Improved user experience with real-time filtering and notifications
- Enhanced i18n with 9 new translation keys

#### Technical
- Added 5 new components: Toast, LanguageSwitcher, FilterButton, ExportPanel
- Added 2 new hooks: useToast, useFilter
- Updated manifest to v3.2.0, removed popup configuration
- Background script now opens new tab on icon click
- Build time: ~100ms, Bundle size: ~150KB

---

## [3.1.0] - 2025-11-02

### ✨ New Checks & Categories

#### Added
- **9 New Checks** across 4 categories
- **SEO**: XML Sitemap, Twitter Cards, Hreflang Tags
- **Security**: Content Security Policy (CSP), Mixed Content Detection
- **Code Quality** (NEW): Console Errors, Broken Links
- **Privacy** (NEW): Cookie Consent (GDPR), Privacy Policy

#### Changed
- Total checks increased from 27 to 36
- Total categories increased from 8 to 10
- Updated progress tracking to reflect 36 checks
- Content script size: 23KB → 32KB

---

## [3.0.0] - 2025-11-01

### 🎉 Initial Modern Release

#### Added
- **27 Checks** across 8 categories
- **Categories**: SEO (6), Mobile (4), Usability (2), Accessibility (5), Social (2), Performance (4), Security (1), Analytics (3)
- **Theme System**: Light, Dark, Auto modes
- **i18n Support**: Vietnamese (default), English, Auto-detection
- **Progress Tracking**: Real-time progress bar with check names
- **Debug Logger**: Chrome storage-based logging system
- **Message-based Architecture**: Content scripts communicate via Chrome messages

#### Technical
- Built with TypeScript, React 18, Vite 5
- Manifest V3 compliant
- Production bundle: 147KB (gzipped: 47KB)
- Full keyboard shortcut support: Ctrl+Shift+D (Windows) / Cmd+Shift+D (Mac)

---

## Version History

- **v3.2.0** (Nov 2, 2025) - Full-page app with language switcher, filter, export
- **v3.1.0** (Nov 2, 2025) - Added 9 checks, 2 new categories
- **v3.0.0** (Nov 1, 2025) - Modern rewrite with 27 checks, Manifest V3

---

**Inspired by:** [Toptal Web Developer Checklist](https://www.toptal.com/developers/webdevchecklist)  
**Built with ❤️ by:** [J2TeamNNL](https://github.com/j2teamnnl)
