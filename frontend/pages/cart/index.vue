<template>
  <NuxtLayout name="home">
    <div class="container min-h-screen p-4 mx-auto">
      <div class="w-full mb-4 lg:mb-0">
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr class="text-sm">
                <th class="px-6 py-3 text-left">Product</th>
                <th class="px-6 py-3 text-left">Price</th>
                <th class="px-6 py-3 text-left">Quantity</th>
                <th class="px-6 py-3 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody class="text-sm font-light text-gray-600">
              <tr
                v-for="item in cartItems"
                :key="item.id"
                class="border-b border-gray-200 hover:bg-gray-100"
              >
                <td
                  class="relative flex items-center px-6 py-3 text-left whitespace-nowrap"
                >
                  <img
                    :src="item.image"
                    alt="product image"
                    class="w-16 h-16 mr-4 rounded-md"
                  />

                  <Icon
                    name="material-symbols:close"
                    class="absolute w-4 h-4 text-white bg-red-500 rounded-full cursor-pointer left-6 top-3 hover:text-red-700 hover:bg-white"
                    @click="removeItem(item.id)"
                  />

                  <div>{{ item.name }}</div>
                </td>
                <td class="px-6 py-3 text-left">
                  {{ formatPrice(item.price) }}
                </td>
                <td class="px-6 py-3 text-left">
                  <input
                    type="number"
                    class="w-16 p-2 border rounded"
                    v-model="item.quantity"
                    min="1"
                  />
                </td>
                <td class="px-6 py-3 text-left">
                  {{ formatPrice(item.price * item.quantity) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between mt-8">
          <Button
            class="w-48 !text-black bg-transparent border border-dark hover:bg-gray hover:!text-white"
            @click="updateCart"
          >
            Return To Shop
          </Button>

          <Button
            class="w-48 !text-black bg-transparent border border-dark hover:bg-gray hover:!text-white"
          >
            Update Cart
          </Button>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 mt-8">
        <div class="flex flex-col col-span-12 gap-4 md:flex-row md:col-span-7">
          <div>
            <InputField
              type="text"
              placeholder="Coupon Code"
              dynamicClass="w-72 text-black px-4 py-4 border border-dark rounded-md bg-[#F5F5F5] focus:outline-none"
              v-model="couponCode"
            />
          </div>
          <div>
            <Button
              class="w-40 p-2 text-white bg-red-500 rounded md:w-auto"
              @click="applyCoupon"
            >
              Apply Coupon
            </Button>
          </div>
        </div>
        <div
          class="col-span-12 p-4 border border-black rounded-md md:col-span-5"
        >
          <h2 class="mb-4 text-xl">Cart Total</h2>
          <div class="flex justify-between mb-2 border-b border-black">
            <span>Subtotal</span>
            <span class="mb-3">{{ formatPrice(cartSubtotal) }}</span>
          </div>
          <div class="flex justify-between mb-2 border-b border-black">
            <span>Shipping</span>
            <span class="mb-3">Free</span>
          </div>
          <div class="flex justify-between">
            <span>Total</span>
            <span class="mb-3">{{ formatPrice(cartSubtotal) }}</span>
          </div>
          <div class="text-center">
            <Button class="w-full mt-4 text-white md:w-52">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { computed, ref } from "vue";

import Button from "~/composables/reuseable/Button/Button.vue";
import InputField from "~/composables/reuseable/InputField/InputField.vue";

const cartItems = ref([
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: "/images/shoe.png",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    image: "/images/jacket.png",
  },
]);

const couponCode = ref("");

const cartSubtotal = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const formatPrice = (value) => {
  return `$${value.toFixed(2)}`;
};

const updateCart = () => {
  alert("Cart updated successfully");
};

const applyCoupon = () => {
  alert("Coupon applied successfully");
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};
</script>

<style scoped>
.text-danger {
  color: red;
}

html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
