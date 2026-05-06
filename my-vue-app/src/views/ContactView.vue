<script setup lang="ts">
import { computed } from 'vue';
import ContactLinks from '@/components/sections/cv/ContactLinks.vue';

import socialData from '@/data/social.json';

import type { SocialLinks } from '@/types/cv';

const social = computed(() => socialData as SocialLinks);
</script>

<template>
  <div class="contact-view">
    <ContactLinks :data="social" />
  </div>
</template>

<style scoped>
.contact-view {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 1rem;
}
</style>