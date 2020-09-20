import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant ui
import Vant from 'vant';
import 'vant/lib/index.css';
//引入懒加载
import { Lazyload } from 'vant';
//引入移动端适配
import 'lib-flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Dropdown } from 'element-ui';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(ElementUI);
Vue.component(Dropdown.name, Dropdown);
Vue.use(Vant);
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
  document.title = to.meta.title
  }
  next()
  })
