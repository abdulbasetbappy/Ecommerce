<template>
  <div class="flex p-4 rounded-md md:w-auto lg:h-screen">
    <div class="">
      <h2 class="mb-4 text-3xl font-bold">Log in to Exclusive</h2>
      <p class="mt-6 text-base font-medium text-black">
        Enter your details below
      </p>
      <form @submit.prevent="handleSubmit" class="mt-12">
        <InputField
          id="email"
          type="email"
          label="Email or Phone Number"
          placeholder="Email or Phone Number"
          v-model="email"
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          v-model="password"
        />
        <div class="flex items-center justify-between gap-4 pt-10">
          <!-- <button
            type="submit"
            class="w-32 py-4 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Login
          </button> -->
          <Button type="submit" @click="submit" btnclass="w-32">Login</Button>

          <p class="text-red-500">Forget Password</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "~/composables/reuseable/Button/Button.vue";
import InputField from "~/composables/reuseable/InputField/InputField.vue";

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const handleSubmit = () => {
  // Add form submission logic here
  console.log("Form submitted", {
    email: email.value,
    password: password.value,
  });
};
</script>
