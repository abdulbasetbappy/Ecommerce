<script setup>
import { Title } from "~/node_modules/nuxt/dist/head/runtime/components";

const manageAccount = [
  {
    menu: "My Profile",
    link: "/account",
  },
  {
    menu: "Address Book",
    link: "#",
  },
  {
    menu: "My Payment Options",
    link: "#",
  },
];
const orders = [
  {
    menu: "All Orders",
    link: "/account/order",
  },
  {
    menu: "My Returns",
    link: "#",
  },
  {
    menu: "My Cancellations",
    link: "#",
  },
];
</script>

<template>
  <div>
    <h2 class="font-semibold text-sm mb-4">Manage My Account</h2>
    <ul class="ps-4">
      <li class="mb-2" v-for="(account, index) in manageAccount" :key="index">
        <NuxtLink
          :to="account.link"
          :class="{ 'text-primary': $route.path === account.link }"
        >
          {{ account.menu }}
        </NuxtLink>
      </li>
    </ul>

    <h2 class="font-semibold text-sm mt-6 mb-4">My Orders</h2>
   <ul class="ps-4">
      <li class="mb-2" v-for="(order, index) in orders" :key="index">
        <NuxtLink
          :to="order.link"
          :class="{ 'text-primary': $route.path === order.link }"
        >
          {{ order.menu }}
        </NuxtLink>
      </li>
    </ul>


    <h2 class="font-semibold text-sm mt-6 mb-4">My WishList</h2>
  </div>
</template>
<style scoped>
.word {
  color: red;
}
</style>
