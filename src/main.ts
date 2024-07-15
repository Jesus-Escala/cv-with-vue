// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './config/i18n'; 
import router from './router/index.ts';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
