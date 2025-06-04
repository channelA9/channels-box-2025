<script setup lang="ts">
import { OhVueIcon } from "oh-vue-icons";
defineProps({
  title: {
    type: String,
    required: true,
  },
  directory: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2 class="md:text-lg font-bold">{{ title }}</h2>
    <div class="container flex flex-col text-neutral-500">
      <slot />
    </div>
  </div>
</template>
