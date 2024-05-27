<template>
  <div class="w-full p-4 rounded-md">
    <div class="text-center lg:text-left">
      <h2 class="mb-4 text-3xl font-bold">Log in to Exclusive</h2>
      <p class="mt-6 text-base font-medium text-black">
        Enter your details below
      </p>
      <form @submit.prevent="handleSubmit" class="pt-6 text-center lg:text-left">
        <InputField
          id="email"
          type="email"
          placeholder="Email or Phone Number"
          v-model="email"
          dynamicClass="w-full xl:w-1/2 lg:w-full md:w-3/4 mt-4 border-b border-gray-300 p-4 bg-transparent focus:outline-none"
        />
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          dynamicClass="w-full xl:w-1/2 lg:w-full md:w-3/4 mt-4 border-b border-gray-300 p-4 bg-transparent focus:outline-none"
        />
        <div class="flex flex-col items-center justify-between w-full gap-2 lg:mx-0 xl:w-1/2 lg:w-full md:flex-row md:w-4/5 md:mx-auto">
         
          <Button type="submit" @click="submit" class="w-full py-4 mb-0 text-white rounded-md lg:w-3/6 md:w-3/5 bg-primary hover:bg-danger">Login</Button>

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
