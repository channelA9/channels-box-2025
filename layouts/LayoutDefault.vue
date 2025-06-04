<script lang="ts" setup>
import Link from "../components/Link.vue";
import Logo from "../components/Logo.vue";
</script>

<template>
  <div class="layout-wrapper min-h-screen relative font-sans overflow-hidden">
    <div class="aria-hidden absolute h-full w-full flex">
      <div class="hidden md:inline absolute h-full w-full">
        <img src="/photos/sidebg.jpg" alt="" class="float-right w-1/2 h-full object-cover opacity-50" />
      </div>

      <div class="absolute special-grid bg-neutral-200 w-1/2 h-full opacity-50">,</div>

      <div class="absolute w-full h-full special-gradient"></div>
    </div>
    <header class="container max-w-5xl mx-auto px-4 py-6 flex justify-between items-center relative z-10 text-gray-900">
      <nav class="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm tracking-wide">
        <Logo />
        <Link href="/blog" class="hover:text-gray-600">blog</Link>
        <Link href="/projects" class="hover:text-gray-600">projects</Link>
        <Link href="/" class="hover:text-gray-600">interactives</Link>
        <Link href="/" class="hover:text-gray-600">resume</Link>
      </nav>

      <div class="absolute right-0 transform px-2">
        <button>JP/EN</button>
      </div>

      <button class="md:hidden z-20">
        <div class="w-6 h-6 border border-gray-700 rounded p-1 space-y-1">
          <div class="w-full h-0.5 bg-gray-700"></div>
          <div class="w-full h-0.5 bg-gray-700"></div>
          <div class="w-full h-0.5 bg-gray-700"></div>
        </div>
      </button>
    </header>

    <div id="page-content" class="container max-w-5xl mx-auto px-4 py-10 md:py-16 relative z-0 text-gray-900">
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
