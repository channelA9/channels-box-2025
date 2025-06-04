<script setup lang="ts">
import ArticlePreview from "../../components/blog/ArticlePreview.vue";
import Category from "../../components/blog/Category.vue";
</script>
<template>
  <div class="mb-16">
    <h1 class="font-display text-5xl lg:text-6xl font-bold text-black">general-blog</h1>
    <p class="text-lg">random posts</p>
  </div>
  <div class="relative grid md:gap-16 grid-cols-4 md:grid-cols-5 max-w-5xl">
    <div class="flex flex-col gap-4">
      <Category title="dev-blog" directory="japan-2025">
        <a href="/blog/japan-2025/1">blog post 1</a>
        <a href="/blog/japan-2025/2">blog post 2</a>
      </Category>
      <Category title="travels" directory="japan-2025">
        <a href="/blog/japan-2025/1">blog post 1</a>
        <a href="/blog/japan-2025/2">blog post 2</a>
      </Category>
    </div>
    <div class="col-span-3 md:col-span-4 grid grid-cols-1 lg:grid-cols-2 w-fit gap-12">
      <ArticlePreview title="running the gauntlet of degrees" date="2025-05-01" href="/blog/japan-2025/1" />
      <ArticlePreview title="blog post 1" date="2025-05-01" href="/blog/japan-2025/1" />
      <ArticlePreview title="blog post 1" date="2025-05-01" href="/blog/japan-2025/1" />
      <ArticlePreview title="blog post 1" date="2025-05-01" href="/blog/japan-2025/1" />
    </div>
  </div>
</template>
