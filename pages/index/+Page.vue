<script setup lang="ts">
import FeatureItem from "../../components/homepage/FeatureItem.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiTranslate, RiGithubFill, RiLinkedinFill } from "oh-vue-icons/icons/ri";
import { IoCubeSharp } from "oh-vue-icons/icons/io";

addIcons(RiTranslate, RiGithubFill, RiLinkedinFill, IoCubeSharp);
</script>

<template>
  <div>
    <h1 class="font-display text-6xl lg:text-7xl font-bold text-black">channels-box</h1>
    <p class="text-lg">only cool things here</p>
  </div>
  <div class="relative grid md:gap-24 grid-cols-1 md:grid-cols-2 max-w-5xl">
    <div class="my-16">
      <div>
        <div class="flex flex-col h-72">
          <img
            src="/photos/main.jpg"
            alt="Featured content"
            class="w-full h-72 md:ml-8 object-cover max-w-md opacity-60"
          />
          <p class="absolute translate-y-4 font-black bg-white p-1 text-xl tracking-tight">THE LATEST</p>
        </div>
        <div class="flex flex-col -translate-y-4 gap-y-2">
          <h2 class="text-3xl lg:text-4xl bg-yellow-200 tracking-tight font-bold w-fit p-2">Let's do this over.</h2>
          <h3 class="lg:text-lg font-normal p-2">Few others things have happened.</h3>
        </div>
      </div>
    </div>
    <div class="my-8 grid grid-cols-3 gap-4">
      <div class="flex flex-col items-start gap-16 col-span-2">
        <div class="flex flex-col gap-6">
          <h1 class="text-sm font-display">my stuff</h1>
          <FeatureItem href="#" icon-name="ri-translate" title="jibash" description="language learning app" />
          <FeatureItem href="#" icon-name="io-cube-sharp" title="mogi" description="language learning app" />
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-sm font-display">more stuff</h1>
          <div class="flex flex-col items-start justify-center w-full">
            <h1 class="font-semibold">japan-2025</h1>
            <h2 class="text-xs text-neutral-500">blog posts from Japan May 2025</h2>
          </div>
          <div class="flex flex-col items-start justify-center w-full">
            <h1 class="font-semibold">dev-blog</h1>
            <h2 class="text-xs text-neutral-500">developer posts</h2>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <img src="/photos/profile.png" alt="User Profile" class="rounded-full w-24 h-24 object-cover" />
        <div class="flex flex-col">
          <h1 class="text-lg font-bold tracking-wide">channel9</h1>
          <h2 class="text-sm text-neutral-600">web developer</h2>
        </div>
        <div>
          <p class="text-xs text-neutral-500">With love from sunny California!</p>
        </div>
        <div class="flex items-center gap-2 text-neutral-500">
          <a href=""><OhVueIcon name="ri-github-fill" /></a>
          <a href=""><OhVueIcon name="ri-linkedin-fill" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
