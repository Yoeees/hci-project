<template>
  <footer class="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mt-20 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-2xl">S</span>
            </div>
            <h3 class="text-3xl font-extrabold">Saludo</h3>
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Your favorite e-commerce destination for amazing products at unbeatable prices. Built with love using Vue 3 and modern web technologies.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-sm">
              <span class="text-lg">📘</span>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-sm">
              <span class="text-lg">🐦</span>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-sm">
              <span class="text-lg">📷</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-indigo-300">Quick Links</h4>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">Home</router-link></li>
            <li><router-link to="/products" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">Products</router-link></li>
            <li><router-link to="/cart" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">Cart</router-link></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">About Us</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-indigo-300">Support</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">Help Center</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">Shipping Info</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">Returns</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition hover:translate-x-1 inline-block">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            © 2026 Saludo. All rights reserved. Built with 💜 using Vue 3
          </p>
          <div class="flex gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-white transition">Privacy Policy</a>
            <a href="#" class="hover:text-white transition">Terms of Service</a>
            <a href="#" class="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>