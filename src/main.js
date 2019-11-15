import Vue from 'vue'
import App from './App.vue'
import { router } from "./router";
import VueResource from "vue-resource";
import {store} from "./store/store";

Vue.use(VueResource);

new Vue({
  el: '#app',
  mode: history,
  render: h => h(App),
  router,
  store
})
