<script setup>
definePageMeta({
  layout: 'home',
})
//const route = useRoute()
</script>

<template>
    <NuxtLayout :name="layout">
        <CategorySlider />
    </NuxtLayout>
</template>
