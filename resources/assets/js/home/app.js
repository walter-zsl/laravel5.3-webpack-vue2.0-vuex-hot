import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
	hashbang: false,
  	routes: [
  	]
})


const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})