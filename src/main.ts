import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config'

import Card from 'primevue/card'

// theme
import 'primevue/resources/themes/lara-light-blue/theme.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css' 
import 'primeflex/themes/primeone-dark.css'   
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const app = createApp(App)

// Using components from PrimeView
app.component('CardComponent', Card);
app.component('TextAreaComponent', Textarea);
app.component('ButtonComponent', Button);

app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(PrimeVue)
app.mount('#app')
