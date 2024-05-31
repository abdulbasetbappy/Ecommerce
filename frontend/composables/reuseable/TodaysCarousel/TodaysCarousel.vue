<template>
  <div v-if="showFlashSale" class="container relative mx-auto mt-20">
    <div class="flex items-center justify-between mb-4">
      <div class="flex flex-row items-center gap-4">
        <TitleWithSubTitle title="Today's" subtitle="Flash Sales" />

        <CountdownTimer
          :dclass="'flex reverse flex-col items-center justify-center text-dark flex-col-reverse'"
          :endTime="new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)"
        />
      </div>
      <div
        class="absolute top-0 right-0 flex items-center justify-center space-x-2"
      >
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
        ref="swiperInstance"
        :slides-per-view="4"
        :space-between="20"
        :breakpoints="responsiveOptions"
        :navigation="{
          prevEl: prevEl,
          nextEl: nextEl
        }"
        :modules="[Pagination, Navigation]"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <ProductCard class="mt-8 md:mt-14" :product="item" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex items-center justify-center py-8 md:py-14">
      <Button class="w-48 text-center"> View All Products </Button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref, watch } from "vue";
import ProductCard from "~/composables/reuseable/ProductCard/ProductCard.vue";
import Button from "../Button/Button.vue";
import CountdownTimer from "../CountdownTimer/CountdownTimer.vue";
import TitleWithSubTitle from "../TitleWithSubTitle/TitleWithSubTitle.vue";

const props = defineProps({
  title: String,
  subtitle: String,
  items: Array,
  endTime: {
    type: Date,
    required: true,
  },
});

const showFlashSale = ref(true);

watch(
  () => props.endTime,
  () => {
    if (new Date().getTime() >= props.endTime.getTime()) {
      showFlashSale.value = false;
    }
  }
);

const responsiveOptions = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  560: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
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

<style scoped>
.word {
  color: red;
}
</style>
