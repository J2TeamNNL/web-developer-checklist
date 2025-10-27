# 🐛 Hướng Dẫn Debug Extension

## 📋 Cách Xem Logs

### 1. **Console Logs (Real-time)**

#### A. Popup Console
1. Mở extension popup (click icon hoặc `Ctrl+Shift+D`)
2. **Right-click** trên popup → chọn **"Inspect"**
3. Tab **Console** sẽ hiện logs của popup
4. Logs có emoji để phân biệt:
   - ℹ️ Info
   - ⚠️ Warning  
   - ❌ Error
   - 🐛 Debug

#### B. Background Service Worker Console
1. Vào `chrome://extensions/`
2. Tìm extension "Web Developer Checklist"
3. Click **"service worker"** (màu xanh) hoặc **"Inspect views: service worker"**
4. Console sẽ hiển thị logs từ background script

#### C. Content Script Console
1. Mở website bất kỳ
2. Press **F12** để mở DevTools
3. Tab **Console** sẽ hiện logs từ content script khi chạy checks
4. Filter bằng `[content-script]` để chỉ xem logs của extension

---

### 2. **Storage Logs (Persistent)**

Extension tự động lưu tất cả logs vào `chrome.storage.local` (giữ 100 logs gần nhất).

#### Xem Logs Đã Lưu:
```javascript
// Mở Console (bất kỳ đâu trong extension)
// Chạy lệnh:
window.extensionLogger.exportLogs().then(logs => console.log(logs))
```

#### Download Logs Ra File:
```javascript
// Mở Popup Console, chạy:
window.extensionLogger.downloadLogs()
// File JSON sẽ tự động download: extension-logs-YYYY-MM-DD.json
```

#### Xóa Logs:
```javascript
window.extensionLogger.clearLogs()
```

---

### 3. **Chrome Storage Viewer**

Xem trực tiếp storage:
1. Vào `chrome://extensions/`
2. Tìm extension → Click **"Details"**
3. Scroll xuống → Click **"Inspect views: service worker"**
4. Tab **Application** → **Storage** → **Local Storage**
5. Tìm key `debugLogs` để xem array logs

---

## 🔧 Các Lệnh Debug Hữu Ích

### Console Commands

```javascript
// 1. Bật/tắt debug mode
window.extensionLogger.setDebugMode(true)   // Bật
window.extensionLogger.setDebugMode(false)  // Tắt

// 2. Log thủ công
window.extensionLogger.info('Test message', { data: 'example' })
window.extensionLogger.warn('Warning!')
window.extensionLogger.error('Error occurred', new Error('test'))
window.extensionLogger.debug('Debug info', { state: 'active' })

// 3. Export logs
const logs = await window.extensionLogger.exportLogs()
console.log(JSON.parse(logs))

// 4. Download logs
window.extensionLogger.downloadLogs()

// 5. Clear logs
window.extensionLogger.clearLogs()
```

---

## 📊 Log Format

Mỗi log entry có cấu trúc:

```json
{
  "timestamp": 1698401234567,
  "level": "info",
  "message": "Starting checks...",
  "data": { "url": "https://example.com" },
  "source": "content-script"
}
```

**Sources:**
- `content-script` - Logs từ content script (chạy checks)
- `background` - Logs từ background service worker
- `popup` - Logs từ popup UI
- `app` - Logs chung

---

## 🐞 Troubleshooting Common Issues

### Lỗi: "Could not load file: 'src/content/index.js'"

**Nguyên nhân:** Build chưa tạo file content script đúng.

**Giải pháp:**
```bash
# Rebuild extension
npm run build

# Reload extension trong Chrome:
# chrome://extensions/ → Click 🔄 (reload)
```

**Kiểm tra:** File phải tồn tại:
- `dist/src/content/index.js` ✅
- `dist/src/background/index.js` ✅

---

### Lỗi: Extension không chạy checks

**Debug steps:**

1. **Kiểm tra Content Script Console:**
   - F12 trên trang web
   - Filter logs: `[content-script]`
   - Xem có log "Starting checks..." không?

2. **Kiểm tra Permissions:**
   - Extension cần quyền `activeTab`, `scripting`, `storage`
   - Check trong `chrome://extensions/` → Details

3. **Xem Logs:**
   ```javascript
   // Trong Popup Console:
   window.extensionLogger.exportLogs().then(logs => {
     const parsed = JSON.parse(logs);
     const errors = parsed.filter(l => l.level === 'error');
     console.log('Errors:', errors);
   })
   ```

---

### Lỗi: Popup không hiển thị

1. **Check popup console errors:**
   - Right-click popup → Inspect
   - Xem tab Console có lỗi gì không

2. **Reload extension:**
   - `chrome://extensions/` → 🔄

3. **Check manifest:**
   ```bash
   cat dist/manifest.json
   # Verify "default_popup" path đúng
   ```

---

### Lỗi: Theme/Language không đổi

1. **Clear storage:**
   ```javascript
   chrome.storage.sync.clear()
   chrome.storage.local.clear()
   ```

2. **Reload extension & page**

3. **Check logs:**
   ```javascript
   window.extensionLogger.exportLogs().then(logs => {
     console.log(JSON.parse(logs).filter(l => 
       l.message.includes('theme') || l.message.includes('language')
     ));
   })
   ```

---

## 📁 Debug Log Files

Sau khi download logs, file JSON có thể mở bằng:
- VS Code
- Online JSON viewer: https://jsonformatter.org/
- Browser console: `JSON.parse()`

### Phân Tích Logs:

```javascript
// Load file vào console
const logs = [...]; // paste nội dung file

// Filter by source
const contentLogs = logs.filter(l => l.source === 'content-script');

// Filter by level
const errors = logs.filter(l => l.level === 'error');

// Filter by time range
const recent = logs.filter(l => 
  l.timestamp > Date.now() - 5 * 60 * 1000 // Last 5 minutes
);

// Count by level
const counts = logs.reduce((acc, l) => {
  acc[l.level] = (acc[l.level] || 0) + 1;
  return acc;
}, {});
console.log(counts);
```

---

## 💡 Tips Debug

1. **Luôn bật DevTools** khi develop
2. **Reload extension** sau mỗi code change
3. **Clear cache** nếu CSS/assets không update
4. **Check Network tab** để xem requests
5. **Sử dụng `debugger;`** statement để breakpoint
6. **Export logs** trước khi báo bug

---

## 🚀 Performance Debug

```javascript
// Đo thời gian chạy checks
console.time('checks');
// ... run checks ...
console.timeEnd('checks');

// Memory usage
console.log(performance.memory);
```

---

## 📞 Nếu Cần Hỗ Trợ

Khi báo lỗi, hãy gửi kèm:
1. ✅ Downloaded log file (JSON)
2. ✅ Console screenshot
3. ✅ Extension version
4. ✅ Chrome version
5. ✅ URL đang test (nếu có)
6. ✅ Steps to reproduce

---

**Debug Mode:** Mặc định BẬT (có thể tắt bằng `setDebugMode(false)`)  
**Log Retention:** 100 logs gần nhất  
**Storage:** chrome.storage.local
