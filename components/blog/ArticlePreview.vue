<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    default: "/photos/default.jpg",
  },
  date: {
    type: String,
    required: false,
    default: null,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="href"
    class="flex flex-col w-xs h-full border border-neutral-300 p-4 gap-2 transition-all group bg-white hover:bg-neutral-50"
  >
    <div class="flex flex-col">
      <!-- <img
        :src="img"
        alt="Featured content"
        class="max-w-xs h-48 object-cover opacity-50 transition-all duration-500 group-hover:opacity-100"
      /> -->
    </div>
    <div class="flex-grow flex flex-col">
      <div class="w-full">
        <h2 class="text-xl lg:text-2xl tracking-tight">{{ title }}</h2>
      </div>
      <div class="flex-grow h-8 flex items-end justify-end">
        <h3 class="text-sm font-light">{{ date ?? "" }}</h3>
      </div>
    </div>
  </a>
</template>
