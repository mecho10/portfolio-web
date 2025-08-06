import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import About from './views/About.vue'
import ApiDemo from './views/ApiDemo.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/api-demo', component: ApiDemo }
]

const router = createRouter({
  history: createWebHistory('/portfolio-web/'),
  routes
})

createApp(App).use(router).mount('#app')