import Vue from "vue";
import Home from "./components/products/Home";
import Detail from "./components/products/Detail";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path : "/", component : Home, name:'Home'},
  { path : "/detail/:key", component : Detail, name:"detail" },
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  mode : "history",
  routes,
});
