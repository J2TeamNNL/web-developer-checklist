# Web Developer Checklist - TODO Phát Triển Lại (Modern Version)

## 🎯 Mục Tiêu
Phát triển lại tiện ích Chrome Extension **Web Developer Checklist** phân tích các trang web để kiểm tra tuân thủ best practices với công nghệ hiện đại nhất.

## 📊 Thông Tin Extension Gốc
- **Tên**: Web Developer Checklist
- **Phiên bản gốc**: 2.0.3
- **Tác giả gốc**: Toptal
- **Manifest Version gốc**: 2 → **Nâng cấp lên V3**
- **Mô tả**: Phân tích website để phát hiện vi phạm best practices

## ✨ Tính Năng Mới (So Với Bản Gốc)
- 🌍 **Đa ngôn ngữ (i18n)** - Hỗ trợ nhiều ngôn ngữ
- 🎨 **Theme switching** - Light mode & Dark mode
- 📱 **Responsive design** - Tối ưu cho nhiều kích thước
- ♿ **Accessibility** - WCAG 2.1 compliant
- ⚡ **Performance** - Fast & lightweight
- 🔒 **Privacy-first** - Không thu thập dữ liệu người dùng
- 🎭 **Modern UI/UX** - Clean, intuitive interface

---

## 📋 DANH SÁCH CÔNG VIỆC ĐÃ HOÀN THÀNH ✅

### Phase 1 & 2: Core Development (COMPLETED)
- ✅ **Project Setup với TypeScript + Vite**
- ✅ **Manifest V3 configuration** 
- ✅ **27 Check Rules đã implement:**
  - SEO (6): Structured Data, Meta Description, Canonical URL, Robots Meta, Page Title, Headings
  - Mobile (4): Viewport, Media Queries, Touch Target Size, Text Readability
  - Usability (2): Favicon, Friendly URLs
  - Accessibility (5): Image Alt, Landmarks, ARIA Roles, Form Labels, Color Contrast
  - Social (2): OpenGraph, iOS Integration
  - Performance (4): DOM Size, Image Optimization, Fonts Loading, Resource Hints
  - Security (1): HTTPS
  - Analytics (3): Google Analytics, GTM, Facebook Pixel
- ✅ **Theme System** (Light/Dark/Auto)
- ✅ **i18n Support** (Vietnamese default, English, Auto detection)
- ✅ **Progress Tracking** với realtime updates
- ✅ **Debug Logger System** với chrome.storage
- ✅ **Message-based Architecture** (content scripts)
- ✅ **Production Build** (~147KB)

---

## 🆕 CHECKS CẦN BỔ SUNG (Best Practices 2025)

### 1. 🔒 Security (Priority: HIGH)
- [ ] **Content Security Policy (CSP)** - Check for CSP headers
- [ ] **X-Frame-Options** - Clickjacking protection
- [ ] **X-Content-Type-Options** - MIME type sniffing protection
- [ ] **HTTP Strict Transport Security (HSTS)** - Force HTTPS
- [ ] **Subresource Integrity (SRI)** - Check for SRI on external scripts
- [ ] **Permissions Policy** - Control browser features
- [ ] **Mixed Content** - Check for HTTP resources on HTTPS pages

### 2. ⚡ Performance (Priority: HIGH)
- [ ] **Core Web Vitals** - LCP, FID, CLS, INP, TTFB
- [ ] **WebP/AVIF Images** - Modern image formats
- [ ] **Compression** - Check gzip/brotli encoding
- [ ] **HTTP/2 or HTTP/3** - Modern protocols
- [ ] **Service Worker** - Offline support
- [ ] **Resource Bundling** - JS/CSS optimization
- [ ] **Critical CSS** - Inline critical path CSS
- [ ] **Render-blocking Resources** - Detect blocking scripts/styles

### 3. 📱 PWA & Modern Web (Priority: MEDIUM)
- [ ] **Web App Manifest** - PWA support
- [ ] **Service Worker Registration**
- [ ] **Offline Page** - Fallback for offline
- [ ] **Push Notifications Support**
- [ ] **Add to Home Screen** - A2HS criteria
- [ ] **Theme Color** - Browser chrome customization

### 4. 🔍 SEO & Crawlability (Priority: HIGH) 
- [ ] **XML Sitemap** - Check for sitemap.xml
- [ ] **Schema.org Validation** - Validate structured data
- [ ] **Hreflang Tags** - Multi-language SEO
- [ ] **Pagination Tags** - rel="prev"/"next"
- [ ] **Twitter Cards** - Twitter metadata
- [ ] **JSON-LD** - Structured data format
- [ ] **Breadcrumbs** - Navigation schema

### 5. ♿ Advanced Accessibility (Priority: HIGH)
- [ ] **Keyboard Navigation** - Tab order & focus management
- [ ] **Screen Reader Testing** - NVDA/JAWS compatibility
- [ ] **Focus Indicators** - Visible focus states
- [ ] **Skip Links** - Skip to main content
- [ ] **Reduced Motion** - prefers-reduced-motion support
- [ ] **High Contrast Mode** - Windows high contrast
- [ ] **Text Spacing** - WCAG 2.1 1.4.12

### 6. 🌐 Code Quality & Validation (Priority: MEDIUM)
- [ ] **HTML5 Validation** - W3C validator
- [ ] **CSS Validation** - CSS validator
- [ ] **JavaScript Errors** - Console error detection
- [ ] **Broken Links** - 404 detection
- [ ] **Deprecated APIs** - Check for deprecated features
- [ ] **ES Module Support** - Modern JS modules

### 7. 🎯 Modern Web APIs (Priority: LOW)
- [ ] **Web Share API** - Native sharing
- [ ] **Payment Request API** - Web payments
- [ ] **Web Authentication** - WebAuthn/Passkeys
- [ ] **Permissions API** - Permission states
- [ ] **Battery Status** - Battery API usage
- [ ] **Network Information** - Connection type

### 8. 📊 Analytics & Privacy (Priority: MEDIUM)
- [ ] **Cookie Consent** - GDPR compliance
- [ ] **Privacy Policy Link** - Check for privacy page
- [ ] **Third-party Scripts** - List all trackers
- [ ] **DNS Prefetching** - Privacy implications
- [ ] **Referrer Policy** - Control referrer info

### 9. 🎨 UI/UX Best Practices (Priority: MEDIUM)
- [ ] **Dark Mode Support** - prefers-color-scheme
- [ ] **Custom 404 Page** - Error page exists
- [ ] **Search Functionality** - Site search
- [ ] **Print Stylesheet** - Print-friendly CSS
- [ ] **Loading States** - Skeleton screens/spinners
- [ ] **Error Handling** - User-friendly errors

### 10. 🔧 DevOps & Monitoring (Priority: LOW)
- [ ] **robots.txt Validation** - Proper format
- [ ] **humans.txt** - Team credits
- [ ] **Security.txt** - Security contact info
- [ ] **Status Page Link** - Service status
- [ ] **Version Headers** - X-Version headers

---

## 📊 SUMMARY

### Đã Hoàn Thành
- ✅ **27/27 checks cơ bản** từ Phase 1 & 2
- ✅ **8/8 categories** đã implement
- ✅ **All core features** hoạt động

### Cần Bổ Sung (Theo Best Practices 2025)
- 🔴 **~70+ checks mới** cần thêm
- 🔴 **Core Web Vitals** - Quan trọng cho SEO
- 🔴 **Security headers** - Bảo mật hiện đại
- 🔴 **PWA support** - Progressive Web Apps
- 🔴 **Advanced accessibility** - WCAG 2.1 AA

### Priority Order
1. **Security & CSP checks** (Bảo mật)
2. **Core Web Vitals** (Performance)
3. **Advanced SEO** (XML Sitemap, Twitter Cards)
4. **Accessibility WCAG 2.1** (Keyboard, Screen readers)
5. **PWA & Modern APIs** (Optional)

---

## 🎯 V3.2 - FULL-PAGE APP UX OVERHAUL (In Progress)

### Major Changes
- [ ] **Bỏ Popup** - Chuyển sang Full-Page App
- [ ] **Language Switcher** - Toggle VI/EN/Auto với notification
- [ ] **Filter Button** - Show All / Incomplete Only
- [ ] **Export to List** - Simple bullet list với Copy button
- [ ] **Toast Notifications** - User feedback cho mọi actions

### UI/UX Features
- [ ] Click extension icon → Mở tab mới (không còn popup nhỏ)
- [ ] Full-width layout (max-width: 1200px, centered)
- [ ] Toolbar: Theme + Language + Filter + Export buttons
- [ ] Giữ dropdown categories layout hiện tại
- [ ] Toast notifications: top-right, auto-dismiss 3s

### New Components
- [ ] LanguageSwitcher.tsx - Toggle ngôn ngữ
- [ ] FilterButton.tsx - Toggle filter
- [ ] ExportPanel.tsx - Export danh sách + Copy
- [ ] Toast.tsx - Notification system

### New Hooks
- [ ] useFilter.ts - Filter logic (hide PASS checks)
- [ ] useExport.ts - Export to bullet list + Copy

### Export Format
```
- Meta Description (FAIL)
- Page Title (NA)
- XML Sitemap (FAIL)
```

### i18n Keys Cần Thêm
- language_switcher, filter_all, filter_incomplete
- export_button, copy_button
- toast_copied, toast_language_changed, toast_filter_toggled

**Estimate:** 5-6 hours  
**Status:** Planning → Implementation  
**See:** V3.2_PLAN.md for detailed specs
  ├── content/
  ├── popup/
  ├── shared/
  │   ├── components/
  │   ├── hooks/
  │   ├── utils/
  │   ├── types/
  │   ├── constants/
  │   └── i18n/
  ├── styles/
  │   ├── themes/
  │   └── variables/
  └── assets/
  ```

#### 1.2 Manifest V3 Configuration
- [ ] **Tạo manifest.json với Manifest V3**
  - `manifest_version: 3`
  - Metadata: name, version, description với i18n support
  - Icons cho nhiều sizes (16, 32, 48, 128)
  
- [ ] **Permissions configuration**
  - `activeTab` - truy cập tab hiện tại
  - `scripting` - inject scripts động
  - `storage` - lưu settings (theme, language)
  - Host permissions: `"https://*/"`, `"http://*/"`
  
- [ ] **Action (browser_action thay thế)**
  - Default popup: `popup.html`
  - Default icon với theme variants
  - Default title với i18n
  
- [ ] **Background Service Worker**
  - Thay thế background scripts bằng service worker
  - Type: "module" để dùng ES modules
  
- [ ] **Commands & Keyboard Shortcuts**
  - Default: `Alt+W` (Windows/Linux) / `Command+W` (Mac)
  - Configurable trong extension settings
  
- [ ] **i18n configuration**
  - `default_locale`: "en"
  - Tạo `_locales/` folder structure

#### 1.3 Build System & Development Tools
- [ ] **Build tool setup (Vite hoặc Webpack 5)**
  - Chọn Vite cho speed và modern features
  - Config cho multiple entry points (popup, content, background)
  - Asset handling (images, fonts, SVG)
  - CSS preprocessing (SCSS hoặc PostCSS)
  
- [ ] **TypeScript configuration**
  - Strict mode enabled
  - Type definitions cho Chrome Extension API
  - Path mapping cho clean imports
  
- [ ] **Hot Module Replacement (HMR)**
  - Setup HMR cho development
  - Auto-reload extension khi code thay đổi
  - Preserve extension state khi reload
  
- [ ] **Build scripts**
  - `npm run dev` - development với watch mode
  - `npm run build` - production build với minification
  - `npm run build:zip` - tạo zip file cho Chrome Web Store
  
- [ ] **Code Quality Tools**
  - ESLint với config hiện đại (Airbnb hoặc Standard)
  - Prettier cho code formatting
  - Husky + lint-staged cho pre-commit hooks
  - TypeScript strict checks

#### 1.4 State Management & Data Flow
- [ ] **Storage Strategy**
  - Sử dụng `chrome.storage.sync` cho user preferences
  - Sử dụng `chrome.storage.local` cho cache
  - Implement storage wrapper với TypeScript types
  
- [ ] **State Management**
  - Context API (nếu dùng React) hoặc Vuex/Pinia (nếu dùng Vue)
  - Global state cho: theme, language, user settings
  - Local state cho: check results, UI state
  
- [ ] **Message Passing Architecture**
  - Define message types với TypeScript interfaces
  - Content Script ↔ Service Worker ↔ Popup
  - Error handling cho failed messages

---

### 2. 🎨 UI/UX Design & Components

#### 2.1 Theme System Implementation
- [ ] **Design Token System**
  - Tạo CSS variables cho colors, spacing, typography
  - Light theme color palette:
    - Background: whites & light grays
    - Primary: blues
    - Success: greens
    - Error: reds
    - Text: dark grays
  - Dark theme color palette (based on code gốc):
    - Background: `#262d3d`, `#455065`
    - Primary: `#204ecf`
    - Success: `#00cc83`
    - Error: `#d42551`
    - Text: whites & light grays
  
- [ ] **Theme Switching Mechanism**
  - Toggle button trong popup header
  - Lưu preference vào `chrome.storage.sync`
  - Apply theme ngay lập tức (không reload)
  - Smooth transition animation giữa themes
  - Icon: 🌙 (dark mode) / ☀️ (light mode)
  
- [ ] **Theme Files Structure**
  - `themes/light.css` - Light mode variables
  - `themes/dark.css` - Dark mode variables
  - `themes/base.css` - Common styles
  - Dynamic theme loading logic

#### 2.2 Internationalization (i18n) Setup
- [ ] **i18n Framework**
  - Sử dụng Chrome Extension i18n API: `chrome.i18n`
  - Hoặc library: `i18next` cho advanced features
  - React: `react-i18next` / Vue: `vue-i18n`
  
- [ ] **Language Files Structure**
  ```
  _locales/
  ├── en/
  │   └── messages.json
  ├── vi/
  │   └── messages.json
  ├── ja/
  │   └── messages.json
  └── zh_CN/
      └── messages.json
  ```
  
- [ ] **Translation Keys Organization**
  - UI labels: `ui_*`
  - Check categories: `category_*`
  - Check items: `check_*`
  - Descriptions: `desc_*`
  - Error messages: `error_*`
  
- [ ] **Language Switcher**
  - Dropdown menu trong popup (có thể trong settings)
  - Ngôn ngữ hỗ trợ ban đầu:
    - 🇺🇸 English (en)
    - 🇻🇳 Tiếng Việt (vi)
    - 🇯🇵 日本語 (ja)
    - 🇨🇳 简体中文 (zh_CN)
  - Auto-detect browser language làm default
  - Lưu preference vào storage

#### 2.3 Popup Interface Components
- [ ] **Header Component**
  - Logo (responsive size)
  - Title (i18n: `__MSG_extensionName__`)
  - Theme toggle button
  - Language selector button/dropdown
  - Minimize/expand animation
  
- [ ] **Settings Bar (Optional)**
  - Quick access settings
  - Export results button
  - Refresh/re-check button
  
- [ ] **Results Display Area**
  - Scrollable container (max-height: ~420px)
  - Smooth scroll behavior
  - Custom scrollbar styling (per theme)
  
- [ ] **Category Sections**
  - Collapsible category headers
  - Category icons/emojis:
    - 🔍 SEO
    - 📱 Mobile
    - 👤 Usability
    - ♿ Accessibility
    - 📱 Social Media
    - ⚡ Performance
  - Category summary: X/Y checks passed
  
- [ ] **Check Items**
  - 3 states với visual indicators:
    - ✅ Pass - green/`#00cc83`
    - ❌ Fail - red/`#d42551`
    - ❓ N/A - orange/`#e59c01`
  - Click to expand/collapse details
  - Smooth expand animation
  - Icons: check, cross, question mark (SVG)
  
- [ ] **Check Item Details**
  - Description text (i18n)
  - "Learn more" link
  - Code gốc: OpenGraph có visual breakdown
  - Copy button cho technical info
  
- [ ] **Progress Bar Component**
  - Animated width transition
  - Color changes based on percentage:
    - 0-50%: red
    - 51-80%: orange
    - 81-100%: green
  - Text: "Checks passed: X/Y" (i18n)
  - Percentage text display
  
- [ ] **Footer Component**
  - "More info" link (i18n)
  - Extension version
  - Optional: GitHub/feedback link

#### 2.4 Modern UI Enhancements
- [ ] **Microinteractions**
  - Hover effects trên clickable elements
  - Ripple effect khi click
  - Loading states với skeleton screens
  - Success/error toast notifications
  
- [ ] **Animations**
  - Fade in khi popup opens
  - Slide/expand cho collapsible items
  - Progress bar fill animation
  - Theme transition animation
  
- [ ] **Responsive Design**
  - Min width: 320px, Max width: 400px
  - Flexible height based on content
  - Touch-friendly (44px min touch targets)
  
- [ ] **Icons & Assets**
  - SVG icons cho scalability
  - Icons cần thiết:
    - check.svg, cross.svg, question.svg
    - arrow-right.svg, chevron-down.svg
    - sun.svg (light theme), moon.svg (dark theme)
    - globe.svg (language selector)
    - refresh.svg, export.svg
    - category icons
  - Logo variants cho light/dark themes
  
- [ ] **Typography**
  - System font stack cho performance
  - Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", ...`
  - Hoặc web font: Inter, Roboto (load optimized)
  - Font sizes: responsive scale
  - Line heights cho readability

---

### 3. 🔍 Rules Engine & Checking Logic

#### 3.1 Core Rules Architecture
- [ ] **Rule Definition System**
  - Interface cho mỗi rule: `RuleDefinition<T>`
  - Properties: id, category, name, description, check function
  - Return type: `CheckResult` với status, message, details
  - TypeScript types cho type safety
  
- [ ] **Rule Categories Organization**
  - Enum hoặc constants cho categories
  - Category metadata: name (i18n), icon, color
  - Group rules by category
  
- [ ] **Rule Execution Engine**
  - Run all rules parallel khi có thể
  - Sequential cho rules có dependencies
  - Timeout mechanism (max 5s per rule)
  - Error handling không block other rules
  - Progress tracking khi rules execute
  
- [ ] **Caching Strategy**
  - Cache results trong session
  - Invalidate khi URL changes
  - Cache external requests (robots.txt, etc.)

#### 3.2 SEO Checks (🔍)
- [ ] **Structured Data (Schema.org)**
  - Kiểm tra microdata: `document.querySelector("[itemscope]")`
  - Kiểm tra JSON-LD: `script[type='application/ld+json']`
  - Parse và validate schema types
  - Hiển thị schema types found
  - Link: http://schema.org/
  
- [ ] **Meta Description**
  - Check: `head > meta[name="description"]`
  - Validate content không empty
  - Check length: 150-160 characters (optimal)
  - Show preview của description
  - Link: https://moz.com/learn/seo/meta-description
  
- [ ] **Page Title**
  - Check `<title>` tag exists
  - Validate length: 50-60 characters
  - Không duplicate với description
  
- [ ] **Robots.txt**
  - Fetch: `${origin}/robots.txt`
  - Check status code 200
  - Parse và show basic info (user-agents, directives)
  - Link: http://tools.seobook.com/robots-txt/
  
- [ ] **XML Sitemap**
  - Check trong robots.txt
  - Hoặc try fetch: `/sitemap.xml`
  - Validate format nếu found
  
- [ ] **Canonical URL**
  - Check: `link[rel="canonical"]`
  - Validate URL format
  - Check không self-referencing incorrectly

#### 3.3 Mobile Checks (📱)
- [ ] **Viewport Meta Tag**
  - Check: `meta[name="viewport"]`
  - Validate content có `width=device-width`
  - Check `initial-scale=1`
  - Link: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
  
- [ ] **CSS Media Queries**
  - Check inline `<style>` tags cho `@media`
  - Check `<link media="...">` attributes (not just "screen")
  - Fetch external stylesheets và parse
  - Check `CSSMediaRule` trong styleSheets
  - Báo responsive breakpoints found
  - Link: http://cssmediaqueries.com/
  
- [ ] **Touch Icons (Mobile)**
  - Apple: `link[rel="apple-touch-icon"]`
  - Android: check manifest.json có icons
  - Microsoft: `meta[name="msapplication-TileImage"]`
  
- [ ] **Mobile-Friendly Text Size**
  - Check font-size không quá nhỏ (<12px)
  - Scan computed styles của text elements

#### 3.4 Usability Checks (👤)
- [ ] **Favicon**
  - Check: `link[rel="icon"]` hoặc `link[rel="shortcut icon"]`
  - Check: `meta[itemprop="image"]`
  - Fallback: fetch `/favicon.ico` (AJAX)
  - Validate image format (ico, png, svg)
  - Link: http://www.xiconeditor.com/
  
- [ ] **Friendly URLs**
  - Check URL structure
  - Avoid query params `?` (code gốc rule)
  - Prefer dashes over underscores
  - No excessive parameters
  - Link: http://www.techterms.com/definition/friendly_url
  
- [ ] **HTML Validation**
  - Call W3C validator API: `validator.nu`
  - Parse JSON response
  - Count errors vs warnings
  - Show error count badge
  - Link to full report
  - Link: http://validator.nu/
  
- [ ] **404 Error Page**
  - Detect nếu đang ở 404 page
  - Check custom 404 vs default
  
- [ ] **Language Declaration**
  - Check: `<html lang="...">` attribute
  - Validate language code format

#### 3.5 Accessibility Checks (♿)
- [ ] **WAI-ARIA Landmarks**
  - Check roles: `[role]` attributes
  - Check semantic HTML5: `main`, `header`, `footer`, `nav`, `aside`, `section`, `article`
  - Count landmarks found
  - Recommend missing landmarks
  - Link: http://accessibility.oit.ncsu.edu/blog/2011/06/30/using-aria-landmarks-a-demonstration/
  
- [ ] **Image Alt Attributes**
  - Query: `img:not([alt])`
  - Count images without alt
  - List problematic images (src preview)
  - Check alt không empty string
  - Link: http://accessibility.psu.edu/images
  
- [ ] **Form Labels**
  - Check all `<input>` có associated `<label>`
  - Check via `for` attribute hoặc wrapping
  - Aria-label as alternative
  
- [ ] **Heading Hierarchy**
  - Check h1-h6 structure
  - Warn nếu skip levels (h1 → h3)
  - Recommend chỉ 1 h1 per page
  
- [ ] **Color Contrast**
  - Sample text elements
  - Check contrast ratio (WCAG AA: 4.5:1)
  - Use computed styles
  
- [ ] **Keyboard Navigation**
  - Check interactive elements có `tabindex`
  - Warn về `tabindex` > 0
  - Check focus styles not disabled

#### 3.6 Social Media Integration (📱)
- [ ] **OpenGraph Protocol**
  - Required tags check:
    - `meta[property="og:title"]`
    - `meta[property="og:type"]`
    - `meta[property="og:image"]`
    - `meta[property="og:url"]`
  - Optional: description, site_name
  - Visual breakdown (như code gốc)
  - Show content previews
  - Link: http://ogp.me/
  
- [ ] **Twitter Cards**
  - Check: `meta[name="twitter:card"]`
  - Types: summary, summary_large_image, etc.
  - Related tags: title, description, image
  - Link: https://developer.twitter.com/en/docs/twitter-for-websites/cards
  
- [ ] **Apple iOS Integration**
  - Check: `link[rel^="apple-"]`
  - apple-touch-icon
  - apple-mobile-web-app-capable
  - apple-mobile-web-app-status-bar-style
  - Link: Apple Developer docs

#### 3.7 Performance Checks (⚡)
- [ ] **DOM Elements Count**
  - Count: `document.getElementsByTagName("*").length`
  - Threshold: < 2000 (pass), 2000-3000 (warning), > 3000 (fail)
  - Show exact count
  - Link: https://web.dev/dom-size/
  
- [ ] **Images without Dimensions**
  - Check `<img>` tags missing width/height
  - Cause layout shifts (CLS)
  
- [ ] **Inline Scripts/Styles**
  - Count `<script>` và `<style>` inline tags
  - Recommend externalize cho caching
  
- [ ] **Resources over HTTPS**
  - Check mixed content warnings
  - Scan resources (img, script, link src/href)
  
- [ ] **Compression Check**
  - Check response headers cho gzip/brotli
  - Requires background script to check

#### 3.8 Security Checks (🔒) - NEW
- [ ] **HTTPS Usage**
  - Check protocol is https://
  - Warn nếu http://
  
- [ ] **Content Security Policy**
  - Check: `meta[http-equiv="Content-Security-Policy"]`
  - Or check HTTP headers (via background)
  
- [ ] **X-Frame-Options**
  - Check headers để prevent clickjacking
  
- [ ] **Secure Cookies**
  - Check cookies có Secure flag (requires background)

---

### 4. ⚙️ Technical Implementation

#### 4.1 Content Script Architecture
- [ ] **Script Injection Strategy**
  - Inject via `chrome.scripting.executeScript` (Manifest V3)
  - Run at `document_end` hoặc `document_idle`
  - Isolated world execution
  
- [ ] **Rules Execution Flow**
  - Load rule definitions
  - Execute synchronous checks first
  - Queue asynchronous checks (API calls)
  - Send progressive updates về popup
  - Final aggregated results
  
- [ ] **DOM Analysis Module**
  - Query selectors cho các checks
  - Traverse DOM efficiently
  - Extract meta information
  - Parse structured data
  
- [ ] **Result Data Structure** (TypeScript)
  ```typescript
  interface CheckResults {
    url: string;
    currentPage: string;
    timestamp: number;
    categories: {
      [key: string]: CategoryResults;
    }
  }
  
  interface CategoryResults {
    name: string;
    icon: string;
    checks: CheckResult[];
    summary: {
      total: number;
      passed: number;
      failed: number;
      na: number;
    }
  }
  
  interface CheckResult {
    id: string;
    name: string;
    status: 'pass' | 'fail' | 'na' | 'loading';
    message?: string;
    details?: any;
    link?: string;
    description?: string;
  }
  ```

- [ ] **Message Passing**
  - Send results với type: `CHECK_COMPLETE`
  - Progressive updates: `CHECK_PROGRESS`
  - Error handling: `CHECK_ERROR`
  - Request re-check: `RE_CHECK`

#### 4.2 Popup Application Logic
- [ ] **Framework Choice**
  - Option 1: **React** với hooks
    - Fast, component-based
    - Good ecosystem
    - react-i18next cho i18n
  - Option 2: **Vue 3** với Composition API
    - Lightweight, reactive
    - vue-i18n built-in support
  - Option 3: **Vanilla JS** với Web Components
    - Zero dependencies
    - Native performance
  
- [ ] **Popup Initialization**
  - Load saved preferences (theme, language)
  - Apply theme immediately
  - Setup i18n
  - Query active tab
  - Inject content script
  - Show loading state
  
- [ ] **State Management**
  - Global state:
    - User preferences (theme, language)
    - Current check results
    - UI state (expanded items)
  - Local component state
  - Persist preferences to storage
  
- [ ] **Event Handlers**
  - Theme toggle:
    - Update CSS variables
    - Save to storage
    - Animate transition
  - Language change:
    - Update i18n locale
    - Re-render text
    - Save to storage
  - Check item click:
    - Toggle expand/collapse
    - Smooth animation
  - Link clicks:
    - Open in new tab
    - Track click (optional)
  - Refresh button:
    - Re-run checks
    - Show loading state
  
- [ ] **Progressive Rendering**
  - Render categories as data arrives
  - Update progress bar in real-time
  - Skeleton loading states
  - Smooth transitions
  
- [ ] **Export Functionality**
  - Export results as JSON
  - Export as PDF report
  - Copy to clipboard
  - Share via URL (optional)

#### 4.3 Background Service Worker
- [ ] **Service Worker Setup (MV3)**
  - Event-driven architecture
  - No persistent background page
  - Handle extension lifecycle
  
- [ ] **Message Router**
  - Route messages giữa content script ↔ popup
  - Handle multiple tabs
  - Queue messages nếu popup closed
  
- [ ] **Network Requests Handler**
  - Fetch robots.txt, favicon, etc.
  - Handle CORS issues
  - Cache responses
  - Add request headers
  
- [ ] **Storage Manager**
  - Wrapper cho `chrome.storage.sync` và `local`
  - Default values
  - Migration logic cho version updates
  - Clear old data
  
- [ ] **Browser Compatibility Layer**
  - Polyfill cho Firefox: `browser` API
  - Feature detection
  - Fallback strategies

#### 4.4 HTTP Request Module
- [ ] **Fetch Wrapper với TypeScript**
  - Generic fetch function với timeout
  - Error handling
  - Retry logic
  - Cache mechanism
  
- [ ] **External API Calls**
  - **Robots.txt**: `GET ${origin}/robots.txt`
  - **Favicon fallback**: `GET ${origin}/favicon.ico`
  - **W3C Validator**: `https://validator.nu?out=json&doc=${url}`
  - **Remote CSS files**: Parse cho media queries
  
- [ ] **Request Queue**
  - Limit concurrent requests (max 3-5)
  - Priority queue
  - Cancel pending on page change
  
- [ ] **Response Parser**
  - Parse robots.txt format
  - Parse HTML validator JSON
  - Extract CSS rules
  - Handle malformed responses

#### 4.5 Storage & Settings Module
- [ ] **Settings Schema**
  ```typescript
  interface UserSettings {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    autoCheck: boolean;
    showNotifications: boolean;
    enabledChecks: string[];
  }
  ```
  
- [ ] **Storage API Wrapper**
  - `getSettings()`: Load từ chrome.storage
  - `updateSettings()`: Save changes
  - `resetSettings()`: Restore defaults
  - Type-safe với TypeScript
  
- [ ] **Settings Sync**
  - Sync across devices với `chrome.storage.sync`
  - Fallback to local nếu sync fails
  - Conflict resolution
  
- [ ] **Settings UI (Optional)**
  - Separate settings page hoặc modal
  - Checkboxes để enable/disable checks
  - Theme preview
  - Language selector
  - Export/import settings

---

### 5. ✅ Testing & Quality Assurance

#### 5.1 Unit Testing Setup
- [ ] **Test Framework**
  - Jest cho unit tests
  - Testing Library cho component tests
  - TypeScript support
  
- [ ] **Test Coverage**
  - Rule functions: 100% coverage goal
  - Utility functions
  - Storage wrapper
  - Message handlers
  
- [ ] **Mock System**
  - Mock Chrome Extension APIs
  - Mock DOM environment (JSDOM)
  - Mock fetch requests
  - Mock storage

#### 5.2 Rule Testing
- [ ] **Individual Rule Tests**
  - Test mỗi rule với sample DOM
  - Test edge cases
  - Test error handling
  - Mock external API responses
  
- [ ] **Test Data Sets**
  - Valid HTML samples
  - Invalid HTML samples
  - Edge case scenarios
  - Real-world website snapshots

#### 5.3 Integration Testing
- [ ] **End-to-End Tests**
  - Puppeteer hoặc Playwright
  - Load extension trong browser
  - Navigate to test pages
  - Verify check results
  
- [ ] **Test Websites**
  - Static HTML site
  - React SPA
  - Vue app
  - WordPress blog
  - E-commerce site
  - News site
  
- [ ] **Cross-browser Testing**
  - Chrome (latest + 2 previous versions)
  - Edge
  - Firefox (with polyfills)
  - Safari (nếu support)

#### 5.4 Performance Testing
- [ ] **Metrics to Track**
  - Execution time per rule
  - Total check time
  - Memory usage
  - DOM query performance
  
- [ ] **Performance Benchmarks**
  - Test với large DOMs (5000+ elements)
  - Test với slow network
  - Test với heavy stylesheets
  - Memory leak detection

#### 5.5 Accessibility Testing
- [ ] **Extension UI Accessibility**
  - Screen reader compatible
  - Keyboard navigation
  - Color contrast
  - ARIA labels
  
- [ ] **axe-core Integration**
  - Test popup accessibility
  - Automated a11y checks

#### 5.6 Visual Regression Testing
- [ ] **Screenshot Comparison**
  - Percy hoặc Chromatic
  - Test both themes (light/dark)
  - Test different languages
  - Test different screen sizes

---

### 6. 📖 Documentation

#### 6.1 User Documentation
- [ ] **README.md**
  - Project overview
  - Features list với screenshots
  - Installation guide
  - Usage instructions
  - Keyboard shortcuts
  - Supported browsers
  - Changelog
  
- [ ] **User Guide** (Wiki hoặc docs site)
  - What each check means
  - How to fix issues
  - Best practices explained
  - Troubleshooting
  
- [ ] **FAQ**
  - Common questions
  - Known issues
  - Performance tips

#### 6.2 Developer Documentation
- [ ] **CONTRIBUTING.md**
  - How to contribute
  - Code style guide
  - Commit message convention
  - PR process
  - Development setup
  
- [ ] **ARCHITECTURE.md**
  - System overview diagram
  - Data flow
  - File structure explanation
  - Design decisions
  
- [ ] **API Documentation**
  - Rule definition API
  - Message types
  - Storage schema
  - TypeScript interfaces
  
- [ ] **Inline Code Documentation**
  - JSDoc comments cho functions
  - Complex logic explanations
  - TODO/FIXME notes
  - Type annotations

#### 6.3 Translation Guide
- [ ] **i18n Contributing Guide**
  - How to add new language
  - Translation keys structure
  - Testing translations
  - RTL support (nếu cần)

---

### 7. 🚀 Build & Deployment

#### 7.1 Build Configuration
- [ ] **Production Build**
  - Minification
  - Tree shaking
  - Source maps (separate)
  - Asset optimization
  - Bundle size analysis
  
- [ ] **Development Build**
  - Fast rebuild
  - Source maps inline
  - No minification
  - Debug mode enabled
  
- [ ] **Environment Variables**
  - `NODE_ENV`: development/production
  - API endpoints
  - Feature flags

#### 7.2 Chrome Web Store Publishing
- [ ] **Store Listing Preparation**
  - Extension name (i18n)
  - Short description (132 chars)
  - Detailed description
  - Category selection
  - Keywords/tags
  
- [ ] **Visual Assets**
  - Icons: 16x16, 32x32, 48x48, 128x128
  - Screenshots: 1280x800 hoặc 640x400 (5 images)
  - Promotional images:
    - Marquee: 1400x560
    - Small tile: 440x280
  - Video trailer (optional)
  
- [ ] **Privacy & Compliance**
  - Privacy policy page
  - Data usage disclosure
  - Permissions justification
  - Terms of service
  
- [ ] **Submission Package**
  - Zip file từ `dist/`
  - Version number
  - Release notes
  - Test accounts (nếu cần)

#### 7.3 Versioning & Releases
- [ ] **Semantic Versioning**
  - MAJOR.MINOR.PATCH
  - Beta/alpha channels
  - Update manifest.json version
  
- [ ] **Release Process**
  - Git tags cho releases
  - GitHub Releases với notes
  - Automated release notes generation
  
- [ ] **Changelog Management**
  - Keep CHANGELOG.md updated
  - Format: date, version, changes
  - Link to commits/PRs

#### 7.4 CI/CD Pipeline
- [ ] **GitHub Actions Setup**
  - Run tests on PR
  - Lint check
  - Build verification
  - Auto-deploy to Chrome Web Store (với approval)
  
- [ ] **Pre-commit Hooks**
  - Lint-staged
  - Type check
  - Format code
  - Run quick tests

---

### 8. 🌟 Advanced Features & Future Enhancements

#### 8.1 Additional Checks (Phase 2)
- [ ] **SEO Advanced**
  - Meta keywords (historical)
  - hreflang tags
  - Structured breadcrumbs
  - Canonical chains
  
- [ ] **Performance Advanced**
  - Lazy loading images
  - Font loading strategies
  - Critical CSS
  - Resource hints (preload, prefetch)
  - Core Web Vitals estimate
  
- [ ] **Security Advanced**
  - Subresource Integrity (SRI)
  - Permission Policy
  - CORS configuration
  - Cookie attributes (SameSite)
  
- [ ] **Accessibility Advanced**
  - Skip links
  - Focus indicators
  - Reduced motion support
  - High contrast mode

#### 8.2 Premium Features Ideas
- [ ] **Historical Tracking**
  - Save check history
  - Compare over time
  - Trend charts
  - Improvement tracking
  
- [ ] **Batch Checking**
  - Check multiple URLs
  - Sitemap crawler
  - CSV import/export
  - Scheduled checks
  
- [ ] **Custom Rules**
  - User-defined checks
  - Rule templates
  - Share rules với team
  - Import/export rules
  
- [ ] **Team Features**
  - Shared results
  - Comments/notes
  - Assignment workflow
  - Slack/Discord integration

#### 8.3 Reporting & Export
- [ ] **Export Formats**
  - JSON (raw data)
  - PDF report (formatted)
  - CSV (tabular)
  - HTML (standalone)
  - Markdown
  
- [ ] **Report Customization**
  - Select checks to include
  - Company branding
  - Custom notes
  - Executive summary
  
- [ ] **Share & Collaborate**
  - Generate shareable link
  - Embed results
  - Public/private reports

#### 8.4 Developer Tools Integration
- [ ] **DevTools Panel**
  - Live checking while developing
  - Persistent sidebar
  - Auto-refresh on changes
  
- [ ] **CLI Tool**
  - Run checks from terminal
  - CI/CD integration
  - Puppeteer-based
  - JSON output
  
- [ ] **VSCode Extension**
  - Inline hints
  - Quick fixes
  - Real-time validation

#### 8.5 AI-Powered Features
- [ ] **Smart Suggestions**
  - AI-generated fixes
  - Context-aware recommendations
  - Code snippets
  
- [ ] **Content Analysis**
  - Readability score
  - SEO content optimization
  - Accessibility insights

---

### 9. 🎯 Implementation Roadmap

#### Phase 1: MVP (4-6 weeks)
- [x] Project setup & architecture
- [x] Manifest V3 configuration
- [x] Core UI components
- [x] Theme system (light/dark)
- [x] i18n framework setup
- [x] All original checks implemented
- [x] Basic testing
- [x] Chrome Web Store submission

#### Phase 2: Enhanced Features (2-3 weeks)
- [ ] Additional checks (Security, Advanced A11y)
- [ ] Export functionality
- [ ] Settings page
- [ ] Comprehensive testing
- [ ] Performance optimizations
- [ ] Documentation complete

#### Phase 3: Advanced Features (3-4 weeks)
- [ ] Historical tracking
- [ ] Custom rules
- [ ] Reporting system
- [ ] Cross-browser support
- [ ] Beta testing
- [ ] Community feedback

#### Phase 4: Polish & Growth (Ongoing)
- [ ] User feedback implementation
- [ ] Bug fixes
- [ ] Performance tuning
- [ ] Marketing
- [ ] Premium features consideration

---

## 🛠 Tech Stack Đề Xuất (Modern 2024+)

### Core Technologies
- **TypeScript 5.x** - Type safety, better DX
- **HTML5** - Semantic markup
- **CSS3** - Modern styling với CSS Variables
- **Chrome Extension API (Manifest V3)** - Latest standard

### Frontend Framework (Choose One)
**Option A: React + Ecosystem** ⭐ Recommended
- React 18+ với Hooks
- react-i18next cho i18n
- Zustand hoặc Context API cho state
- Framer Motion cho animations (optional)

**Option B: Vue 3 + Ecosystem**
- Vue 3 với Composition API
- vue-i18n built-in
- Pinia cho state management
- Lightweight và reactive

**Option C: Vanilla TypeScript**
- No framework overhead
- Web Components
- Lit (optional, cho components)
- Best performance

### Build & Development
- **Vite 5.x** - Lightning fast builds, native ES modules
- **CRXJS Vite Plugin** - Chrome extension HMR support
- **PostCSS** - CSS processing với autoprefixer
- **Rollup** - Code splitting và optimization

### Code Quality
- **ESLint 8.x** - Linting với TypeScript support
- **Prettier 3.x** - Code formatting
- **Husky 8.x** - Git hooks
- **lint-staged** - Pre-commit linting
- **TypeScript ESLint** - TS-specific rules

### Testing
- **Vitest** - Fast unit tests (Vite-powered)
- **Testing Library** - Component testing (@testing-library/react hoặc vue)
- **Playwright** - E2E testing, cross-browser
- **MSW (Mock Service Worker)** - API mocking
- **@types/chrome** - TypeScript definitions

### i18n & Localization
- **Chrome i18n API** - Native extension i18n
- **react-i18next / vue-i18n** - Framework integration
- **i18next** - Powerful i18n framework
- **Format.js** - Advanced formatting (optional)

### Styling Solutions (Choose One)
**Option A: CSS Modules + CSS Variables**
- Scoped styles
- Theme switching via variables
- No runtime overhead

**Option B: Tailwind CSS 3.x**
- Utility-first
- JIT compilation
- Dark mode built-in
- Smaller bundle với purge

**Option C: Styled Components / Emotion**
- CSS-in-JS
- Dynamic theming
- Component scoped

### Package Manager
- **pnpm** - Fast, efficient, saves disk space
- or **npm 10.x** - Standard, reliable

### Version Control & CI/CD
- **Git** - Version control
- **GitHub Actions** - CI/CD automation
- **Conventional Commits** - Standardized commit messages
- **semantic-release** - Automated versioning

### Developer Tools
- **Chrome DevTools** - Debugging
- **Redux DevTools** (nếu dùng Redux)
- **Vue DevTools** (nếu dùng Vue)
- **Extension Reloader** - Dev workflow

### Additional Libraries
- **axios / fetch wrapper** - HTTP requests
- **zod** - Schema validation
- **date-fns** - Date utilities (lightweight)
- **clsx** - Conditional classNames
- **nanoid** - Unique IDs generation

---

## 📁 Cấu Trúc Thư Mục Modern

```
web-developer-checklist/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── release.yml
│   │   └── test.yml
│   └── ISSUE_TEMPLATE/
├── public/
│   ├── _locales/
│   │   ├── en/
│   │   │   └── messages.json
│   │   ├── vi/
│   │   │   └── messages.json
│   │   ├── ja/
│   │   │   └── messages.json
│   │   └── zh_CN/
│   │       └── messages.json
│   ├── icons/
│   │   ├── icon-16.png
│   │   ├── icon-32.png
│   │   ├── icon-48.png
│   │   └── icon-128.png
│   └── manifest.json
├── src/
│   ├── background/
│   │   ├── index.ts                 # Service worker entry
│   │   ├── messageHandler.ts
│   │   ├── storageManager.ts
│   │   └── networkHandler.ts
│   ├── content/
│   │   ├── index.ts                 # Content script entry
│   │   ├── rulesEngine.ts
│   │   └── domAnalyzer.ts
│   ├── popup/
│   │   ├── index.html
│   │   ├── index.tsx / index.ts     # App entry
│   │   ├── App.tsx / App.vue
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── LanguageSelector.tsx
│   │   │   ├── CategorySection.tsx
│   │   │   ├── CheckItem.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── Footer.tsx
│   │   ├── hooks/                   # Custom hooks (React)
│   │   │   ├── useTheme.ts
│   │   │   ├── useI18n.ts
│   │   │   ├── useStorage.ts
│   │   │   └── useCheckResults.ts
│   │   └── styles/
│   │       ├── global.css
│   │       ├── variables.css
│   │       ├── themes/
│   │       │   ├── light.css
│   │       │   └── dark.css
│   │       └── components/          # Component styles
│   ├── shared/
│   │   ├── types/
│   │   │   ├── index.ts
│   │   │   ├── rules.ts
│   │   │   ├── messages.ts
│   │   │   └── storage.ts
│   │   ├── constants/
│   │   │   ├── categories.ts
│   │   │   ├── rules.ts
│   │   │   └── config.ts
│   │   ├── utils/
│   │   │   ├── dom.ts
│   │   │   ├── http.ts
│   │   │   ├── parser.ts
│   │   │   └── helpers.ts
│   │   ├── rules/
│   │   │   ├── index.ts
│   │   │   ├── seo/
│   │   │   │   ├── structuredData.ts
│   │   │   │   ├── metaDescription.ts
│   │   │   │   └── robotsTxt.ts
│   │   │   ├── mobile/
│   │   │   │   ├── viewport.ts
│   │   │   │   └── mediaQueries.ts
│   │   │   ├── usability/
│   │   │   │   ├── favicon.ts
│   │   │   │   ├── friendlyUrls.ts
│   │   │   │   └── htmlValidation.ts
│   │   │   ├── accessibility/
│   │   │   │   ├── landmarks.ts
│   │   │   │   └── imageAlt.ts
│   │   │   ├── social/
│   │   │   │   ├── opengraph.ts
│   │   │   │   └── twitterCards.ts
│   │   │   ├── performance/
│   │   │   │   └── domSize.ts
│   │   │   └── security/
│   │   │       └── https.ts
│   │   └── i18n/
│   │       ├── index.ts
│   │       ├── config.ts
│   │       └── translations/        # Backup translations
│   └── assets/
│       ├── icons/
│       │   ├── check.svg
│       │   ├── cross.svg
│       │   ├── question.svg
│       │   ├── sun.svg
│       │   ├── moon.svg
│       │   └── globe.svg
│       └── images/
│           └── logo.svg
├── tests/
│   ├── unit/
│   │   ├── rules/
│   │   ├── utils/
│   │   └── components/
│   ├── integration/
│   │   └── extension.spec.ts
│   ├── e2e/
│   │   └── playwright.spec.ts
│   ├── fixtures/
│   │   ├── sample-pages/
│   │   └── mock-data/
│   └── setup.ts
├── dist/                            # Build output (gitignored)
├── docs/                            # Documentation
│   ├── ARCHITECTURE.md
│   ├── CONTRIBUTING.md
│   └── API.md
├── scripts/
│   ├── build.ts
│   ├── zip.ts
│   └── i18n-check.ts
├── .gitignore
├── .eslintrc.cjs
├── .prettierrc
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── package.json
├── pnpm-lock.yaml
├── README.md
├── CHANGELOG.md
└── LICENSE
```

---

## 📦 Package.json Scripts Example

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:e2e": "playwright test",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,json}\"",
    "type-check": "tsc --noEmit",
    "zip": "node scripts/zip.ts",
    "release": "semantic-release",
    "prepare": "husky install"
  }
}
```

---

## 🎯 Quick Start Development Flow

### 1. Initial Setup
```bash
# Create project
pnpm create vite web-developer-checklist --template react-ts

# Install dependencies
pnpm install

# Install Chrome extension specific packages
pnpm add @crxjs/vite-plugin @types/chrome -D
pnpm add zustand react-i18next i18next
```

### 2. Development
```bash
# Start dev server with HMR
pnpm dev

# Load unpacked extension từ dist/ folder
# Extension tự reload khi code changes
```

### 3. Testing
```bash
# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e
```

### 4. Build & Deploy
```bash
# Build cho production
pnpm build

# Create zip file
pnpm zip

# Upload to Chrome Web Store
```

---

## 📚 Key Resources & References

### Official Documentation
- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/)
- [Chrome Extension API Reference](https://developer.chrome.com/docs/extensions/reference/)
- [Chrome i18n Guide](https://developer.chrome.com/docs/extensions/reference/i18n/)
- [Chrome Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)

### Build Tools
- [Vite Documentation](https://vitejs.dev/)
- [CRXJS Vite Plugin](https://crxjs.dev/vite-plugin/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Testing
- [Vitest Guide](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Library](https://testing-library.com/)

### Web Standards & Best Practices
- [Schema.org Documentation](http://schema.org/)
- [OpenGraph Protocol](http://ogp.me/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [web.dev](https://web.dev/) - Performance & Best Practices

### Code Inspiration
- [Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples)
- [Web Developer Checklist Original](https://www.toptal.com/developers/webdevchecklist)
- [Awesome Chrome Extensions](https://github.com/fregante/Awesome-WebExtensions)

### Design Resources
- [Chrome Web Store Assets Guide](https://developer.chrome.com/docs/webstore/images/)
- [Heroicons](https://heroicons.com/) - SVG icons
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Coolors](https://coolors.co/) - Color palette generator

---

## 💡 Tips & Best Practices

### Performance
- Lazy load rules để giảm initial load time
- Use Web Workers cho heavy computations
- Debounce DOM queries
- Cache external requests
- Minimize bundle size (tree shaking)

### Security
- Never use `eval()` hoặc inline scripts
- Validate tất cả user inputs
- Use CSP (Content Security Policy)
- Sanitize HTML nếu render user content

### UX/UI
- Show loading states cho async operations
- Provide meaningful error messages (i18n)
- Keyboard shortcuts cho power users
- Smooth transitions giữa states
- Responsive feedback cho user actions

### Accessibility
- Semantic HTML
- ARIA labels cho screen readers
- Keyboard navigation support
- High contrast mode support
- Focus indicators visible

### i18n
- Never hardcode strings
- Use pluralization rules correctly
- Support RTL languages (nếu cần)
- Date/number formatting per locale
- Test với multiple languages

### Code Organization
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Typed everything (TypeScript)
- Meaningful variable names
- Comments cho complex logic

---

## 🚦 Getting Started

### Recommended First Steps:
1. ✅ Fork/clone extension gốc để reference
2. ✅ Setup project với TypeScript + Vite + React/Vue
3. ✅ Implement core infrastructure (manifest, folders)
4. ✅ Create theme system với CSS variables
5. ✅ Setup i18n với initial languages (en, vi)
6. ✅ Implement 2-3 simple rules để test workflow
7. ✅ Build UI components (header, check item, progress)
8. ✅ Complete all rules từ version gốc
9. ✅ Add tests
10. ✅ Deploy to Chrome Web Store

---

**Document Version**: 3.0  
**Last Updated**: 2024  
**Status**: Ready for Development  
**Next Action**: Begin Phase 1 Implementation 🚀
