import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "../public/css/bootstrap.css";
import "../public/js/bootstrap.bundle.js";

createApp(App).use(router).mount('#app')
