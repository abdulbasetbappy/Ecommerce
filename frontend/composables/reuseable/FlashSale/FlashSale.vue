<template>
  <div
    v-if="showFlashSale"
    class="flex flex-col items-center justify-between p-8 text-white bg-black rounded-lg md:flex-row"
  >
    <div class="flex flex-col items-start">
      <span class="text-lg font-bold text-red-500">{{ category }}</span>
      <h1 class="lg:w-[443px] my-4 text-5xl font-bold mt-8">{{ headline }}</h1>
      <CountdownTimer class="mt-8" :endTime="endTime" />
      <Button class="mt-8 lg:w-32" @click="goHome"> Buy Now </Button>
    </div>
    <div class="mt-8 md:mt-0">
      <img :src="imageSrc" :alt="imageAlt" class="w-full h-auto rounded-lg" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Button from "../Button/Button.vue";
import CountdownTimer from "../CountdownTimer/CountdownTimer.vue";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    required: true,
  },
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
</script>

<style scoped>
/* Additional styles if needed */
</style>
