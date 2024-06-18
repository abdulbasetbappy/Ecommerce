<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    
    const route = useRoute();
    const categoryId = ref(route.params.id); // Get category ID from route params
</script>

<template>
    <NuxtLayout name="home">
        <div class="container min-h-screen px-4 py-12 mx-auto">
            <h1 class="mb-4 text-2xl font-bold">asdfasdf</h1>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                sfdgdsfgsdfg
            </div>
        </div>
    </NuxtLayout>
</template>