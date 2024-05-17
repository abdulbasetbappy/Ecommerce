<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../compoenents/Footer.vue";
import Header from "../compoenents/Header.vue";
</script>
