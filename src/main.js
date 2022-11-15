import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "../public/css/bootstrap.css";
import "../public/js/bootstrap.bundle.js";
import "../public/bootstrap-icons-1.10.2/bootstrap-icons.css"

createApp(App).use(router).mount('#app')
