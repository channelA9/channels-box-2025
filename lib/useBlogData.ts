import { ref, computed, watch } from "vue";
import type { Language } from "./i18n";
import { useLanguage } from "./useLanguage";

export interface BlogArticle {
  title: string;
  date: Date;
  href: string;
  excerpt?: string;
  category?: string;
  slug: string;
}

export interface RecentBlogPost {
  title: string;
  date: Date;
  href: string;
  excerpt?: string;
  category?: string;
  slug: string;
}

// Cache for loaded blog data
const blogCache = ref<Record<Language, BlogArticle[]>>({
  en: [],
  jp: [],
});

const isLoading = ref(false);

async function loadBlogData(language: Language): Promise<BlogArticle[]> {
  // Only run on client side
  if (typeof window === "undefined") {
    return [];
  }

  if (blogCache.value[language].length > 0) {
    return blogCache.value[language];
  }

  try {
    isLoading.value = true;
    const response = await fetch(`/api/blog-data?lang=${language}`);
    if (!response.ok) {
      throw new Error(`Failed to load blog data: ${response.statusText}`);
    }
    const data = await response.json();
    // Convert date strings to Date objects
    const articles = (data.articles || []).map((article: any) => ({
      ...article,
      date: new Date(article.date).setHours(12, 0, 0, 0), // Normalize time to avoid timezone issues
    }));
    blogCache.value[language] = articles;
    return blogCache.value[language];
  } catch (error) {
    console.error(`Error loading blog data for ${language}:`, error);
    return [];
  } finally {
    isLoading.value = false;
  }
}

export function useBlogData() {
  const { language } = useLanguage();
  const articles = ref<BlogArticle[]>([]);

  const blogArticles = computed(() => {
    if (!articles.value || articles.value.length === 0) {
      return [];
    }
    return articles.value.sort((a, b) => {
      const dateA = a.date instanceof Date ? a.date : new Date(a.date);
      const dateB = b.date instanceof Date ? b.date : new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  });

  const recentBlogPost = computed(() => {
    const sortedArticles = blogArticles.value;
    return sortedArticles.length > 0 ? sortedArticles[0] : null;
  });

  // Load data when language changes
  watch(
    language,
    async (newLang) => {
      articles.value = await loadBlogData(newLang);
    },
    { immediate: true },
  );

  return {
    blogArticles,
    recentBlogPost,
    isLoading: computed(() => isLoading.value),
  };
}
