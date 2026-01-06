<!-- src/pages/Cart.vue -->
<template>
  <div class="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4">Shopping Cart</h1>
        <p class="text-xl text-gray-600">Review your items before checkout</p>
      </div>
      
      <div v-if="cartItems.length > 0">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cart Items -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Cart Items ({{ cartItems.length }})</h2>
              <div class="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                <CartItem 
                  v-for="item in cartItems" 
                  :key="item.id" 
                  :item="item" 
                />
              </div>
            </div>
          </div>
          
          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white sticky top-24">
              <h2 class="text-2xl font-bold mb-8">Order Summary</h2>
              
              <div class="space-y-4 mb-8">
                <div class="flex justify-between text-lg">
                  <span class="text-indigo-100">Subtotal</span>
                  <span class="font-bold">₱{{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-lg">
                  <span class="text-indigo-100">Shipping</span>
                  <span class="font-bold">Free</span>
                </div>
                <div class="flex justify-between text-lg">
                  <span class="text-indigo-100">Tax</span>
                  <span class="font-bold">₱{{ (subtotal * 0.12).toFixed(2) }}</span>
                </div>
                <div class="border-t border-white/30 pt-4 mt-4">
                  <div class="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span>₱{{ (subtotal * 1.12).toFixed(2) }}</span>
                  </div>
                </div>
              </div>
              
              <router-link 
                to="/checkout"
                class="block text-center bg-white text-indigo-600 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 mb-4"
              >
                Proceed to Checkout
              </router-link>
              
              <router-link 
                to="/products"
                class="block text-center text-white border-2 border-white/50 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Continue Shopping
              </router-link>

              <!-- Trust Badges -->
              <div class="mt-8 pt-8 border-t border-white/30">
                <div class="flex items-center gap-3 text-sm text-indigo-100">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Secure checkout</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-indigo-100 mt-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                  </svg>
                  <span>Free shipping over ₱1,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center py-20">
        <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        </div>
        <p class="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</p>
        <p class="text-xl text-gray-600 mb-8">Start adding products to see them here!</p>
        <router-link 
          to="/products"
          class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105"
        >
          Explore Products
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

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
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