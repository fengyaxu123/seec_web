import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
console.log("5555",process.env);
Vue.use(ElementUI); //全局注入

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
Vue.config.productionTip = false;
// 引入mock拦截
if(process.env.NODE_ENV==='development'){
  require("./mock/mock")
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
