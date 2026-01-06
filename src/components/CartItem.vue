<!-- src/components/CartItem.vue -->
<template>
  <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex gap-6 border border-gray-100 group">
    <div class="relative">
      <img 
        :src="item.thumbnail || item.images?.[0]" 
        :alt="item.title" 
        class="w-32 h-32 object-cover rounded-xl group-hover:scale-105 transition-transform" 
      />
      <div class="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-7 w-7 flex items-center justify-center shadow-lg">
        {{ item.quantity }}
      </div>
    </div>
    
    <div class="flex-1">
      <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {{ item.name }}
      </h3>
      
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ₱{{ item.price.toFixed(2) }}
        </span>
        <span class="text-sm text-gray-500">each</span>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="flex items-center bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
          <button 
            @click="decrease"
            :disabled="item.quantity <= 1"
            class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition font-bold text-gray-700"
          >
            −
          </button>
          <span class="text-lg font-bold w-12 text-center">{{ item.quantity }}</span>
          <button 
            @click="increase"
            class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition font-bold text-gray-700"
          >
            +
          </button>
        </div>
        
        <button 
          @click="remove"
          class="ml-auto px-6 py-2.5 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          Remove
        </button>
      </div>
    </div>
    
    <div class="text-right flex flex-col justify-between">
      <div>
        <p class="text-sm text-gray-500 mb-1">Total</p>
        <p class="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ₱{{ (item.price * item.quantity).toFixed(2) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const increase = () => cartStore.updateQuantity(props.item.id, props.item.quantity + 1)
const decrease = () => cartStore.updateQuantity(props.item.id, props.item.quantity - 1)
const remove = () => cartStore.removeItem(props.item.id)
</script>