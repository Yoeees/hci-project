// src/stores/cart.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    toasts: ref([]) // ← New: for notifications
  }),

  actions: {
    addItem(product) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }

      // Trigger beautiful toast
      this.showToast(`${product.title} added to cart!`, product.thumbnail || product.images?.[0])
    },

    showToast(message, imageUrl = null) {
      const id = Date.now()
      this.toasts.push({
        id,
        message,
        imageUrl
      })

      // Auto remove after 3 seconds
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id)
      }, 3000)
    },

    updateQuantity(id, quantity) {
      const item = this.items.find(item => item.id === id)
      if (item && quantity > 0) {
        item.quantity = quantity
      } else if (quantity <= 0) {
        this.removeItem(id)
      }
    },

    removeItem(id) {
      const item = this.items.find(item => item.id === id)
      if (item) {
        this.showToast(`${item.title} removed from cart`, item.thumbnail || item.images?.[0])      }
      this.items = this.items.filter(item => item.id !== id)
    }
  },

  persist: true
})