<script>
export default {
  name: 'About',
  data() {
    return {
      resumePhoto: '/images/resume.jpg',
      experience: '自學中',
      workExperience: [
        {
          position: '進階專案實作',
          company: '個人學習',
          period: '2024.06 - 現在',
          tasks: [
            '建立完整的 Vue.js 和 React 作品集專案',
            '學習並實作 API 串接與錯誤處理',
            '練習響應式設計與用戶體驗優化',
            '掌握 Git 版本控制與 GitHub 協作流程',
            '研讀前端最佳實踐與代碼品質標準'
          ]
        },
        {
          position: 'JavaScript 與框架學習',
          company: '線上課程 & 實作練習',
          period: '2024.01 - 2024.05',
          tasks: [
            '透過 MDN、Vue.js 官方文檔學習核心概念',
            '完成多個小型專案練習程式邏輯',
            '學習 ES6+ 語法與現代 JavaScript 特性',
            '練習 DOM 操作與事件處理',
            '建立第一個 React 和 Vue.js 應用程式'
          ]
        },
        {
          position: 'HTML/CSS 基礎建立',
          company: '自學起步',
          period: '2023.09 - 2023.12',
          tasks: [
            '學習 HTML5 語義化標籤與網頁結構',
            '掌握 CSS3 樣式設計與 Flexbox、Grid 佈局',
            '練習響應式設計與媒體查詢',
            '了解網頁無障礙設計基本原則',
            '建立第一個靜態網頁作品'
          ]
        }
      ]
    }
  },
  mounted() {
    document.title = '關於我 - Leroy Portfolio'
  }
}
</script>

<template>
  <div>
    <!-- 個人簡介 -->
    <section>
      <div class="card">
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; align-items: center;">
          <div style="text-align: center;">
            <div style="width: 200px; height: 200px; border-radius: 50%; margin: 0 auto 1.5rem; overflow: hidden; border: 4px solid #667eea; box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);">
              <img :src="resumePhoto" alt="Chang Leroy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h2 style="margin-bottom: 0.5rem;">Chang Leroy</h2>
            <p style="color: #667eea; font-weight: 500;">自學前端開發者</p>
          </div>
          <div>
            <h1 class="gradient-text" style="font-size: 2.5rem; margin-bottom: 1rem;">關於我</h1>
            <p style="font-size: 1.1rem; line-height: 1.8; color: #666; margin-bottom: 1.5rem;">
              我是一名熱愛程式設計的自學前端開發者，透過線上課程、技術文檔和實作專案來學習現代 Web 開發技術。
              專精於 Vue.js、React、JavaScript ES6+、CSS3 等技術，目前正持續精進自己的技能。
              相信透過不斷練習和學習，能夠創造出優秀的用戶體驗。
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8; color: #666;">
              雖然是自學背景，但我對程式設計充滿熱忱，樂於接受挑戰和學習新事物，
              目前正在尋找前端開發的工作機會，希望能將所學應用到實際專案中。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能詳細說明 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2rem;">專業技能</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          
          <!-- 前端框架 -->
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px;">
            <h3 style="color: #667eea; margin-bottom: 1rem; display: flex; align-items: center;">
              <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚛️</span>
              前端框架 & 函式庫
            </h3>
            <div style="margin-bottom: 1rem;">
              <strong>Vue.js</strong> - 學習程度: 60%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 60%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>React</strong> - 學習程度: 45%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 45%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>JavaScript (ES6+)</strong> - 學習程度: 65%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 65%; border-radius: 4px;"></div>
              </div>
            </div>
            <p style="color: #666; font-size: 0.9rem; margin-top: 1rem;">
              正在學習組件化開發、狀態管理、路由配置等基礎概念
            </p>
          </div>

          <!-- 樣式與設計 -->
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px;">
            <h3 style="color: #667eea; margin-bottom: 1rem; display: flex; align-items: center;">
              <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎨</span>
              樣式 & UI/UX
            </h3>
            <div style="margin-bottom: 1rem;">
              <strong>CSS3 基礎</strong> - 學習程度: 70%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 70%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>Responsive Design</strong> - 學習程度: 55%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 55%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>Flexbox & Grid</strong> - 學習程度: 60%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 60%; border-radius: 4px;"></div>
              </div>
            </div>
            <p style="color: #666; font-size: 0.9rem; margin-top: 1rem;">
              正在學習現代佈局技術，持續練習響應式設計概念
            </p>
          </div>

          <!-- 開發工具 -->
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px;">
            <h3 style="color: #667eea; margin-bottom: 1rem; display: flex; align-items: center;">
              <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔧</span>
              開發工具 & 流程
            </h3>
            <div style="margin-bottom: 1rem;">
              <strong>Git & GitHub</strong> - 學習程度: 40%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 40%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>Vite 建構工具</strong> - 學習程度: 35%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 35%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>NPM 套件管理</strong> - 學習程度: 50%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 50%; border-radius: 4px;"></div>
              </div>
            </div>
            <p style="color: #666; font-size: 0.9rem; margin-top: 1rem;">
              正在學習基本的開發工具使用，了解版本控制概念
            </p>
          </div>

          <!-- 後端整合 -->
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px;">
            <h3 style="color: #667eea; margin-bottom: 1rem; display: flex; align-items: center;">
              <span style="font-size: 1.5rem; margin-right: 0.5rem;">🌐</span>
              API & 後端整合
            </h3>
            <div style="margin-bottom: 1rem;">
              <strong>基礎 API 概念</strong> - 學習程度: 30%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 30%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>Fetch & Axios</strong> - 學習程度: 40%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 40%; border-radius: 4px;"></div>
              </div>
            </div>
            <div style="margin-bottom: 1rem;">
              <strong>JSON 資料格式</strong> - 學習程度: 55%
              <div style="background: #e9ecef; height: 8px; border-radius: 4px; margin-top: 0.25rem;">
                <div style="background: #667eea; height: 100%; width: 55%; border-radius: 4px;"></div>
              </div>
            </div>
            <p style="color: #666; font-size: 0.9rem; margin-top: 1rem;">
              剛開始接觸 API 串接，正在學習基本的資料交換概念
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 學習歷程 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2rem;">學習歷程</h2>
        <div style="position: relative;">
          <!-- 時間線 -->
          <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #667eea; transform: translateX(-50%);"></div>
          
          <!-- 經歷項目 -->
          <div v-for="(job, index) in workExperience" :key="index" 
               :style="{ display: 'flex', alignItems: 'center', marginBottom: '3rem', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }">
            <div :style="{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left', paddingRight: index % 2 === 0 ? '2rem' : '0', paddingLeft: index % 2 === 1 ? '2rem' : '0' }">
              <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <h3 style="color: #667eea; margin-bottom: 0.5rem;">{{ job.position }}</h3>
                <h4 style="color: #333; margin-bottom: 0.5rem;">{{ job.company }}</h4>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">{{ job.period }}</p>
                <ul style="color: #666; line-height: 1.6;">
                  <li v-for="task in job.tasks" :key="task">{{ task }}</li>
                </ul>
              </div>
            </div>
            <div style="width: 20px; height: 20px; background: #667eea; border-radius: 50%; border: 4px solid white; position: relative; z-index: 1;"></div>
            <div style="flex: 1;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 學習歷程 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2rem;">學習歷程</h2>
        <div style="position: relative; padding-left: 2rem;">
          <!-- 時間線 -->
          <div style="position: absolute; left: 1rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #667eea, #764ba2);"></div>
          
          <!-- 學習階段 -->
          <div v-for="(exp, index) in workExperience" :key="index" style="position: relative; margin-bottom: 3rem; background: #f8f9fa; padding: 2rem; border-radius: 10px; margin-left: 2rem;">
            <!-- 時間點 -->
            <div style="position: absolute; left: -3rem; top: 2rem; width: 1rem; height: 1rem; background: #667eea; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);"></div>
            
            <div style="display: grid; grid-template-columns: 1fr auto; gap: 2rem; align-items: start;">
              <div>
                <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.3rem;">{{ exp.position }}</h3>
                <p style="color: #999; margin-bottom: 1rem; font-weight: 500;">{{ exp.company }}</p>
                <ul style="color: #666; line-height: 1.8;">
                  <li v-for="task in exp.tasks" :key="task" style="margin-bottom: 0.5rem;">{{ task }}</li>
                </ul>
              </div>
              <div style="text-align: right;">
                <span style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 500;">
                  {{ exp.period }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教育背景 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2rem;">教育背景</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🎓</div>
            <h3 style="color: #667eea; margin-bottom: 0.5rem;">資訊科</h3>
            <p style="color: #666;">新民高中</p>
            <p style="color: #999; font-size: 0.9rem;">高中職教育</p>
          </div>
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">💪</div>
            <h3 style="color: #667eea; margin-bottom: 0.5rem;">自學精神</h3>
            <p style="color: #666;">持續透過線上資源學習</p>
            <p style="color: #999; font-size: 0.9rem;">實作導向的學習方式</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 興趣愛好 -->
    <section>
      <div class="card">
        <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2rem;">興趣愛好</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: center;">
          <div>
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">💻</div>
            <h3 style="color: #667eea;">開源貢獻</h3>
            <p style="color: #666;">參與開源專案，回饋技術社群</p>
          </div>
          <div>
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📚</div>
            <h3 style="color: #667eea;">技術學習</h3>
            <p style="color: #666;">持續學習新技術與最佳實踐</p>
          </div>
          <div>
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎮</div>
            <h3 style="color: #667eea;">遊戲開發</h3>
            <p style="color: #666;">業餘時間開發小型網頁遊戲</p>
          </div>
          <div>
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">✍️</div>
            <h3 style="color: #667eea;">技術寫作</h3>
            <p style="color: #666;">撰寫技術文章分享開發心得</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡方式 -->
    <section>
      <div class="card" style="text-align: center;">
        <h2 style="margin-bottom: 2rem;">聯絡我</h2>
        <p style="color: #666; margin-bottom: 2rem; font-size: 1.1rem;">
          如果您對我的技能感興趣，或有任何合作機會，歡迎隨時聯絡！
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="mailto:chang861019@gmail.com" class="btn" style="text-decoration: none;">
            ✉️ chang861019@gmail.com
          </a>
          <a href="https://github.com/mecho10" target="_blank" class="btn btn-outline" style="text-decoration: none;">
            ⚫ GitHub
          </a>
          <a href="https://www.linkedin.com/in/lile-chang-640257358/" target="_blank" class="btn btn-outline" style="text-decoration: none;">
            🔗 LinkedIn
          </a>
          <a href="tel:+886976351597" class="btn btn-outline" style="text-decoration: none;">
            📱 +886-976-351-597
          </a>
        </div>
      </div>
    </section>
  </div>
</template>