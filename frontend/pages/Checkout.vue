<script setup>
import Select from 'primevue/select';
import { ref, computed } from "vue";
import ContactInputField from "~/composables/reuseable/InputField/ContactInputField.vue";

const crumbs = [
  { name: "Account", link: "/account" },
  { name: "My Account", link: "/my_account" },
  { name: "Product", link: "/product" },
  { name: "View Cart", link: "/view_cart" },
  { name: "Checkout" },
];

const items = ref([
  {
    id: 1,
    name: "LCD Monitor",
    image: "https://via.placeholder.com/50",
    price: 650,
  },
  {
    id: 2,
    name: "Keyboard",
    image: "https://via.placeholder.com/50",
    price: 150,
  },
]);

const methods = ref([
  {
    src: "/images/Bkash.png",
    alt: "Bkash",
  },
  {
    src: "/images/Nagad.png",
    alt: "Nagad",
  },
  {
    src: "/images/Mastercard.png",
    alt: "Mastercard",
  },
  {
    src: "/images/Visa.png",
    alt: "Visa",
  },
]);

const shippingCost = ref(0); // Shipping is free

const subtotal = computed(() => {
  return items.value.reduce((acc, item) => acc + item.price, 0);
});

const total = computed(() => {
  return subtotal.value + shippingCost.value;
});


const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
  <!-- about us banner -->
  <NuxtLayout name="home">
    <div class="lg:px-56 px-4 mb-20 w-full">
      <div class="text-left py-4">
        <Breadcrumb :crumbs="crumbs" />
      </div>

      <!-- delivery info -->
      <div class="grid md:grid-cols-12 grid-cols-1 gap-16">
        <div class="md:col-span-6 col-span-12">

 <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
    </div>

          <ContactInputField
            type="text"
            label="Your Name"
            id="name"
            v-model="name"
            class="mb-4"
          />

          <ContactInputField
            type="email"
            label="Your Email"
            id="email"
            v-model="email"
            class="mb-4"
          />
          <ContactInputField
            type="number"
            label="Phone Number*"
            id="phone-number"
            v-model="phoneNumber"
            class="mb-4"
          />

          <ContactInputField
            type="text"
            label="Street Address *"
            id="street-address"
            v-model="streetAddress"
            class="mb-4"
          />
          <ContactInputField
            type="text"
            label="Apartment, floor, etc. (optional)"
            id="apartment"
            v-model="apartment"
            class="mb-4"
          />
          <!-- select Thana -->
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select an Thana</label
          >
          <select
            id="countries"
            filter
            class="bg-gray-50 mb-4 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
          >
            <option selected>Choose a Thana</option>
            <option value="US">Airport</option>
            <option value="CA">Uttora</option>
            <option value="FR">Mirput</option>
            <option value="DE">Gulshan</option>
          </select>
          <!-- select District -->
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select an District</label
          >
          <select
            id="countries"
            class="bg-gray-50 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-4 focus:outline-none"
          >
            <option selected>Choose a District</option>
            <option value="US">Rajshahi</option>
            <option value="CA">Dhaka</option>
            <option value="FR">Khulna</option>
            <option value="DE">Rangpur</option>
          </select>

          <!-- select country -->
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select an Country</label
          >
          <select
            id="countries"
            class="bg-gray-50 mb-4 text-gray-900 text-sm rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <div class="flex items-center dark:border-gray-700">
            <input
              checked
             
              type="checkbox"
              value=""
             
              class="w-4 h-4"
            />
            <label
              class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Save this information for faster check-out next time
            </label>
          </div>






        </div>

        <!-- payment info -->
        <div class="md:col-span-6 col-span-12">
          <div class="p-6 space-y-4">
            <div
              v-for="item in items"
              :key="item.id"
              class="flex items-center justify-between space-x-4"
            >
              <div class="flex items-center gap-4">
                <img :src="item.image" :alt="item.name" class="w-16 h-16" />
                <h3 class="text-lg font-medium">{{ item.name }}</h3>
              </div>
              <div>
                <p>${{ item.price }}</p>
              </div>
            </div>

            <div class="pt-4">
              <div class="flex justify-between border-b-[2px] py-2">
                <p>Subtotal:</p>
                <p>${{ subtotal }}</p>
              </div>
              <div class="flex justify-between border-b-[2px] py-2">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div class="flex justify-between font-bold py-2">
                <p>Total:</p>
                <p>${{ total }}</p>
              </div>
            </div>
            <!-- bank payment -->
            <div class="flex justify-between">
              <div>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    class="form-radio"
                  />
                  <span class="ml-2">Bank</span>
                </label>
              </div>
              <div class="flex gap-4">
                <p
                  v-for="(method, index) in methods"
                  :key="index"
                  class="curser-pointer"
                >
                  <img class="w-auto" :src="method.src" :alt="method.alt" />
                </p>
              </div>
            </div>
            <!-- cash on delivery -->

            <div>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  class="form-radio"
                  checked
                />
                <span class="ml-2">Cash on delivery</span>
              </label>
            </div>
            <div class="flex space-x-2">
              <input
                type="text"
                placeholder="Coupon Code"
                class="form-input flex-1 border px-4 bg-light focus:outline-none rounded"
              />
              <button class="bg-red-500 text-white px-4 py-2 rounded">
                Apply Coupon
              </button>
            </div>
            <button class="w-full bg-red-500 text-white px-4 py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.checked-bg-primary:checked {
  background-color: red !important; /* Replace this with your desired primary color */
}
</style>
