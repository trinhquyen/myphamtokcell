import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductList from '../pages/ProductList.vue'
import ProductDetail from '../pages/ProductDetail.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/products', name: 'products', component: ProductList },
  { path: '/products/:id', name: 'product-detail', component: ProductDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
