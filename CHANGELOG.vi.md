# Lịch Sử Thay Đổi

Tất cả các thay đổi quan trọng của Web Developer Checklist sẽ được ghi lại ở đây.

## [3.2.1] - 2025-11-02

### 🎨 Cải Thiện UI/UX

#### Đã Sửa
- **Nút Đổi Theme** - Sửa lỗi không hoạt động, giờ hiện cả 3 trạng thái (Light/Dark/Auto)
- **Chuyển Ngôn Ngữ** - Sửa lỗi UI không cập nhật (giờ force re-render khi đổi)
- **Export** - Sửa lỗi undefined/NA, giờ chỉ xuất checks FAIL có message
- **Nút Lọc** - Hiện dạng dropdown rõ ràng (Tất cả / Chưa hoàn thành)

#### Cải Thiện
- **Giao Diện** - Nâng cấp với spacing, màu sắc, và shadow đẹp hơn
- **Nút Export** - Đổi tên "📊 Export Report", style nút xanh lá success
- **Console Logging** - Thêm logs chi tiết có emoji dễ debug
- **Report Bug** - Đổi thành link Messenger (mở chat j2teamnnl) thay vì copy text

#### Thêm Mới
- Logs chi tiết có emoji từng bước (🚀 🔍 📨 🌍 🎨 🐛)
- Link trực tiếp báo lỗi qua Messenger: https://www.messenger.com/t/j2teamnnl/
- Component FilterDropdown với UI dạng switch
- Toolbar với thiết kế nâng cao (background, shadow, layout đẹp)

---

## [3.2.0] - 2025-11-02

### 🚀 Nâng Cấp UX Lớn - Ứng Dụng Toàn Trang

#### Thêm Mới
- **Ứng Dụng Toàn Trang** - Extension giờ mở trong tab mới thay vì popup nhỏ
- **Chuyển Ngôn Ngữ** - Chọn Tiếng Việt, English, hoặc Tự động
- **Nút Lọc** - Hiển thị tất cả hoặc chỉ checks chưa hoàn thành
- **Xuất Danh Sách** - Xuất checks chưa hoàn thành dạng bullet list với copy clipboard
- **Thông Báo Toast** - Phản hồi trực quan cho mọi hành động
- **Thanh Công Cụ** - Bảng điều khiển thống nhất với tất cả tính năng mới

#### Thay Đổi
- Đổi tên `src/popup/` thành `src/app/` cho đúng ngữ nghĩa
- Cập nhật layout từ popup 400x600px sang toàn trang (max 1200px)
- Cải thiện trải nghiệm với lọc real-time và thông báo
- Nâng cao i18n với 9 key dịch mới

#### Kỹ Thuật
- Thêm 5 components mới: Toast, LanguageSwitcher, FilterButton, ExportPanel
- Thêm 2 hooks mới: useToast, useFilter
- Cập nhật manifest lên v3.2.0, bỏ cấu hình popup
- Background script giờ mở tab mới khi click icon
- Thời gian build: ~100ms, Bundle size: ~150KB

---

## [3.1.0] - 2025-11-02

### ✨ Checks & Danh Mục Mới

#### Thêm Mới
- **9 Checks Mới** qua 4 danh mục
- **SEO**: XML Sitemap, Twitter Cards, Thẻ Hreflang
- **Security**: Content Security Policy (CSP), Phát hiện Mixed Content
- **Code Quality** (MỚI): Lỗi Console, Liên kết bị lỗi
- **Privacy** (MỚI): Đồng ý Cookie (GDPR), Chính sách bảo mật

#### Thay Đổi
- Tổng checks tăng từ 27 lên 36
- Tổng danh mục tăng từ 8 lên 10
- Cập nhật progress tracking cho 36 checks
- Kích thước content script: 23KB → 32KB

---

## [3.0.0] - 2025-11-01

### 🎉 Phiên Bản Hiện Đại Đầu Tiên

#### Thêm Mới
- **27 Checks** qua 8 danh mục
- **Danh mục**: SEO (6), Mobile (4), Usability (2), Accessibility (5), Social (2), Performance (4), Security (1), Analytics (3)
- **Hệ Thống Theme**: Light, Dark, Auto
- **Hỗ Trợ i18n**: Tiếng Việt (mặc định), English, Tự động
- **Theo Dõi Tiến Độ**: Progress bar real-time với tên check
- **Debug Logger**: Hệ thống log dựa trên Chrome storage
- **Kiến Trúc Message-based**: Content scripts giao tiếp qua Chrome messages

#### Kỹ Thuật
- Xây dựng với TypeScript, React 18, Vite 5
- Tuân thủ Manifest V3
- Bundle production: 147KB (gzipped: 47KB)
- Hỗ trợ phím tắt: Ctrl+Shift+D (Windows) / Cmd+Shift+D (Mac)

---

## Lịch Sử Phiên Bản

- **v3.2.0** (2/11/2025) - Ứng dụng toàn trang với chuyển ngôn ngữ, lọc, xuất
- **v3.1.0** (2/11/2025) - Thêm 9 checks, 2 danh mục mới
- **v3.0.0** (1/11/2025) - Viết lại hiện đại với 27 checks, Manifest V3

---

**Lấy cảm hứng từ:** [Toptal Web Developer Checklist](https://www.toptal.com/developers/webdevchecklist)  
**Vibe code with love by:** [J2TeamNNL](https://github.com/j2teamnnl)
