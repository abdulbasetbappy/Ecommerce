<template>
  <NuxtLayout name="home">
    <div class="w-full grid grid-cols-12 gap-5 grid-rows-1">
      <!-- Image -->
      <div class=" lg:col-span-7 col-span-12 xl:col-span-6">
        <img
          src="\images\signup.png"
          alt="Sign Up Image"
          class="h-full w-full "
        />
      </div>
      <!-- Form -->
      <div class="lg:col-span-5 col-span-12  lg:content-center  lg:pl-20 xl:col-span-6">
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
