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
              <h1 class="font-bold text-xl" v-if="block.data.level === 1">{{ block.data.text }}</h1>
              <h2 class="font-bold text-lg" v-else-if="block.data.level === 2">{{ block.data.text }}</h2>
              <h3 class="font-bold text-md" v-else-if="block.data.level === 3">{{ block.data.text }}</h3>
              <h4 class="font-bold text-sm" v-else-if="block.data.level === 4">{{ block.data.text }}</h4>
              <h5 class="font-bold text-xs" v-else-if="block.data.level === 5">{{ block.data.text }}</h5>
              <h6 class="font-bold text-xs" v-else-if="block.data.level === 6">{{ block.data.text }}</h6>
            </template>
            <p
              v-else-if="block.type === 'paragraph'"
              v-html="block.data.text"
            ></p>
            <ol class="mb-3 list-decimal pl-6"
              v-else-if="
                block.type === 'list' && block.data.style === 'ordered'
              "
            >
              <li class="mb-1" v-for="(item, index) in block.data.items" :key="index">
                {{ item }}
              </li>
            </ol>
            <ul class="mb-3 list-disc pl-6"
              v-else-if="
                block.type === 'list' && block.data.style === 'unordered'
              "
            >
              <li class="mb-1"  v-for="(item, index) in block.data.items" :key="index">
                {{ item }}
              </li>
            </ul>
            <table class="mb-3 list-disc pl-6 table w-full table-auto border-collapse border border-slate-400" v-else-if="block.type === 'table'">
              <tr class="mb-1" v-for="(row, index) in block.data.content" :key="index">
                <td class="border border-slate-300 py-1 px-3" v-for="(cell, index) in row" :key="index">{{ cell }}</td>
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
      <TabPanel  header="Comments (9+)" :pt="customTabStyle">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
          sed quia non numquam eius modi.
        </p>
      </TabPanel>
       <TabPanel header="QA" :pt="customTabStyle">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
          sed quia non numquam eius modi.
        </p>
      </TabPanel>
    </TabView>
  </div>
</template>


<style>
 .producttab{
  background-color: aqua !important;
}
</style>