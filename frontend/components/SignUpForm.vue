<template>
  <div class="flex p-4 rounded-md md:w-auto lg:h-screen">
    <div class="">
      <h2 class="mb-4 text-3xl font-bold">Create an account</h2>
      <p class="mt-6 text-base font-medium text-black">
        Enter your details below
      </p>
      <form @submit.prevent="handleSubmit" class="mt-12">
        <InputField id="name" label="Name" placeholder="Name" v-model="name" />
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
        <button
          type="submit"
          class="w-full py-4 mb-4 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Create Account
        </button>
        <button
          type="button"
          class="w-full py-4 mb-4 border border-gray-300 rounded-md hover:bg-gray-100"
          @click="signUpWithGoogle"
        >
          <Icon name="logos:google-icon" class="w-5 h-5 mr-4" />
          Sign up with Google
        </button>
        <p class="text-center">
          Already have an account?
          <router-link to="/login" class="text-black underline hover:underline"
            >Log in</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputField from "~/composables/reuseable/InputField/InputField.vue";

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const handleSubmit = () => {
  // Add form submission logic here
  console.log("Form submitted", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
};

const signUpWithGoogle = () => {
  // Add sign-up with Google logic here
  console.log("Sign up with Google");
};
</script>
