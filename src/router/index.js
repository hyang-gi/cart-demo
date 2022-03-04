// import Vue from "vue";
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'

// Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
// const router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes,
//   });
  

export default router;