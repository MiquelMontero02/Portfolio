<script setup lang="ts">
import type { SocialLinks } from '@/types/cv';

defineProps<{
  data: SocialLinks;
}>();
</script>

<template>
  <section class="contact-links">
    <a v-if="data.phone" :href="data.phone.url" target="_blank" rel="noopener noreferrer" class="social-link phone">
      <span class="icon">☎</span>
      <span class="label">Teléfono</span>
      <span class="username">{{ data.phone.number }}</span>
    </a>
    <a :href="data.email.url" target="_blank" rel="noopener noreferrer" class="social-link email">
      <span class="icon">@</span>
      <span class="label">Email</span>
      <span class="username">{{ data.email.address }}</span>
    </a>
    <a :href="data.github.url" target="_blank" rel="noopener noreferrer" class="social-link github">
      <span class="icon">⟨⟩</span>
      <span class="label">GitHub</span>
      <span class="username">@{{ data.github.username }}</span>
    </a>
    <a :href="data.linkedin.url" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
      <span class="icon">in</span>
      <span class="label">LinkedIn</span>
      <span class="username">/{{ data.linkedin.username }}</span>
    </a>
  </section>
</template>

<style scoped>
.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border: 2px solid;
  text-decoration: none;
  position: relative;
  transition: all 0.15s;
  min-width: 150px;
}

.social-link.github {
  border-color: #00ffff;
}

.social-link.linkedin {
  border-color: #0077b5;
}

.social-link.phone {
  border-color: #ffff00;
}

.social-link.email {
  border-color: #ff00ff;
}

.social-link::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.15s;
  z-index: -1;
}

.social-link.github::before {
  background: #00ffff;
}

.social-link.linkedin::before {
  background: #0077b5;
}

.social-link.phone::before {
  background: #ffff00;
}

.social-link.email::before {
  background: #ff00ff;
}

.social-link:hover::before {
  opacity: 0.4;
}

.social-link:hover {
  transform: translateY(-4px);
}

.social-link.github:hover {
  box-shadow: 0 0 15px #00ffff, 0 0 30px #00ffff;
}

.social-link.linkedin:hover {
  box-shadow: 0 0 15px #0077b5, 0 0 30px #0077b5;
}

.social-link.phone:hover {
  box-shadow: 0 0 15px #ffff00, 0 0 30px #ffff00;
}

.social-link.email:hover {
  box-shadow: 0 0 15px #ff00ff, 0 0 30px #ff00ff;
}

.icon {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
}

.social-link.github .icon {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
}

.social-link.linkedin .icon {
  color: #0077b5;
  text-shadow: 0 0 10px #0077b5;
}

.social-link.phone .icon {
  color: #ffff00;
  text-shadow: 0 0 10px #ffff00;
}

.social-link.email .icon {
  color: #ff00ff;
  text-shadow: 0 0 10px #ff00ff;
}

.label {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.5rem;
  text-transform: uppercase;
}

.social-link.github .label {
  color: #00ffff;
}

.social-link.linkedin .label {
  color: #0077b5;
}

.social-link.phone .label {
  color: #ffff00;
}

.social-link.email .label {
  color: #ff00ff;
}

.username {
  font-family: 'VT323', monospace;
  font-size: 1rem;
  color: #e0e0e0;
}
</style>