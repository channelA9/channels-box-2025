<template>
  <a :class="isActive ? 'active' : ''" :href="href" class="text-lg inline-block font-bold">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";
import { computed, useAttrs } from "vue";

const pageContext = usePageContext();
const { href } = useAttrs();
const isActive = computed(() => {
  const { urlPathname } = pageContext;
  return href === "/" ? urlPathname === href : urlPathname.startsWith(href);
});
</script>
