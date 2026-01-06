<!-- src/pages/ProductDetails.vue -->
<template>
  <div class="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="product" class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div class="relative group">
            <img 
              :src="product.thumbnail || product.images?.[0]" 
              :alt="product.name || product.title" 
              class="w-full h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" 
            />
            <div class="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-indigo-600 shadow-lg">
              ⭐ {{ product.rating || '4.5' }}
            </div>
          </div>
          
          <div class="flex flex-col justify-center">
            <div class="mb-4">
              <span class="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
                {{ formatCategory(product.category) }}
              </span>
            </div>
            
            <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
              {{ product.name || product.title }}
            </h1>
            
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              {{ product.description }}
            </p>
            
            <div class="flex items-baseline gap-3 mb-8">
              <p class="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ₱{{ product.price.toFixed(2) }}
              </p>
              <p class="text-xl text-gray-400 line-through" v-if="product.price < 1000">
                ₱{{ (product.price * 1.2).toFixed(2) }}
              </p>
            </div>
            
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8">
              <div class="flex items-center gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-3">Quantity</label>
                  <div class="flex items-center bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm">
                    <button 
                      @click="quantity > 1 && quantity--" 
                      class="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition font-bold text-gray-700 disabled:opacity-50"
                      :disabled="quantity <= 1"
                    >
                      −
                    </button>
                    <span class="px-8 py-3 font-bold text-xl text-gray-900">{{ quantity }}</span>
                    <button 
                      @click="quantity++" 
                      class="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition font-bold text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div class="flex-1">
                  <button 
                    @click="addToCart"
                    class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product Features -->
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <span class="text-3xl block mb-2">🚚</span>
                <p class="text-sm font-semibold text-gray-700">Free Shipping</p>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <span class="text-3xl block mb-2">↩️</span>
                <p class="text-sm font-semibold text-gray-700">Easy Returns</p>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <span class="text-3xl block mb-2">✓</span>
                <p class="text-sm font-semibold text-gray-700">Authentic</p>
              </div>
            </div>

            <router-link 
              to="/products"
              class="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 group"
            >
              <span class="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Products
            </router-link>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center py-20">
        <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span class="text-6xl">🔍</span>
        </div>
        <p class="text-3xl font-bold text-gray-900 mb-4">Product not found</p>
        <p class="text-xl text-gray-600 mb-8">The product you're looking for doesn't exist</p>
        <router-link 
          to="/products"
          class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105"
        >
          Browse Products
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchProductById } from '../api/products.js'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const product = ref(null)
const quantity = ref(1)

onMounted(async () => {
  product.value = await fetchProductById(route.params.id)
})

const cartStore = useCartStore()

const formatCategory = (category) => {
  if (!category) return 'Featured'
  // Replace dashes with spaces and capitalize each word
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const addToCart = () => {
  if (product.value) {
    // Pass the quantity as second parameter instead of looping
    cartStore.addItem(product.value, quantity.value)
    quantity.value = 1
  }
}
</script>