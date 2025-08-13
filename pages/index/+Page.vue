<script setup lang="ts">
import FeatureItem from "../../components/homepage/FeatureItem.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiTranslate, RiGithubFill, RiLinkedinFill } from "oh-vue-icons/icons/ri";
import { IoCubeSharp } from "oh-vue-icons/icons/io";
import { computed, onMounted, ref } from "vue";
import { useLanguage } from "../../lib/useLanguage";
import { useBlogData } from "../../lib/useBlogData";
import SubfeatureItem from "../../components/homepage/SubfeatureItem.vue";
import Profile from "../../components/Profile.vue";
addIcons(RiTranslate, RiGithubFill, RiLinkedinFill, IoCubeSharp);

const isClient = ref(false);

const { language, t, initLanguage } = useLanguage();
const { recentBlogPost, isLoading } = useBlogData();

onMounted(() => {
  initLanguage();
  isClient.value = true;
});

const formattedDate = computed(() => {
  if (!recentBlogPost.value) return "";
  const locale = language.value === "jp" ? "ja-JP" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(recentBlogPost.value.date);
});
</script>

<template>
  <div>
    <h1 class="font-display text-6xl lg:text-7xl font-bold text-black">channels-box</h1>
    <p class="text-lg">{{ t.home.subtitle }}</p>
  </div>
  <div class="relative grid lg:gap-24 grid-cols-1 lg:grid-cols-2 max-w-5xl">
    <div class="my-16">
      <div>
        <div class="flex flex-col">
          <!-- <img
            src="/photos/main.jpg"
            alt="Featured content"
            class="w-full h-72 lg:ml-8 object-cover max-w-md opacity-60"
          /> -->
          <p class="font-black bg-white p-1 text-xl tracking-tight">{{ t.home.theLatest }}</p>
        </div>
        <div class="flex flex-col gap-y-2">
          <div v-if="isClient && isLoading" class="flex flex-col gap-y-2">
            <h2 class="text-3xl lg:text-4xl bg-gray-200 tracking-tight font-bold w-fit p-2">Loading...</h2>
          </div>
          <a v-else-if="recentBlogPost" :href="recentBlogPost.href" class="block hover:scale-105 transition-transform">
            <h2 class="text-3xl lg:text-4xl bg-yellow-200 tracking-tight font-bold w-fit p-2">
              {{ recentBlogPost.title }}
            </h2>
            <div class="flex flex-col lg:text-lg font-normal p-2 space-y-1">
              <p v-if="recentBlogPost.excerpt">{{ recentBlogPost.excerpt }}</p>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <span>{{ formattedDate }}</span>
                <span v-if="recentBlogPost.category" class="bg-gray-200 px-2 py-1 rounded text-xs">{{
                  recentBlogPost.category
                }}</span>
              </div>
            </div>
          </a>
          <div v-else class="flex flex-col -translate-y-4 gap-y-2">
            <h2 class="text-3xl lg:text-4xl bg-yellow-200 tracking-tight font-bold w-fit p-2">
              {{ t.home.welcomeToBlog }}
            </h2>
            <h3 class="lg:text-lg font-normal p-2">{{ t.home.moreContentSoon }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="my-8 grid grid-cols-3 gap-4">
      <div class="flex flex-col items-start gap-16 col-span-2">
        <div class="flex flex-col gap-6">
          <h1 class="text-sm font-display">{{ t.home.myStuff }}</h1>
          <FeatureItem
            href="https://jibash.com/"
            icon-name="ri-translate"
            :title="t.home.projects.jibash.title"
            :description="t.home.projects.jibash.description"
          />
          <FeatureItem
            href="https://github.com/channelA9/mogi"
            icon-name="io-cube-sharp"
            :title="t.home.projects.mogi.title"
            :description="t.home.projects.mogi.description"
          />
        </div>
        <div class="flex flex-col gap-4 w-full">
          <h1 class="text-sm font-display">{{ t.home.moreStuff }}</h1>
          <!-- <SubfeatureItem
            href="#"
            :title="t.home.projects.jibash.title"
            :description="t.home.projects.jibash.description"
          /> -->
          <p class="text-xs text-neutral-500">{{ t.home.nothingyet }}</p>
        </div>
      </div>
      <Profile />
    </div>
  </div>
</template>
