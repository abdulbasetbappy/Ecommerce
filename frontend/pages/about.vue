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
      <div
        class="bg-black rounded-full ring-4 ring-gray-400 group-hover:ring-red-300 group-hover:bg-white p-2 mb-2"
      >
        <Icon
          :name="item.iconName"
          class="h-8 w-8 text-white group-hover:text-dark"
        />
      </div>

      <h3 class="text-2xl font-bold">{{ item.counter }}K</h3>
      <h3>{{ item.title }}K</h3>
    </div>
  </div>

  <!-- team slider -->
  <div class="md:px-10 lg:px-36 px-3 py-32">
    <swiper
      :slides-per-view="3"
      space-between="30"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '300': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(member, index) in teamMembers"
        :key="index"
        class="text-center"
      >
        <img
          :src="member.image"
          alt=""
          class="w-48 h-48 rounded-full mx-auto mb-4"
        />
        <h3 class="text-xl font-bold">{{ member.name }}</h3>
        <p class="text-gray-600">{{ member.position }}</p>
        <!-- <div class="flex justify-center space-x-4 mt-4">
          <a :href="member.twitter" target="_blank" class="text-blue-400"
            ><i class="fab fa-twitter"></i
          ></a>
          <a :href="member.instagram" target="_blank" class="text-pink-600"
            ><i class="fab fa-instagram"></i
          ></a>
          <a :href="member.linkedin" target="_blank" class="text-blue-700"
            ><i class="fab fa-linkedin"></i
          ></a>
        </div> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Pagination } from "swiper/modules";
const modules = [Pagination];
const aboutUs = ref(
  "images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
);

// counter data
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
    iconName: "mage:dollar",
  },
  {
    src: "images/Vector.png",
    counter: 45.5,
    title: "Customer active in our site",
    iconName: "fluent:shopping-bag-20-regular",
  },
  {
    src: "images/Group.png",
    counter: 25,
    title: "Anual gross sale in our site",
    iconName: "healthicons:money-bag-outline",
  },
];

// teammember data
const teamMembers = ref([
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    image: "images/image-46.png",
    // twitter: "https://twitter.com/tomcruise",
    // instagram: "https://instagram.com/tomcruise",
    // linkedin: "https://linkedin.com/in/tomcruise",
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    image: "images/image-46.png",
    // twitter: "https://twitter.com/emmawatson",
    // instagram: "https://instagram.com/emmawatson",
    // linkedin: "https://linkedin.com/in/emmawatson",
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    image: "images/image-46.png",
    // twitter: "https://twitter.com/willsmith",
    // instagram: "https://instagram.com/willsmith",
    // linkedin: "https://linkedin.com/in/willsmith",
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    image: "images/image-46.png",
    // twitter: "https://twitter.com/willsmith",
    // instagram: "https://instagram.com/willsmith",
    // linkedin: "https://linkedin.com/in/willsmith",
  },
]);
</script>

<style>
.swiper-pagination {
  position: static !important;
  margin-top: 10px;
}
</style>
