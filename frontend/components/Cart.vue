<template>
  <div>
    <div class="flex items-center justify-between px-4 py-2 bg-red-200">
      <span class="text-sm">Shop 400 more and save 10 fee</span>
      <span class="text-primary">19</span>
    </div>
    <div class="px-4 py-2 express-delivery bg-light">
      <p class="font-bold">
        <Icon name="iconoir:delivery-truck" class="w-6 h-6" /> Express Delivery
      </p>
    </div>
    <div class="p-4 cart-items">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex items-center py-2 border-b cart-item"
      >
        <img :src="item.image" :alt="item.name" class="w-20 h-20 mr-4" />
        <div class="flex-grow item-details">
          <p class="text-sm pe-4">{{ item.name }}</p>
          <div class="flex items-center mt-2">
            <button
              @click="decrementQuantity(item)"
              class="px-2 border rounded-l"
            >
              <svg
                class="w-4 h-6 text-gray-800 dark:text-white"
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
                  d="M5 12h14"
                />
              </svg>
            </button>
            <input
              type="number"
              v-model.number="item.quantity"
              min="1"
              class="w-10 text-center border-t border-b"
              @input="updateQuantity(item.id, item.quantity)"
            />
            <button
              @click="incrementQuantity(item)"
              class="px-2 border rounded-r"
            >
              <svg
                class="w-4 h-6 text-gray-800 dark:text-white"
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
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="item-quantity">
          <p class="text-sm">
            <span class="block">{{
              (item.price * item.quantity).toFixed(2)
            }}</span>
            <span
              v-if="item.oldPrice"
              class="block text-gray-500 line-through"
              >{{ (item.oldPrice * item.quantity).toFixed(2) }}</span
            >
          </p>
        </div>
        <button @click="removeItem(item.id)" class="ml-2 text-lg text-primary">
          <Icon class="w-6 h-6" name="charm:cross" />
        </button>
      </div>
    </div>
    <div
      class="absolute bottom-0 flex items-center justify-center w-full p-4 order-summary"
    >
      <NuxtLink to="/cart"  class="w-3/4 py-2 text-white bg-yellow-400 ps-4 pe-8">
        Order Place
      </NuxtLink>

      <span class="px-4 py-2 font-bold text-white bg-yellow-600">{{
        totalPrice.toFixed(2)
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const cartItems = ref([
  {
    id: 1,
    name: "Mens Cotton Jacket",
    price: 55.99,
    oldPrice: 55.99,
    quantity: 1,
    image: "images/gamepad.png",
  },
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    oldPrice: 66.9,
    quantity: 3,
    image: "images/perfume.png",
  },
]);

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

const totalPrice = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});



const incrementQuantity = (item) => {
  item.quantity++;
  updateQuantity(item.id, item.quantity);
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    updateQuantity(item.id, item.quantity);
  }
};
</script>
