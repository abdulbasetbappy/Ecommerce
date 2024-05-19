<template>
  <div id="default-carousel" class="relative w-full">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden md:h-[400px]">
      <!-- Items -->
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['carousel-item', { 'active': activeIndex === index }]"
        :data-carousel-item="index"
      >
        <img
          :src="item.src"
          class="absolute block w-full md:h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          :alt="item.alt"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
      <button
        v-for="(item, index) in items"
        :key="index"
        type="button"
        class="w-3 h-3 rounded-full"
        :class="{ 'bg-blue-600': activeIndex === index, 'bg-white': activeIndex !== index }"
        @click="goToSlide(index)"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="prevSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="nextSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  { src: 'https://picsum.photos/1900/700' },
  { src: 'https://source.unsplash.com/random/1920x700', alt: 'Image 2' },
  // Add more items as needed
];

const activeIndex = ref(0);

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % items.length;
};

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + items.length) % items.length;
};

const goToSlide = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped>
.carousel-item {
  display: none;
  transition: opacity 0.7s ease-in-out;
}

.carousel-item.active {
  display: block;
  opacity: 1;
}
</style>
