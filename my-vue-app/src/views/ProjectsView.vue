<script setup lang="ts">
import RepositorySections from '@/components/sections/repositories/RepositorySections.vue';
</script>

<template>
  <div class="projects-view">
    <header class="projects-header">
      <h1 class="title">
        <span class="bracket">[</span>
        Projects
        <span class="bracket">]</span>
      </h1>
      <p class="subtitle">// Mis repositorios en GitHub</p>
    </header>
    <RepositorySections username="MiquelMontero02" />
  </div>
</template>

<style scoped>
.projects-view {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 1rem;
}

.projects-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
}

.projects-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff00ff, #00ffff, #ff00ff, transparent);
  box-shadow: 0 0 10px #00ffff;
}

.title {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.bracket {
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14;
  margin: 0;
}
</style>