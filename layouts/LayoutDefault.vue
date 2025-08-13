<script lang="ts" setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import Link from "../components/Link.vue";
import Logo from "../components/Logo.vue";
import { useLanguage } from "../lib/useLanguage";
import { onMounted, ref } from "vue";
import { RiMenuLine } from "oh-vue-icons/icons/ri";

const { language, t, toggleLanguage, initLanguage } = useLanguage();

addIcons(RiMenuLine);

onMounted(() => {
  initLanguage();
  console.log("Language initialized:", language.value);
});

const handleLanguageToggle = () => {
  console.log("Toggling language from", language.value);
  toggleLanguage();
};

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const disableMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="layout-wrapper min-h-screen relative font-sans overflow-hidden">
    <div class="aria-hidden absolute h-full w-full flex">
      <!-- <div class="hidden lg:inline absolute h-full w-full">
        <img src="/photos/sidebg.jpg" alt="" class="float-right w-1/2 h-full object-cover opacity-50" />
      </div> -->

      <div class="absolute special-grid bg-neutral-200 w-1/2 h-full opacity-50">,</div>

      <div class="absolute w-full h-full special-gradient"></div>
    </div>
    <header class="container max-w-5xl mx-auto px-4 py-6 flex justify-between items-center relative z-10 text-gray-900">
      <nav class="hidden lg:flex items-center space-x-6 lg:space-x-8 text-sm tracking-wide">
        <Logo />
        <Link href="/" class="hover:text-gray-600">{{ t.nav.home }}</Link>
        <Link href="/blog" class="hover:text-gray-600">{{ t.nav.blog }}</Link>
        <Link href="/resume" class="hover:text-gray-600">{{ t.nav.resume }}</Link>
      </nav>

      <div class="hidden lg:block absolute right-0 transform px-2">
        <button
          class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors text-sm font-medium"
          @click="handleLanguageToggle"
        >
          {{ language === "en" ? "JP" : "EN" }}
        </button>
      </div>

      <button class="lg:hidden z-20" @click="toggleMenu">
        <OhVueIcon name="ri-menu-line" class="w-8 h-8" />
      </button>

      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-30 lg:hidden transition-all"
      >
        <button class="absolute top-4 right-4 text-4xl" @click="disableMenu">&times;</button>
        <Logo :link-enabled="false" class="mb-12" />
        <Link href="/" class="mb-6 text-lg font-medium" @click="disableMenu">{{ t.nav.home }}</Link>
        <Link href="/blog" class="mb-6 text-lg font-medium" @click="disableMenu">{{ t.nav.blog }}</Link>
        <Link href="/resume" class="mb-6 text-lg font-medium" @click="disableMenu">{{ t.nav.resume }}</Link>
        <button
          class="mt-8 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors text-base font-medium"
          @click="handleLanguageToggle"
        >
          {{ language === "en" ? "JP" : "EN" }}
        </button>
      </div>
    </header>

    <div id="page-content" class="container max-w-5xl mx-auto px-4 py-10 lg:py-16 relative z-0 text-gray-900">
      <slot />
    </div>
  </div>
</template>

<style>
@import "./tailwind.css";

body {
  margin: 0;
  background-color: #f8f8f8;
}

a {
  text-decoration: none;
}

/* Keep page transition styles */
#page-content {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
body.page-is-transitioning #page-content {
  opacity: 0;
}

.special-grid {
  background-size: 128px 128px;
  background-image:
    linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px);
}
.special-gradient {
  background: #ffffff;
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.5) 5%,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0.5) 85%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
