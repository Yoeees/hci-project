<!-- src/pages/Products.vue -->
<template>
  <div class="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-sm font-bold text-indigo-600">
          SHOP NOW
        </div>
        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Explore Our Collection
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Browse through our carefully curated selection of premium products
        </p>
      </div>
      
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filter -->
        <aside class="lg:w-64 flex-shrink-0">
          <!-- Mobile Filter Toggle Button -->
          <button
            @click="showFilters = !showFilters"
            class="lg:hidden w-full bg-white rounded-2xl shadow-lg p-4 mb-4 border border-gray-100 flex items-center justify-between font-semibold text-gray-900"
          >
            <div class="flex items-center gap-2">
              <span class="text-xl">🔍</span>
              <span>Filters</span>
              <span v-if="selectedCategory !== 'all'" class="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                1
              </span>
            </div>
            <svg 
              :class="['w-5 h-5 transition-transform', showFilters ? 'rotate-180' : '']" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <!-- Filter Panel -->
          <div 
            :class="[
              'bg-white rounded-2xl shadow-lg p-6 border border-gray-100 lg:sticky lg:top-24 transition-all duration-300',
              showFilters ? 'block' : 'hidden lg:block'
            ]"
          >
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-bold text-gray-900">Filters</h3>
              <button
                v-if="selectedCategory !== 'all'"
                @click="selectedCategory = 'all'"
                class="text-sm text-indigo-600 hover:text-indigo-700 font-semibold transition"
              >
                Clear
              </button>
            </div>
            
            <!-- Category List -->
            <div class="space-y-1 max-h-96 overflow-y-auto custom-scrollbar pr-2">
              <button
                @click="selectedCategory = 'all'"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group',
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'hover:bg-gray-50 text-gray-700'
                ]"
              >
                <div class="flex items-center gap-3">
                  <span class="text-xl">🛍️</span>
                  <span class="font-semibold">All Products</span>
                </div>
                <span :class="[
                  'text-sm px-2 py-1 rounded-full',
                  selectedCategory === 'all' 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                ]">
                  {{ products.length }}
                </span>
              </button>
              
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group capitalize',
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'hover:bg-gray-50 text-gray-700'
                ]"
                @click.once="showFilters = false" 
              >
                <div class="flex items-center gap-3">
                  <span class="text-xl">{{ getCategoryIcon(category) }}</span>
                  <span class="font-medium">{{ category.replace(/-/g, ' ') }}</span>
                </div>
                <span :class="[
                  'text-sm px-2 py-1 rounded-full',
                  selectedCategory === category 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                ]">
                  {{ getCategoryCount(category) }}
                </span>
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Sort Bar -->
          <div class="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
            <div class="flex flex-wrap items-center gap-4">
              <div class="flex items-center gap-2">
                <span class="text-gray-700 font-medium">Sort by:</span>
                <select 
                  v-model="sortBy"
                  class="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 font-medium cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              <div class="ml-auto flex items-center gap-2">
                <span class="text-gray-600 font-medium">Showing</span>
                <span class="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl font-bold">
                  {{ filteredAndSortedProducts.length }}
                </span>
                <span class="text-gray-600 font-medium">products</span>
              </div>
            </div>
          </div>
          
          <!-- Products Grid -->
          <div v-if="filteredAndSortedProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              v-for="product in filteredAndSortedProducts" 
              :key="product.id" 
              :product="product" 
            />
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-20">
            <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <span class="text-6xl">📦</span>
            </div>
            <p class="text-3xl font-bold text-gray-900 mb-4">No products found</p>
            <p class="text-xl text-gray-600 mb-8">Try selecting a different category</p>
            <button 
              @click="selectedCategory = 'all'"
              class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { onMounted, ref, computed } from 'vue'
import { fetchProducts } from '../api/products.js'

const products = ref([])
const sortBy = ref('featured')
const selectedCategory = ref('all')
const showFilters = ref(false) // For mobile toggle

onMounted(async () => {
  const data = await fetchProducts()
  products.value = data.products || data
})

// Get unique categories from products
const categories = computed(() => {
  const cats = products.value.map(p => p.category).filter(Boolean)
  return [...new Set(cats)].sort()
})

// Get count of products in a category
const getCategoryCount = (category) => {
  return products.value.filter(p => p.category === category).length
}

// Get icon for category
const getCategoryIcon = (category) => {
  const iconMap = {
    'beauty': '💄',
    'fragrances': '🌸',
    'furniture': '🛋️',
    'groceries': '🛒',
    'home-decoration': '🏠',
    'kitchen-accessories': '🍳',
    'laptops': '💻',
    'mens-shirts': '👔',
    'mens-shoes': '👞',
    'mens-watches': '⌚',
    'mobile-accessories': '📱',
    'motorcycle': '🏍️',
    'skin-care': '🧴',
    'smartphones': '📱',
    'sports-accessories': '⚽',
    'sunglasses': '🕶️',
    'tablets': '📱',
    'tops': '👕',
    'vehicle': '🚗',
    'womens-bags': '👜',
    'womens-dresses': '👗',
    'womens-jewellery': '💍',
    'womens-shoes': '👠',
    'womens-watches': '⌚'
  }
  return iconMap[category] || '📦'
}

// Filter by category
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.value
  }
  return products.value.filter(p => p.category === selectedCategory.value)
})

// Filter AND sort products
const filteredAndSortedProducts = computed(() => {
  const productsCopy = [...filteredProducts.value]
  
  switch (sortBy.value) {
    case 'price-asc':
      return productsCopy.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return productsCopy.sort((a, b) => b.price - a.price)
    case 'name':
      return productsCopy.sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title))
    case 'rating':
      return productsCopy.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    case 'featured':
    default:
      return productsCopy
  }
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #4f46e5, #7c3aed);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #4338ca, #6d28d9);
}
</style>