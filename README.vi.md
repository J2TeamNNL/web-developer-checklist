# Danh Sách Kiểm Tra Web Developer 🚀

Chrome Extension để kiểm tra website theo best practices - SEO, Performance, Accessibility, Security và nhiều hơn nữa.

**[English](README.md)** | **Tiếng Việt**

> Lấy cảm hứng từ [Toptal Web Developer Checklist](https://www.toptal.com/developers/webdevchecklist)

## ✨ Tính Năng

- 🔍 **36 kiểm tra** qua 10 danh mục (SEO, Mobile, Accessibility, Performance, Security, Analytics, Privacy...)
- 🖥️ **Giao diện toàn trang** - Mở trong tab mới, dễ xem
- 🌍 **Đa ngôn ngữ** - Tiếng Việt, English, tự động
- 🔍 **Lọc & Xuất** - Chỉ hiện lỗi, copy danh sách
- 🎨 **Theme** - Sáng, Tối, Tự động
- 📊 **Theo dõi tiến độ** - Xem real-time khi phân tích
- 🔔 **Thông báo** - Phản hồi trực quan

## 📦 Cài Đặt

### Từ Source

1. Download hoặc clone repo này
2. Chạy build:
   ```bash
   npm install
   npm run build
   ```
3. Mở Chrome → `chrome://extensions/`
4. Bật **Developer mode**
5. Click **Load unpacked** → Chọn thư mục `dist/`

### Từ Chrome Web Store

_Sắp ra mắt..._

## 🚀 Sử Dụng

1. Click icon extension trên thanh công cụ Chrome
2. Tab mới mở ra với giao diện phân tích
3. Đợi phân tích hoàn tất (progress bar 0% → 100%)
4. Xem kết quả theo từng danh mục
5. Click vào check để xem chi tiết và gợi ý

### Các Tính Năng

- **Đổi ngôn ngữ**: Click nút VI/EN/🌐
- **Lọc**: Click nút Filter để chỉ hiện checks chưa pass
- **Xuất**: Click Export → Copy danh sách ra clipboard
- **Theme**: Click 🌙 để đổi sáng/tối

## 📋 Danh Mục Kiểm Tra

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

## 📝 Lịch Sử Thay Đổi

Xem [CHANGELOG.vi.md](CHANGELOG.vi.md) để biết lịch sử thay đổi chi tiết.

## 📄 License

MIT License - xem file [LICENSE](LICENSE)

## 💝 Credits

**Vibe code with love** by [J2TeamNNL](https://github.com/j2teamnnl)

**Lấy cảm hứng từ:** [Toptal Web Developer Checklist](https://www.toptal.com/developers/webdevchecklist)
