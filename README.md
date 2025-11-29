# 🎓 EdTech Platform - Học Nhanh Hơn, Dễ Hiểu Hơn

Nền tảng học tập kết hợp AI giúp học sinh học tập hiệu quả với chatbot thông minh, kho kiến thức chuẩn hoá và phòng thí nghiệm mô phỏng 2D.

![EdTech Platform](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-2-3ecf8e?style=for-the-badge&logo=supabase)

## ✨ Tính Năng Chính

### 🤖 AI Chatbot Học Tập
- Trợ lý AI thông minh hỗ trợ 24/7
- Chuyên về Vật Lý, Hoá Học, Sinh Học
- Giải thích khái niệm dễ hiểu với ví dụ thực tế
- Powered by OpenAI GPT-4o-mini

### 📚 Kho Kiến Thức Chuẩn Hoá
- Dữ liệu JSON có cấu trúc rõ ràng
- Nội dung đầy đủ về Vật Lý, Hoá Học, Sinh Học
- Tìm kiếm nhanh chóng
- Công thức, khái niệm, và giải thích chi tiết

### 🧪 Phòng Thí Nghiệm 2D
- **Con Lắc Đơn**: Mô phỏng dao động điều hoà với p5.js
- **Định Luật Ohm**: Thí nghiệm mạch điện tương tác
- Điều chỉnh thông số thời gian thực
- Quan sát đồ thị và kết quả ngay lập tức
- Reset và thử lại không giới hạn

## 🚀 Bắt Đầu

### Yêu Cầu Hệ Thống
- Node.js 18+ 
- npm hoặc yarn
- Tài khoản Supabase (tuỳ chọn)
- OpenAI API key (tuỳ chọn)

### Cài Đặt

1. **Clone repository**
\`\`\`bash
git clone https://github.com/anht3k52/App-edtech.git
cd App-edtech
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Cấu hình environment variables**
\`\`\`bash
cp .env.example .env
\`\`\`

Chỉnh sửa file `.env`:
\`\`\`env
# Supabase (Optional)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI API (Optional - for AI Chatbot)
OPENAI_API_KEY=your_openai_api_key
\`\`\`

4. **Run development server**
\`\`\`bash
npm run dev
\`\`\`

5. **Mở trình duyệt tại** [http://localhost:3000](http://localhost:3000)

## 📁 Cấu Trúc Dự Án

\`\`\`
App-edtech/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── knowledge/         # Kho kiến thức
│   │   ├── chatbot/           # AI Chatbot
│   │   ├── lab/               # Virtual Labs
│   │   │   ├── pendulum/     # Con lắc đơn
│   │   │   └── ohm-law/      # Định luật Ohm
│   │   └── api/              # API Routes
│   │       └── chat/         # OpenAI Integration
│   ├── components/            # React Components
│   │   └── Navigation.tsx    # Main Navigation
│   ├── data/                  # JSON Data
│   │   └── knowledge.json    # Knowledge Base Data
│   └── lib/                   # Utilities
│       └── supabase.ts       # Supabase Client
├── public/                    # Static Assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
\`\`\`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **AI**: OpenAI API (GPT-4o-mini)
- **2D Graphics**: p5.js via react-p5

## 📖 Sử Dụng

### Kho Kiến Thức
1. Chọn môn học (Vật Lý, Hoá Học, Sinh Học)
2. Browse các chương và bài học
3. Xem công thức, khái niệm chi tiết
4. Sử dụng tìm kiếm để nhanh chóng tìm nội dung

### AI Chatbot
1. Nhập câu hỏi về Vật Lý, Hoá Học, Sinh Học
2. AI sẽ giải thích dễ hiểu với ví dụ
3. Hỏi thêm để hiểu sâu hơn

### Virtual Lab
#### Con Lắc Đơn:
- Điều chỉnh chiều dài dây (100-300cm)
- Thay đổi góc ban đầu (5-80°)
- Thay đổi gia tốc trọng trường (1-20 m/s²)
- Click "Chạy" để quan sát dao động

#### Định Luật Ohm:
- Điều chỉnh hiệu điện thế (1-24V)
- Thay đổi điện trở (10-500Ω)
- Quan sát dòng điện và công suất thay đổi

## 🔧 Development

### Build for Production
\`\`\`bash
npm run build
npm run start
\`\`\`

### Lint Code
\`\`\`bash
npm run lint
\`\`\`

## 🎯 Roadmap

- [x] Homepage với navigation
- [x] Kho kiến thức với JSON data
- [x] AI Chatbot với OpenAI
- [x] Virtual Lab: Con lắc đơn
- [x] Virtual Lab: Định luật Ohm
- [ ] Authentication với Supabase
- [ ] User dashboard
- [ ] Drag & drop trong Virtual Lab
- [ ] Thêm thí nghiệm Hoá Học
- [ ] Thêm thí nghiệm Sinh Học
- [ ] Mobile responsive improvements
- [ ] PWA support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- GitHub: [@anht3k52](https://github.com/anht3k52)
- Project Link: [https://github.com/anht3k52/App-edtech](https://github.com/anht3k52/App-edtech)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [OpenAI](https://openai.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [p5.js](https://p5js.org/)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤️ for Vietnamese students**
