<script setup lang="ts">
import ProjectPreview from "../../components/projects/ProjectPreview.vue";
import Category from "../../components/blog/Category.vue";
</script>
<template>
  <div class="mb-16">
    <h1 class="font-display text-5xl lg:text-6xl font-bold text-black">projects</h1>
    <p class="text-lg">random posts</p>
  </div>
  <div class="relative grid md:gap-16 grid-cols-4 md:grid-cols-5 max-w-5xl">
    <div class="col-span-3 md:col-span-4 grid grid-cols-1 lg:grid-cols-2 w-fit gap-12">
      <ProjectPreview
        title="jiBash"
        description="versatile language learning conversation app"
        img="https://jibash.com/assets/static/logo.DNnq0xei.svg"
        date="2025-05-01"
        href="/blog/japan-2025/1"
      />
      <ProjectPreview
        title="jiBash"
        description="versatile language learning conversation app"
        img="https://jibash.com/assets/static/logo.DNnq0xei.svg"
        date="2025-05-01"
        href="/blog/japan-2025/1"
      />
    </div>
  </div>
</template>
