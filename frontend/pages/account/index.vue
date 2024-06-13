<script setup>
import Breadcrumb from "~/composables/reuseable/Breadcrumb/Breadcrumb.vue";
import ContactInputField from "~/composables/reuseable/InputField/ContactInputField.vue";
const crumbs = [{ name: "Home", link: "/" }, { name: " Acocunt" }];

const fName = "Mustak"; 
const lName = "Ahmed"; 
const email = "ahmedmusta@gmail.com"; 
const address = "Rajshahi Bangladesh"; 
</script>

<template>
  <!-- about us banner -->
  <NuxtLayout name="home">
    <div class="xl:px-36 px-4 mb-20 w-full">
      <div class="flex justify-between items-center py-4">
        <Breadcrumb :crumbs="crumbs" />
        <div>
          <p>Welcome! <span class="text-primary">Mustak Ahmed</span></p>
        </div>
      </div>
      <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div class="md:col-span-4 col-span-12">
          <!-- profile sider bar -->
          <div>
            <h2 class="font-semibold text-sm mb-4">Manage My Account</h2>
            <ul class="ps-4">
              <li class="mb-2">
                <a href="#" class="text-primary">My Profile</a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-gray-500">Address Book</a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-gray-500">My Payment Options</a>
              </li>
            </ul>

            <h2 class="font-semibold text-sm mt-6 mb-4">My Orders</h2>
            <ul class="ps-4">
              <li class="mb-2">
                <a href="#" class="text-gray-500">My Returns</a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-gray-500">My Cancellations</a>
              </li>
            </ul>

            <h2 class="font-semibold text-sm mt-6 mb-4">My WishList</h2>
          </div>
        </div>
        <div class="md:col-span-8 col-span-12">
          <div class="shadow p-6 rounded">
            <h2 class="text-lg text-primary font-semibold mb-4">
              Edit Your Profile
            </h2>
            <div class="grid md:grid-cols-12 grid-cols-1 gap-x-6">
              <div class="md:col-span-6 col-span-12">
                <ContactInputField
                  type="text"
                  label="First Name"
                  v-model="fName"
                  value="Md"
                />
              </div>
              <div class="md:col-span-6 col-span-12">
                <ContactInputField
                  type="text"
                  label="Last Name"
                  v-model="lName"
                />
              </div>
              <div class="md:col-span-6 col-span-12">
                <ContactInputField type="email" label="Email" v-model="email" />
              </div>
              <div class="md:col-span-6 col-span-12">
                <ContactInputField
                  type="text"
                  label="Address"
                  v-model="address"
                />
              </div>
            </div>
            <ContactInputField
              type="password"
              label="Password Changes"
              v-model="password"
              placeholder="Current Password"
            />
            <ContactInputField
              type="password"
              v-model="password"
              placeholder="New Password"
            />
            <ContactInputField
              type="password"
              v-model="password"
              placeholder="Confirm Password"
            />
            <div class="text-end md:mt-4 space-x-2">
              <button>Cancel</button>
              <button
                type="button"
                class="focus:outline-none text-white bg-primary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
