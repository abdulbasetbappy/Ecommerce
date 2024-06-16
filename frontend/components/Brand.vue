<script setup>
import { ref } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";

import TitleWithSubTitle from "~/composables/reuseable/TitleWithSubTitle/TitleWithSubTitle.vue";


// Define array of images
const brands = ref([
  { id: 1, name: "Brand 1", logo: "/images/Adidas_Logo.svg" },
  { id: 2, name: "Brand 2", logo: "/images/Google_2015_logo.svg" },
  { id: 4, name: "Brand 3", logo: "/images/BMW.svg" },
  { id: 5, name: "Brand 3", logo: "/images/Apple_logo_black.svg" },
  { id: 6, name: "Brand 3", logo: "/images/Logo_NIKE.svg" },
  { id: 7, name: "Brand 3", logo: "/images/Microsoft_logo.svg" },
  { id: 8, name: "Brand 3", logo: "/images/Samsung_logo.svg" },
  // Add more brands as needed
]);
</script>

<template>
  <div>
    <div class="py-10">
       <TitleWithSubTitle
          title="Our Partner"
          class="pb-10"
        />
      <swiper
        :slides-per-view="3"
        space-between="30"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '300': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }"
        :modules="[Autoplay]"
        class="mySwiper"
      >
        <swiper-slide class="" v-for="brand in brands" :key="brand.id">
         <div class="p-4 border">
           <img :src="brand.logo" class="cursor-pointer mx-auto w-36 h-40 object-contain flex items-center justify-center" /></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style setup>
.word {
  color: red;
}
</style>
