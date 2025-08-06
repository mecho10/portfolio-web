<template>
  <div id="app">
    <!-- 導航列 -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <router-link to="/" class="logo">Leroy Portfolio</router-link>
          <ul class="nav-links">
            <li><router-link to="/">首頁</router-link></li>
            <li><router-link to="/projects">專案作品</router-link></li>
            <li><router-link to="/api-demo">API 展示</router-link></li>
            <li><router-link to="/about">關於我</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 主要內容 -->
    <main class="main-content">
      <div class="container">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>

    <!-- 頁腳 -->
    <footer style="background: rgba(255, 255, 255, 0.9); text-align: center; padding: 2rem 0; margin-top: 3rem;">
      <div class="container">
        <p>&copy; 2024 Leroy Portfolio. 使用 Vue.js 建立 | 
          <a href="https://github.com/leroy/portfolio-web" target="_blank" style="color: #667eea; text-decoration: none;">
            查看原始碼
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>