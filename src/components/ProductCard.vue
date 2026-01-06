
<!-- src/components/ProductCard.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img :src="product.thumbnail || product.images?.[0]" :alt="product.name" class="w-full h-64 object-cover" />
    <div class="p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
      <p class="text-2xl font-bold text-indigo-600 mb-4">₱{{ product.price.toFixed(2) }}</p>
      <div class="flex gap-3">
        <router-link 
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          class="flex-1 bg-gray-100 text-gray-800 text-center py-2 rounded hover:bg-gray-200 transition"
        >
          View Details
        </router-link>
        <button 
          @click="addToCart"
          class="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Add to Cart
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

const addToCart = () => {
  cartStore.addItem(props.product)
}
</script>