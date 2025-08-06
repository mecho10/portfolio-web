# 🎨 Portfolio Web - 個人作品集網站

> 使用 Vue.js 3 建立的現代化個人作品集網站，展示前端開發技能與專案作品

## 📸 專案預覽

![Portfolio Screenshot](https://via.placeholder.com/800x400/667eea/white?text=Portfolio+Preview)

### 🌟 線上展示
- **展示網址**: [https://leroy.github.io/portfolio-web](https://leroy.github.io/portfolio-web)
- **GitHub**: [https://github.com/leroy/portfolio-web](https://github.com/leroy/portfolio-web)

## 🚀 技術棧

### 前端框架
- **Vue.js 3** - 採用 Composition API 的現代化前端框架
- **Vue Router** - 單頁應用路由管理
- **Vite** - 快速的建構工具與開發伺服器

### 樣式技術
- **CSS3** - 現代 CSS 特性，包含 Grid、Flexbox、動畫
- **響應式設計** - 支援各種裝置尺寸
- **CSS 變數** - 統一的主題色彩管理

### 開發工具
- **ESLint** - 代碼品質檢查
- **Prettier** - 代碼格式化
- **Git** - 版本控制

### 部署平台
- **GitHub Pages** - 靜態網站託管
- **gh-pages** - 自動部署工具

## 📋 功能特色

### 🏠 首頁 (Home)
- 個人簡介與技能展示
- 精選作品預覽
- 聯絡資訊與社群連結
- 現代化的英雄區域設計

### 💼 專案作品 (Projects)
- 完整的專案展示頁面
- 每個專案包含：
  - 專案描述與功能說明
  - 使用的技術棧標籤
  - 線上展示與 GitHub 連結
  - 開發心得與挑戰

### 🌐 API 串接展示 (API Demo)
- 多種第三方 API 整合範例
- 包含錯誤處理與載入狀態
- 支援的 API：
  - JSONPlaceholder - 用戶與文章數據
  - Dog API - 隨機寵物圖片
  - 天氣 API - 即時天氣資訊
  - Quotable API - 勵志名言

### 👤 關於我 (About)
- 詳細的個人履歷
- 技能熟練度展示
- 工作經歷時間軸
- 教育背景與證照
- 興趣愛好分享

## 🛠️ 安裝與執行

### 環境需求
- Node.js 16.0+ 
- npm 或 yarn

### 本地開發
\`\`\`bash
# 複製專案
git clone https://github.com/leroy/portfolio-web.git
cd portfolio-web

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 開啟瀏覽器訪問 http://localhost:5173
\`\`\`

### 建構與部署
\`\`\`bash
# 建構生產版本
npm run build

# 預覽建構結果
npm run preview

# 部署到 GitHub Pages
npm run deploy
\`\`\`

## 📁 專案結構

\`\`\`
portfolio-web/
├── public/                 # 靜態資源
├── src/
│   ├── components/         # 可重用組件
│   ├── views/             # 頁面組件
│   │   ├── Home.vue       # 首頁
│   │   ├── Projects.vue   # 專案作品
│   │   ├── About.vue      # 關於我
│   │   └── ApiDemo.vue    # API 展示
│   ├── App.vue            # 根組件
│   ├── main.js           # 應用入口
│   └── style.css         # 全域樣式
├── index.html            # HTML 模板
├── vite.config.js        # Vite 配置
├── package.json          # 依賴管理
└── README.md            # 專案說明
\`\`\`

## 🎨 設計特色

### 視覺設計
- **漸層背景** - 現代化的色彩搭配
- **玻璃擬態** - 半透明效果與模糊背景
- **卡片佈局** - 清晰的內容分組
- **流暢動畫** - CSS 過渡效果與懸停動畫

### 用戶體驗
- **響應式設計** - 完美適配手機、平板、桌面
- **快速載入** - Vite 優化的建構輸出
- **直覺導航** - 清晰的網站結構
- **無障礙支援** - 語義化 HTML 與鍵盤支援

## 🔧 開發心得

### 技術選擇
選擇 Vue.js 3 的原因：
- **學習曲線平緩** - 相比其他框架更容易上手
- **優秀的文檔** - 官方文檔完整且易懂
- **生態系統** - 豐富的插件與工具支援
- **效能優異** - 編譯時優化與響應式系統

### 開發挑戰
1. **響應式設計** - 確保在各種裝置上的完美顯示
2. **效能優化** - 圖片壓縮與代碼分割
3. **SEO 優化** - 單頁應用的搜尋引擎優化
4. **跨瀏覽器相容** - 確保在不同瀏覽器的一致性

### 解決方案
- 使用 CSS Grid 和 Flexbox 實現響應式佈局
- 利用 Vite 的自動代碼分割功能
- 適當設置 meta 標籤和 title
- 採用漸進式增強的開發策略

## 📈 效能優化

### 建構優化
- **代碼分割** - 按需載入減少初始包大小
- **壓縮最小化** - Gzip 壓縮與代碼壓縮
- **快取策略** - 合理的資源快取設定

### 運行時優化
- **懶載入** - 圖片與組件的延遲載入
- **防抖處理** - API 請求的防抖機制
- **記憶化** - 昂貴計算的結果快取

## 🔮 未來規劃

### 功能擴展
- [ ] 多語言支援 (i18n)
- [ ] 深色模式切換
- [ ] 文章部落格系統
- [ ] 留言評論功能
- [ ] 訪客統計分析

### 技術升級
- [ ] TypeScript 重構
- [ ] 單元測試覆蓋
- [ ] E2E 自動化測試
- [ ] PWA 功能支援
- [ ] 微前端架構

## 📞 聯絡資訊

如果您對這個專案有任何問題或建議，歡迎聯絡我：

- **Email**: leroy.dev@example.com
- **GitHub**: [@leroy](https://github.com/leroy)
- **LinkedIn**: [Leroy Developer](https://linkedin.com/in/leroy-dev)

## 📄 授權條款

此專案採用 MIT 授權條款 - 查看 [LICENSE](LICENSE) 檔案了解詳情

---

⭐ 如果這個專案對您有幫助，請給個 Star 支持一下！

---

**建立時間**: 2024年12月  
**作者**: Leroy  
**版本**: 1.0.0