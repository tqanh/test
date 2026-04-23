# AI Chat Client

Ứng dụng chat AI chạy hoàn toàn trên GitHub Pages với giao diện giống ChatGPT, hỗ trợ nhiều model miễn phí qua Groq API.

![Preview](https://i.imgur.com/placeholder.png)

## Tính năng

- **Chat với nhiều model**: Llama 3.1, Mixtral, Gemma
- **Dark mode đẹp**: Giao diện hiện đại, responsive
- **Markdown rendering**: Hiển thị code blocks, bảng, list đẹp
- **Lưu lịch sử**: Lưu vào localStorage, không mất dữ liệu
- **Prompt templates**: Mẫu prompt nhanh cho code, giải thích, sáng tạo
- **Export chat**: Xuất ra file Markdown
- **PWA ready**: Có thể cài đặt như app

## Cài đặt & Deploy

### 1. Lấy API Key

1. Vào [console.groq.com](https://console.groq.com)
2. Đăng ký tài khoản (miễn phí)
3. Tạo API Key
4. Sao chép key bắt đầu bằng `gsk_`

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

- **Tin nhắn mới**: Click "Cuộc trò chuyện mới" hoặc icon hamburger
- **Đổi model**: Dropdown ở header (Llama 3.1 70B/8B, Mixtral, Gemma)
- **Prompt nhanh**: Click các thẻ ở màn hình chào mừng
- **Template**: Settings > chọn "👨‍💻 Code Assistant" hoặc các mẫu khác
- **Copy/regenerate**: Hover vào tin nhắn AI để thấy nút action
- **Export**: Icon download ở header để lưu chat ra .md

## Giới hạn miễn phí (Groq)

| Model | Requests/phút | Tokens/phút |
|-------|---------------|-------------|
| Llama 3.1 8B | 30 | 20,000 |
| Llama 3.1 70B | 30 | 20,000 |
| Mixtral 8x7B | 30 | 20,000 |
| Gemma 7B | 30 | 20,000 |

→ Đủ dùng cho cá nhân, không cần credit card.

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

