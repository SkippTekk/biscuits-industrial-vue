import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "../public/css/mdb.min.css";
import "../public/js/mdb.min.js";

createApp(App).use(router).mount('#app');
