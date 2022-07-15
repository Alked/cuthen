import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router).use(PrimeVue)
  .mount('#app');
