<script setup lang="ts">
import ProjectPreview from "../../components/projects/ProjectPreview.vue";
import Category from "../../components/blog/Category.vue";
import { useLanguage } from "../../lib/useLanguage";
import { onMounted } from "vue";

const { language, t, initLanguage } = useLanguage();

onMounted(() => {
  initLanguage();
});
</script>
<template>
  <div class="mb-16">
    <h1 class="font-display text-6xl lg:text-7xl font-bold text-black">{{ t.projects.title }}</h1>
    <p class="text-lg">{{ t.projects.subtitle }}</p>
  </div>
  <div class="relative grid md:gap-16 grid-cols-4 md:grid-cols-5 max-w-5xl">
    <div class="col-span-3 md:col-span-4 grid grid-cols-1 lg:grid-cols-2 w-fit gap-12">
      <ProjectPreview
        :title="t.home.projects.jibash.title"
        :description="t.home.projects.jibash.description"
        img="https://jibash.com/assets/static/logo.DNnq0xei.svg"
        date="2025-05-01"
        href="#"
      />
      <ProjectPreview
        :title="t.home.projects.mogi.title"
        :description="t.home.projects.mogi.description"
        img="https://jibash.com/assets/static/logo.DNnq0xei.svg"
        date="2025-05-01"
        href="#"
      />
    </div>
  </div>
</template>
