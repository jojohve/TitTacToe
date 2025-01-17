import './main.css';
import { createApp } from 'vue'
import App from './App.vue'
import 'structured-clone'

createApp(App).mount('#app')

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}