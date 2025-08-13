<script setup lang="ts">
import { OhVueIcon } from "oh-vue-icons";
defineProps({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="href"
    class="flex flex-col items-start justify-center w-full hover:bg-gray-50 p-2 rounded transition-colors"
  >
    <h1 class="font-semibold">{{ title }}</h1>
    <h2 class="text-xs text-neutral-500">{{ description }}</h2>
  </a>
</template>
