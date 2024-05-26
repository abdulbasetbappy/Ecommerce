<template>
  <div class="lg:px-36 md:px-10 px-3 mt-20">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-7 mx-auto">
        <div class="main-img">
          <img
            class="shadow-xl rounded-xl w-full"
            :src="setImage"
            alt="Product Image"
          />
        </div>
        <div class="mt-10 ms-10">
          <div class="flex space-x-3">
            <!-- Loop through images to display thumbnails -->
            <img
              class="cursor-pointer w-36"
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
        <div class="bg-white p-6 rounded-lg shadow-lg mx-auto">
          <h2 class="text-xl font-semibold">Havic HV G-92 Gamepad</h2>
          <div class="flex items-center mt-2 mb-4">
            <div class="rating flex ">
              <span class="text-red-200"
                ><svg
                  class="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill=""
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </span>
              <span
                ><svg
                  class="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffc107"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </span>
              <span
                ><svg
                  class="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffc107"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </span>
              <span
                ><svg
                  class="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffc107"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </span>
              <span
                ><svg
                  class="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffc107"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </span>
            </div>
            <span class="text-gray-600 ml-2">(150 Reviews) </span>
            <span class="px-2">|</span>
            <span class="text-green-500">In Stock</span>
          </div>
          <div class="text-2xl font-bold mb-4">$192.00</div>
          <p class="text-gray-700 mb-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>
          <div class="mb-4">
            <span class="block font-semibold mb-1">Colours:</span>
            <div class="flex space-x-2">
              <div class="w-6 h-6 bg-red-500 rounded-full"></div>
              <div class="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div class="w-6 h-6 bg-white border rounded-full"></div>
              <div class="w-6 h-6 bg-black rounded-full"></div>
            </div>
          </div>
          <div class="mb-4">
            <span class="block font-semibold mb-1">Size:</span>
            <div class="flex space-x-2">
              <button class="px-3 py-1 border rounded">XS</button>
              <button class="px-3 py-1 border rounded">S</button>
              <button class="px-3 py-1 border rounded bg-gray-200">M</button>
              <button class="px-3 py-1 border rounded">L</button>
              <button class="px-3 py-1 border rounded">XL</button>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <button class="px-3 py-1 border">-</button>
            <input type="text" value="2" class="w-12 text-center border" />
            <button class="px-3 py-1 border">+</button>
          </div>
          <div class="flex space-x-2 mb-4">
            <button class="flex-1 bg-green-500 text-white py-2 rounded-lg">
              Add To Cart
            </button>
            <button class="flex-1 bg-red-500 text-white py-2 rounded-lg">
              Buy Now
            </button>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <div class="mb-2">
              <span class="block font-semibold">Free Delivery</span>
              <a href="#" class="text-blue-500">
                Enter your postal code for Delivery Availability
              </a>
            </div>
            <div>
              <span class="block font-semibold">Return Delivery</span>
              <a href="#" class="text-blue-500">
                Free 30 Days Delivery Returns. Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define reactive reference for current image
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
</script>

<style scoped>
.main-img {
  width: 710px;
}
</style>
