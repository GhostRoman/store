import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../pages/Catalog.vue'
import ProductDetail from '../pages/ProductDetail.vue'

const routes = [
  { path: '/', component: Catalog },
  { path: '/product/:id', component: ProductDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router