<template>
  <button @click="handleClick" class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  onClick: {
    type: Function,
    default: () => {}
  }
});

const handleClick = () => {
  props.onClick();
};
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
