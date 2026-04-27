<script setup>
import Footer from './components/footer/Footer.vue';
import NavBar from './components/navbar/NavBar.vue';
</script>

<style scoped>
main {
  padding: 1rem;
}
</style>

<template>
  <main>
    <NavBar />
    <router-view />
  </main>
  <Footer footerText="Built with Vue 3 and TypeScript" />
</template>


