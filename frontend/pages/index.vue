<script setup>
definePageMeta({
  layout: 'home',
})
//const route = useRoute()
</script>

<template>
  <NuxtLayout :name="home">
    <CategorySlider />
  </NuxtLayout>
</template>
