# AI Chat - Gemini API

Ứng dụng chat AI chạy hoàn toàn trên GitHub Pages với giao diện hiện đại, sử dụng Google Gemini API miễn phí.

![Preview](https://i.imgur.com/placeholder.png)

## Tính năng

### Core Features
- **Chat với nhiều model**: Gemini Flash ⭐, Flash Lite, Pro, 2.0, 2.5 (Free tier)
- **Streaming Responses**: Hiển thị kết quả AI theo thời gian thực
- **Code Syntax Highlighting**: Highlight code blocks với highlight.js
- **Markdown Rendering**: Hiển thị code blocks, bảng, list đẹp với XSS protection
- **Dark/Light Mode**: Giao diện hiện đại, responsive
- **Lưu lịch sử**: Lưu vào localStorage, không mất dữ liệu

### Advanced Features
- **System Prompts (Persona)**: Chọn preset (Senior Developer, Teacher, Creative Writer, etc.)
- **Tags/Folders**: Phân loại chats theo tag (Code, Học tập, Công việc, Sáng tạo)
- **Search Chats**: Tìm kiếm theo tiêu đề hoặc nội dung tin nhắn
- **Export/Import**: Export chat ra Markdown, Export/Import tất cả chats (JSON backup)
- **Voice Input**: Nhập tin nhắn bằng giọng nói (Web Speech API)
- **Keyboard Shortcuts**: Phím tắt nhanh (Ctrl+K, Ctrl+/, Ctrl+B, Ctrl+E)
- **PWA Ready**: Có thể cài đặt như app trên mobile/desktop
- **SEO Optimized**: Meta tags cho social sharing

## Cài đặt & Deploy

### 1. Lấy API Key (Gemini - Miễn phí)

1. Vào [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Đăng nhập bằng Google account
3. Click "Create API Key"
4. Sao chép key bắt đầu bằng `AIzaSy...`

### 2. Deploy lên GitHub Pages

```bash
# Fork hoặc clone repo này
git clone https://github.com/yourusername/ai-chat.git

# Push lên GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Vào Settings > Pages > Source > chọn main branch
```

### 3. Cấu hình API Key

1. Mở ứng dụng đã deploy
2. Click **Cài đặt** (bên trái dưới cùng)
3. Dán API Key vào ô "Google AI (Gemini) API Key"
4. Click **Lưu**

API Key được lưu local trong browser, không gửi đến server nào.

## Sử dụng

### Basic Usage
- **Tin nhắn mới**: Click "Cuộc trò chuyện mới" hoặc icon hamburger
- **Đổi model**: Dropdown ở header (Flash ⭐, Flash Lite, Pro, 2.0, 2.5)
- **Prompt nhanh**: Click các thẻ ở màn hình chào mừng
- **Copy/Regenerate**: Hover vào tin nhắn AI để thấy nút action
- **Export chat**: Icon download ở header để lưu chat ra .md

### Advanced Usage
- **System Prompt**: Settings > chọn Persona (Senior Developer, Teacher, etc.)
- **Tags**: Settings > thêm tag cho chat hiện tại
- **Filter by Tag**: Click tag button trong sidebar để lọc
- **Search**: Nhập từ khóa trong ô tìm kiếm sidebar
- **Export/Import All**: Settings > Export/Import tất cả chats
- **Voice Input**: Click icon micro ở ô nhập tin nhắn (Chrome/Edge only)

### Keyboard Shortcuts
- `Ctrl+K`: New chat
- `Ctrl+/`: Toggle settings
- `Ctrl+B`: Toggle sidebar
- `Ctrl+E`: Export chat
- `Ctrl+Enter` (trong input): Send message

## Giới hạn miễn phí (Gemini) - Cập nhật Tháng 4/2026

⚠️ **Google đã cắt bỏ toàn bộ Pro models khỏi free tier từ 1/4/2026**

### Free Tier Models:
| Model | Notes |
|-------|-------|
| **gemini-flash-latest** ⭐ | Khuyên dùng, nhanh nhất |
| **gemini-flash-lite-latest** | Rẻ nhất, phù hợp task đơn giản |
| **gemini-pro-latest** | Free tier, chất lượng cao hơn |

### Experimental/Paid Models:
| Model | Notes |
|-------|-------|
| **gemini-2.0-flash** | Experimental |
| **gemini-2.0-flash-lite** | Experimental |
| **gemini-2.5-flash** | Có thể cần billing |
| **gemini-2.5-pro** | ❌ Cần billing card |

### Khuyến nghị:
1. Dùng **gemini-flash-latest** cho hầu hết task (nhanh, free)
2. Dùng **gemini-pro-latest** nếu cần chất lượng cao hơn
3. Tránh 2.5 Pro trừ khi có billing

## Customization

Thêm model mới trong `index.html`:

```html
<option value="new-model-name">Model Name</option>
```

Thay đổi màu sắc trong `styles.css`:

```css
:root {
  --accent: #your-color;
  --bg-primary: #your-bg;
}
```

## License

MIT - Tự do sử dụng, chỉnh sửa, deploy riêng.

---

**Made with ❤️ for GitHub Pages**

