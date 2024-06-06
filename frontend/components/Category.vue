<template>
  <div class="flex">
    <!-- Side Menu -->
    <nav class="w-full p-4 pb-2 ps-0">
      <ul>
        <li v-for="menu in menus" :key="menu.title" class="relative group">
          <div
            class="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
            @mouseover="menu.isOpen = true"
            @mouseleave="menu.isOpen = false"
          >
            {{ menu.title }}
            <span v-if="menu.subItems.length" class="text-gray-500"
              ><svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </span>
          </div>
          <!-- Submenu -->
          <ul
            v-if="menu.subItems.length"
            class="md:absolute md:ps-0 ps-4 md:w-80 w-full z-30 md:left-full left-0 md:top-0 top-10 bg-white border-gray-200 md:shadow-md"
            @mouseover="menu.isOpen = true"
            @mouseleave="menu.isOpen = false"
            v-show="menu.isOpen"
          >
            <li
              v-for="subItem in menu.subItems"
              :key="subItem"
              class="p-2 hover:bg-gray-200"
            >
              {{ subItem }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const menus = reactive([
  {
    title: "Woman's Fashion",
    subItems: ["Item 1", "Item 2"],
    isOpen: false,
  },
  {
    title: "Men's Fashion",
    subItems: [],
    isOpen: false,
  },
  {
    title: "Electronics",
    subItems: [],
    isOpen: false,
  },
  {
    title: "Home & Lifestyle",
    subItems: [],
    isOpen: false,
  },
  {
    title: "Medicine",
    subItems: [],
    isOpen: false,
  },
  {
    title: "Sports & Outdoors",
    subItems: [],
    isOpen: false,
  },
  {
    title: "Baby's & Toys",
    subItems: [],
    isOpen: false,
  },
  {
    title: "Groceries & Pets",
    subItems: [],
    isOpen: false,
  },
  {
    title: "Health & Beauty",
    subItems: [],
    isOpen: false,
  },
]);
</script>

<style>
/* Additional styling for better visibility */
.group-hover\:visible {
  visibility: visible;
}
</style>
