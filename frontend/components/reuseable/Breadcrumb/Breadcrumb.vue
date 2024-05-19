<template>
    <nav class="text-sm mb-14 mt-14">
      <ol class="flex gap-3 font-semibold text-black list-reset">
        <li v-for="(crumb, index) in crumbs" :key="index">
          <span v-if="index !== 0">  / </span>
          <span v-if="crumb.link">
            <NuxtLink :to="crumb.link" class="text-gray-500 hover:underline">{{ crumb.name }}</NuxtLink>
          </span>
          <span v-else>{{ crumb.name }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  defineProps({
    crumbs: {
      type: Array,
      required: true,
      default: () => []
    }
  });
  </script>
  
