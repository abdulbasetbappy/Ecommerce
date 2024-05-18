<template>
  <footer class="px-4 py-10 text-white bg-black ">
    <div class="container mx-auto space-y-8 md:space-y-0 md:grid md:grid-cols-5 md:gap-8">
      <!-- Exclusive Section -->
      <div class="space-y-4">
        <h2 class="text-3xl font-semibold">Exclusive</h2>
        <p class="mt-4">Subscribe</p>
        <p class="text-sm">Get 10% off your first order</p>
        <form class="flex mt-4">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-2 text-gray-800 bg-transparent border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-none"
          />
          <button
            type="submit"
            class="px-4 py-2 text-white bg-gray-800 border border-gray-300 rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-none"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0000 16zm1.707-9.293a1 1 0 00-1.414-1.414L7 10.586V7a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 100-2H8.414l3.293-3.293z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>

      <!-- Support Section -->
      <div>
        <h2 class="text-lg font-semibold">Support</h2>
        <address class="mt-4 not-italic">
          111 Bijoy sarani, Dhaka, <br />
          DH 1515, Bangladesh.
        </address>
        <p class="mt-2">
          <a href="mailto:exclusive@gmail.com" class="hover:underline">exclusive@gmail.com</a>
        </p>
        <p class="mt-2">
          <a href="tel:+8801588889999" class="hover:underline">+88015-88888-9999</a>
        </p>
      </div>

      <!-- Account Section -->
      <div>
        <h2 class="text-lg font-semibold">Account</h2>
        <ul class="mt-4 space-y-2">
          <li><a href="#" class="hover:underline">My Account</a></li>
          <li><a href="#" class="hover:underline">Login / Register</a></li>
          <li><a href="#" class="hover:underline">Cart</a></li>
          <li><a href="#" class="hover:underline">Wishlist</a></li>
          <li><a href="#" class="hover:underline">Shop</a></li>
        </ul>
      </div>

      <!-- Quick Link Section -->
      <div>
        <h2 class="text-lg font-semibold">Quick Link</h2>
        <ul class="mt-4 space-y-2">
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Terms Of Use</a></li>
          <li><a href="#" class="hover:underline">FAQ</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Download App Section -->
      <div>
        <h2 class="text-lg font-semibold">Download App</h2>
        <p class="mt-4">Save $3 with App New User Only</p>
        <div class="mt-4 space-y-4">
          <div>
            <img src="/images/googlePlay.png" alt="Download on Google Play" class="w-32" />
          </div>
          <div>
            <img src="/images/app-store.png" alt="Download on App Store" class="w-32" />
          </div>
        </div>
        <div class="flex mt-4 space-x-4">
          <a href="#" class="hover:underline">
            <i class="text-2xl pi pi-facebook"></i>
          </a>
          <a href="#" class="hover:underline">
            <i class="text-2xl pi pi-twitter"></i>
          </a>
          <a href="#" class="hover:underline">
            <i class="text-2xl pi pi-instagram"></i>
          </a>
          <a href="#" class="hover:underline">
            <i class="text-2xl pi pi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center text-gray-500">
      &copy; Copyright Rimel 2022. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
</script>
