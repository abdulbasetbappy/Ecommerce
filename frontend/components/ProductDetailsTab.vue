<script setup>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

const oldData = ref(null);
onBeforeMount(async () => {
  try {
    await fetch("/api/jsonEditor")
      .then((response) => response.json())
      .then((data) => {
        oldData.value = data;
      });
  } catch (err) {
    console.log(err);
  }
});

const customTabStyle = ref({
  headerTitle: {
    class: "text-dark",
  },

  headerAction: {
    class: "text-black",
  },
});
</script>

<template>
  <div>
    <TabView class="producttab mt-16">
      <TabPanel header="Product Details" :pt="customTabStyle">
        <template v-if="oldData">
          <div
            class="w-full"
            v-for="(block, index) in oldData.blocks"
            :key="block.id"
          >
            <!-- Render different block types -->
            <template v-if="block.type === 'header'">
              <h1 class="font-bold text-xl" v-if="block.data.level === 1">
                {{ block.data.text }}
              </h1>
              <h2 class="font-bold text-lg" v-else-if="block.data.level === 2">
                {{ block.data.text }}
              </h2>
              <h3 class="font-bold text-md" v-else-if="block.data.level === 3">
                {{ block.data.text }}
              </h3>
              <h4 class="font-bold text-sm" v-else-if="block.data.level === 4">
                {{ block.data.text }}
              </h4>
              <h5 class="font-bold text-xs" v-else-if="block.data.level === 5">
                {{ block.data.text }}
              </h5>
              <h6 class="font-bold text-xs" v-else-if="block.data.level === 6">
                {{ block.data.text }}
              </h6>
            </template>
            <p
              v-else-if="block.type === 'paragraph'"
              v-html="block.data.text"
            ></p>
            <ol
              class="mb-3 list-decimal pl-6"
              v-else-if="
                block.type === 'list' && block.data.style === 'ordered'
              "
            >
              <li
                class="mb-1"
                v-for="(item, index) in block.data.items"
                :key="index"
              >
                {{ item }}
              </li>
            </ol>
            <ul
              class="mb-3 list-disc pl-6"
              v-else-if="
                block.type === 'list' && block.data.style === 'unordered'
              "
            >
              <li
                class="mb-1"
                v-for="(item, index) in block.data.items"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
            <table
              class="mb-3 list-disc pl-6 table w-full table-auto border-collapse border border-slate-400"
              v-else-if="block.type === 'table'"
            >
              <tr
                class="mb-1"
                v-for="(row, index) in block.data.content"
                :key="index"
              >
                <td
                  class="border border-slate-300 py-1 px-3"
                  v-for="(cell, index) in row"
                  :key="index"
                >
                  {{ cell }}
                </td>
              </tr>
            </table>
            <iframe
              v-else-if="block.type === 'Embed'"
              :src="block.data.embed"
              :width="block.data.width"
              :height="block.data.height"
              frameborder="0"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            >
            </iframe>
          </div>
        </template>
        <template v-else>
          <!-- Placeholder or loading message when oldData is null -->
          <p>Loading...</p>
        </template>
      </TabPanel>
      <!-- comment -->
      <TabPanel header="Comments (9+)" :pt="customTabStyle">
        <div class="mt-4">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div class="ml-4">
              <h4 class="font-bold">Customer 1</h4>
              <div class="flex">
                <span v-for="i in 5" :key="i" class="text-yellow-500"
                  >&#9733;</span
                >
              </div>
            </div>
          </div>
          <p class="mt-4 text-gray-700">
            প্রিমিয়াম কোয়ালিটি টি-শার্ট: তৈরিকৃত এবং সংহততার জন্য উচ্চ
            কাঁচামালের ব্যবহার করে নির্মিত ক্লাসিক ডিজাইন। সাধারণত খুবই ভাল খাবে
            সতর্কতা বিভিন্ন অনুষ্ঠান, সান্ধ্য বেড়াতে প্রিয় টি-শার্ট।...
            <NuxtLink class="cursor-pointer">See More</NuxtLink>
          </p>
        </div>
      </TabPanel>
      <!-- QA -->
      <TabPanel header="QA" :pt="customTabStyle">
        <div>
          <h2 class="text-lg font-semibold bg-gray-300 py-2 ps-4">Premium Polo T-Shirt</h2>
          <ul class="list-disc ps-12 py-4 space-y-2 bg-gray-100 ">
            <li>
              <span class="font-semibold">প্রিমিয়াম পোলো টি-শার্ট:</span>
              দৈর্ঘ্যপ্রীতি এবং সহজতা জন্য উচ্চ গুণমানের উপাদান ব্যবহার করে
              নির্মিত।
            </li>
            <li>
              <span class="font-semibold">ক্লাসিক ডিজাইন:</span> সাধারণ ঘুরে
              দেখা যাবে সমস্ততা বিভিন্ন অনুষ্ঠান, সাধারণ বেড়াতে প্রস্তুতি মুক্ত
              স্টাইল।
            </li>
          </ul>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<style>
.producttab {
  background-color: aqua !important;
}
</style>
