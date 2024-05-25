<template>
  <div class="relative p-4">
    <div
      class="relative flex items-center justify-center p-12 bg-gray-100 group"
    >
      <div>
        <img :src="product.image" alt="Product Image" class="w-full h-40" />
      </div>

      <div class="absolute flex flex-col space-y-2 right-4 top-2">
        <button class="p-2 text-black bg-white rounded-full">
          <i class="text-md pi pi-heart"></i>
        </button>
        <button class="p-2 text-black bg-white rounded-full">
          <i class="pi pi-eye"></i>
        </button>
      </div>

      <!-- Add to Cart button on hover -->
      <div
        class="absolute bottom-0 left-0 right-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-90 group-hover:opacity-100"
      >
        <button class="w-full py-2">Add To Cart</button>
      </div>
    </div>

    <div class="mt-4 text-left">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <div class="flex items-center gap-4 mt-2">
        <div class="text-red-500">{{ product.price }}</div>
        <div class="text-gray-500 line-through">{{ product.prevPrice }}</div>
      </div>
      <div class="flex items-center mt-2">
        <Rating
          :model-value="product.rating"
          readonly
          :cancel="false"
          class="rating"
        />
        <span class="ml-2 text-sm text-gray-500"
          >({{ product.ratingCount }})</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Rating from "primevue/rating";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.rating .p-rating-star {
  color: #ffd700 !important; /* Yellow color for stars */
}
.rating .p-rating-icon-filled {
  color: #ffd700 !important; /* Yellow color for filled stars */
}
.rating .p-rating {
  font-size: 1rem; /* Adjust the size as needed */
}
</style>

