<!-- src/pages/Cart.vue -->
<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center text-gray-900 mb-12">Your Cart</h1>
      
      <div v-if="cartItems.length > 0">
        <div class="space-y-8 mb-12">
          <CartItem 
            v-for="item in cartItems" 
            :key="item.id" 
            :item="item" 
          />
        </div>
        
        <div class="bg-white rounded-lg shadow p-8 max-w-2xl ml-auto">
          <div class="flex justify-between text-xl font-semibold mb-6">
            <span>Subtotal</span>
            <span>₱{{ subtotal.toFixed(2) }}</span>
          </div>
          <router-link 
            to="/checkout"
            class="block text-center bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Proceed to Checkout
          </router-link>
        </div>
      </div>
      
      <div v-else class="text-center py-20">
        <p class="text-2xl text-gray-600 mb-8">Your cart is empty</p>
        <router-link 
          to="/products"
          class="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block"
        >
          Continue Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CartItem from '../components/CartItem.vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)

const subtotal = computed(() => 
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>