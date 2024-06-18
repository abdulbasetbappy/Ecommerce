<script setup>
    useHead({
        // as a string,
        // where `%s` is replaced with the title
        titleTemplate: '%s :: Ecommerce',
    })
</script>

<template>
    
    <ClientOnly>
      <template #fallback>
        <div class="text-center w-full flex-col items-center h-screen grid justify-items-center ">
            <div class="text-center flex">
                <img class="w-auto h-16" src="\public\images\logo.jpg" alt="Loading logo" />
                <p class="mt-4">loading...</p>
            </div>
        </div>
      </template>
      <ScrollToTop/>
      <NuxtPage />
    </ClientOnly>
</template>
