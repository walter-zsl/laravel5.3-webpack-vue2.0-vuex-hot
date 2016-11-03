import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import store from './store'

Vue.use(VueResource);
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content;

Vue.use(VueRouter);

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
});