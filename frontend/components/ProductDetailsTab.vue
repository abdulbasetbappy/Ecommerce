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
    class: "text-red-500",
  },

  headerAction: {
    class: "text-black",
  },
 
});
</script>

<template>
  <div>
    <TabView class="producttab">
      <TabPanel header="Details producttab" :pt="customTabStyle">
        <template v-if="oldData">
          <div
            class="w-full"
            v-for="(block, index) in oldData.blocks"
            :key="block.id"
          >
            <!-- Render different block types -->
            <template v-if="block.type === 'header'">
              <h1 v-if="block.data.level === 1">{{ block.data.text }}</h1>
              <h2 v-else-if="block.data.level === 2">{{ block.data.text }}</h2>
              <h3 v-else-if="block.data.level === 3">{{ block.data.text }}</h3>
              <h4 v-else-if="block.data.level === 4">{{ block.data.text }}</h4>
              <h5 v-else-if="block.data.level === 5">{{ block.data.text }}</h5>
              <h6 v-else-if="block.data.level === 6">{{ block.data.text }}</h6>
            </template>
            <p
              v-else-if="block.type === 'paragraph'"
              v-html="block.data.text"
            ></p>
            <ol
              v-else-if="
                block.type === 'list' && block.data.style === 'ordered'
              "
            >
              <li v-for="(item, index) in block.data.items" :key="index">
                {{ item }}
              </li>
            </ol>
            <ul
              v-else-if="
                block.type === 'list' && block.data.style === 'unordered'
              "
            >
              <li v-for="(item, index) in block.data.items" :key="index">
                {{ item }}
              </li>
            </ul>
            <table v-else-if="block.type === 'table'">
              <tr v-for="(row, index) in block.data.content" :key="index">
                <td v-for="(cell, index) in row" :key="index">{{ cell }}</td>
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
      <TabPanel header="Feedback" :pt="customTabStyle">
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