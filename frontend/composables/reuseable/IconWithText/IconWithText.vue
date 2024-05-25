<!-- components/IconWithText.vue -->
<template>
  <div class="flex flex-col items-center justify-center w-auto h-auto p-4 text-center border-2 rounded-sm border-gray lg:w-44 lg:min-h-32 my-14 hover:bg-red-500 hover:text-white">
    <i :class="`pi pi-${icon} text-4xl mb-2`"></i>
    <span>{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
});
</script>

<style scoped>
.word{
    color:red
}
</style>