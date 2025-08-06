<template>
  <div class="api-demo-container">
    <!-- 標題區域 -->
    <section>
      <div class="card">
        <h1 style="text-align: center; margin-bottom: 1rem; font-size: 2.5rem;" class="gradient-text">
          API 串接展示
        </h1>
        <p style="text-align: center; color: #666; font-size: 1.1rem; margin-bottom: 2rem;">
          展示與不同第三方 API 的整合能力，包含錯誤處理、載入狀態管理等最佳實踐
        </p>
      </div>
    </section>

    <!-- API 控制面板 -->
    <section>
      <div class="card">
        <h2 style="margin-bottom: 1.5rem;">選擇 API 類型</h2>
        <div class="api-controls">
          <button 
            @click="fetchUsers" 
            :disabled="loading"
            class="btn"
          >
            👥 取得用戶資料
          </button>
          <button 
            @click="fetchPosts" 
            :disabled="loading"
            class="btn"
          >
            📝 取得文章列表
          </button>
          <button 
            @click="fetchDogImage" 
            :disabled="loading"
            class="btn"
          >
            🐕 隨機狗狗圖片
          </button>
          <button 
            @click="fetchWeather" 
            :disabled="loading"
            class="btn"
          >
            🌤️ 天氣資訊
          </button>
          <button 
            @click="fetchQuote" 
            :disabled="loading"
            class="btn"
          >
            💭 隨機名言
          </button>
          <button 
            @click="clearResult" 
            :disabled="loading"
            class="btn btn-outline"
          >
            🗑️ 清除結果
          </button>
        </div>
      </div>
    </section>

    <!-- 載入狀態 -->
    <div v-if="loading" class="loading">
      <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
      <p>正在載入數據，請稍候...</p>
    </div>

    <!-- 錯誤訊息 -->
    <div v-if="error" class="error">
      <strong>❌ 發生錯誤：</strong> {{ error }}
      <br>
      <small>請檢查網路連線或稍後再試</small>
    </div>

    <!-- API 結果顯示 -->
    <section v-if="apiResult && !loading">
      <div class="card">
        <h3 style="margin-bottom: 1rem; color: #667eea;">
          {{ resultTitle }}
        </h3>
        
        <!-- 用戶資料展示 -->
        <div v-if="currentApiType === 'users'" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <div v-for="user in apiResult" :key="user.id" style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">
            <h4 style="color: #667eea; margin-bottom: 0.5rem;">{{ user.name }}</h4>
            <p><strong>帳號：</strong>{{ user.username }}</p>
            <p><strong>信箱：</strong>{{ user.email }}</p>
            <p><strong>電話：</strong>{{ user.phone }}</p>
            <p><strong>網站：</strong>{{ user.website }}</p>
            <p><strong>公司：</strong>{{ user.company.name }}</p>
          </div>
        </div>

        <!-- 文章列表展示 -->
        <div v-else-if="currentApiType === 'posts'">
          <div v-for="post in apiResult.slice(0, 6)" :key="post.id" style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <h4 style="color: #667eea; margin-bottom: 0.5rem;">{{ post.title }}</h4>
            <p style="color: #666;">{{ post.body }}</p>
            <small style="color: #999;">用戶 ID: {{ post.userId }} | 文章 ID: {{ post.id }}</small>
          </div>
          <p style="text-align: center; color: #666; margin-top: 1rem;">
            顯示前 6 篇文章（共 {{ apiResult.length }} 篇）
          </p>
        </div>

        <!-- 狗狗圖片展示 -->
        <div v-else-if="currentApiType === 'dog'" style="text-align: center;">
          <img 
            :src="apiResult.message" 
            alt="隨機狗狗圖片" 
            style="max-width: 100%; max-height: 400px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);"
            @load="imageLoaded = true"
            @error="imageError = true"
          />
          <p style="margin-top: 1rem; color: #666;">
            可愛的狗狗！點擊「隨機狗狗圖片」按鈕取得更多圖片
          </p>
        </div>

        <!-- 天氣資訊展示 -->
        <div v-else-if="currentApiType === 'weather'" style="text-align: center;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 15px;">
            <h3 style="margin-bottom: 1rem;">{{ apiResult.name }}, {{ apiResult.sys.country }}</h3>
            <div style="font-size: 3rem; margin: 1rem 0;">{{ getWeatherIcon(apiResult.weather[0].main) }}</div>
            <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">{{ Math.round(apiResult.main.temp) }}°C</h2>
            <p style="font-size: 1.2rem; margin-bottom: 1rem;">{{ apiResult.weather[0].description }}</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
              <div>
                <p><strong>體感溫度</strong></p>
                <p>{{ Math.round(apiResult.main.feels_like) }}°C</p>
              </div>
              <div>
                <p><strong>濕度</strong></p>
                <p>{{ apiResult.main.humidity }}%</p>
              </div>
              <div>
                <p><strong>風速</strong></p>
                <p>{{ apiResult.wind.speed }} m/s</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 名言展示 -->
        <div v-else-if="currentApiType === 'quote'" style="text-align: center;">
          <div style="background: #f8f9fa; padding: 2rem; border-radius: 15px; border-left: 4px solid #667eea;">
            <blockquote style="font-size: 1.3rem; font-style: italic; margin-bottom: 1rem; line-height: 1.6;">
              "{{ apiResult.content }}"
            </blockquote>
            <cite style="color: #667eea; font-weight: 600;">— {{ apiResult.author }}</cite>
            <div style="margin-top: 1rem;">
              <span v-for="tag in apiResult.tags" :key="tag" 
                    style="background: #e9ecef; color: #495057; padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.8rem; margin-right: 0.5rem;">
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- 原始 JSON 數據 -->
        <details style="margin-top: 2rem;">
          <summary style="cursor: pointer; color: #667eea; font-weight: 600; margin-bottom: 1rem;">
            📋 查看原始 JSON 數據
          </summary>
          <pre class="api-result">{{ JSON.stringify(apiResult, null, 2) }}</pre>
        </details>
      </div>
    </section>

    <!-- API 說明文檔 -->
    <section>
      <div class="card">
        <h2 style="margin-bottom: 1.5rem;">API 整合說明</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
            <h4 style="color: #667eea; margin-bottom: 1rem;">🛠️ 技術實作</h4>
            <ul style="color: #666; line-height: 1.6;">
              <li>使用 Axios 進行 HTTP 請求</li>
              <li>Promise/Async-Await 處理非同步操作</li>
              <li>統一的錯誤處理機制</li>
              <li>載入狀態與用戶回饋</li>
              <li>響應式數據顯示</li>
            </ul>
          </div>
          <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
            <h4 style="color: #667eea; margin-bottom: 1rem;">🌐 使用的 API</h4>
            <ul style="color: #666; line-height: 1.6;">
              <li>JSONPlaceholder - 模擬數據</li>
              <li>Dog API - 隨機寵物圖片</li>
              <li>OpenWeatherMap - 即時天氣</li>
              <li>Quotable API - 勵志名言</li>
              <li>支援 CORS 跨域請求</li>
            </ul>
          </div>
          <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
            <h4 style="color: #667eea; margin-bottom: 1rem;">✨ 功能特色</h4>
            <ul style="color: #666; line-height: 1.6;">
              <li>即時數據載入與顯示</li>
              <li>優雅的錯誤處理提示</li>
              <li>響應式設計適配</li>
              <li>JSON 數據格式化顯示</li>
              <li>用戶友善的載入動畫</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 程式碼範例 -->
    <section>
      <div class="card">
        <h2 style="margin-bottom: 1.5rem;">💻 核心程式碼</h2>
        <details>
          <summary style="cursor: pointer; color: #667eea; font-weight: 600; margin-bottom: 1rem;">
            查看 API 請求實作
          </summary>
          <pre class="api-result" style="text-align: left;">
// API 請求基礎配置
import axios from 'axios'

const apiClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 統一的錯誤處理
async function fetchData(url, options = {}) {
  try {
    this.loading = true
    this.error = null
    
    const response = await apiClient.get(url, options)
    this.apiResult = response.data
    
  } catch (error) {
    console.error('API 請求失敗:', error)
    this.error = error.response?.data?.message || error.message
  } finally {
    this.loading = false
  }
}

// 具體 API 實作範例
async fetchUsers() {
  await this.fetchData('https://jsonplaceholder.typicode.com/users')
  this.currentApiType = 'users'
  this.resultTitle = '👥 用戶資料列表'
}
          </pre>
        </details>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ApiDemo',
  data() {
    return {
      loading: false,
      error: null,
      apiResult: null,
      currentApiType: null,
      resultTitle: '',
      imageLoaded: false,
      imageError: false
    }
  },
  methods: {
    async fetchData(url, options = {}) {
      try {
        this.loading = true
        this.error = null
        this.imageLoaded = false
        this.imageError = false
        
        const response = await axios.get(url, {
          timeout: 10000,
          ...options
        })
        
        this.apiResult = response.data
        
      } catch (error) {
        console.error('API 請求失敗:', error)
        
        if (error.code === 'ECONNABORTED') {
          this.error = '請求超時，請檢查網路連線'
        } else if (error.response) {
          this.error = `伺服器錯誤 (${error.response.status}): ${error.response.data?.message || '未知錯誤'}`
        } else if (error.request) {
          this.error = '無法連接到伺服器，請檢查網路連線'
        } else {
          this.error = error.message || '發生未知錯誤'
        }
      } finally {
        this.loading = false
      }
    },

    async fetchUsers() {
      await this.fetchData('https://jsonplaceholder.typicode.com/users')
      this.currentApiType = 'users'
      this.resultTitle = '👥 用戶資料列表 (JSONPlaceholder API)'
    },

    async fetchPosts() {
      await this.fetchData('https://jsonplaceholder.typicode.com/posts')
      this.currentApiType = 'posts'
      this.resultTitle = '📝 文章列表 (JSONPlaceholder API)'
    },

    async fetchDogImage() {
      await this.fetchData('https://dog.ceo/api/breeds/image/random')
      this.currentApiType = 'dog'
      this.resultTitle = '🐕 隨機狗狗圖片 (Dog API)'
    },

    async fetchWeather() {
      try {
        this.loading = true
        this.error = null
        
        // 使用模擬天氣數據，因為 OpenWeatherMap API 需要 key
        await new Promise(resolve => setTimeout(resolve, 1000)) // 模擬網路延遲
        
        const mockWeatherData = {
          name: '台北',
          sys: { country: 'TW' },
          weather: [{ main: 'Clear', description: '晴朗' }],
          main: {
            temp: 25.8,
            feels_like: 27.2,
            humidity: 68,
            pressure: 1013
          },
          wind: {
            speed: 3.2,
            deg: 180
          },
          visibility: 10000
        }
        
        this.apiResult = mockWeatherData
        this.currentApiType = 'weather'
        this.resultTitle = '🌤️ 台北天氣資訊 (模擬數據)'
        
      } catch (error) {
        this.error = '無法獲取天氣資料：' + error.message
      } finally {
        this.loading = false
      }
    },

    async fetchQuote() {
      try {
        this.loading = true
        this.error = null
        
        // 使用本地名言庫，避免 CORS 問題
        await new Promise(resolve => setTimeout(resolve, 800)) // 模擬網路延遲
        
        const quotes = [
          {
            content: "成功不是終點，失敗不是末日，勇氣才是永恆。",
            author: "邱吉爾",
            tags: ["勇氣", "成功", "勵志"]
          },
          {
            content: "學而時習之，不亦說乎。",
            author: "孔子",
            tags: ["學習", "智慧", "經典"]
          },
          {
            content: "今天的努力是為了明天的收穫。",
            author: "自學者座右銘",
            tags: ["努力", "未來", "成長"]
          },
          {
            content: "程式設計不僅僅是寫代碼，更是解決問題的藝術。",
            author: "程式設計師",
            tags: ["程式設計", "創意", "問題解決"]
          },
          {
            content: "每一行代碼都是向夢想邁進的一步。",
            author: "開發者",
            tags: ["代碼", "夢想", "堅持"]
          }
        ]
        
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        
        this.apiResult = randomQuote
        this.currentApiType = 'quote'
        this.resultTitle = '💭 勵志名言 (本地名言庫)'
        
      } catch (error) {
        this.error = '無法獲取名言：' + error.message
      } finally {
        this.loading = false
      }
    },

    clearResult() {
      this.apiResult = null
      this.currentApiType = null
      this.resultTitle = ''
      this.error = null
      this.imageLoaded = false
      this.imageError = false
    },

    getWeatherIcon(weather) {
      const icons = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Drizzle': '🌦️',
        'Thunderstorm': '⛈️',
        'Snow': '❄️',
        'Mist': '🌫️',
        'Fog': '🌫️',
        'Haze': '🌫️'
      }
      return icons[weather] || '🌤️'
    }
  },
  mounted() {
    document.title = 'API 串接展示 - Leroy Portfolio'
    
    // 示範自動載入一個 API
    setTimeout(() => {
      this.fetchUsers()
    }, 1000)
  }
}
</script>