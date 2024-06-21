<template>
  <div id="default-carousel" class="relative w-full">
    <!-- Carousel wrapper -->
    <div class="relative md:h-96 overflow-hidden h-[535px]">
      <!-- Items -->
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['carousel-item', { active: activeIndex === index }]"
        :data-carousel-item="index"
      >
        <!-- <img
          :src="item.src"
          class="absolute block w-full md:h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          :alt="item.alt"
        /> -->
        <div class="w-full absolute bg-[#000] h-full px-12">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-4 pb-8 h-full md:pt-8 items-center">
            <div class="pt-20 md:pt-0 space-y-3 text-center md:text-left">
              <div class="flex gap-3 items-center justify-center md:justify-start">
                <img class="w-8" :src="item.titleLogo" alt="" />
                <p class="text-white">
                  {{ item.title }}
                </p>
              </div>
              <h1 class="text-4xl top-10 text-white">
                {{ item.productOffer }}
              </h1>
              <button
                type="button"
                class="bg-transparent focus:outline-none focus:ring-4 hover:translate-x-4 duration-500 focus:ring-gray-100 font-medium rounded-lg text-sm text-white dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Shop Now
                <svg class="inline ms-1"
                  width="16"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <img class="w-full" :src="item.productImg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3"
    >
      <button
        v-for="(item, index) in items"
        :key="index"
        type="button"
        class="w-3 h-3 rounded-full"
        :class="{
          'bg-[#DB4444] ring-2 ring-gray-200': activeIndex === index,
          'bg-white': activeIndex !== index,
        }"
        @click="goToSlide(index)"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = [
  {
    titleLogo: "/images/1200px-Apple_gray_logo 1.png",
    title: "iPhone 14 Series",
    productOffer: "Up to 10% off Voucher",
    productImg: "/images/iphone.jpg",
  },
  {
    titleLogo: "/images/1200px-Apple_gray_logo1.png",
    title: "iPhone 15 Series",
    productOffer: "Up to 20% off Voucher",
    productImg: "/images/iphone.jpg",
  },
];

const activeIndex = ref(0);

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
