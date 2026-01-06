<!-- src/components/CartItem.vue -->
<template>
  <div class="bg-white rounded-lg shadow p-6 flex gap-6">
<img 
  :src="item.thumbnail || item.images?.[0]" 
  :alt="item.title" 
  class="w-32 h-32 object-cover rounded" 
/>
    
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
      <p class="text-indigo-600 font-bold mt-1">₱{{ item.price.toFixed(2) }}</p>
      
      <div class="flex items-center gap-4 mt-4">
        <button 
          @click="decrease"
          :disabled="item.quantity <= 1"
          class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          -
        </button>
        <span class="text-lg font-medium w-12 text-center">{{ item.quantity }}</span>
        <button 
          @click="increase"
          class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          +
        </button>
        
        <button 
          @click="remove"
          class="ml-auto text-red-600 hover:text-red-800 transition"
        >
          Remove
        </button>
      </div>
    </div>
    
    <div class="text-right">
      <p class="text-lg font-bold text-gray-900">
        ₱{{ (item.price * item.quantity).toFixed(2) }}
      </p>
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