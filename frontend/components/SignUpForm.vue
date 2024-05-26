<template>
  <div class="w-full p-4 rounded-md">
    <div class="">
      <h2 class="mb-4 text-3xl font-bold">Create an account</h2>
      <p class="mt-6 text-base font-medium text-dark">
        Enter your details below
      </p>
      <form @submit.prevent="handleSubmit" class="pt-6">
        <InputField
          id="name"
          placeholder="Name"
          v-model="name"
          dynamicClass=" w-full lg:w-1/2 my-4 border-b border-gray-300 p-4 bg-transparent focus:outline-none"
        />
        <InputField
          id="email"
          type="email"
          placeholder="Email or Phone Number"
          v-model="email"
          dynamicClass="w-full lg:w-1/2 border-b border-gray-300 p-4 bg-transparent focus:outline-none"
        />
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          dynamicClass="w-full lg:w-1/2 border-b border-gray-300 p-4 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          class="w-full py-4 mb-4 text-white rounded-md lg:w-1/2 bg-primary hover:bg-danger"
        >
          Create Account
        </button>
        <div class="flex flex-col">
          <button
            type="button"
            class="w-full py-4 mb-4 border border-gray-300 rounded-md lg:w-1/2 hover:bg-gray-100"
            @click="signUpWithGoogle"
          >
            <Icon name="logos:google-icon" class="w-5 h-5 mr-4" />
            Sign up with Google
          </button>
          <div class="">
            <p class="w-full text-center lg:w-1/2">
              Already have an account?
              <router-link
                to="/login"
                class="text-black underline hover:underline"
                >Log in</router-link
              >
            </p>
          </div>
        </div>
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
