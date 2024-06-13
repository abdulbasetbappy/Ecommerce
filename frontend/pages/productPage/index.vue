<script setup>
import InputText from "primevue/inputtext";
import Breadcrumb from "~/composables/reuseable/Breadcrumb/Breadcrumb.vue";
import ProductCard from "~/composables/reuseable/ProductCard/ProductCard.vue";

const crumbs = [{ name: "Home", link: "/" }, { name: "ProductPage" }];

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
    brand: "Apple",
    color: "Red",
    vendor: "Vendor1",
    categories: ["Clothing"],
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
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor2",
    categories: ["Accessories"],
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
    brand: "Samsung",
    color: "Yellow",
    vendor: "Vendor3",
    categories: ["Electronics", "Computers"],
  },
  {
    id: 4,
    name: "Small Bookshelf",
    image: "/images/pro-4.png",
    price: "$360",
    prevPrice: "$460",
    rating: 5,
    ratingCount: 100,
    discount: "-40%",
    brand: "Apple",
    color: "Green",
    vendor: "Vendor4",
    categories: ["Home and Living"],
  },
  {
    id: 5,
    name: "The Eos Camera",
    image: "/images/camera.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Samsung",
    color: "Yellow",
    vendor: "Vendor1",
    categories: ["Electronics"],
  },
  {
    id: 6,
    name: "The Teddy",
    image: "/images/teddy.jpg",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor2",
    categories: ["Toys"],
  },
  {
    id: 7,
    name: "The Jacket",
    image: "/images/jacket.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Apple",
    color: "Green",
    vendor: "Vendor3",
    categories: ["Clothing"],
  },
  {
    id: 8,
    name: "The Car",
    image: "/images/car.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Samsung",
    color: "Yellow",
    vendor: "Vendor4",
    categories: ["Electronics", "Automotive"],
  },
  {
    id: 9,
    name: "The Gamepad",
    image: "/images/gamepad.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor1",
    categories: ["Electronics", "Gaming"],
  },
  {
    id: 10,
    name: "The Laptop",
    image: "/images/laptop.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Apple",
    color: "Green",
    vendor: "Vendor2",
    categories: ["Electronics", "Computers"],
  },
  {
    id: 11,
    name: "The Shoe",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Samsung",
    color: "Yellow",
    vendor: "Vendor3",
    categories: ["Clothing"],
  },
  {
    id: 12,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Apple",
    color: "Green",
    vendor: "Vendor4",
    categories: ["Accessories", "Electronics"],
  },
  {
    id: 13,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Samsung",
    color: "Yellow",
    vendor: "Vendor1",
    categories: ["Accessories", "Electronics"],
  },
  {
    id: 14,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor2",
    categories: ["Accessories", "Electronics"],
  },
  {
    id: 15,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Apple",
    color: "Green",
    vendor: "Vendor3",
    categories: ["Accessories"],
  },
  {
    id: 16,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Samsung",
    color: "Yellow",
    vendor: "Vendor4",
    categories: ["Accessories"],
  },
  {
    id: 17,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor1",
    categories: ["Accessories"],
  },
  {
    id: 18,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor1",
    categories: ["Accessories"],
  },
  {
    id: 19,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor1",
    categories: ["Accessories"],
  },
  {
    id: 20,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor1",
    categories: ["Accessories"],
  },
  {
    id: 21,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Nokia",
    color: "Blue",
    vendor: "Vendor1",
    categories: ["Accessories"],
  },
  {
    id: 22,
    name: "The Watch",
    image: "/images/shoe.png",
    price: "$260",
    prevPrice: "$360",
    rating: 4,
    ratingCount: 65,
    brand: "Samsung",
    color: "Red",
    vendor: "Vendor2",
    categories: ["Accessories", "Electronics"],
  },
]);
// Sample categories for filtering

const filters = ref({
  brand: "",
  color: "",
  vendor: "",
  rating: "",
  price: 1000,
  category: "",
});

const categories = ref([
  "Clothing",
  "Electronics",
  "Accessories",
  "Computers",
  "Home and Living",
  "Beauty and Health",
]);
const brands = ref(["Apple", "Samsung", "Nokia"]);
const colors = ref(["Red", "Blue", "Green", "Yellow"]);
const vendors = ref(["Vendor1", "Vendor2", "Vendor3", "Vendor4"]);
const ratings = ref([1, 2, 3, 4, 5]);

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const price = parseFloat(product.price.replace("$", ""));
    const matchesCategory =
      !filters.value.category ||
      product.categories.includes(filters.value.category);
    const matchesPrice = price <= filters.value.price;
    return (
      (!filters.value.brand || product.brand === filters.value.brand) &&
      (!filters.value.color || product.color === filters.value.color) &&
      (!filters.value.vendor || product.vendor === filters.value.vendor) &&
      (!filters.value.rating ||
        product.rating === parseInt(filters.value.rating)) &&
      matchesCategory &&
      matchesPrice
    );
  });
});

//add pagination
const rows = ref(8); // Number of products per page (3 rows * 4 columns)
const first = ref(0);

const paginatedProducts = computed(() => {
  const start = first.value;
  const end = start + rows.value;
  return filteredProducts.value.slice(start, end);
});

const onPageChange = (event) => {
  first.value = event.first;
};

// apply filter
const applyFilter = (type, value) => {
  filters.value[type] = value;
};
//reset filters
const resetFilters = () => {
  filters.value = {
    brand: "",
    color: "",
    vendor: "",
    rating: "",
    price: 1000,
    category: "",
  };
  first.value = 0;
};

// Computed property to check if any filter is active
const isFilterActive = computed(() => {
  return (
    filters.value.brand !== "" ||
    filters.value.color !== "" ||
    filters.value.vendor !== "" ||
    filters.value.rating !== "" ||
    filters.value.price !== 1000 || // default price value
    filters.value.category !== ""
  );
});

</script>
<template>
  <NuxtLayout name="home">
    <div class="w-full min-h-screen px-4 xl:px-36">
      <div>
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="grid grid-cols-1 gap-6 py-6 md:grid-cols-12">
        <!-- Filters Section -->
        <div class="col-span-12 px-4 pt-6 lg:col-span-3">
          <div class="px-2 py-4 mb-4 border rounded-md cursor-pointer">
            <h4 class="mb-2 text-xl font-semibold text-dark">Price Range</h4>
            <InputText
              v-model.number="filters.price"
              class="w-full px-1 py-1 mb-3 text-center border focus:outline-none hover:outline-none"
            />
            <input
              type="range"
              v-model="filters.price"
              min="0"
              max="1000"
              step="1"
              class="w-full mb-3 custom-range"
            />
          </div>

          <div class="px-2 py-4 mb-4 border rounded-md cursor-pointer">
            <h4 class="mb-2 text-xl font-semibold text-dark">Category</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="category in categories"
                :key="category"
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.category === category,
                  'bg-gray-100 text-black': filters.category !== category,
                }"
                @click="applyFilter('category', category)"
              >
                {{ category }}
              </li>
              <li
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.category === '',
                  'bg-gray-100 text-black': filters.category !== '',
                }"
                @click="applyFilter('category', '')"
              >
                All Categories
              </li>
            </ul>
          </div>

          <div class="px-2 py-4 mb-4 border rounded-md cursor-pointer">
            <h4 class="mb-2 text-xl font-semibold text-dark">Brand</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="brand in brands"
                :key="brand"
                class="p-2 border rounded-md cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.brand === brand,
                  'bg-gray-100 text-black': filters.brand !== brand,
                }"
                @click="applyFilter('brand', brand)"
              >
                {{ brand }}
              </li>
              <li
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.brand === '',
                  'bg-gray-100 text-black': filters.brand !== '',
                }"
                @click="applyFilter('brand', '')"
              >
                All Brands
              </li>
            </ul>
          </div>

          <div class="px-2 py-4 mb-4 border rounded-md cursor-pointer">
            <h4 class="mb-2 text-xl font-semibold text-dark">Color</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="color in colors"
                :key="color"
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.color === color,
                  'bg-gray-100 text-black': filters.color !== color,
                }"
                @click="applyFilter('color', color)"
              >
                {{ color }}
              </li>
              <li
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.color === '',
                  'bg-gray-100 text-black': filters.color !== '',
                }"
                @click="applyFilter('color', '')"
              >
                All Colors
              </li>
            </ul>
          </div>

          <div class="px-2 py-4 mb-4 border rounded-md cursor-pointer">
            <h4 class="mb-2 text-xl font-semibold text-dark">Vendor</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="vendor in vendors"
                :key="vendor"
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.vendor === vendor,
                  'bg-gray-100 text-black': filters.vendor !== vendor,
                }"
                @click="applyFilter('vendor', vendor)"
              >
                {{ vendor }}
              </li>
              <li
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.vendor === '',
                  'bg-gray-100 text-black': filters.vendor !== '',
                }"
                @click="applyFilter('vendor', '')"
              >
                All Vendors
              </li>
            </ul>
          </div>

          <div class="px-2 py-4 mb-4 border rounded-md cursor-pointer">
            <h4 class="mb-2 text-xl font-semibold text-dark">Rating</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="rating in ratings"
                :key="rating"
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.rating == rating,
                  'bg-gray-100 text-black': filters.rating != rating,
                }"
                @click="applyFilter('rating', rating)"
              >
                {{ rating }} Stars
              </li>
              <li
                class="p-2 border rounded cursor-pointer"
                :class="{
                  'bg-primary text-white': filters.rating === '',
                  'bg-gray-100 text-black': filters.rating !== '',
                }"
                @click="applyFilter('rating', '')"
              >
                All Ratings
              </li>
            </ul>
          </div>

          <button
            @click="resetFilters"
            :disabled="!isFilterActive"
            class="w-full p-2 text-white rounded bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset Filters
          </button>
        </div>
        <!-- Products Section -->
        <div class="col-span-12 lg:col-span-9">
          <div
            class="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <ProductCard
              v-for="product in paginatedProducts"
              :key="product.id"
              :product="product"
            />
          </div>
          <!-- Pagination -->
          <Paginator
            v-if="
              filteredProducts.length > rows || filteredProducts.length === 0
            "
            :rows="rows"
            :totalRecords="filteredProducts.length"
            :first="first"
            @page="onPageChange"
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            class="py-8"
          >
            <template #FirstPageLink="{ disabled }">
              <button
                class="p-2 text-gray-600 hover:text-black focus:outline-none"
                :class="{ 'cursor-not-allowed opacity-50': disabled }"
                :disabled="disabled"
                @click="onPageChange({ first: 0 })"
              >
                <Icon icon="mdi:chevron-double-left" class="w-5 h-5" />
              </button>
            </template>
            <template #PrevPageLink="{ disabled }">
              <button
                class="p-2 text-gray-600 hover:text-black focus:outline-none"
                :class="{ 'cursor-not-allowed opacity-50': disabled }"
                :disabled="disabled"
                @click="onPageChange({ first: first - rows })"
              >
                <Icon icon="mdi:chevron-left" class="w-5 h-5" />
              </button>
            </template>
            <template #NextPageLink="{ disabled }">
              <button
                class="p-2 text-gray-600 hover:text-black focus:outline-none"
                :class="{ 'cursor-not-allowed opacity-50': disabled }"
                :disabled="disabled"
                @click="onPageChange({ first: first + rows })"
              >
                <Icon icon="mdi:chevron-right" class="w-5 h-5" />
              </button>
            </template>
            <template #LastPageLink="{ disabled }">
              <button
                class="p-2 text-gray-600 hover:text-black focus:outline-none"
                :class="{ 'cursor-not-allowed opacity-50': disabled }"
                :disabled="disabled"
                @click="
                  onPageChange({
                    first: Math.floor(filteredProducts.length / rows) * rows,
                  })
                "
              >
                <Icon icon="mdi:chevron-double-right" class="w-5 h-5" />
              </button>
            </template>
            <template #PageLinks="{ page, className }">
              <span
                :class="[
                  className,
                  'p-2 cursor-pointer',
                  {
                    'bg-green-100 rounded-full': page === first / rows + 1,
                    'text-green-700': page === first / rows + 1,
                    'hover:text-black': page !== first / rows + 1,
                  },
                ]"
                @click="onPageChange({ first: (page - 1) * rows })"
              >
                {{ page }}
              </span>
            </template>
          </Paginator>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.custom-range {
  @apply w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer;
}

.custom-range::-webkit-slider-thumb {
  @apply w-5 h-5 bg-primary rounded-full cursor-pointer;
  -webkit-appearance: none;
  appearance: none;
}

.custom-range::-moz-range-thumb {
  @apply w-5 h-5 bg-primary rounded-full cursor-pointer;
}
</style>
