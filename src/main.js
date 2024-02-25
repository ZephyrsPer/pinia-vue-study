import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import pinia from "./store";

import ElementPlus from 'element-plus';


import 'element-plus/dist/index.css';


const app = createApp(App);
app.use(pinia)

// 全局注册 Element Plus 组件
app.use(ElementPlus);

app.mount('#app')
