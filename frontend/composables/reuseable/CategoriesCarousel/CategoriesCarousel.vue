<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between mb-4">
      <TitleWithSubTitle title="Categories" subtitle="Browse By Category" />
      <div class="flex items-center justify-center">
        <button
          class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
          @click="prev"
        >
          <i class="pi pi-arrow-left"></i>
        </button>
        <button class="flex items-center justify-center w-12 h-12 ml-2 bg-gray-200 rounded-full" @click="next">
          <i class="pi pi-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="relative">
      <Carousel
        :value="items"
        :numVisible="6"
        :numScroll="1"
        circular
        :autoplayInterval="3000"
        :responsiveOptions="responsiveOptions"
        ref="carousel"
        showNavigators="true"
        class="custom-carousel"
      >
        <template #item="slotProps">
          <div class="carousel-item">
            <IconWithText
              :icon="slotProps.data.icon"
              :label="slotProps.data.label"
            />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import Carousel from "primevue/carousel";
import { onMounted, ref } from "vue";
import IconWithText from "../IconWithText/IconWithText.vue";
import TitleWithSubTitle from "../TitleWithSubTitle/TitleWithSubTitle.vue";

const props = defineProps({
  title: String,
  subtitle: String,
  items: Array,
});

const carousel = ref(null);

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "560px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "320px",
    numVisible: 1,
    numScroll: 1,
  },
];

function prev() {
  if (carousel.value) {
    const prevButton = carousel.value.$el.querySelector(".p-carousel-prev");
    if (prevButton) {
      prevButton.click();
    }
  }
}

function next() {
  if (carousel.value) {
    const nextButton = carousel.value.$el.querySelector(".p-carousel-next");
    if (nextButton) {
      nextButton.click();
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    if (carousel.value) {
      prev();
      next();
    }
  }, 0);
});
</script>

<style scoped>
.custom-carousel .p-carousel-item {
  flex: 1 0 calc(16.666% - 30px); /* Default gap for 6 items */
}

.custom-carousel .p-carousel-item:last-child {
  margin-right: 0;
}

@media (max-width: 1024px) {
  .custom-carousel .p-carousel-item {
    flex: 1 0 calc(20% - 20px); /* Adjust for 5 items and 20px gap */
  }
}

@media (max-width: 768px) {
  .custom-carousel .p-carousel-item {
    flex: 1 0 calc(25% - 20px); /* Adjust for 4 items and 20px gap */
  }
}

@media (max-width: 560px) {
  .custom-carousel .p-carousel-item {
    flex: 1 0 calc(50% - 10px); /* Adjust for 2 items and 10px gap */
  }
}

@media (max-width: 320px) {
  .custom-carousel .p-carousel-item {
    flex: 1 0 calc(100% - 10px); /* Adjust for 1 item and 10px gap */
    margin-right: 10px;
  }
}

/* Hide default arrows */
.p-carousel-prev,
.p-carousel-next {
  display: none !important;
}
</style>
