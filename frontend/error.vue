<template>
  <NuxtLayout name="home">
    <div class="container w-full py-6 mx-auto">
      <div
        class="flex flex-col items-center justify-center text-center h-3/4 lg:h-screen"
      >
        <h2
          class="mb-4 text-2xl font-semibold md:text-6xl lg:text-8xl xl:text-9xl"
        >
          404 Not Found
        </h2>
        <div>
          <Image src="/images/error.png" class="w-full h-56" alt="error" />
          <p class="px-6 mb-6 text-black">
            Your visited page not found. You may go home page.
          </p>
          <Button
            @click="goHome"
            class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Back to home page
          </Button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
import { useRouter } from "vue-router";
import Button from "~/composables/reuseable/Button/Button.vue";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
