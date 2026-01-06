<!-- src/pages/Checkout.vue -->
<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center text-gray-900 mb-12">Checkout</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Order Summary -->
        <div class="bg-white rounded-lg shadow p-8">
          <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
          <div class="space-y-6 mb-8">
            <div v-for="item in cartItems" :key="item.id" class="flex justify-between">
              <div>
                <p class="font-medium">{{ item.title }}</p>
                <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
              </div>
              <p class="font-medium">₱{{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </div>
          <div class="border-t pt-6">
            <div class="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₱{{ subtotal.toFixed(2) }}</span>
            </div>
          </div>
        </div>
        
        <!-- Checkout Form -->
        <div class="bg-white rounded-lg shadow p-8">
          <h2 class="text-2xl font-bold mb-6">Shipping Information</h2>
          <form @submit.prevent class="space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" class="border rounded-lg px-4 py-3" required />
              <input type="text" placeholder="Last Name" class="border rounded-lg px-4 py-3" required />
            </div>
            <input type="email" placeholder="Email" class="w-full border rounded-lg px-4 py-3" required />
            <input type="text" placeholder="Address" class="w-full border rounded-lg px-4 py-3" required />
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" class="border rounded-lg px-4 py-3" required />
              <input type="text" placeholder="ZIP Code" class="border rounded-lg px-4 py-3" required />
            </div>
            
            <button 
              type="submit"
              disabled
              class="w-full bg-gray-400 text-white py-4 rounded-lg font-semibold cursor-not-allowed opacity-60"
            >
              Place Order (Demo Only)
            </button>
            <p class="text-center text-sm text-gray-600 mt-4">
              This is a static demo — orders cannot be placed.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.items)
const subtotal = computed(() => 
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>