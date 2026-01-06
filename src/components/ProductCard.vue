<!-- src/components/ProductCard.vue -->
<template>
  <div class="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
    <div class="relative overflow-hidden bg-gray-100">
      <img 
        :src="product.thumbnail || product.images?.[0]" 
        :alt="product.name" 
        class="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-indigo-600 shadow-lg">
        ⭐ {{ product.rating || '4.5' }}
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    
    <div class="p-6">
      <div class="mb-3">
        <span class="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full capitalize">
          {{ formatCategory(product.category) }}
        </span>
      </div>
      
      <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
        {{ product.name }}
      </h3>
      
      <div class="flex items-baseline gap-2 mb-6">
        <p class="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ₱{{ product.price.toFixed(2) }}
        </p>
        <p class="text-sm text-gray-400 line-through" v-if="product.price < 1000">
          ₱{{ (product.price * 1.2).toFixed(2) }}
        </p>
      </div>
      
      <div class="flex gap-3">
        <router-link 
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          class="flex-1 bg-gray-100 text-gray-800 text-center py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 border border-gray-200"
        >
          View
        </router-link>
        <button 
          @click="addToCart"
          class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 relative overflow-hidden group/btn"
        >
          <span class="relative z-10 flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Add
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
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
  cartStore.addItem(props.product)
}
</script>