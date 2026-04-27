<script setup lang="ts">
</script>

<template>
  <main class="home-view">
    <header class="hero">
      <h1 class="title">
        <span class="bracket">[</span>
        Welcome
        <span class="bracket">]</span>
      </h1>
      <p class="subtitle">// Portfolio personal</p>
      <div class="links">
        <router-link to="/cv" class="link">Ver CV</router-link>
        <router-link to="/projects" class="link">Ver Proyectos</router-link>
      </div>
    </header>
  </main>
</template>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.hero {
  text-align: center;
}

.title {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5rem;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: glow-pulse 2s ease-in-out infinite;
}

.bracket {
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14;
  margin-bottom: 2rem;
}

.links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.link {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.6rem;
  color: #00ffff;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border: 2px solid #00ffff;
  transition: all 0.15s;
  text-transform: uppercase;
}

.link:hover {
  color: #ff00ff;
  border-color: #ff00ff;
  box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  transform: translateY(-2px);
}

@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  }
  50% {
    text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
  }
}
</style>
