import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store";
import 'tailwind/dist/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
