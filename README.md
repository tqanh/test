# AI Chat - Groq API

Ứng dụng chat AI chạy hoàn toàn trên GitHub Pages với giao diện hiện đại, sử dụng Groq API siêu nhanh (30 RPM).

![Preview](https://i.imgur.com/placeholder.png)

## Tính năng

### Core Features
- **Chat với nhiều model**: Llama 3.3 70B, Llama 3.1 8B, GPT OSS 120B, GPT OSS 20B, Llama 4 Scout, Qwen3 32B
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

### 1. Lấy API Key (Groq - Miễn phí)

1. Vào [console.groq.com/keys](https://console.groq.com/keys)
2. Đăng nhập bằng email
3. Click "Create API Key"
4. Sao chép key bắt đầu bằng `gsk_...`

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
3. Dán API Key vào ô "Groq API Key"
4. Click **Lưu**

API Key được lưu local trong browser, không gửi đến server nào.

## Sử dụng

### Basic Usage
- **Tin nhắn mới**: Click "Cuộc trò chuyện mới" hoặc icon hamburger
- **Đổi model**: Dropdown ở header (Llama 3.3 70B, Llama 3.1 8B, GPT OSS 120B, etc.)
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

## Groq Models

### Available Models:
| Model | Notes |
|-------|-------|
| **llama-3.3-70b-versatile** ⭐ | Khuyên dùng, chất lượng cao nhất |
| **llama-3.1-8b-instant** | Nhanh nhất, phù hợp task đơn giản |
| **openai/gpt-oss-120b** | OpenAI OSS model, chất lượng cao |
| **openai/gpt-oss-20b** | OpenAI OSS model, nhanh |
| **meta-llama/llama-4-scout-17b-16e-instruct** | Llama 4 Preview |
| **qwen/qwen3-32b** | Qwen3 Preview |

### Rate Limits:
- **30 RPM** (requests per minute) cho free tier
- **Không giới hạn tokens** per request

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

