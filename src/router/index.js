// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/products/:id', name: 'ProductDetails', component: ProductDetails, props: true },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router