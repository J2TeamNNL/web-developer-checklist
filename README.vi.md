# Danh Sách Kiểm Tra Web Developer v3.0 🚀

Extension Chrome hiện đại để phân tích website về các vi phạm best practices - SEO, Mobile, Accessibility, Performance, Security & Analytics.

**[English Version](README.md)** | **Tiếng Việt**

## ✨ Tính Năng

- 🔍 **27 Kiểm Tra** qua 8 danh mục (SEO, Mobile, Usability, Accessibility, Social, Performance, Security, Analytics)
- 🎨 **Chuyển Theme** - Chế độ Sáng, Tối và Tự động
- 🌍 **Đa ngôn ngữ** - Tiếng Việt & English (hỗ trợ i18n đầy đủ)
- ⚡ **Nhanh & Hiện Đại** - Xây dựng với TypeScript + React 18 + Vite 5
- 🎯 **Manifest V3** - Chuẩn Chrome Extension mới nhất
- ♿ **Dễ Truy Cập** - UI tuân thủ WCAG 2.1
- 📊 **Phát Hiện Analytics** - Danh mục MỚI cho các công cụ tracking
- 🤖 **Tự Động** - Theme và ngôn ngữ tự động theo hệ thống

## 🏗️ Tech Stack

- **TypeScript 5.x** - Type safety
- **React 18** - UI framework
- **Vite 5** - Build tool với HMR
- **CSS Variables** - Hệ thống theme
- **Chrome Extension API** - Manifest V3

## 📦 Cài Đặt & Thiết Lập

### Yêu Cầu
- Node.js 18+ hoặc npm/pnpm
- Trình duyệt Chrome

### Bước 1: Cài Dependencies

```bash
# Sử dụng npm
npm install

# Hoặc pnpm (khuyên dùng)
pnpm install
```

### Bước 2: Chạy Development Server

```bash
npm run dev
# hoặc
pnpm dev
```

Lệnh này sẽ:
- Khởi động Vite dev server với HMR
- Build extension vào folder `dist/`
- Theo dõi thay đổi file

### Bước 3: Load Extension vào Chrome

1. Mở Chrome và vào `chrome://extensions/`
2. Bật **Developer mode** (toggle góc trên bên phải)
3. Click **Load unpacked** (Tải tiện ích đã giải nén)
4. Chọn folder `dist/` từ project này
5. Icon extension sẽ xuất hiện trên toolbar!

### Bước 4: Test Extension

1. Truy cập bất kỳ website nào (ví dụ: https://google.com)
2. Click icon extension hoặc nhấn `Ctrl+Shift+D` (Windows) / `Cmd+Shift+D` (Mac)
3. Xem kết quả kiểm tra

## 🛠 Development

### Available Scripts

```bash
# Development với hot reload
npm run dev

# Build production
npm run build

# Kiểm tra types
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Format code
npm run format

# Chạy tests
npm run test
```

### Cấu Trúc Project

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
│   └── styles/           # CSS với themes ✅
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

## 🎨 Hệ Thống Theme

Extension hỗ trợ 3 chế độ theme:

- **Light Theme** - Sáng và hiện đại
- **Dark Theme** - Tối, dễ nhìn
- **Auto Theme** ✨ - Tự động theo hệ thống (system preference)

Theme files nằm trong `src/popup/styles/themes/`

Click icon 🌙/☀️/🔄 để chuyển đổi: Light → Dark → Auto

## 🌍 Đa Ngôn Ngữ (i18n)

Ngôn ngữ được hỗ trợ:
- 🇻🇳 **Tiếng Việt (vi)** - Mặc định ✅ (Bản dịch đầy đủ cho 27 checks)
- 🇺🇸 **English (en)** ✅
- 🤖 **Auto** ✨ - Tự động phát hiện ngôn ngữ trình duyệt

**Auto Language Detection:**
- Tự động chọn tiếng Việt nếu browser language là `vi-*`
- Mặc định English cho các ngôn ngữ khác
- Có thể thay đổi thủ công trong settings

Translation files: `public/_locales/{language}/messages.json` (~175 keys)

## 📋 Tình Trạng Development

### ✅ Phase 1: Core Development (HOÀN THÀNH)
- [x] Setup project với TypeScript + Vite
- [x] Cấu hình Manifest V3
- [x] Hệ thống theme (Light/Dark/Auto)
- [x] Hỗ trợ i18n (VI, EN, Auto)
- [x] 5 React components
- [x] 3 custom hooks (useTheme, useI18n, useLanguage)
- [x] 12 rules ban đầu
- [x] Content script & background service worker

### ✅ Phase 2: Additional Rules (HOÀN THÀNH)
- [x] **SEO** - 4 rules mới (Canonical, Robots Meta, Page Title, Headings)
- [x] **Performance** - 3 rules mới (Image Optimization, Fonts, Resource Hints)
- [x] **Accessibility** - 3 rules mới (ARIA Roles, Form Labels, Color Contrast)
- [x] **Mobile** - 2 rules mới (Touch Target Size, Text Readability)
- [x] **Analytics** - DANH MỤC MỚI với 3 rules (GA, GTM, Facebook Pixel)
- [x] i18n đầy đủ cho tất cả rules mới
- [x] **Tổng: 27 checks qua 8 danh mục**

### 🎯 Production Build (HOÀN THÀNH)
- [x] TypeScript compilation thành công
- [x] Production build (146KB)
- [x] Extension icons đã tạo
- [x] Sẵn sàng load vào Chrome

### 📅 Các Phase Tiếp Theo

**Phase 3: UI/UX Polish** (Tùy chọn)
- [ ] Tính năng tìm kiếm/lọc
- [ ] Export báo cáo (HTML/PDF)
- [ ] Copy to clipboard
- [ ] Animations & transitions
- [ ] Trang settings

**Phase 4: Testing & Quality** (Tùy chọn)
- [ ] Unit tests với Vitest
- [ ] Integration tests
- [ ] Manual testing trên các trang phổ biến
- [ ] Cải thiện code quality

**Phase 5: Chrome Web Store Publishing** (Sẵn sàng!)
- [ ] Chuẩn bị store listing
- [ ] Screenshots & hình promotional
- [ ] Privacy policy
- [ ] Submit để review

## 📊 Chi Tiết 27 Checks

### 🔍 SEO (6 checks)
1. Structured Data cho Google Search
2. Meta Description
3. Canonical URL
4. Robots Meta Tag
5. Page Title
6. Cấp bậc Headings (H1-H6)

### 📱 Mobile (4 checks)
1. Viewport Meta Tag
2. CSS Media Queries
3. Touch Target Size (tối thiểu 44px)
4. Text Readability (kích thước font)

### 👤 Usability (2 checks)
1. Favicon
2. Friendly URLs

### ♿ Accessibility (5 checks)
1. Thuộc tính Alt của Image
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
1. Sử dụng HTTPS

### 📊 Analytics (3 checks) 🆕
1. Phát hiện Google Analytics
2. Google Tag Manager
3. Facebook Pixel

## 📝 License

MIT License - xem file `LICENSE` để biết chi tiết

## 🔗 Links

- [Extension Gốc](https://www.toptal.com/developers/webdevchecklist)
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/mv3/)
- [Manifest V3 Migration](https://developer.chrome.com/docs/extensions/mv3/intro/)

---

**Tổng Checks**: 27 qua 8 danh mục  
**Bundle Size**: 146KB  
**Ngôn ngữ**: VI (mặc định), EN  
**Phím tắt**: Ctrl+Shift+D (Windows) / Command+Shift+D (Mac)
