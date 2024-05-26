<template>
  <NuxtLayout name="home">
    <div class="flex flex-col gap-2 py-10 lg:flex-row md:flex-col">
      <!-- Image -->
      <div class="w-full h-full lg:w-2/5 md:w-full">
        <img
          src="/images/signup.png"
          alt="Sign Up Image"
          class="object-contain w-full h-auto"
        />
      </div>
      <!-- Form -->
      <div class="w-full lg:py-32 lg:pl-24 lg:w-2/5 md:w-full">
        <SignUpForm />
      </div>
      <!-- Red Box -->
      <div class="hidden bg-red-700 xl:block xl:w-1/5">
        <p>lorem100 ads</p>
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
