<!-- src/components/Navbar.vue -->
<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-2xl font-bold text-indigo-600">
          Saludo
        </router-link>
        
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-indigo-600 transition">Home</router-link>
          <router-link to="/products" class="text-gray-700 hover:text-indigo-600 transition">Products</router-link>
          <router-link to="/cart" class="text-gray-700 hover:text-indigo-600 transition relative">
            Cart
            <span v-if="cartCount > 0" class="absolute -top-2 -right-4 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ cartCount }}
            </span>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.items.reduce((sum, item) => sum + item.quantity, 0))
</script>