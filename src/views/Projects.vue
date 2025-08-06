<script>
export default {
  name: 'Projects',
  data() {
    return {
      showsniperImg: '/images/showsniper.png',
      ratebotImg: '/images/ratebot.png'
    }
  },
  mounted() {
    document.title = '專案作品 - Leroy Portfolio'
  }
}
</script>

<template>
  <div>
    <section>
      <div class="card">
        <h1 style="text-align: center; margin-bottom: 2rem; font-size: 2.5rem;" class="gradient-text">
          我的學習專案
        </h1>
        <p style="text-align: center; color: #666; font-size: 1.1rem; margin-bottom: 3rem;">
          以下是我在自學過程中完成的練習專案，每個專案都是我學習新技術的實踐成果，目前正在持續完善中
        </p>
      </div>
    </section>

    <!-- 專案列表 -->
    <section>
      <div class="project-grid">
        <!-- Vue.js 作品集網站 -->
        <div class="project-card">
          <div class="project-image">
            <div style="font-size: 3rem;">🎨</div>
            <div>Vue.js 作品集</div>
          </div>
          <div class="project-content">
            <h3 class="project-title">個人作品集網站</h3>
            <p class="project-description">
              使用 Vue.js 3 + Vue Router + Vite 建立的現代化作品集網站。
              具備響應式設計、流暢動畫效果、SEO 優化，並支援 GitHub Pages 部署。
              展示個人技能、專案作品與聯絡資訊。
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Vue.js 3</span>
              <span class="tech-tag">Vue Router</span>
              <span class="tech-tag">Vite</span>
              <span class="tech-tag">CSS3</span>
              <span class="tech-tag">Responsive Design</span>
              <span class="tech-tag">GitHub Pages</span>
            </div>
            <div class="project-links">
              <a href="http://localhost:5173/portfolio-web/" class="btn">本地展示</a>
              <a href="https://github.com/mecho10" target="_blank" class="btn btn-outline">GitHub</a>
            </div>
            <div style="margin-top: 1rem;">
              <h4 style="color: #667eea; margin-bottom: 0.5rem;">主要功能：</h4>
              <ul style="color: #666; line-height: 1.6;">
                <li>現代化單頁應用 (SPA) 架構</li>
                <li>響應式設計，支援各種裝置</li>
                <li>流暢的頁面轉場動畫</li>
                <li>API 串接展示功能</li>
                <li>SEO 友好的 meta 設定</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ShowSniper 網站 -->
        <div class="project-card">
          <div class="project-image" style="height: 200px; border-radius: 8px; overflow: hidden;">
            <img :src="showsniperImg" alt="ShowSniper 官方網站截圖" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="project-content">
            <h3 class="project-title">ShowSniper 官方網站</h3>
            <p class="project-description">
              使用 HTML/CSS 手刻完成的靜態網站，為 ShowSniper 自動購票工具的官方介紹頁。
              展示服務介紹、功能特色、使用流程與聯絡資訊，並實作響應式設計適配各種裝置。
            </p>
            <div class="tech-tags">
              <span class="tech-tag">HTML5</span>
              <span class="tech-tag">CSS3</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">響應式設計</span>
              <span class="tech-tag">Netlify</span>
            </div>
            <div class="project-links">
              <a href="https://showsniper.netlify.app/" target="_blank" class="btn">線上展示</a>
              <a href="https://github.com/mecho10/ShowSniper-website" target="_blank" class="btn btn-outline">GitHub</a>
            </div>
            <div style="margin-top: 1rem;">
              <h4 style="color: #667eea; margin-bottom: 0.5rem;">網站特色：</h4>
              <ul style="color: #666; line-height: 1.6;">
                <li>手刻 HTML/CSS，無使用框架</li>
                <li>響應式設計 (RWD) 支援各裝置</li>
                <li>語意化 HTML 結構設計</li>
                <li>CSS Flexbox/Grid 現代佈局</li>
                <li>產品介紹與使用者引導流程</li>
              </ul>
            </div>
          </div>
        </div>



        <!-- API 整合專案 -->
        <div class="project-card">
          <div class="project-image">
            <div style="font-size: 3rem;">🌐</div>
            <div>API 整合展示</div>
          </div>
          <div class="project-content">
            <h3 class="project-title">多重 API 整合應用</h3>
            <p class="project-description">
              整合多個第三方 API 的綜合應用，包含天氣資訊、新聞頭條、匯率查詢、
              隨機圖片等功能。展示錯誤處理、載入狀態、數據快取等最佳實踐。
            </p>
            <div class="tech-tags">
              <span class="tech-tag">RESTful API</span>
              <span class="tech-tag">Axios</span>
              <span class="tech-tag">Promise</span>
              <span class="tech-tag">Error Handling</span>
              <span class="tech-tag">Loading States</span>
              <span class="tech-tag">Data Caching</span>
            </div>
            <div class="project-links">
              <router-link to="/api-demo" class="btn">立即體驗</router-link>
              <a href="https://github.com/mecho10" target="_blank" class="btn btn-outline">GitHub</a>
            </div>
            <div style="margin-top: 1rem;">
              <h4 style="color: #667eea; margin-bottom: 0.5rem;">整合服務：</h4>
              <ul style="color: #666; line-height: 1.6;">
                <li>OpenWeatherMap - 天氣資訊</li>
                <li>JSONPlaceholder - 模擬數據</li>
                <li>Unsplash - 高品質圖片</li>
                <li>ExchangeRate-API - 即時匯率</li>
                <li>Dog API - 隨機寵物圖片</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 響應式購物車 -->
        <div class="project-card">
          <div class="project-image">
            <div style="font-size: 3rem;">🛒</div>
            <div>電商購物車</div>
          </div>
          <div class="project-content">
            <h3 class="project-title">響應式購物車系統</h3>
            <p class="project-description">
              模擬完整的電商購物流程，包含商品瀏覽、購物車管理、結帳流程等功能。
              使用 Vuex 進行狀態管理，支援商品篩選、價格計算、優惠券系統。
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Vuex</span>
              <span class="tech-tag">Vue Router</span>
              <span class="tech-tag">Local Storage</span>
              <span class="tech-tag">Form Validation</span>
            </div>
            <div class="project-links">
              <span class="btn" style="opacity: 0.6; cursor: not-allowed;">未來目標</span>
              <a href="https://github.com/mecho10" target="_blank" class="btn btn-outline">GitHub</a>
            </div>
            <div style="margin-top: 1rem;">
              <h4 style="color: #667eea; margin-bottom: 0.5rem;">核心功能：</h4>
              <ul style="color: #666; line-height: 1.6;">
                <li>商品分類與搜尋篩選</li>
                <li>購物車新增/移除/修改</li>
                <li>優惠券與折扣計算</li>
                <li>訂單摘要與結帳流程</li>
                <li>用戶偏好設定儲存</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 實際完成的專案 -->
        <div class="project-card">
          <div class="project-image" style="height: 200px; border-radius: 8px; overflow: hidden;">
            <img :src="ratebotImg" alt="RateBot 匯率工具截圖" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="project-content">
            <h3 class="project-title">RateBot - 匯率查詢工具</h3>
            <p class="project-description">
              使用 Python 建立的匯率查詢桌面應用程式，透過台灣銀行網站即時抓取匯率資料。
              這是我實際完成的專案，展示了資料抓取與桌面應用程式開發能力。
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Web Scraping</span>
              <span class="tech-tag">GUI</span>
              <span class="tech-tag">API</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/mecho10/RateBot" target="_blank" class="btn">GitHub 查看</a>
              <span class="btn btn-outline" style="background: #28a745; color: white;">已完成</span>
            </div>
            <div style="margin-top: 1rem;">
              <h4 style="color: #667eea; margin-bottom: 0.5rem;">專案特色：</h4>
              <ul style="color: #666; line-height: 1.6;">
                <li>即時抓取台灣銀行匯率資料</li>
                <li>桌面應用程式介面</li>
                <li>多種貨幣支援</li>
                <li>資料更新與快取機制</li>
                <li>使用者友善的操作介面</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 其他實際專案 -->
        <div class="project-card">
          <div class="project-image">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🐍</div>
            <div>Django 專案</div>
            <small style="color: #999; margin-top: 0.5rem; display: block;">貪食蛇遊戲界面</small>
          </div>
          <div class="project-content">
            <h3 class="project-title">SnakeGameAPI - 全端遊戲專案</h3>
            <p class="project-description">
              使用 Django + JWT 認證 + 貪食蛇遊戲前端的全端小專案。
              結合後端 API 開發與前端遊戲邏輯，展示全端開發能力。
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Django</span>
              <span class="tech-tag">JWT</span>
              <span class="tech-tag">HTML/CSS</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">Game Development</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/mecho10/SnakeGameAPI" target="_blank" class="btn">GitHub 查看</a>
              <span class="btn btn-outline" style="background: #28a745; color: white;">已完成</span>
            </div>
            <div style="margin-top: 1rem;">
              <h4 style="color: #667eea; margin-bottom: 0.5rem;">技術亮點：</h4>
              <ul style="color: #666; line-height: 1.6;">
                <li>Django REST Framework API</li>
                <li>JWT 身份驗證系統</li>
                <li>前端遊戲邏輯實作</li>
                <li>前後端分離架構</li>
                <li>遊戲狀態管理</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- 技術總結 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 2rem;">技術棧總覽</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
          <div style="text-align: center;">
            <h3 style="color: #667eea; margin-bottom: 1rem;">前端框架</h3>
            <p>Vue.js, React, Angular</p>
          </div>
          <div style="text-align: center;">
            <h3 style="color: #667eea; margin-bottom: 1rem;">開發工具</h3>
            <p>Vite, Webpack, ESLint, Prettier</p>
          </div>
          <div style="text-align: center;">
            <h3 style="color: #667eea; margin-bottom: 1rem;">樣式技術</h3>
            <p>CSS3, Sass, Tailwind CSS</p>
          </div>
          <div style="text-align: center;">
            <h3 style="color: #667eea; margin-bottom: 1rem;">部署平台</h3>
            <p>GitHub Pages, Netlify, Vercel</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>