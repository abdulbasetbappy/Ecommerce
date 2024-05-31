<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Woman's Fashion",
    items: [
      {
        label: "Item 1",
      },
      {
        label: "Item 2",
      },
    ],
  },
  {
    label: "Men's Fashion",
    items: [
      {
        label: "Item 1",
      },
      {
        label: "Item 2",
      },
    ],
  },
  {
    label: "Electronics",
  },
  {
    label: "Home & Lifestyle",
  },
  {
    label: "Medicine",
  },
  {
    label: "Sports & Outdors",
  },
  {
    label: "Baby's & Toys",
  },
  {
    label: "Groceries & Pets",
  },
  {
    label: "Health & Beauty",
  },
]);
</script>

<template>
  <TieredMenu :model="items" />
</template>

<style scoped></style>
