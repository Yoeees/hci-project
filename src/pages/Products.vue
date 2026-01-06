<!-- src/pages/Products.vue -->
<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center text-gray-900 mb-12">All Products</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { onMounted, ref } from 'vue'
import { fetchProducts } from '../api/products.js'

const products = ref([])

onMounted(async () => {
  products.value = await fetchProducts()
})
</script>