<script setup lang="ts">
import type { PersonalInfo } from '@/types/cv';

defineProps<{
  data: PersonalInfo;
}>();
</script>

<template>
  <section class="personal-info">
    <h1 class="name">{{ data.name }}</h1>
    <h2 class="title">{{ data.title }}</h2>
    <div class="location">
      <span class="icon">📍</span>
      <span>{{ data.location }}</span>
    </div>
    <p class="summary">{{ data.summary }}</p>
  </section>
</template>

<style scoped>
.personal-info {
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
}

.personal-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff00ff, #00ffff, #ff00ff, transparent);
}

.name {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5rem;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  margin-bottom: 1rem;
  animation: glow-pulse 2s ease-in-out infinite;
}

.title {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.7rem;
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.location {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1rem;
}

.summary {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  color: #e0e0e0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
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