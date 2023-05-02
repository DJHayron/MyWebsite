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

// 匯入 font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, fab, far)

// markdown css
import 'highlight.js/styles/monokai.css'

const app = createApp(App)

// 載入 font awesome
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(VueAxios, axios)
app.use(createPinia())

app.use(router)

app.mount('#app')
