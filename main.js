import App from './App'
import Vue from 'vue'
import store from './store'
// #ifndef VUE3

Vue.prototype.$store = store
Vue.config.productionTip = false

// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif