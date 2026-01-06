<!-- src/pages/Home.vue -->
<template>
  <div>
    <!-- Hero Section with Gradient Animation -->
    <section class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-32 overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
          ✨ New Arrivals Every Week
        </div>
        <h1 class="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
          Welcome to <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">Saludo</span>
        </h1>
        <p class="text-xl md:text-2xl mb-10 text-indigo-100 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Your next favorite find is just a click away.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <router-link 
            to="/products"
            class="bg-white text-indigo-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 transition transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            Shop Now
            <span class="text-xl">→</span>
          </router-link>
          <router-link 
            to="/products"
            class="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition transform hover:scale-105 inline-block backdrop-blur-sm"
          >
            Browse Collection
          </router-link>
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="group cursor-default">
            <p class="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform inline-block">500+</p>
            <p class="text-gray-600 font-medium">Products</p>
          </div>
          <div class="group cursor-default">
            <p class="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform inline-block">50k+</p>
            <p class="text-gray-600 font-medium">Happy Customers</p>
          </div>
          <div class="group cursor-default">
            <p class="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform inline-block">4.8★</p>
            <p class="text-gray-600 font-medium">Average Rating</p>
          </div>
          <div class="group cursor-default">
            <p class="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform inline-block">24/7</p>
            <p class="text-gray-600 font-medium">Support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold text-indigo-600">
            FEATURED COLLECTION
          </div>
          <h2 class="text-5xl font-extrabold text-gray-900 mb-4">
            Handpicked Just for You
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of top-rated products that customers love
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/products"
            class="inline-flex items-center gap-2 text-indigo-600 font-bold text-lg hover:text-indigo-700 transition group"
          >
            View All Products
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <span class="text-4xl">🚚</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Free Shipping</h3>
            <p class="text-gray-600">On orders over ₱1,000</p>
          </div>
          
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <span class="text-4xl">💳</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Secure Payment</h3>
            <p class="text-gray-600">100% secure transactions</p>
          </div>
          
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <span class="text-4xl">🎁</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Easy Returns</h3>
            <p class="text-gray-600">30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { ref, onMounted } from 'vue'
import { fetchProducts } from '../api/products.js'

const featuredProducts = ref([])

onMounted(async () => {
  const allProducts = await fetchProducts()
  const products = allProducts.products || allProducts
  featuredProducts.value = products.filter(p => p.rating > 4.5)
})
</script>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>