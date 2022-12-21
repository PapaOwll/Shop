import {createApp} from 'vue'
import {store} from "@/store/store";
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import router from "./router/index.js"


loadFonts()
createApp(App)
    .use(vuetify)
    .use(store)
    .use(router)
    .mount('#app')
