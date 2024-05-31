<script setup>
import { Icon } from '@iconify/vue';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { onMounted, ref } from "vue";
import IconWithText from "../IconWithText/IconWithText.vue";
import TitleWithSubTitle from "../TitleWithSubTitle/TitleWithSubTitle.vue";

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
</script>

<template>
  <hr class="pt-9">
  <div class="container relative mx-auto mt-20">
    <div class="flex items-center justify-between mb-4">
      <TitleWithSubTitle title="Categories" subtitle="Browse By Category" />
      <div class="absolute top-0 right-0 flex items-center justify-center space-x-2">
        <button
          ref="prevEl"
          class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
          @click="prev"
        >
        <Icon icon="mdi:chevron-left" class="text-3xl" />
        </button>
        <button
          ref="nextEl"
          class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
          @click="next"
        >
        <Icon icon="mdi:chevron-right" class="text-3xl" />
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
          nextEl: nextEl
        }"
        :modules="[Pagination, Navigation]"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <IconWithText :icon="item.icon" :label="item.label" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <hr class="pb-20">
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

