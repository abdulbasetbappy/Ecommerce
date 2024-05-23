<template>
  <!-- about us banner -->
  <div class="lg:ps-36 md:ps-10 ps-3 md:pe-0 pe-3">
    <div class="text-left py-8">
      <Breadcrumb :crumbs="crumbs" />
    </div>
    <div class="grid md:grid-cols-12 grid-cols-1">
      <div class="col-span-3">
        <div class="flex items-center gap-2">
          <span class="bg-[#DB4444] rounded-full p-1 h-[30px] w-[30px] flex items-center justify-center">
            <Icon class="h-6 w-6 text-white" name="ph:phone-thin" />
          </span>

          <h6 class="text-base">Call To Us</h6>
        </div>
        <div class="space-y-2">
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
      </div>
      <div class="col-span-9"></div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "~/composables/reuseable/Breadcrumb/Breadcrumb.vue";
const crumbs = [{ name: "Home", link: "/" }, { name: " Contact" }];
</script>

