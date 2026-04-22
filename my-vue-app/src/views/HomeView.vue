<template>
  <section>
    <h1>Home</h1>
    <p>Mi primera pantalla con Vue y Vite</p>
  </section>
  <RespositoriSections :username="MiquelMontero02" />
</template>

<script setup>
import RespositoriSections from '@/components/sections/repositories/respositoriSections.vue';

</script>

<style scoped>
section {
  max-width: 800px;
  margin: 0 auto;
}
</style>
