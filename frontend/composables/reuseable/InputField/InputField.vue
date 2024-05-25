<template>
  <div class="mb-4">
    <label :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      :type="inputType"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        'block w-full px-0 py-2 mt-1 ps-2 !bg-gray-100 focus:outline-none',
        dynamicClass ? 'rounded border-0' : 'rounded-0 border-b border-black',
      ]"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  inputType: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  dynamicClass: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue"]);
</script>
