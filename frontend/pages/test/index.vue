<script setup>
definePageMeta({
  layout: "home",
});
import OurProducts from "~/components/OurProducts/OurProducts.vue";
import ResponsiveGallery from "~/components/ResponsiveGallery/ResponsiveGallery.vue";
import Button from "~/composables/reuseable/Button/Button.vue";
import CategoriesCarousel from "~/composables/reuseable/CategoriesCarousel/CategoriesCarousel.vue";
import FlashSale from "~/composables/reuseable/FlashSale/FlashSale.vue";
import ProductCard from "~/composables/reuseable/ProductCard/ProductCard.vue";
import TitleWithSubTitle from "~/composables/reuseable/TitleWithSubTitle/TitleWithSubTitle.vue";
import TodaysCarousel from "~/composables/reuseable/TodaysCarousel/TodaysCarousel.vue";

const categories = ref([
  { icon: "mingcute:cellphone-line", label: "Phones" },
  { icon: "mdi:desktop-classic", label: "Computers" },
  { icon: "mdi:watch", label: "SmartWatch" },
  { icon: "mdi:camera", label: "Camera" },
  { icon: "mdi:headphones", label: "HeadPhones" },
  { icon: "mdi:gamepad-variant", label: "Gaming" },
  { icon: "mdi:microphone", label: "Microphone" },
  { icon: "mdi:cellphone", label: "Phones" },
  { icon: "mdi:desktop-classic", label: "Computers" },
  { icon: "mdi:watch", label: "SmartWatch" },
  { icon: "mdi:camera", label: "Camera" },
  { icon: "mdi:headphones", label: "HeadPhones" },
  { icon: "mdi:gamepad-variant", label: "Gaming" },
  { icon: "mdi:microphone", label: "Microphone" },
]);
const products = ref([
  {
    id: 1,
    name: "The north coat",
    image: "/images/pro-1.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    discount: "-40%",
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/images/bag.png",
    price: "$960",
    prevPrice: "$1160",
    rating: 5,
    ratingCount: 30,
    discount: "-35%",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/images/pro-3.png",
    price: "$160",
    prevPrice: "$170",
    rating: 4,
    ratingCount: 50,
    discount: "-40%",
  },
  {
    id: 4,
    name: "Small BookSelf",
    image: "/images/pro-4.png",
    price: "$360",
    prevPrice: "$460",
    rating: 5,
    ratingCount: 100,
    discount: "-40%",
  },
  {
    id: 5,
    name: "The Eos Camera",
    image: "/images/camera.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 6,
    name: "The Teddy",
    image: "/images/teddy.jpg",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 7,
    name: "The Jacket",
    image: "/images/jacket.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 8,
    name: "The Car",
    image: "/images/car.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 9,
    name: "The Gamepad",
    image: "/images/gamepad.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 10,
    name: "The Laptop",
    image: "/images/laptop.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 11,
    name: "The Shoe",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 12,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 13,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 14,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 15,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 16,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 17,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 18,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 19,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 20,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 21,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 22,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
]);
</script>
<template>
  <NuxtLayout name="home">
    <div class="container min-h-screen px-4 py-12 mx-auto">
      <TodaysCarousel :items="products" />
      <CategoriesCarousel :items="categories" />
      <div>
        <div class="flex items-center justify-between mb-8 text-left">
          <TitleWithSubTitle
            title="This Month"
            subtitle="Best Selling Products"
          />
        <NuxtLink to="/productPage/{id}">
            <Button class="w-36"> View All </Button>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            class="mt-8 md:mt-14"
            v-for="product in products.slice(0, 4)"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="my">
          <OurProducts :items="products" />
        </div>
        <div class="my-12">
          <ResponsiveGallery />
        </div>
        <div class="my-12">
          <FlashSale
            category="Categories"
            headline="Enhance Your Music Experience"
            imageSrc="/images/jbl-speaker.png"
            imageAlt="JBL Speaker"
            buttonText="Buy Now!"
            :endTime="new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
