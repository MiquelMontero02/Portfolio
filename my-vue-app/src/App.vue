<script setup>
import Footer from './components/footer/Footer.vue';
import NavBar from './components/navbar/NavBar.vue';
import HomeView from './views/HomeView.vue'
</script>

<style scoped>
main {
  padding: 1rem;
}
</style>

<template>
  <main>
    <NavBar />
    <HomeView />
    <Footer footerText="Built with Vue 3 and TypeScript" />
  </main>
</template>


