<template>
  <NuxtLayout name="home">
    <div class="container grid w-full p-6 mx-auto">
      <div class="text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div
        class="flex flex-col items-center justify-center w-full h-screen text-center"
      >
        <div>
          <h2 class="mb-4 font-semibold text-9xl">
            404 Not Found
          </h2>
          <p class="mb-6 text-black">
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
import Breadcrumb from "~/composables/reuseable/Breadcrumb/Breadcrumb.vue";
import Button from "~/composables/reuseable/Button/Button.vue";

const router = useRouter();

const crumbs = [{ name: "Home", link: "/" }, { name: "404 Error" }];

const goHome = () => {
  router.push("/");
};
</script>


