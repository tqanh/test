# Deploy Cloudflare Worker Proxy

Để chia sẻ app cho người khác mà họ không cần nhập API key, hãy deploy Cloudflare Worker:

## Bước 1: Cài đặt Wrangler CLI

```bash
npm install -g wrangler
```

## Bước 2: Login vào Cloudflare

```bash
wrangler login
```

## Bước 3: Thêm API Key vào Secret

```bash
wrangler secret put GEMINI_API_KEY
```

Nhập API key Gemini của bạn khi được hỏi.

## Bước 4: Deploy Worker

```bash
cd e:\project\test2
wrangler deploy
```

## Bước 5: Lấy URL của Worker

Sau khi deploy xong, bạn sẽ thấy URL như:
```
https://gemini-proxy.ten-ten.workers.dev
```

## Bước 6: Cấu hình trong App

1. Mở app
2. Vào Cài đặt
3. Tích "Dùng Proxy Server"
4. Nhập URL worker vào ô Proxy URL
5. Lưu

## Bước 7: Chia sẻ App

Giờ bạn có thể chia sẻ GitHub Pages URL cho người khác. Họ sẽ dùng API key của bạn thông qua proxy.

## Lưu ý Bảo mật

- API key của bạn được lưu trên Cloudflare Workers (server-side)
- Không ai có thể thấy API key của bạn
- Bạn có thể giới hạn số lượng request hoặc thêm authentication nếu cần
- Cloudflare Workers miễn phí 100,000 requests/ngày
