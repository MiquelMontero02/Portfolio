<template>
  <main class="home-view">
    <RepositorySections :username="MiquelMontero02" />
  </main>
</template>

<script setup>
import RepositorySections from '@/components/sections/repositories/RepositorySections.vue';
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
}
</style>
