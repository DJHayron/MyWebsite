import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Flowbite Tailwind
import './tailwindcss.css'
import 'flowbite'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
