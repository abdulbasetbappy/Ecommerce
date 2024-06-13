<template>
  <NuxtLayout name="home">
    <div class="container min-h-screen p-4 mx-auto">
      <div class="py-2 text-left">
        <Breadcrumb :crumbs="crumbs" />
      </div>
      <div class="w-full mb-4 lg:mb-4">
        <div class="overflow-x-auto">
          <table class="hidden min-w-full p-8 sm:table" style="border-spacing: 0 1rem;">
            <thead class="border custom-row-gap">
              <tr class="text-sm">
                <th class="px-6 py-3 text-left">Product</th>
                <th class="px-6 py-3 text-left">Price</th>
                <th class="px-6 py-3 text-left">Quantity</th>
                <th class="px-6 py-3 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody class="text-sm font-light text-gray-600 custom-row-gap">
              <tr
                v-for="item in cartItems"
                :key="item.id"
                class="border hover:bg-gray-100"
              >
                <td class="relative flex items-center px-6 py-3 text-left">
                  <img
                    :src="item.image"
                    alt="product image"
                    class="w-16 h-16 mr-4 rounded-md"
                  />

                  <Icon
                    name="material-symbols:close"
                    class="absolute w-4 h-4 text-white rounded-full cursor-pointer bg-primary left-9 top-7 hover:text-primary hover:bg-white"
                    @click="removeItem(item.id)"
                  />

                  <div class="font-bold">{{ item.name }}</div>
                </td>
                <td class="px-6 py-3 font-bold text-left">
                  {{ formatPrice(item.price) }}
                </td>
                <td class="px-6 py-3 font-bold text-left">
                  <input
                    type="number"
                    class="w-16 p-2 border rounded"
                    v-model="item.quantity"
                    min="1"
                  />
                </td>
                <td class="px-6 py-3 font-bold text-left">
                  {{ formatPrice(item.price * item.quantity) }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="block sm:hidden">
            <div v-for="item in cartItems" :key="item.id" class="pb-4 mb-4 border-b">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="item.image" alt="product image" class="w-16 h-16 mr-4 rounded-md" />
                  <div class="font-bold">{{ item.name }}</div>
                </div>
                <Icon
                  name="material-symbols:close"
                  class="w-4 h-4 text-white rounded-full cursor-pointer bg-primary hover:text-primary hover:bg-white"
                  @click="removeItem(item.id)"
                />
              </div>
              <div class="mt-2">
                <div class="flex justify-between">
                  <div>Price:</div>
                  <div class="font-bold">{{ formatPrice(item.price) }}</div>
                </div>
                <div class="flex justify-between mt-2">
                  <div>Quantity:</div>
                  <input
                    type="number"
                    class="w-16 p-2 border rounded"
                    v-model="item.quantity"
                    min="1"
                  />
                </div>
                <div class="flex justify-between mt-2">
                  <div>Subtotal:</div>
                  <div class="font-bold">{{ formatPrice(item.price * item.quantity) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-8">
          <Button
            class="lg:w-48 !text-black bg-transparent border border-dark hover:bg-gray hover:!text-white"
            @click="updateCart"
          >
            Return To Shop
          </Button>

          <Button
            class="lg:w-48 !text-black bg-transparent border border-dark hover:bg-gray hover:!text-white"
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
              class="w-40 p-2 text-white rounded bg-primary md:w-auto"
              @click="applyCoupon"
            >
              Apply Coupon
            </Button>
          </div>
        </div>
        <div
          class="col-span-12 p-6 space-y-4 border border-black rounded-md md:col-span-5"
        >
          <h2 class="mb-4 text-xl font-bold">Cart Total</h2>
          <div class="flex justify-between mb-2 font-bold border-b border-black">
            <span>Subtotal</span>
            <span class="mb-3">{{ formatPrice(cartSubtotal) }}</span>
          </div>
          <div class="flex justify-between mb-2 font-bold border-b border-black">
            <span>Shipping</span>
            <span class="mb-3">Free</span>
          </div>
          <div class="flex justify-between font-bold">
            <span>Total</span>
            <span class="mb-3">{{ formatPrice(cartSubtotal) }}</span>
          </div>
          <div class="text-center">
           <NuxtLink to="/checkout">
             <Button class="w-full mt-4 text-white md:w-52">
              Proceed to Checkout
            </Button>
           </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<script setup>
import { computed, ref } from "vue";
import Breadcrumb from "~/composables/reuseable/Breadcrumb/Breadcrumb.vue";
import Button from "~/composables/reuseable/Button/Button.vue";
import InputField from "~/composables/reuseable/InputField/InputField.vue";
const crumbs = [{ name: "Home", link: "/" }, { name: " Cart" }];

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

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}




.custom-row-gap tr {
 
  margin-bottom: 1rem; /* Adjust this value as needed */
}

.custom-row-gap td,.custom-row-gap th {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
}

</style>
