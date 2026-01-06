<!-- src/pages/Home.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold mb-6">Welcome to Saludo</h1>
        <p class="text-xl mb-10">Discover amazing products at unbeatable prices</p>
        <router-link 
          to="/products"
          class="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
        >
          Shop Now
        </router-link>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { ref, onMounted } from 'vue'               // ← ADD THIS LINE
import { fetchProducts } from '../api/products.js'

const featuredProducts = ref([])

onMounted(async () => {
  const allProducts = await fetchProducts()     // renamed for clarity
  // DummyJSON returns { products: [...] }, so extract the array
  const products = allProducts.products || allProducts

  // Filter for high-rated products as "featured"
  featuredProducts.value = products.filter(p => p.rating > 4.5)
})
</script>