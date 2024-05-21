<template>
  <div class="lg:ps-36 md:ps-10 ps-3 md:pe-0 pe-3">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 class="text-3xl font-semibold">Our Story</h3>
        <p class="pt-8 text-sm">
          Launced in 2015, Exclusive is South Asia's premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p class="pt-4 ">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div>
        <img class="w-full" :src="aboutUs" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const aboutUs = ref(
  "images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
);
</script>
