<template>
  <button
    @click="handleClick"
    :class="[
      'px-4 py-4 text-white bg-red-500 rounded hover:bg-red-600 text-center',
      btnclass,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  onClick: {
    type: Function,
    default: () => {},
  },
  btnclass: {
    type: String,
    default: "",
  },
});

const handleClick = () => {
  props.onClick();
};
</script>
