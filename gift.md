# Kế hoạch website cổ vũ Huyền Trân thực tập tốt

## 1. Mục tiêu

Tạo một website nhỏ, dễ thương vừa phải, mở tốt trên điện thoại để gửi link cho mọi người xem và cổ vũ Huyền Trân trong quá trình thực tập.

Website nên chạy bằng GitHub Pages vì mình chưa có server riêng. Vì vậy phiên bản đầu nên dùng:

- HTML: tạo nội dung trang.
- CSS: tạo giao diện, màu sắc, bố cục và responsive cho điện thoại.
- JavaScript: tạo hiệu ứng bấm nút, hiện lời chúc, confetti và bật/tắt nhạc nếu có.

Lưu ý: PHP không chạy trực tiếp trên GitHub Pages. Nếu sau này có hosting hỗ trợ PHP thì có thể thêm PHP sau. Với website cổ vũ dạng này, HTML, CSS và JavaScript là đủ.

## 2. Cấu trúc thư mục

```text
gift/
|-- index.html
|-- style.css
|-- script.js
`-- assets/
    |-- images/
    `-- music/
```

Giải thích đơn giản:

- `index.html`: trang chính, người khác mở link sẽ thấy trang này.
- `style.css`: màu sắc, font chữ, bố cục và hiệu ứng giao diện.
- `script.js`: xử lý bấm nút, hiện lời chúc, confetti và bật/tắt nhạc.
- `assets/images/`: để ảnh, sticker hoặc background.
- `assets/music/`: để nhạc nền file `.mp3` nếu muốn dùng.

Nếu chưa có ảnh và nhạc, website vẫn có thể làm đẹp bằng CSS, icon chữ, hiệu ứng sao và confetti. Ảnh/nhạc là phần thêm cho sinh động hơn, không bắt buộc ngay từ đầu.

## 3. Ý tưởng giao diện trên điện thoại

Phong cách nên là tươi sáng, gọn gàng, cổ vũ nhẹ nhàng. Vì gửi cho đàn em khóa dưới nên nội dung nên bình thường, vui vẻ, không quá tình cảm hay quá trang trọng.

- Nền màu sáng: hồng nhạt, xanh mint, vàng kem hoặc trắng ấm.
- Chữ lớn, dễ đọc trên màn hình điện thoại.
- Nút bấm lớn, dễ chạm bằng ngón tay.
- Hiệu ứng vừa phải: fade in, sao nhỏ, confetti nhẹ.
- Không nên dùng hiệu ứng quá dày vì dễ rối và nặng khi mở bằng 4G/5G.

Yêu cầu responsive bắt buộc:

- Thiết kế theo mobile-first, ưu tiên điện thoại trước.
- Giao diện phải đứng theo chiều dọc/portrait.
- Nội dung nằm trong một khung dọc, không cần xoay ngang màn hình.
- Tự động co giãn theo kích thước màn hình nhỏ/lớn khác nhau.
- Không để chữ, nút, ảnh bị tràn ra ngoài màn hình.
- Không để người dùng phải kéo ngang.
- Mỗi section nên có `min-height: 100svh` hoặc cân đối theo chiều cao màn hình điện thoại.
- Khung nội dung nên có `max-width` khoảng 420px và `width: min(100%, 420px)`.
- Font chữ nên dùng `clamp()` để tự động lớn nhỏ vừa màn hình.
- Ảnh nên dùng `width: 100%`, `height: auto`, `object-fit: cover`.
- Nút bấm cao tối thiểu 44px để dễ chạm trên điện thoại.

Màn hình đầu tiên:

- Tiêu đề: `Cố gắng lên nhá`
- Câu phụ: `Cố gắng thực tập tốt, luôn ở trạng thái tốt nè.`
- Nút: `Mở lời chúc`

Sau khi bấm nút:

- Một khung lời chúc hiện ra.
- Hiện lời chúc chính.
- Confetti bay lên nhẹ.
- Có thể hiện thêm vài câu cổ vũ ngắn.
- Nhạc nền chỉ là tùy chọn, nếu có thì người dùng bấm nút mới bật.

## 4. Nội dung trang

### Phần 1: Màn hình chào

Nội dung gợi ý:

```text
Cố gắng lên nhá
Cố gắng thực tập tốt, luôn ở trạng thái tốt nè.
```

Nút hành động:

```text
Mở lời chúc
```

### Phần 2: Lời chúc chính

Nội dung gợi ý:

```text
Chúc Huyền Trân có một kỳ thực tập thật tốt nha.
Cứ bình tĩnh, tự tin, học được gì thì học hết mình.
Có gì chưa biết thì hỏi, có gì khó thì từ từ xử lý.
Quan trọng là giữ tinh thần tốt và mỗi ngày tiến bộ hơn một chút.
```

### Phần 3: Các câu cổ vũ ngắn

JavaScript có thể cho hiện từng câu:

- `Tự tin lên nha, Huyền Trân!`
- `Mỗi ngày tiến bộ một chút là ổn rồi.`
- `Thực tập là để học, không cần hoàn hảo ngay từ đầu.`
- `Cứ bình tĩnh, làm tới đâu chắc tới đó.`
- `Giữ năng lượng tốt nha.`
- `Huyền Trân làm được mà!`

### Phần 4: Lời kết

```text
Chúc Huyền Trân thực tập thuận lợi.
Mong là thời gian này sẽ giúp bạn học được nhiều điều hay.
```

## 5. Hiệu ứng JavaScript nên có

- Bấm `Mở lời chúc` thì ẩn màn hình chào và hiện khung lời chúc.
- Tạo confetti nhẹ khi mở lời chúc.
- Có thể tạo sao nhỏ hoặc chấm sáng bay lên khi bấm vào màn hình.
- Slider câu chúc: mỗi 3 giây đổi một câu.
- Hiệu ứng typewriter cho câu chúc đầu tiên nếu muốn.
- Nút bật/tắt nhạc nền nếu đã có file nhạc.

Lưu ý cho điện thoại: nhạc nền không nên tự động phát ngay khi vào trang, vì trình duyệt điện thoại thường chặn autoplay. Nên có nút `Bật nhạc`.

## 6. Ảnh nên dùng

Asset đang có trong dự án:

```text
assets/images/study-hero-fast.jpg
```

Ảnh này là ảnh nền minh họa riêng cho website: phong cách học tập, pastel, sáng, có khoảng trống ở giữa để đặt chữ. Ảnh không có chữ, không logo, không watermark. File này là bản đã nén để tải nhanh trên điện thoại.

Nếu có ảnh của Huyền Trân:

- Đặt ảnh vào `assets/images/huyen-tran.jpg`.
- Nên dùng ảnh dọc hoặc ảnh vuông để hợp màn hình điện thoại.
- Không nên dùng ảnh quá nặng; nên dưới 500 KB nếu có thể.

Nếu chưa có ảnh riêng:

- Dùng background hoặc hình minh họa miễn phí theo chủ đề: học tập, bàn làm việc, notebook, hoa, pastel, celebration, confetti.
- Có thể tìm trên Unsplash hoặc Pixabay.
- Từ khóa tìm ảnh gợi ý:
  - `pastel study desk`
  - `notebook flowers`
  - `celebration confetti`
  - `internship desk`
  - `soft pastel background`

Tên file nên đặt gọn, không dấu, không khoảng trắng:

```text
assets/images/background.jpg
assets/images/card-photo.jpg
assets/images/sticker-flower.png
```

Nếu không muốn thêm ảnh ngay, có thể làm nền bằng CSS trước: màu sáng, gradient nhẹ, sao nhỏ và confetti.

## 7. Nhạc nền nên dùng

Nhạc nền là tùy chọn. Nếu dùng thì nên chọn nhạc instrumental nhẹ, vui, không lời để không gây rối:

Asset đang có trong dự án:

```text
assets/music/background-fun.wav
```

Nhạc này là file WAV tự tạo cho dự án, dạng instrumental vui hơn và có thể chạy loop. Vì là nhạc tự tạo nên không dùng bài nổi tiếng và không phụ thuộc link tải bên ngoài.

- Soft piano
- Happy acoustic
- Gentle inspiring background
- Warm lo-fi
- Light ukulele

Có thể tìm nhạc miễn phí trên Pixabay Music hoặc Mixkit Music. Khi tải về, đặt tên:

```text
assets/music/background.mp3
```

Nút trên website:

```text
Bật nhạc
Tắt nhạc
```

Không nên dùng nhạc nổi tiếng trên TikTok/YouTube vì dễ dính bản quyền khi public link.

## 8. Nơi lấy asset miễn phí

Nguồn gợi ý:

- Pixabay: có ảnh, minh họa, nhạc và sound effects. Có thể dùng miễn phí, không bắt buộc ghi credit, có thể chỉnh sửa, nhưng không nên bán/phát tán asset nguyên bản như một sản phẩm riêng.
- Unsplash: phù hợp lấy ảnh nền đẹp. Ảnh có thể tải và dùng miễn phí, credit không bắt buộc nhưng nên ghi nếu có thể.
- Mixkit: có nhạc stock và sound effects miễn phí, nhưng mỗi loại asset có license riêng nên cần xem đúng mục `Stock Music - Free License` trước khi tải.

Link tham khảo:

- Pixabay License Summary: https://pixabay.com/service/license-summary/
- Unsplash License: https://unsplash.com/license
- Mixkit License: https://mixkit.co/license/

## 9. Kế hoạch làm file

### Bước 1: Tạo HTML

Trong `index.html`:

- Thêm thẻ `meta viewport` để chạy tốt trên điện thoại.
- Đặt layout theo chiều dọc, không tạo layout ngang.
- Tạo màn hình chào.
- Tạo khung lời chúc.
- Tạo khu vực câu chúc ngắn.
- Tạo nút bật/tắt nhạc nếu có nhạc.
- Gắn file `style.css` và `script.js`.

### Bước 2: Tạo CSS

Trong `style.css`:

- Viết mobile-first.
- Dùng layout portrait/dọc là mặc định.
- Căn giữa nội dung theo chiều dọc.
- Tạo nền sáng, dễ nhìn.
- Tạo khung lời chúc gọn gàng.
- Tạo animation fade in và confetti nhẹ.
- Đảm bảo nút bấm cao tối thiểu khoảng 44px để dễ bấm trên điện thoại.
- Dùng `clamp()` cho kích thước chữ để tự động to nhỏ.
- Dùng `max-width: 420px` cho khung chính để trang đẹp trên điện thoại lớn.
- Dùng `width: 100%` và `box-sizing: border-box` để không bị tràn ngang.
- Thêm xử lý nếu người dùng xoay ngang: hiện thông báo nhẹ `Xoay dọc màn hình để xem đẹp hơn` hoặc vẫn giữ layout dọc ở giữa.

### Bước 3: Tạo JavaScript

Trong `script.js`:

- Bắt sự kiện bấm nút `Mở lời chúc`.
- Hiện/ẩn các phần.
- Chạy câu chúc xoay vòng.
- Tạo confetti hoặc sao nhỏ bay lên.
- Xử lý audio: bấm mới phát nhạc.

### Bước 4: Thêm asset

Nếu có ảnh:

- Bỏ vào `assets/images/`.
- Đổi tên gọn, không dấu, không khoảng trắng.

Ví dụ:

```text
huyen-tran.jpg
background.jpg
flower.png
```

Nếu có nhạc:

- Bỏ vào `assets/music/background.mp3`.

### Bước 5: Test trên điện thoại

- Mở bằng trình duyệt điện thoại.
- Kiểm tra chữ có bị tràn không.
- Kiểm tra nút có dễ bấm không.
- Kiểm tra layout có đứng đúng chiều dọc không.
- Kiểm tra có bị kéo ngang không.
- Kiểm tra nhạc có bật sau khi bấm không.
- Kiểm tra website có load nhanh không.

## 10. Đưa lên GitHub Pages

1. Tạo repository trên GitHub, ví dụ: `gift`.
2. Upload các file trong thư mục `gift`.
3. Vào `Settings`.
4. Vào `Pages`.
5. Chọn branch `main`.
6. Lưu lại và đợi GitHub tạo link.

Link sẽ có dạng:

```text
https://ten-github-cua-ban.github.io/gift/
```

## 11. Phiên bản đầu nên làm như vậy

Để nhanh và dễ thành công, phiên bản đầu nên gồm:

- Một trang duy nhất.
- Chạy tốt trên điện thoại.
- Giao diện đứng, tự co giãn theo màn hình.
- Có nút mở lời chúc.
- Có khung lời chúc chính.
- Có confetti hoặc sao nhỏ bay nhẹ.
- Có nút bật/tắt nhạc nếu đã có file nhạc.
- Nếu chưa có asset, dùng CSS làm nền và hiệu ứng trước.

Sau đó mới nâng cấp:

- Thêm ảnh của Huyền Trân.
- Thêm nhạc nền.
- Thêm lời chúc của nhiều người.
- Thêm QR code để gửi nhanh.
