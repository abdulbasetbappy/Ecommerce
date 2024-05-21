<template>
  <div class="mb-4">
    <!-- <label :for="id" class="text-sm font-medium text-gray-700 ">{{ label }}</label> -->
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full px-0 py-2 mt-1 bg-transparent border-b border-black focus:outline-none focus:border-none"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emits = defineEmits(['update:modelValue'])
</script>
