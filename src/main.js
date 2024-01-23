import Vue from "vue";
import App from "./App.vue";
import store from './store';
import ElementUI from 'element-ui';
import '@/assets/common.css';
import 'element-ui/packages/theme-chalk/src/index.scss';

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'small' });

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
