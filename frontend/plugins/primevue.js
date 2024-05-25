// plugins/primevue.js
import { defineNuxtPlugin } from "#app";
import "primeicons/primeicons.css";
import Carousel from "primevue/carousel";
import PrimeVue from "primevue/config";
import Rating from "primevue/rating";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.component("Carousel", Carousel);
  nuxtApp.vueApp.component("Rating", Rating);
});
