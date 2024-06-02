<script setup>
import { ref } from "vue";
import Rating from "~/composables/reuseable/Rating/Rating.vue";
import ProductRating from "~/composables/reuseable/Rating/ProductRating.vue";

// current image
const setImage = ref("images/Group1000005941.png");

// Define array of images
const images = [
  {
    thumb: "images/Group1000005941.png",
    full: "images/Group1000005941.png",
  },
  {
    thumb: "images/Group1000005942.png",
    full: "images/Group1000005942.png",
  },
  {
    thumb: "images/Group1000005943.png",
    full: "images/Group1000005943.png",
  },
  {
    thumb: "images/Group1000005944.png",
    full: "images/Group1000005944.png",
  },
];

// Function to set full image when thumbnail is clicked
function showFullImage(image) {
  setImage.value = image.full;
}

// product details
const product = ref({
  title: "Havic HV G-92 Gamepad",
  rating: {
    value: 4,
    reviews: 150,
  },
  availability: "In Stock",
  price: "$192.00",
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
  colors: ["red", "gray", "white", "black"],
  sizes: ["XS", "S", "M", "L", "XL"],
  actions: {
    addToCart: "Add To Cart",
    wishlist: "Add to Wishlist",
    buyNow: "Buy Now",
  },
  delivery: {
    freeDelivery: "Free Delivery",
    return: "Return Delivery",
    deliveryDetails: "Enter your postal code for Delivery Availability",
    returnDelivery: "Free 30 Days Delivery Returns. Details",
  },
});

const selectedSize = ref("M");
const quantity = ref(2);

const selectSize = (size) => {
  selectedSize.value = size;
};

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const colorClass = (color) => {
  const colors = {
    red: "bg-red-500",
    gray: "bg-gray-300",
    white: "bg-white border",
    black: "bg-black",
  };
  return colors[color];
};
</script>
<template>
  <div class="lg:px-36 md:px-10 px-3 mt-20">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-7">
        <div class="main-img">
          <img class="w-full" :src="setImage" alt="Product Image" />
        </div>
        <div class="mt-8">
          <div class="flex">
            <!-- Loop through images to display thumbnails -->
            <img
              class="cursor-pointer w-[10.5rem] mx-auto"
              v-for="img in images"
              :src="img.thumb"
              :key="img.thumb"
              @click="showFullImage(img)"
              alt="Thumbnail"
            />
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-5">
        <div class="bg-white mx-auto">
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <div class="flex items-center mt-2 mb-3">
            <Rating :rating="product.rating.value" />
            <span class="text-gray-600 ml-2"
              >({{ product.rating.reviews }} Reviews)</span
            >
            <span class="px-2">|</span>
            <span class="text-green-500">{{ product.availability }}</span>
          </div>
          <div class="text-2xl font-bold mb-3">{{ product.price }}</div>
          <p class="text-gray-700 mb-3">{{ product.description }}</p>
          <div class="mb-3">
            <div class="flex space-x-2">
              <span class="block font-semibold mb-1">Colours:</span>
              <div
                v-for="color in product.colors"
                :key="color"
                :class="colorClass(color)"
                class="w-6 h-6 rounded"
              ></div>
            </div>
          </div>
          <div class="mb-3">
            <div class="flex space-x-2">
              <span class="block font-semibold mb-1">Size:</span>
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectSize(size)"
                :class="[
                  'px-3 py-1 border rounded',
                  { 'bg-gray-200': size === selectedSize },
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>
          <div class="flex gap-4 mb-3">
            <div class="relative flex items-center max-w-[9rem]">
              <button
                type="button"
                @click="decrementQuantity"
                class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                v-model="quantity"
                class="bg-gray-50 border border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                required
              />
              <button
                type="button"
                @click="incrementQuantity"
                class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
            <button class="px-4 bg-[#0C7649] text-white py-2 rounded w-56">
              {{ product.actions.addToCart }}
            </button>
            <button
              class="border border-gray-300 h-11 text-white py-2 px-3 rounded"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            </button>
          </div>
          <button
            class="flex-1 w-full bg-primary text-white py-2 h-11 rounded mb-3"
          >
            {{ product.actions.buyNow }}
          </button>
          <!-- share to social -->
          <button
            class="border border-gray-500 h-11 text-white px-2 py-1 rounded"
          >
            <Icon class="h-6 w-6 text-gray-800" name="gg:facebook" />
          </button>

          <div class="rounded border border-gray-300 mt-3">
            <div class="flex gap-2 border-b p-3">
              <span>
                <Icon class="h-10 w-10" name="iconoir:delivery-truck" />
              </span>
              <div>
                <span class="block font-semibold">{{
                  product.delivery.freeDelivery
                }}</span>
                <p>{{ product.delivery.deliveryDetails }}</p>
              </div>
            </div>
            <div class="flex gap-2 p-4">
              <span>
                <Icon class="h-10 w-10" name="icon-park-outline:return" />
              </span>
              <div>
                <span class="block font-semibold">{{
                  product.delivery.return
                }}</span>
                <p>
                  {{ product.delivery.returnDelivery }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- rating -->
    <ProductRating />

    <!-- product description -->
    <ProductDetailsTab />
  </div>
</template>

<!-- <style scoped>
.main-img {
  width: 710px;
}
</style> -->
