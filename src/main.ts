import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';

// theme
import 'primevue/resources/themes/lara-light-blue/theme.css';

const app = createApp(App);

app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(PrimeVue)
app.mount('#app')
