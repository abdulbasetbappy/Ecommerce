<template>
  <NuxtLayout :name="home">
    <div
      class="grid bg-gray-100 lg:cols-12 md:h-screen lg:gap-12 md:py-14 md:grid-cols-12"
    >
      <!-- Image -->
      <div class="w-full lg:col-span-7 md:col-span-6">
        <img
          src="/images/signup.jpg"
          alt="Sign Up Image"
          class="w-full lg:h-2/3"
        />
      </div>
      <!-- Form -->
      <div class="p-4 xl:mt-[120px] lg:col-span-5 md:col-span-6">
        <SignUpForm />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
import SignUpForm from "~/components/SignUpForm.vue";
</script>
