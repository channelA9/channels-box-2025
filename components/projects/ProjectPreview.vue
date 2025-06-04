<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    default: "/photos/default.jpg",
  },
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="href" class="flex flex-col items-center justify-center w-2xs h-[18rem] p-4">
    <div class="flex flex-col">
      <img
        :src="img"
        alt="Featured content"
        class="w-fit h-32 max-w-xs object-cover opacity-50 transition-all duration-500 group-hover:opacity-100"
      />
    </div>
    <div class="flex flex-col">
      <div class="w-full">
        <h2 class="text-lg lg:text-xl font-display font-bold">{{ title }}</h2>
        <h3 class="text-sm lg:text-md">{{ description }}</h3>
      </div>
    </div>
  </a>
</template>
