<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { onMounted, ref } from "vue";
import TitleWithSubTitle from "../TitleWithSubTitle/TitleWithSubTitle.vue";
import ProductCard from "../composibles/reuseable/ProductCard/ProductCard.vue";

const props = defineProps({
  title: String,
  subtitle: String,
  items: Array,
});

const responsiveOptions = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  560: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 30,
  },
};

const swiperInstance = ref(null);
const prevEl = ref(null);
const nextEl = ref(null);

const navigationOptions = ref({});

onMounted(() => {
  navigationOptions.value = {
    prevEl: prevEl.value,
    nextEl: nextEl.value,
  };
});

const prev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const next = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};
const products = [
  {
    id: 1,
    name: "The north coat",
    image: "/images/pro-1.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/images/bag.png",
    price: "$960",
    prevPrice: "$1160",
    rating: 5,
    ratingCount: 30,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/images/pro-3.png",
    price: "$160",
    prevPrice: "$170",
    rating: 4,
    ratingCount: 50,
  },
  {
    id: 4,
    name: "Small BookSelf",
    image: "/images/pro-4.png",
    price: "$360",
    prevPrice: "$460",
    rating: 5,
    ratingCount: 100,
  },
];
</script>

<template>
  <div class="container relative mx-auto">
    <div class="flex items-center justify-between mb-4">
      <TitleWithSubTitle title="Todays" subtitle="Flash Sales" />
      <div
        class="absolute top-0 right-0 flex items-center justify-center space-x-2"
      >
        <button
          ref="prevEl"
          class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
          @click="prev"
        >
          <i class="pi pi-arrow-left"></i>
        </button>
        <button
          ref="nextEl"
          class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
          @click="next"
        >
          <i class="pi pi-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="relative">
      <swiper
        ref="carousel"
        :slides-per-view="6"
        space-between="20"
        :breakpoints="responsiveOptions"
        :navigation="{
          prevEl: prevEl,
          nextEl: nextEl,
        }"
        :modules="[Pagination, Navigation]"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-pagination {
  position: static !important;
  margin-top: 20px;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}
.swiper-pagination-bullet-active {
  background-color: #db4444;
  border: 2px solid rgba(128, 128, 128, 0.527);
  width: 12px;
  height: 12px;
}
</style>
