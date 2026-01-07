<template>
  <div class="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4">Secure Checkout</h1>
        <p class="text-xl text-gray-600">Complete your order in just a few steps</p>
      </div>

      <!-- Progress Steps -->
      <div class="max-w-3xl mx-auto mb-12">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              ✓
            </div>
            <span class="font-semibold text-gray-900">Cart</span>
          </div>
          <div class="flex-1 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-4"></div>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              2
            </div>
            <span class="font-semibold text-indigo-600">Checkout</span>
          </div>
          <div class="flex-1 h-1 bg-gray-200 mx-4"></div>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <span class="font-medium text-gray-500">Confirmation</span>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Checkout Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Shipping Information -->
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span class="text-2xl">📦</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Shipping Information</h2>
            </div>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    v-model="formData.firstName"
                    @blur="validateField('firstName')"
                    placeholder="John" 
                    :class="[
                      'w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition',
                      errors.firstName 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                    ]"
                    required 
                  />
                  <p v-if="errors.firstName" class="text-red-600 text-sm mt-1">{{ errors.firstName }}</p>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    v-model="formData.lastName"
                    @blur="validateField('lastName')"
                    placeholder="Doe" 
                    :class="[
                      'w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition',
                      errors.lastName 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                    ]"
                    required 
                  />
                  <p v-if="errors.lastName" class="text-red-600 text-sm mt-1">{{ errors.lastName }}</p>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  v-model="formData.email"
                  @blur="validateField('email')"
                  placeholder="john.doe@example.com" 
                  :class="[
                    'w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition',
                    errors.email 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                  ]"
                  required 
                />
                <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  v-model="formData.phone"
                  @input="formatPhone"
                  @blur="validateField('phone')"
                  placeholder="+63 912 345 6789" 
                  :class="[
                    'w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition',
                    errors.phone 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                  ]"
                  required 
                />
                <p v-if="errors.phone" class="text-red-600 text-sm mt-1">{{ errors.phone }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
                <input 
                  type="text" 
                  v-model="formData.address"
                  @blur="validateField('address')"
                  placeholder="123 Main Street, Apt 4B" 
                  :class="[
                    'w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition',
                    errors.address 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                  ]"
                  required 
                />
                <p v-if="errors.address" class="text-red-600 text-sm mt-1">{{ errors.address }}</p>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input 
                    type="text" 
                    v-model="formData.city"
                    @blur="validateField('city')"
                    placeholder="Makati" 
                    :class="[
                      'w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition',
                      errors.city 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                    ]"
                    required 
                  />
                  <p v-if="errors.city" class="text-red-600 text-sm mt-1">{{ errors.city }}</p>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                  <input 
                    type="text" 
                    v-model="formData.zipCode"
                    @input="formatZipCode"
                    @blur="validateField('zipCode')"
                    placeholder="1200" 
                    maxlength="4"
                    :class="[
                      'w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition',
                      errors.zipCode 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                    ]"
                    required 
                  />
                  <p v-if="errors.zipCode" class="text-red-600 text-sm mt-1">{{ errors.zipCode }}</p>
                </div>
              </div>
            </form>
          </div>

          <!-- Payment Information -->
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span class="text-2xl">💳</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Payment Method</h2>
            </div>
            
            <div class="space-y-4">
              <div class="border-2 border-indigo-600 bg-indigo-50 rounded-xl p-4 cursor-pointer">
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span class="font-semibold text-gray-900">Credit / Debit Card</span>
                </div>
              </div>
              
              <div class="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-300 transition opacity-50">
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                  <span class="font-semibold text-gray-500">PayPal (Unavailable)</span>
                </div>
              </div>
              
              <div class="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-gray-300 transition opacity-50">
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                  <span class="font-semibold text-gray-500">Cash on Delivery (Unavailable)</span>
                </div>
              </div>
            </div>

            <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p class="text-sm text-yellow-800 flex items-start gap-2">
                <span class="text-lg">ℹ️</span>
                <span><strong>Demo Mode:</strong> This is a static demonstration. Payment processing is not available.</span>
              </p>
            </div>
          </div>
        </div>
        
        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white sticky top-24">
            <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div class="space-y-4 mb-6 max-h-64 overflow-y-auto pr-3 custom-scrollbar">
              <div v-for="item in cartItems" :key="item.id" class="flex gap-3 pb-4 border-b border-white/20">
                <img 
                  :src="item.thumbnail || item.images?.[0]" 
                  :alt="item.title || item.name" 
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div class="flex-1">
                  <p class="font-semibold text-sm line-clamp-2">{{ item.title || item.name }}</p>
                  <p class="text-sm text-indigo-200 mt-1">Qty: {{ item.quantity }}</p>
                </div>
                <p class="font-bold text-sm">₱{{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
            </div>
            
            <div class="space-y-3 mb-6 border-t border-white/20 pt-6">
              <div class="flex justify-between text-lg">
                <span class="text-indigo-100">Subtotal</span>
                <span class="font-bold">₱{{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-lg">
                <span class="text-indigo-100">Shipping</span>
                <span class="font-bold text-green-300">Free</span>
              </div>
              <div class="flex justify-between text-lg">
                <span class="text-indigo-100">Tax (12%)</span>
                <span class="font-bold">₱{{ (subtotal * 0.12).toFixed(2) }}</span>
              </div>
            </div>
            
            <div class="border-t border-white/30 pt-6 mb-6">
              <div class="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>₱{{ (subtotal * 1.12).toFixed(2) }}</span>
              </div>
            </div>
            
            <button 
              type="button"
              disabled
              class="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-xl font-bold cursor-not-allowed border-2 border-white/30 mb-3"
            >
              🔒 Place Order (Demo Only)
            </button>
            
            <router-link 
              to="/cart"
              class="block text-center text-white/80 hover:text-white transition text-sm font-medium"
            >
              ← Back to Cart
            </router-link>

            <!-- Security Badges -->
            <div class="mt-8 pt-6 border-t border-white/20 space-y-2">
              <div class="flex items-center gap-2 text-sm text-indigo-100">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                </svg>
                <span>SSL Secure Payment</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-indigo-100">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.items)
const subtotal = computed(() => 
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// Form data
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: ''
})

// Error messages
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: ''
})

// Validation functions
const validateField = (field) => {
  errors[field] = '' // Clear previous error

  switch (field) {
    case 'firstName':
    case 'lastName':
      if (!formData[field].trim()) {
        errors[field] = 'This field is required'
      } else if (formData[field].trim().length < 2) {
        errors[field] = 'Must be at least 2 characters'
      } else if (!/^[a-zA-Z\s]+$/.test(formData[field])) {
        errors[field] = 'Only letters are allowed'
      }
      break

    case 'email':
      if (!formData.email.trim()) {
        errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address'
      }
      break

    case 'phone':
      const phoneDigits = formData.phone.replace(/\D/g, '')
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required'
      } else if (phoneDigits.length < 10) {
        errors.phone = 'Phone number must be at least 10 digits'
      } else if (phoneDigits.length > 13) {
        errors.phone = 'Phone number is too long'
      }
      break

    case 'address':
      if (!formData.address.trim()) {
        errors.address = 'Address is required'
      } else if (formData.address.trim().length < 5) {
        errors.address = 'Please enter a complete address'
      }
      break

    case 'city':
      if (!formData.city.trim()) {
        errors.city = 'City is required'
      } else if (!/^[a-zA-Z\s]+$/.test(formData.city)) {
        errors.city = 'Only letters are allowed'
      }
      break

    case 'zipCode':
      if (!formData.zipCode.trim()) {
        errors.zipCode = 'ZIP code is required'
      } else if (!/^\d{4}$/.test(formData.zipCode)) {
        errors.zipCode = 'ZIP code must be 4 digits'
      }
      break
  }
}

// Format phone to allow only numbers and common separators
const formatPhone = (event) => {
  // Allow only numbers, spaces, +, -, (, )
  formData.phone = formData.phone.replace(/[^\d\s+()-]/g, '')
}

// Format ZIP code to allow only numbers
const formatZipCode = (event) => {
  formData.zipCode = formData.zipCode.replace(/\D/g, '')
}

// Validate all fields
const validateAllFields = () => {
  Object.keys(formData).forEach(field => validateField(field))
  return !Object.values(errors).some(error => error !== '')
}

// Handle form submit (demo only)
const handleSubmit = () => {
  if (validateAllFields()) {
    alert('✅ Form is valid! In a real application, this would process your order.')
  } else {
    alert('❌ Please fix the errors in the form before submitting.')
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 4px 0;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid transparent;
  background-clip: padding-box;
}
</style>