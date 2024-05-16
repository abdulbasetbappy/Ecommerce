<script setup >
definePageMeta({
  layout: 'default',
})
//const route = useRoute()
</script>

<template>
  <div>
    <nuxt-link to="/test">test page</nuxt-link>
    <p>Home page</p>
    <!-- <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a> -->
  </div>
</template>
