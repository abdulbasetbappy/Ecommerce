<script setup>
definePageMeta({
  layout: "home"
});
import Features from "~/components/Features/Features.vue";
import ResponsiveGallery from "~/components/ResponsiveGallery/ResponsiveGallery.vue";
import Button from "~/composables/reuseable/Button/Button.vue";
import CategoriesCarousel from "~/composables/reuseable/CategoriesCarousel/CategoriesCarousel.vue";
import ProductCard from "~/composables/reuseable/ProductCard/ProductCard.vue";
import TitleWithSubTitle from "~/composables/reuseable/TitleWithSubTitle/TitleWithSubTitle.vue";
import FlashSale from "~/composables/reuseable/FlashSale/FlashSale.vue";
const categories = [
  { icon: "mobile", label: "Phones" },
  { icon: "desktop", label: "Computers" },
  { icon: "stopwatch", label: "SmartWatch" },
  { icon: "camera", label: "Camera" },
  { icon: "headphones", label: "HeadPhones" },
  { icon: "camera", label: "Gaming" },
  { icon: "microphone", label: "Gaming" },
  { icon: "mobile", label: "Phones" },
  { icon: "desktop", label: "Computers" },
  { icon: "stopwatch", label: "SmartWatch" },
  { icon: "camera", label: "Camera" },
  { icon: "headphones", label: "HeadPhones" },
  { icon: "camera", label: "Gaming" },
  { icon: "microphone", label: "Gaming" },
];
const products = [
  {
    id: 1,
    name: "The north coat",
    image: "/images/pro-1.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/images/bag.png",
    price: "$960",
    prevPrice: "$1160",
    rating: 5,
    ratingCount: 30,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/images/pro-3.png",
    price: "$160",
    prevPrice: "$170",
    rating: 4,
    ratingCount: 50,
  },
  {
    id: 4,
    name: "Small BookSelf",
    image: "/images/pro-4.png",
    price: "$360",
    prevPrice: "$460",
    rating: 5,
    ratingCount: 100,
  },
];
</script>
<template>
    
    <div>
        <Head>
            <Title>Home</Title>
            <Meta name="description" :content="Home" />
        </Head>
        
        <div  class="container min-h-screen px-4 py-12 mx-auto">
            <CategoriesCarousel :items="categories" />
            <div class="flex items-center justify-between mb-8 text-left">
                <TitleWithSubTitle title="This Month" subtitle="Best Selling Products"/>
                <Button @click="goHome"> View All </Button>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
                :onButtonClick="handleButtonClick"
                />
            </div>
            <Features />
        </div>
    </div>
</template>
