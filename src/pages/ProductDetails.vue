<!-- src/pages/ProductDetails.vue -->
<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="product" class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <img :src="product.thumbnail || product.images?.[0]" :alt="product.name" class="w-full h-96 object-cover rounded-lg" />
          </div>
          
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
            <p class="text-gray-700 text-lg mb-6">{{ product.description }}</p>
            <p class="text-4xl font-bold text-indigo-600 mb-8">₱{{ product.price.toFixed(2) }}</p>
            
            <div class="flex items-center gap-6 mb-8">
              <div class="flex items-center border border-gray-300 rounded">
                <button @click="quantity > 1 && quantity--" class="px-4 py-2 hover:bg-gray-100">-</button>
                <span class="px-6 py-2 font-medium">{{ quantity }}</span>
                <button @click="quantity++" class="px-4 py-2 hover:bg-gray-100">+</button>
              </div>
              
              <button 
                @click="addToCart"
                class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center py-20">
        <p class="text-xl text-gray-600">Product not found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
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
const addToCart = () => {
  if (product.value) {
    for (let i = 0; i < quantity.value; i++) {
      cartStore.addItem(product.value)
    }
    quantity.value = 1
  }
}
</script>