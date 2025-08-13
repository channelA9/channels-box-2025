<script setup lang="ts">
import ArticlePreview from "../../components/blog/ArticlePreview.vue";
import Category from "../../components/blog/Category.vue";
import { computed, onMounted, ref } from "vue";
import { useLanguage } from "../../lib/useLanguage";
import { useBlogData, type BlogArticle } from "../../lib/useBlogData";

const isClient = ref(false);

const { language, t, initLanguage } = useLanguage();
const { blogArticles, isLoading } = useBlogData();

onMounted(() => {
  initLanguage();
  isClient.value = true;
});

const categorizedPosts = computed(() => {
  const categories = new Map<string, BlogArticle[]>();

  blogArticles.value.forEach((article) => {
    const category = article.category || "general";
    if (!categories.has(category)) {
      categories.set(category, []);
    }
    categories.get(category)!.push(article);
  });

  return categories;
});

const formattedDate = (date: Date) => {
  const locale = language.value === "jp" ? "ja-JP" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};
</script>
<template>
  <div class="mb-16">
    <h1 class="font-display text-6xl lg:text-7xl font-bold text-black">{{ t.blog.title }}</h1>
    <p class="text-lg">{{ t.blog.subtitle }}</p>
  </div>
  <div class="relative grid md:gap-16 grid-cols-4 md:grid-cols-5 max-w-5xl">
    <!-- <div class="flex flex-col gap-4">
      <Category
        v-for="[categoryName, posts] in categorizedPosts"
        :key="categoryName"
        :title="categoryName"
        :directory="categoryName"
      >
        <a
          v-for="post in posts.slice(0, 5)"
          :key="post.slug"
          :href="post.href"
          class="text-sm hover:text-blue-600 transition-colors"
        >
          {{ post.title }}
        </a>
      </Category>
      <div v-if="categorizedPosts.size === 0" class="text-gray-500">
        {{ t.blog.noCategories }}
      </div>
    </div> -->
    <div class="col-span-3 md:col-span-4 grid grid-cols-1 lg:grid-cols-2 w-fit gap-12">
      <div v-if="isLoading" class="text-gray-500 col-span-full text-center py-8">Loading blog posts...</div>
      <ArticlePreview
        v-for="article in blogArticles"
        v-else
        :key="article.slug"
        :title="article.title"
        :date="formattedDate(article.date)"
        :href="article.href"
      />
      <div
        v-if="isClient && !isLoading && blogArticles.length === 0"
        class="text-gray-500 col-span-full text-center py-8"
      >
        {{ t.blog.noPosts }}. {{ t.blog.noPostsDescription }}
      </div>
    </div>
  </div>
</template>
