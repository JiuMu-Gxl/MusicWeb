import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import '/@/assets/font/iconfont.js'
import '/%/js/rem'

const app = createApp(App);
getVant(app);
app.use(store);
app.use(router);
app.mount('#app');
