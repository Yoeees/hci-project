<!-- src/components/CartToast.vue -->
<template>
  <div class="fixed bottom-8 right-8 z-50 space-y-4 pointer-events-none">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="flex items-center gap-4 bg-white rounded-2xl shadow-2xl p-5 pointer-events-auto animate-bounce-once border border-gray-200 max-w-sm"
      >
<img
  v-if="toast.imageUrl"
  :src="toast.imageUrl"
  alt="Product"
  class="w-16 h-16 object-cover rounded-xl"
/>
        <div>
          <p class="font-semibold text-gray-900">Added!</p>
          <p class="text-sm text-gray-600">{{ toast.message }}</p>
        </div>
        <div class="ml-4 text-green-500 text-2xl">✓</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const toasts = computed(() => cartStore.toasts)
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(100px) scale(0.8);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-50px) scale(0.8);
}

@keyframes bounceOnce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-bounce-once {
  animation: bounceOnce 0.6s ease-out;
}
</style>