<script setup lang="ts">
import { OhVueIcon } from "oh-vue-icons";
defineProps({
  href: {
    type: String,
    required: true,
  },
  iconName: { type: String, required: true },
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
    class="flex items-start justify-start w-full h-fit gap-3 p-2 hover:pl-6 hover:bg-yellow-100 group transition-all"
  >
    <div class="flex items-center justify-center h-full pt-1">
      <OhVueIcon :name="iconName" class="text-neutral-400 group-hover:text-black transition-colors" scale="2" />
    </div>
    <div>
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <h2 class="text-xs text-neutral-600 group-hover:text-neutral-800 transition-colors">
        {{ description }}
      </h2>
    </div>
  </a>
</template>
