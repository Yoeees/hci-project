<!-- src/components/Navbar.vue -->
<template>
  <header class="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <router-link to="/" class="group flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-md">
            <span class="text-white font-bold text-xl">S</span>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Saludo
          </span>
        </router-link>
        
        <nav class="hidden md:flex items-center space-x-1">
          <router-link 
            to="/" 
            class="px-6 py-2 text-gray-700 hover:text-indigo-600 font-medium transition rounded-lg hover:bg-indigo-50"
            active-class="text-indigo-600 bg-indigo-50"
          >
            Home
          </router-link>
          <router-link 
            to="/products" 
            class="px-6 py-2 text-gray-700 hover:text-indigo-600 font-medium transition rounded-lg hover:bg-indigo-50"
            active-class="text-indigo-600 bg-indigo-50"
          >
            Products
          </router-link>
          <router-link 
            to="/cart" 
            class="relative ml-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition transform hover:scale-105"
          >
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Cart
            </span>
            <span 
              v-if="cartCount > 0" 
              class="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg animate-pulse"
            >
              {{ cartCount }}
            </span>
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-100 space-y-2"
      >
        <router-link 
          to="/" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition"
        >
          Home
        </router-link>
        <router-link 
          to="/products" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition"
        >
          Products
        </router-link>
        <router-link 
          to="/cart" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium"
        >
          Cart
          <span v-if="cartCount > 0" class="ml-2 bg-white text-indigo-600 px-2 py-1 rounded-full text-xs font-bold">
            {{ cartCount }}
          </span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.items.reduce((sum, item) => sum + item.quantity, 0))
const mobileMenuOpen = ref(false)
</script>