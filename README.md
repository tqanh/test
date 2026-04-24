# AI Chat Client

Ứng dụng chat AI chạy hoàn toàn trên GitHub Pages với giao diện giống ChatGPT, sử dụng Google Gemini API miễn phí.

![Preview](https://i.imgur.com/placeholder.png)

## Tính năng

- **Chat với nhiều model**: Gemini 3.1 Flash-Lite ⭐, 3 Flash (Free tier)
- **Dark mode đẹp**: Giao diện hiện đại, responsive
- **Markdown rendering**: Hiển thị code blocks, bảng, list đẹp
- **Lưu lịch sử**: Lưu vào localStorage, không mất dữ liệu
- **Prompt templates**: Mẫu prompt nhanh cho code, giải thích, sáng tạo
- **Export chat**: Xuất ra file Markdown
- **PWA ready**: Có thể cài đặt như app

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

- **Tin nhắn mới**: Click "Cuộc trò chuyện mới" hoặc icon hamburger
- **Đổi model**: Dropdown ở header (3.1 Flash-Lite ⭐, 3 Flash)
- **Prompt nhanh**: Click các thẻ ở màn hình chào mừng
- **Template**: Settings > chọn "👨‍💻 Code Assistant" hoặc các mẫu khác
- **Copy/regenerate**: Hover vào tin nhắn AI để thấy nút action
- **Export**: Icon download ở header để lưu chat ra .md

## Giới hạn miễn phí (Gemini) - Cập nhật Tháng 4/2026

⚠️ **Google đã cắt bỏ toàn bộ Pro models khỏi free tier từ 1/4/2026**

### Còn lại trên Free Tier:
| Model | RPM | RPD | Notes |
|-------|-----|-----|-------|
| **Gemini 3.1 Flash-Lite** ⭐ | ~15 | ~1,000 | Mới nhất, rẻ nhất |
| **Gemini 3 Flash** | ~10 | ~500 | Cân bằng tốt |

### Paid-Only (từ 1/4/2026):
| Model | Tình trạng |
|-------|------------|
| Gemini 3.1 Pro | ❌ Cần thanh toán |
| Gemini 3 Pro | ❌ Cần thanh toán |
| Gemini 2.5 Pro | ❌ Cần thanh toán (trước đó free) |
| Gemini 2.5 Flash | ❌ Cần thanh toán (trước đó free) |

→ **Chỉ còn Flash & Flash-Lite free!** Tất cả Pro models đều yêu cầu billing.

### Khuyến nghị:
1. Dùng **3.1 Flash-Lite** cho hầu hết task (mới nhất, rẻ nhất)
2. Dùng **3 Flash** nếu cần chất lượng cao hơn một chút
3. Muốn dùng Pro? Phải thêm billing card vào Google Cloud

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

