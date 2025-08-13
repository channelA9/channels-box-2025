<template>
  <div class="p-5 mb-2">
    <a v-if="linkEnabled" href="/">
      <img src="/icons/CBox.svg" height="64" width="64" />
    </a>
    <img v-else src="/icons/CBox.svg" height="64" width="64" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  linkEnabled: {
    type: Boolean,
    default: true,
    required: false,
  },
});
</script>
