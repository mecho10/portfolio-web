<template>
  <div>
    <!-- 英雄區域 -->
    <section class="hero-section">
      <div class="card">
        <h1 class="hero-title gradient-text">歡迎來到我的作品集</h1>
        <p class="hero-subtitle">我是一名熱愛技術的前端開發者，專精於現代 Web 開發技術</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <router-link to="/projects" class="btn">查看我的專案</router-link>
          <router-link to="/about" class="btn btn-outline">了解更多</router-link>
        </div>
      </div>
    </section>

    <!-- 技能展示 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2rem;">核心技能</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚡</div>
            <h3>Vue.js / React</h3>
            <p>熟練使用現代前端框架，包含組件開發、狀態管理、路由設計</p>
          </div>
          <div class="skill-item">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎨</div>
            <h3>UI/UX 設計</h3>
            <p>注重用戶體驗，熟悉響應式設計、CSS3 動畫、現代設計原則</p>
          </div>
          <div class="skill-item">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔧</div>
            <h3>開發工具</h3>
            <p>Git、Webpack、Vite、NPM、ESLint、開發環境配置與優化</p>
          </div>
          <div class="skill-item">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌐</div>
            <h3>API 整合</h3>
            <p>RESTful API、GraphQL、Axios、前後端分離架構設計</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新專案預覽 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2rem;">學習專案</h2>
        <div class="project-grid">
          <div class="project-card">
            <div class="project-image">Vue.js 作品集</div>
            <div class="project-content">
              <h3 class="project-title">個人作品集網站</h3>
              <p class="project-description">使用 Vue.js 3 + Vue Router 建立的響應式作品集網站，展示個人技能與專案作品。</p>
              <div class="tech-tags">
                <span class="tech-tag">Vue.js</span>
                <span class="tech-tag">CSS3</span>
                <span class="tech-tag">Responsive</span>
              </div>
              <div class="project-links">
                <a href="http://localhost:5173/portfolio-web/" class="btn">本地展示</a>
                <a href="https://github.com/mecho10" target="_blank" class="btn btn-outline">GitHub</a>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">ShowSniper 網站</div>
            <div class="project-content">
              <h3 class="project-title">ShowSniper 官方網站</h3>
              <p class="project-description">使用 HTML/CSS 手刻完成的響應式靜態網站，展示產品介紹與服務流程。</p>
              <div class="tech-tags">
                <span class="tech-tag">HTML5</span>
                <span class="tech-tag">CSS3</span>
                <span class="tech-tag">RWD</span>
              </div>
              <div class="project-links">
                <a href="https://showsniper.netlify.app/" target="_blank" class="btn">線上展示</a>
                <a href="https://github.com/mecho10/ShowSniper-website" target="_blank" class="btn btn-outline">GitHub</a>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">🐍 貪食蛇遊戲</div>
            <div class="project-content">
              <h3 class="project-title">SnakeGameAPI - 全端遊戲</h3>
              <p class="project-description">Django + JWT 認證的全端貪食蛇遊戲，包含使用者系統、分數排行榜等完整功能。</p>
              <div class="tech-tags">
                <span class="tech-tag">Django</span>
                <span class="tech-tag">JWT</span>
                <span class="tech-tag">Canvas</span>
              </div>
              <div class="project-links">
                <a href="https://gameapi-p2vx.onrender.com/" target="_blank" class="btn">線上遊戲</a>
                <a href="https://github.com/mecho10/SnakeGameAPI" target="_blank" class="btn btn-outline">GitHub</a>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">API 整合</div>
            <div class="project-content">
              <h3 class="project-title">API 串接展示</h3>
              <p class="project-description">展示與第三方 API 整合的能力，包含數據獲取、錯誤處理、載入狀態管理。</p>
              <div class="tech-tags">
                <span class="tech-tag">API</span>
                <span class="tech-tag">Axios</span>
                <span class="tech-tag">JSON</span>
              </div>
              <div class="project-links">
                <router-link to="/api-demo" class="btn">立即體驗</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡資訊 -->
    <section>
      <div class="card" style="text-align: center;">
        <h2 style="margin-bottom: 1rem;">讓我們開始合作</h2>
        <p style="color: #666; margin-bottom: 2rem;">如果您正在尋找一位充滿熱忱的前端開發者，歡迎與我聯絡！</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="mailto:chang861019@gmail.com" class="btn">✉️ 發送郵件</a>
          <a href="https://github.com/mecho10" target="_blank" class="btn btn-outline">⚫ GitHub</a>
          <a href="https://www.linkedin.com/in/lile-chang-640257358/" target="_blank" class="btn btn-outline">🔗 LinkedIn</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.title = 'Leroy - 前端開發者作品集'
  }
}
</script>