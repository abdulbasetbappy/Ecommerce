<template>
  <div class="py-12">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex flex-col items-center text-center"
      >
        <div
          class="flex items-center justify-center w-24 h-24 mb-4 bg-gray-300 rounded-full"
        >
          <div
            class="flex items-center justify-center w-16 h-16 bg-black rounded-full"
          >
            <i v-if="feature.icon !== 'custom-call-support'" :class="[feature.icon, 'text-white text-3xl']"></i>
            <svg class="text-white" v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 0 0-7 7v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3v-1a5 5 0 0 1 10 0v1h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2V8a7 7 0 0 0-7-7z"/>
              <path d="M6 13v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/>
            </svg>
          </div>
        </div>
        <h3 class="text-lg font-bold">{{ feature.title }}</h3>
        <p class="text-sm text-black">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: "pi pi-truck",
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: "custom-call-support", // Use custom icon identifier
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: "pi pi-shield"
  },
];
</script>

<style scoped>
.pi {
  font-size: 2rem;
  color: white;
}
</style>
