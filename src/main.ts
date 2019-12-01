import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ja';
import 'element-ui/lib/theme-chalk/index.css';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

Vue.config.productionTip = false;
Vue.use(ElementUI, { lang });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
