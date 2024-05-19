<template>
  <NuxtLayout name="default">
    <div class="grid w-full p-6 bg-gray-900">
      <div class="text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div
        class="flex flex-col items-center justify-center w-full h-screen text-center"
      >
        <div>
          <h2 class="mb-4 font-semibold text-9xl md:text-9xl lg:text-9xl">
            404 Not Found
          </h2>
          <p class="mb-8 text-black">
            Your visited page not found. You may go home page.
          </p>
          <Button
            @click="goHome"
            class="px-4 py-2 mt-8 text-white bg-red-500 rounded hover:bg-red-600"
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
  layout: "default",
});
import { useRouter } from "vue-router";
import Breadcrumb from "~/components/reuseable/Breadcrumb/Breadcrumb.vue";
import Button from "~/components/reuseable/Button/Button.vue";

const router = useRouter();

const crumbs = [{ name: "Home", link: "/" }, { name: "404 Error" }];

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
