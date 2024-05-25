<script setup >
    useHead({
        // as a string,
        // where `%s` is replaced with the title
        titleTemplate: '%s :: Ecommerce',
    })
</script>

<template>
    <ClientOnly>
      <template #fallback>
        <div class="text-center mt-[20%] w-64 flex-col m-auto items-center flex h-screen">
          <img class="w-auto h-16" src="\public\images\logo.jpg" alt="Loading logo" />
          <p class="mt-4">loading...</p>
        </div>
      </template>
      <NuxtPage />
    </ClientOnly>
</template>
