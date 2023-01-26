import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Flowbite Tailwind
import './tailwindcss.css'
import 'flowbite'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
