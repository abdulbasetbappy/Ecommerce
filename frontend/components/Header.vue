<template>
  <div>
    <!-- Top header -->
    <div class="px-6 py-2 text-white bg-black">
      <div class="container flex items-center justify-between mx-auto">
        <div class="flex-1 text-center">
          <span class="text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a href="#" class="hover:underline">
            <span class="ml-4 font-semibold text-white">ShopNow</span>
          </a>
        </div>
        <div class="flex">
          <select
            class="px-2 py-1 ml-4 text-white bg-transparent border-0 rounded-md hover:text-black hover:bg-gray-100 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <!-- Add more languages as needed -->
          </select>
        </div>
      </div>
    </div>
    <!-- Main header -->
    <header class="bg-white shadow-sm">
      <div
        class="container flex items-center justify-between px-6 py-4 mx-auto"
      >
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-semibold">Exclusive</span>
        </div>
        <!-- Navigation Links for larger screens -->
        <nav class="hidden space-x-4 md:flex">
          <a
            v-for="menu in menus"
            :key="menu.text"
            :href="menu.link"
            class="text-gray-600 hover:text-black"
            >{{ menu.text }}</a
          >
        </nav>
        <!-- Icons and Menu button -->
        <div class="flex items-center space-x-4">
          <!-- Menu button for smaller screens -->
          <button
            @click="toggleMenu"
            class="text-gray-600 md:hidden hover:text-black focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <!-- Search bar -->
          <div class="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              class="absolute text-gray-600 transform -translate-y-1/2 right-2 top-1/2"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 10a6 6 0 100-12 6 6 0 000 12zM21 21l-6-6"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Icons -->
          <button
            v-for="icon in icons"
            :key="icon.name"
            class="hidden text-gray-600 hover:text-black focus:outline-none md:block"
          >
            <svg
              :class="icon.class"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path :d="icon.path"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <a
          v-for="menu in menus"
          :key="menu.text"
          :href="menu.link"
          class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >{{ menu.text }}</a
        >
        <div class="px-4 py-2">
          <div class="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              class="absolute text-gray-600 transform -translate-y-1/2 right-2 top-1/2"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 10a6 6 0 100-12 6 6 0000 12zM21 21l-6-6"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex mt-4 space-x-4">
            <button
              v-for="icon in icons"
              :key="icon.name"
              class="text-gray-600 hover:text-black focus:outline-none"
            >
              <svg
                :class="icon.class"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :d="icon.path"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menus = [
  { text: "Home", link: "#" },
  { text: "Contact", link: "#" },
  { text: "About", link: "#" },
  { text: "Sign Up", link: "#" },
];

const icons = [
  {
    name: "wishlist",
    class: "w-6 h-6",
    path: "M20.84 4.61a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z",
  },
  {
    name: "cart",
    class: "w-6 h-6",
    path: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H21M7 13a5 5 0 110 10 5 5 0 010-10zm10 0a5 5 0 110 10 5 5 0 010-10z",
  },
];
</script>
