<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useLanguage } from "../../../lib/useLanguage";
import { useBlogPost } from "../../../lib/useBlogPost";
import { usePageContext } from "vike-vue/usePageContext";

const pageContext = usePageContext();
const slug = pageContext.routeParams?.slug as string;

const { language, initLanguage } = useLanguage();
const { blogPost, isLoading } = useBlogPost(slug);

onMounted(() => {
  initLanguage();
});

const formattedDate = computed(() => {
  if (!blogPost.value) return "";
  const locale = language.value === "jp" ? "ja-JP" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(blogPost.value.date);
});
</script>

<template>
  <div class="blog-post-container">
    <div v-if="isLoading" class="text-center py-8">
      <p class="text-gray-500">Loading blog post...</p>
    </div>
    <div v-else-if="blogPost">
      <header class="blog-post-header">
        <h1 class="blog-post-title">{{ blogPost.title }}</h1>
        <div class="blog-post-meta">
          <time class="blog-post-date">{{ formattedDate }}</time>
          <span v-if="blogPost.category" class="blog-post-category">{{ blogPost.category }}</span>
        </div>
        <p v-if="blogPost.excerpt" class="blog-post-excerpt">{{ blogPost.excerpt }}</p>
      </header>
      <div class="blog-post-content" v-html="blogPost.pageContent"></div>
    </div>
    <div v-else class="text-center py-8">
      <p class="text-gray-500">Blog post not found</p>
    </div>
  </div>
</template>

<style scoped>
.blog-post-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.blog-post-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.5rem;
}

.blog-post-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.blog-post-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.blog-post-category {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
}

.blog-post-excerpt {
  font-size: 1.125rem;
  color: #4b5563;
  font-style: italic;
  margin: 0;
}

.blog-post-content {
  line-height: 1.7;
}

.blog-post-content :deep(h1),
.blog-post-content :deep(h2),
.blog-post-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.blog-post-content :deep(p) {
  margin-bottom: 1rem;
}

.blog-post-content :deep(ul),
.blog-post-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.blog-post-content :deep(code) {
  background-color: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.blog-post-content :deep(pre) {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.blog-post-content :deep(blockquote) {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1rem;
  color: #6b7280;
  font-style: italic;
}
</style>
