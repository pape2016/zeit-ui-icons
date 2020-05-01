import main from './main.vue';
import Vue from 'vue';
import '@zeit-ui/themes/index.css'      // default theme
import '@zeit-ui/themes/dark.css'       // dark theme
import { install } from '@zeit-ui/vue-icons'
install(Vue)

new Vue({
    render: h => h(main),
}).$mount("#app")