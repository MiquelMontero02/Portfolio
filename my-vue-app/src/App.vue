<script setup>
import Footer from './components/footer/Footer.vue';
import NavBar from './components/navbar/NavBar.vue';
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer footerText="Built with Vue 3 and TypeScript" />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>


