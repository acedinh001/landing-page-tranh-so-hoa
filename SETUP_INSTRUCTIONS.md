# Hướng Dẫn Cài Đặt Landing Page Tranh Tô Màu

## 🎨 Tổng Quan

Landing page được thiết kế chuyên biệt cho Facebook Ads, tối ưu hóa chuyển đổi leads cho sản phẩm "Tranh Tô Màu Số Hoá Cá Nhân Hoá".

## 📋 Các Bước Thiết Lập

### 1. Cài Đặt Facebook Pixel

Mở file `app/layout.tsx` và thay thế `YOUR_PIXEL_ID` bằng Facebook Pixel ID thực tế của bạn:

```typescript
fbq('init', 'YOUR_PIXEL_ID'); // Thay thế bằng ID thực tế
```

### 2. Thiết Lập Google Apps Script Webhook

#### Bước 2.1: Tạo Google Sheet
1. Tạo Google Sheet mới
2. Đặt tên các cột: `Timestamp`, `Name`, `Phone`, `Note`

#### Bước 2.2: Tạo Apps Script
1. Trong Google Sheet, chọn **Extensions** > **Apps Script**
2. Dán đoạn code sau:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.note
  ]);

  return ContentService.createTextOutput(JSON.stringify({
    status: 'success'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Nhấn **Deploy** > **New deployment**
4. Chọn **Web app**
5. Cấu hình:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy **Web app URL** (dạng: `https://script.google.com/macros/s/XXXXXXX/exec`)

#### Bước 2.3: Cập Nhật URL trong Code
Mở file `components/sections/ConsultationForm.tsx` và thay thế URL:

```typescript
await fetch('https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec', {
  // Thay thế bằng URL thực tế từ bước 2.2
```

### 3. Cập Nhật Thông Tin Liên Hệ

#### File: `components/sections/Footer.tsx`
```typescript
<a href="tel:0901234567"> // Đổi số điện thoại
<a href="mailto:info@tranhtomauso.vn"> // Đổi email
```

#### File: `components/FloatingButtons.tsx`
```typescript
href="https://www.facebook.com/yourpage" // Link fanpage
href="https://m.me/yourpage" // Link messenger
```

### 4. Tùy Chỉnh Hình Ảnh (Tùy Chọn)

Hiện tại landing page sử dụng hình ảnh từ Pexels. Để thay thế bằng hình ảnh thật của bạn:

1. Upload hình ảnh lên hosting (Cloudinary, ImgBB, etc.)
2. Thay thế URL trong các file:
   - `components/sections/HeroSection.tsx`
   - `components/sections/GallerySection.tsx`
   - `components/sections/TestimonialsSection.tsx`

### 5. Chạy Local Development

```bash
npm run dev
```

Mở trình duyệt: `http://localhost:3000`

### 6. Deploy Production

#### Vercel (Khuyến nghị):
```bash
npm install -g vercel
vercel
```

#### Build Static Export:
```bash
npm run build
```

Files sẽ được xuất ra thư mục `out/`

## 🎯 Kiểm Tra Chức Năng

### Checklist Trước Khi Launch:
- [ ] Facebook Pixel hoạt động (kiểm tra bằng Facebook Pixel Helper Chrome Extension)
- [ ] Google Sheet nhận được dữ liệu khi submit form
- [ ] Form validation hoạt động đúng
- [ ] Floating buttons link đến đúng fanpage/messenger
- [ ] Responsive design trên mobile
- [ ] Smooth scrolling khi nhấn CTA
- [ ] Facebook Pixel `Lead` event được trigger khi submit form

## 📱 Mobile Optimization

Landing page được thiết kế mobile-first với:
- Responsive breakpoints
- Touch-friendly buttons (48px minimum)
- Optimized images
- Fast loading

## 🔧 Troubleshooting

### Form không submit được:
- Kiểm tra Google Apps Script URL
- Kiểm tra CORS settings trong Apps Script
- Xem console log để debug

### Facebook Pixel không hoạt động:
- Kiểm tra Pixel ID
- Cài Facebook Pixel Helper extension
- Xem Network tab trong DevTools

### Hình ảnh không load:
- Kiểm tra URL hình ảnh
- Thay thế bằng URL từ hosting của bạn

## 📊 Facebook Ads Setup

### Khuyến nghị:
1. Objective: **Leads**
2. Landing page URL: URL của bạn sau khi deploy
3. Pixel event: `Lead` (được trigger tự động khi submit form)
4. Target audience: Chi tiết theo campaign của bạn

## 💡 Tips Tối Ưu Conversion:

1. **A/B Testing**: Test các headline khác nhau
2. **Speed**: Đảm bảo trang load < 3 giây
3. **Trust**: Thêm logo đối tác, chứng nhận (nếu có)
4. **Urgency**: Thêm countdown timer (nếu phù hợp)
5. **Social Proof**: Cập nhật testimonials thật từ khách hàng

## 📞 Support

Nếu gặp vấn đề, vui lòng:
1. Check console log
2. Check Network tab
3. Verify tất cả URLs và IDs đã được cập nhật

---

**Chúc bạn chiến dịch thành công!** 🚀
