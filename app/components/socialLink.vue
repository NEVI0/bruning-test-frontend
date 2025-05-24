<script setup lang="ts">
defineProps<{
  href: string;
  icon: string;
}>();
</script>

<template>
  <NuxtLink
    :to="href"
    target="_blank"
    rel="noopener noreferrer"
    class="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-green-500 hover:bg-green-500/15 transition-colors"
  >
    <Icon :name="icon" style="width: 24px; height: 24px" />
  </NuxtLink>
</template>
