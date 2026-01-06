// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'  // ← This import
import App from './App.vue'
import router from './router'

// Remove or comment out any Tailwind import (we're using CDN now)
// import './index.css'

const app = createApp(App)

app.use(createPinia())  // ← This line is REQUIRED
app.use(router)

app.mount('#app')