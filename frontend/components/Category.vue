<template>
  <div class="flex">
    <!-- Side Menu -->
    <nav class="w-full bg-gray-100 p-4">
      <ul>
        <li v-for="menu in menus" :key="menu.title" class="relative group">
          <div
            class="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
            @mouseover="menu.isOpen = true"
            @mouseleave="menu.isOpen = false"
          >
            {{ menu.title }}
            <span v-if="menu.subItems.length" class="text-gray-500">&#9654;</span>
          </div>
          <!-- Submenu -->
          <ul
            v-if="menu.subItems.length"
            class="absolute w-80 z-30 left-full top-0 bg-white border border-gray-200 shadow-md invisible group-hover:visible"
            v-show="menu.isOpen"
          >
            <li v-for="subItem in menu.subItems" :key="subItem" class="p-2 hover:bg-gray-200">
              {{ subItem }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
   
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const menus = reactive([
  {
    title: "Woman's Fashion",
    subItems: ['Item 1', 'Item 2'],
    isOpen: false,
  },
  {
    title: "Men's Fashion",
    subItems: [],
    isOpen: false,
  },
  {
    title: 'Electronics',
    subItems: [],
    isOpen: false,
  },
  {
    title: 'Home & Lifestyle',
    subItems: [],
    isOpen: false,
  },
  {
    title: 'Medicine',
    subItems: [],
    isOpen: false,
  },
  {
    title: 'Sports & Outdoors',
    subItems: [],
    isOpen: false,
  },
  {
    title: "Baby's & Toys",
    subItems: [],
    isOpen: false,
  },
  {
    title: 'Groceries & Pets',
    subItems: [],
    isOpen: false,
  },
  {
    title: 'Health & Beauty',
    subItems: [],
    isOpen: false,
  },
])
</script>

<style>
/* Additional styling for better visibility */
.group-hover\:visible {
  visibility: visible;
}
</style>
