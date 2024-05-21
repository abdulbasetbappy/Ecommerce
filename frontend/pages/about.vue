<template>
  <!-- about us banner -->
  <div class="lg:ps-36 md:ps-10 ps-3 md:pe-0 pe-3">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 class="text-3xl font-semibold">Our Story</h3>
        <p class="pt-8">
          Launced in 2015, Exclusive is South Asia's premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p class="pt-4">
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
  <!-- about us counter -->
  <div
    class="grid md:grid-cols-4 grid-cols-2 md:px-10 lg:px-36 px-3 py-32 gap-4"
  >
    <div
      class="border border-gray-400 hover:text-white rounded hover:border-primary p-8 flex flex-col items-center space-y-2 hover:bg-primary duration-300 group"
      v-for="(item, index) in counterItem"
      :key="index"
    >
      <div class="bg-black rounded-full ring-4 ring-gray-400 group-hover:ring-red-300 group-hover:bg-white  p-2 mb-2">
        <Icon :name="item.iconName" class="h-8 w-8 text-white group-hover:text-dark" />
      </div>

      <h3 class="text-2xl font-bold">{{ item.counter }}K</h3>
      <h3>{{ item.title }}K</h3>
    </div>
  </div>
</template>

<script setup>
const aboutUs = ref(
  "images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
);

const counterItem = [
  {
    src: "images/icon_shop.png",
    counter: 10.5,
    title: "Sallers active our site",
    iconName: "circum:shop",
  },
  {
    src: "images/icon_shop.png",
    counter: 33,
    title: "Mopnthly Produduct Sale",
    iconName:"mage:dollar",
  },
  {
    src: "images/Vector.png",
    counter: 45.5,
    title: "Customer active in our site",
    iconName:"fluent:shopping-bag-20-regular",
  },
  {
    src: "images/Group.png",
    counter: 25,
    title: "Anual gross sale in our site",
    iconName:"healthicons:money-bag-outline",
  },
];
</script>
