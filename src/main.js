import { createApp } from 'vue'
createApp(App).mount('#app')
import Vue from 'vue'
import App from './App.vue'

Vue.config.Vue.config.productionTip = false

new Vue({
    render: h=>h(App),
}).$mount('#app')