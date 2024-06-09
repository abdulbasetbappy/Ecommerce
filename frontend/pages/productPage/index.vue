<script setup>
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
    brand: "Apple",
    color: "Green",
    vendor: "Vendor4",
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
  },
]);
const filters = ref({
  brand: "",
  color: "",
  vendor: "",
  rating: "",
  price: "",
});
const brands = ref(["Apple", "Samsung", "Nokia"]);
const colors = ref(["Red", "Blue", "Green", "Yellow"]);
const vendors = ref(["Vendor1", "Vendor2", "Vendor3", "Vendor4"]);
const ratings = ref([1, 2, 3, 4, 5]);
const prices = ref([
  "$0-$100",
  "$101-$200",
  "$201-$300",
  "$301-$400",
  "$401-$500",
  "$501+",
]);

//wehn $ filters change
const checkPriceRange = (priceStr, range) => {
    const price = parseFloat(priceStr.replace('$', ''));
    const [min, max] = range.replace('$', '').split('-').map(Number);
  if (!max) return price >= min;
  return price >= min && price <= max;
};
//a

//make filters reactive
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    return (
      (!filters.value.brand || product.brand === filters.value.brand) &&
      (!filters.value.color || product.color === filters.value.color) &&
      (!filters.value.vendor || product.vendor === filters.value.vendor) &&
      (!filters.value.rating ||
        product.rating === parseInt(filters.value.rating)) &&
      (!filters.value.price ||
        checkPriceRange(product.price, filters.value.price))
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
    price: "",
    };
first.value = 0;
};

</script>
<template>
    <NuxtLayout name="home">
      <div class="w-full min-h-screen px-4 xl:px-36">
        <div>
          <Breadcrumb :crumbs="crumbs" />
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
          <!-- Filters Section -->
          <div class="col-span-12 lg:col-span-3">
            <h3 class="mb-4 text-xl text-dark">Filter by</h3>
            <div class="mb-4">
              <h4 class="mb-2 text-lg text-dark">Brand</h4>
              <select
                v-model="filters.brand"
                class="w-full p-2 border rounded"
                @change="applyFilter('brand', $event.target.value)"
              >
                <option value="">All Brands</option>
                <option v-for="brand in brands" :key="brand" :value="brand">
                  {{ brand }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <h4 class="mb-2 text-lg text-dark">Color</h4>
              <select
                v-model="filters.color"
                class="w-full p-2 border rounded"
                @change="applyFilter('color', $event.target.value)"
              >
                <option value="">All Colors</option>
                <option v-for="color in colors" :key="color" :value="color">
                  {{ color }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <h4 class="mb-2 text-lg text-dark">Vendor</h4>
              <select
                v-model="filters.vendor"
                class="w-full p-2 border rounded"
                @change="applyFilter('vendor', $event.target.value)"
              >
                <option value="">All Vendors</option>
                <option v-for="vendor in vendors" :key="vendor" :value="vendor">
                  {{ vendor }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <h4 class="mb-2 text-lg text-dark">Rating</h4>
              <select
                v-model="filters.rating"
                class="w-full p-2 border rounded"
                @change="applyFilter('rating', $event.target.value)"
              >
                <option value="">All Ratings</option>
                <option v-for="rating in ratings" :key="rating" :value="rating">
                  {{ rating }} Stars
                </option>
              </select>
            </div>
            <div class="mb-4">
              <h4 class="mb-2 text-lg text-dark">Price</h4>
              <select
                v-model="filters.price"
                class="w-full p-2 border rounded"
                @change="applyFilter('price', $event.target.value)"
              >
                <option value="">All Prices</option>
                <option v-for="price in prices" :key="price" :value="price">
                  {{ price }}
                </option>
              </select>
            </div>
            <button
              @click="resetFilters"
              class="w-full p-2 text-white rounded bg-primary"
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
              :rows="rows"
              :totalRecords="filteredProducts.length"
              :first="first"
              @page="onPageChange"
              template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
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
                  @click="onPageChange({ first: Math.floor(filteredProducts.length / rows) * rows })"
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
                      'bg-green-100 rounded-full': page === (first / rows + 1),
                      'text-green-700': page === (first / rows + 1),
                      'hover:text-black': page !== (first / rows + 1)
                    }
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
  
  

<!-- <style scoped>
.main-img {
  width: 710px;
}
</style> -->
