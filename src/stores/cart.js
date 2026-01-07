import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    toasts: [] 
  }),

  getters: {
    // Computed total items count
    itemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    
    // Computed subtotal
    subtotal: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  },

  actions: {
    addItem(product, quantity = 1) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        // Ensure we have the correct property names (title vs name)
        this.items.push({ 
          ...product, 
          name: product.name || product.title,
          title: product.title || product.name,
          quantity 
        })
      }

      // Trigger toast
      const itemName = product.title || product.name
      const message = quantity > 1 
        ? `${quantity}x ${itemName} added to cart!` 
        : `${itemName} added to cart!`
      
      this.showToast(message, product.thumbnail || product.images?.[0])
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
        const itemName = item.title || item.name
        this.showToast(`${itemName} removed from cart`, item.thumbnail || item.images?.[0])
      }
      this.items = this.items.filter(item => item.id !== id)
    }
  },

  persist: true
})