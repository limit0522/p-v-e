import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import store from './store'

import router from './router.js'

import axios from './axiosDemo.js'
import './mockData.js'




const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app');
app.config.globalProperties.$axios = axios;

